import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChevronRight,
  Dumbbell,
  Sparkles,
  Users,
  Clock,
  AppleIcon,
  ShieldIcon,
} from "lucide-react";

const UserProgram = () => {
  return (
    <div className="w-full pb-24 pt-16 relative">
      <div className="container mx-auto max-w-6xl px-4">
        {/* HEADER- PROGRAM GALLERY */}
        <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg overflow-hidden mb-16">
          {/* HEADER BAR */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background/70">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
              <span className="text-sm text-primary font-medium">Program Gallery</span>
            </div>
            <div className="text-sm text-muted-foreground">Featured Plans</div>
          </div>

          {/* HEADER CONTENT */}
          <div className="p-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">AI-Generated </span>
              <span className="text-primary">Programs</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Explore personalized fitness plans our AI assistant has created for other users
            </p>

            {/* STATS */}
            <div className="flex items-center justify-center gap-16 mt-10 font-mono">
              <div className="flex flex-col items-center">
                <p className="text-3xl text-primary">500+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                  PROGRAMS
                </p>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="flex flex-col items-center">
                <p className="text-3xl text-primary">3min</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                  CREATION TIME
                </p>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="flex flex-col items-center">
                <p className="text-3xl text-primary">100%</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                  PERSONALIZED
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Program cards */}
       
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Profile 1 */}
  <Card className="bg-card/90 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors overflow-hidden">
    <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-background/70">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <span className="text-sm text-primary">USER.001</span>
      </div>
      <div className="text-sm text-muted-foreground">BEGINNER</div>
    </div>

    <CardHeader className="pt-6 px-5">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-16 w-16 rounded-full overflow-hidden border border-border">
          <img
            src="/reed.jpg"
            alt="Reed Richards"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <CardTitle className="text-xl text-foreground">
            Reed<span className="text-primary">.exe</span>
          </CardTitle>
          <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
            <Users className="h-4 w-4" />
            52y • 3d/week
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-4">
        <div className="px-3 py-1 bg-primary/10 rounded border border-primary/20 text-sm text-primary flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          Muscle Gain
        </div>
        <div className="text-sm text-muted-foreground flex items-center gap-2">
          <Clock className="h-4 w-4" />
          v3.5
        </div>
      </div>
    </CardHeader>

    <CardContent className="px-5">
      <div className="space-y-5 pt-2">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-md bg-primary/10 text-primary mt-0.5">
            <Dumbbell className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-foreground">Full-Body Beginner</h3>
            <p className="text-sm text-muted-foreground mt-1">Maximum Equipment</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-md bg-secondary/10 text-secondary mt-0.5">
            <AppleIcon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-foreground">High Protien Meal Plan</h3>
            <p className="text-sm text-muted-foreground mt-1">System optimized nutrition</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-md bg-primary/10 text-primary mt-0.5">
            <ShieldIcon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-foreground">AI Safety Protocols</h3>
            <p className="text-sm text-muted-foreground mt-1">Protection systems enabled</p>
          </div>
        </div>
      </div>
      <div className="mt-5 pt-5 border-t border-border text-sm text-muted-foreground">
        <span className="text-primary">&gt; </span>
        3-day Muscle building routine with home-friendly exercises and high protien meals...
      </div>
    </CardContent>

    <CardFooter className="px-5 py-4 border-t border-border">
      <Link href="/programs/001" className="w-full">
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          View Program Details
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </CardFooter>
  </Card>



  {/* Repeat the same structure for Profile 2 and 3 */}
    <Card className="bg-card/90 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors overflow-hidden">
    <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-background/70">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <span className="text-sm text-primary">USER.002</span>
      </div>
      <div className="text-sm text-muted-foreground">EXPERT</div>
    </div>

    <CardHeader className="pt-6 px-5">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-16 w-16 rounded-full overflow-hidden border border-border">
          <img
            src="/galactus.jpg"
            alt="Galactus"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <CardTitle className="text-xl text-foreground">
            Galactus<span className="text-primary">.exe</span>
          </CardTitle>
          <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
            <Users className="h-4 w-4" />
            14 billiony • 5d/week
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-4">
        <div className="px-3 py-1 bg-primary/10 rounded border border-primary/20 text-sm text-primary flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          Fat Loss
        </div>
        <div className="text-sm text-muted-foreground flex items-center gap-2">
          <Clock className="h-4 w-4" />
          v3.6
        </div>
      </div>
    </CardHeader>

    <CardContent className="px-5">
      <div className="space-y-5 pt-2">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-md bg-primary/10 text-primary mt-0.5">
            <Dumbbell className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-foreground">Full-Body Expert</h3>
            <p className="text-sm text-muted-foreground mt-1">Minimal Equipment</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-md bg-secondary/10 text-secondary mt-0.5">
            <AppleIcon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-foreground">Lean Meal Plan</h3>
            <p className="text-sm text-muted-foreground mt-1">System optimized nutrition</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-md bg-primary/10 text-primary mt-0.5">
            <ShieldIcon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-foreground">AI Safety Protocols</h3>
            <p className="text-sm text-muted-foreground mt-1">Protection systems enabled</p>
          </div>
        </div>
      </div>
      <div className="mt-5 pt-5 border-t border-border text-sm text-muted-foreground">
        <span className="text-primary">&gt; </span>
        5-day fat loss routine with home-made meals, not planets...
      </div>
    </CardContent>

    <CardFooter className="px-5 py-4 border-t border-border">
      <Link href="/programs/001" className="w-full">
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          View Program Details
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </CardFooter>
  </Card>

    <Card className="bg-card/90 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors overflow-hidden">
    <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-background/70">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <span className="text-sm text-primary">USER.001</span>
      </div>
      <div className="text-sm text-muted-foreground">BEGINNER</div>
    </div>

    <CardHeader className="pt-6 px-5">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-16 w-16 rounded-full overflow-hidden border border-border">
          <img
            src="/thanos.jpg"
            alt="Thanos"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <CardTitle className="text-xl text-foreground">
            Thanos<span className="text-primary">.exe</span>
          </CardTitle>
          <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
            <Users className="h-4 w-4" />
            100y • 7d/week
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-4">
        <div className="px-3 py-1 bg-primary/10 rounded border border-primary/20 text-sm text-primary flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          Balance
        </div>
        <div className="text-sm text-muted-foreground flex items-center gap-2">
          <Clock className="h-4 w-4" />
          v3.5
        </div>
      </div>
    </CardHeader>

    <CardContent className="px-5">
      <div className="space-y-5 pt-2">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-md bg-primary/10 text-primary mt-0.5">
            <Dumbbell className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-foreground">Body Maintenance</h3>
            <p className="text-sm text-muted-foreground mt-1">Minimal Equipment</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-md bg-secondary/10 text-secondary mt-0.5">
            <AppleIcon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-foreground">Median Meal Plan</h3>
            <p className="text-sm text-muted-foreground mt-1">System optimized nutrition</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-md bg-primary/10 text-primary mt-0.5">
            <ShieldIcon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-foreground">AI Safety Protocols</h3>
            <p className="text-sm text-muted-foreground mt-1">Infinity gauntlet disabled</p>
          </div>
        </div>
      </div>
      <div className="mt-5 pt-5 border-t border-border text-sm text-muted-foreground">
        <span className="text-primary">&gt; </span>
        Balanced meals and excercises,as all things should be...
      </div>
    </CardContent>

    <CardFooter className="px-5 py-4 border-t border-border">
      <Link href="/programs/001" className="w-full">
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          View Program Details
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </CardFooter>
  </Card>
  {/* Just change name, image, fitness goal, workout plan, diet plan, etc. */}
</div>




        {/* CTA section */}
        <div className="mt-16 text-center">
          <Link href="/generate-program">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
            >
              Generate Your Program
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-muted-foreground mt-4">
            Join 500+ users with AI-customized fitness programs
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProgram;