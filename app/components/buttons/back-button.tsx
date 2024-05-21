import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/Button";
import { useNavigate } from "@remix-run/react";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      variant="icon"
      className="text-md font-bold flex items-center gap-2 cursor-pointer"
      onPress={() => navigate(-1)}
    >
      <ArrowLeft />
      Back
    </Button>
  );
}
