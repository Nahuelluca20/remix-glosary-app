import { json, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { db } from "db";
import { Button } from "~/components/ui/Button";

export const loader = async ({ context, params }: LoaderFunctionArgs) => {
  const { DB } = context.cloudflare.env;
  const slug = params.slug;

  if (slug) {
    const result = await db(DB)
      .selectFrom("glossary_category")
      .selectAll()
      .where("id", "=", slug)
      .executeTakeFirst();

    return json(result);
  } else {
    return null;
  }
};

export default function Route() {
  const data = useLoaderData<typeof loader>();
  console.log(data);
  return (
    <section>
      <div className="max-w-[900px] w-full mx-auto">
        <h1>{data?.category_name}</h1>
        <p>{data?.category_desc}</p>
        <div className="flex w-full justify-end gap-2">
          <Button>Edit</Button>
          <Button variant="destructive">Delete</Button>
        </div>
      </div>
    </section>
  );
}
