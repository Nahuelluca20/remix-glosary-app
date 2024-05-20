import { MetaFunction, LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "db";
import { firstLetterUpperCase } from "utils/strings-utils";
import { Button } from "~/components/ui/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "My glossaries" },
    {
      name: "description",
      content: "These are the glossaries of your account",
    },
  ];
};

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const { DB } = context.cloudflare.env;

  const result = await db(DB)
    .selectFrom("glossary_category")
    .selectAll()
    .execute();

  return json(result);
};

export default function Route() {
  const data = useLoaderData<typeof loader>();

  return (
    <section>
      {data.map((item) => (
        <div
          className="shadow-2xl max-w-[300px] p-4 rounded-md border-2 border-teal-900"
          key={`glossary-${item.id}`}
        >
          <h3 className="text-2xl font-bold">
            {firstLetterUpperCase(item.category_name)}
          </h3>
          <p>{item.category_desc}</p>
          <div className="mt-4 w-full flex justify-end">
            <Link to={`/my-glossaries/${item.id}`}>
              <Button>See</Button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
