import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Props {
  dataInfo: number;
  title: string;
  activeColor: string;
  icon: React.ReactNode;
}

const HeroCard = ({ dataInfo, title, activeColor, icon }: Props) => {
  return (
    <Card className="text-center">
      <CardContent className="pt-6">
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 p-3 rounded-full">{icon}</div>
        </div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <div className="text-3xl font-bold text-red-600 mb-2">{dataInfo}</div>
        <Progress
          value={dataInfo * 10}
          className="h-2"
          activeColor={activeColor}
        />
      </CardContent>
    </Card>
  );
};

export default HeroCard;
