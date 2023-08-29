import { Button, Typography } from "@imagine-ui/react";
import Link from "next/link";

interface PreviousAndNextProps {
  next: {
    path: string;
    label: string;
  };
  previous: {
    path: string;
    label: string;
  };
  className?: string;
}

export function PreviousAndNext({
  next,
  previous,
  className,
}: PreviousAndNextProps) {
  return (
    <div className={`w-full flex gap-4 mt-10 ${className} max-md:flex-col`}>
      <Link href="" className="w-full">
        <Button
          variant="outlined"
          className="w-full h-20 border-green-500"
          color="green"
        >
          <div className="w-full">
            <Typography>Previous</Typography>
            <Typography color="green">{previous.label}</Typography>
          </div>
        </Button>
      </Link>
      <Link href="" className="w-full">
        <Button
          variant="outlined"
          className="w-full h-20 border-green-500"
          color="green"
        >
          <div className="ml-auto">
            <Typography className="ml-auto">Next</Typography>
            <Typography color="green">{next.label}</Typography>
          </div>
        </Button>
      </Link>
    </div>
  );
}
