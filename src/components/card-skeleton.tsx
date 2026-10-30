import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "ui/card";
import { Skeleton } from "ui/skeleton";

export function CardSkeleton() {
  return (
    <Card
      aria-hidden="true"
      className="opacity-40"
    >
      <CardHeader>
        <CardTitle>
          <Skeleton className="w-2/3 h-4" />
        </CardTitle>
        <CardAction>
          <Skeleton className="w-12 h-2" />
        </CardAction>
      </CardHeader>
      <CardContent className="mbs-auto">
        <Skeleton className="aspect-square w-full" />
      </CardContent>
      <CardFooter className="min-block-19">
        <Skeleton className="w-3/4 h-3" />
      </CardFooter>
    </Card>
  );
}
