import { AuthHeader } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { Card, CardContent, CardFooter, CardHeader } from "./card";

interface Props {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper: React.FC<Props> = ({
  headerLabel,
  backButtonHref,
  backButtonLabel,
  showSocial,
  children,
}) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <AuthHeader label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        {/* <BackButton label={backButtonLabel} href={backButtonHref} /> */}
      </CardFooter>
    </Card>
  );
};
