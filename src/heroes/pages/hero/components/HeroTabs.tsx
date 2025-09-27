import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Hero } from "@/heroes/types/hero.interface";
import { getCategoryColor, getStatusColor } from "@/lib/utils";
import { Progress } from "@radix-ui/react-progress";
import { Gauge, Zap, Users, Award, Brain, Shield, Badge } from "lucide-react";
import HeroCard from "./HeroCard";
interface Props {
  superheroData: Hero;
}

const HeroTabs = ({ superheroData }: Props) => {
  return (
    <Tabs defaultValue="stats" className="w-full">
      <TabsList className="grid w-full grid-cols-4 mb-8">
        <TabsTrigger value="stats" className="flex items-center gap-2">
          <Gauge className="w-4 h-4" />
          <p className="hidden md:block">Estadísticas</p>
        </TabsTrigger>
        <TabsTrigger value="powers" className="flex items-center gap-2">
          <Zap className="w-4 h-4" />
          <p className="hidden md:block">Poderes</p>
        </TabsTrigger>
        <TabsTrigger value="team" className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          <p className="hidden md:block">Equipo</p>
        </TabsTrigger>
        <TabsTrigger value="info" className="flex items-center gap-2">
          <Award className="w-4 h-4" />
          <p className="hidden md:block">Información</p>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="stats" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <HeroCard
            dataInfo={superheroData.strength}
            title={"Strength"}
            activeColor={"bg-red-600"}
            icon={<Zap className="w-8 h-8 text-red-600" />}
          />
          {/* Intelligence */}
          <HeroCard
            dataInfo={superheroData.intelligence}
            title={"Intelligence"}
            activeColor={"bg-purple-600"}
            icon={<Brain className="w-8 h-8 text-purple-600" />}
          />
          {/* Speed */}
          <HeroCard
            dataInfo={superheroData.speed}
            title={"Speed"}
            activeColor={"bg-yellow-600"}
            icon={<Gauge className="w-8 h-8 text-yellow-600" />}
          />
          {/* Durability */}
          <HeroCard
            dataInfo={superheroData.durability}
            title={"Durability"}
            activeColor={"bg-green-600"}
            icon={<Shield className="w-8 h-8 text-green-600" />}
          />
        </div>

        {/* Power Comparison Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Comparación de Habilidades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm font-medium">Fuerza</div>
                <div className="flex-1">
                  <Progress
                    value={superheroData.strength * 10}
                    className="h-4"
                  />
                </div>
                <div className="w-12 text-right font-bold">
                  {superheroData.strength}/10
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm font-medium">Inteligencia</div>
                <div className="flex-1">
                  <Progress
                    value={superheroData.intelligence * 10}
                    className="h-4"
                  />
                </div>
                <div className="w-12 text-right font-bold">
                  {superheroData.intelligence}/10
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm font-medium">Velocidad</div>
                <div className="flex-1">
                  <Progress value={superheroData.speed * 10} className="h-4" />
                </div>
                <div className="w-12 text-right font-bold">
                  {superheroData.speed}/10
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm font-medium">Resistencia</div>
                <div className="flex-1">
                  <Progress
                    value={superheroData.durability * 10}
                    className="h-4"
                  />
                </div>
                <div className="w-12 text-right font-bold">
                  {superheroData.durability}/10
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="powers">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-500" />
              Superpoderes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {superheroData.powers.map((power, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500 p-2 rounded-full">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-blue-900">{power}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="team">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-6 h-6 text-green-500" />
              Afiliación de Equipo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                {superheroData.team}
              </h3>
              <p className="text-gray-600">
                Miembro activo del equipo de superhéroes más poderoso
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="info">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Detalles Personales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Nombre Real:</span>
                <span className="font-semibold">{superheroData.name}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Alias:</span>
                <span className="font-semibold">{superheroData.alias}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Categoría:</span>
                <Badge
                  className={`${getCategoryColor(
                    superheroData.category
                  )} text-white`}
                >
                  {superheroData.category}
                </Badge>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Estado:</span>
                <Badge
                  className={`${getStatusColor(
                    superheroData.status
                  )} text-white`}
                >
                  {superheroData.status}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Información del Universo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Universo:</span>
                <span className="font-semibold">{superheroData.universe}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Primera Aparición:</span>
                <span className="font-semibold">
                  {superheroData.firstAppearance}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Años Activo:</span>
                <span className="font-semibold">
                  {new Date().getFullYear() -
                    Number.parseInt(superheroData.firstAppearance)}{" "}
                  años
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default HeroTabs;
