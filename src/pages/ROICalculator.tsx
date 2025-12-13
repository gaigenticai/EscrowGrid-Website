import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BadgePill } from "@/components/ui/badge-pill";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
  Calculator,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ROICalculator() {
  const [monthlyPositions, setMonthlyPositions] = useState([100]);
  const [avgPositionValue, setAvgPositionValue] = useState([50000]);
  const [currentProcessingTime, setCurrentProcessingTime] = useState([5]);
  const [teamSize, setTeamSize] = useState([5]);

  // Calculations
  const annualPositions = monthlyPositions[0] * 12;
  const annualVolume = monthlyPositions[0] * avgPositionValue[0] * 12;
  const currentAnnualCost = teamSize[0] * 75000; // Average operations salary
  const currentHoursWasted = (currentProcessingTime[0] - 1) * monthlyPositions[0] * 12; // Time saved with automation
  const efficiencyGain = ((currentProcessingTime[0] - 1) / currentProcessingTime[0]) * 100;
  const annualSavings = (currentAnnualCost * efficiencyGain) / 100;
  const roi = annualSavings > 0 ? ((annualSavings / (annualSavings * 0.1)) * 100) : 0; // Assuming 10% of savings as platform cost

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <BadgePill variant="primary" className="mb-6">
              <Calculator className="w-3 h-3 mr-1" />
              ROI Calculator
            </BadgePill>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Calculate your savings
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              See how much time and money you can save by automating tokenization operations with EscrowGrid.
            </p>
            <Button size="lg" asChild>
              <Link to="/architecture">
                <Zap className="mr-2 h-4 w-4" />
                Try it live
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Your Current Operations
                  </CardTitle>
                  <CardDescription>
                    Enter your current processing metrics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-sm font-medium">
                      Monthly assets or token series: <span className="text-primary">{monthlyPositions[0]}</span>
                    </Label>
                    <Slider
                      value={monthlyPositions}
                      onValueChange={setMonthlyPositions}
                      max={1000}
                      min={10}
                      step={10}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>10</span>
                      <span>1,000</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">
                      Average position value: <span className="text-primary">${avgPositionValue[0].toLocaleString()}</span>
                    </Label>
                    <Slider
                      value={avgPositionValue}
                      onValueChange={setAvgPositionValue}
                      max={1000000}
                      min={10000}
                      step={10000}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>$10K</span>
                      <span>$1M</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">
                      Days to process one position: <span className="text-primary">{currentProcessingTime[0]}</span>
                    </Label>
                    <Slider
                      value={currentProcessingTime}
                      onValueChange={setCurrentProcessingTime}
                      max={30}
                      min={1}
                      step={1}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>1 day</span>
                      <span>30 days</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">
                      Team members managing operations: <span className="text-primary">{teamSize[0]}</span>
                    </Label>
                    <Slider
                      value={teamSize}
                      onValueChange={setTeamSize}
                      max={20}
                      min={1}
                      step={1}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>1 person</span>
                      <span>20 people</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-success/5 to-success/10 border-success/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Your Potential Savings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-background rounded-lg border">
                      <div className="text-2xl font-bold text-primary">${annualSavings.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Annual savings</div>
                    </div>
                    <div className="p-4 bg-background rounded-lg border">
                      <div className="text-2xl font-bold text-primary">{roi.toFixed(0)}%</div>
                      <div className="text-sm text-muted-foreground">ROI in year 1</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-background rounded-lg border">
                      <div className="text-2xl font-bold">{currentHoursWasted}</div>
                      <div className="text-sm text-muted-foreground">Hours saved annually</div>
                    </div>
                    <div className="p-4 bg-background rounded-lg border">
                      <div className="text-2xl font-bold">{efficiencyGain.toFixed(0)}%</div>
                      <div className="text-sm text-muted-foreground">Efficiency improvement</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How we calculate your savings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                    <div className="text-sm">
                      <strong>Time savings:</strong> Reduce processing from {currentProcessingTime[0]} days to 1 day
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                    <div className="text-sm">
                      <strong>Staff productivity:</strong> Your team can handle {(currentProcessingTime[0]).toFixed(0)}x more volume
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                    <div className="text-sm">
                      <strong>Error reduction:</strong> Automated compliance reduces costly mistakes
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                    <div className="text-sm">
                      <strong>Faster go-to-market:</strong> Launch new tokenization workflows in weeks, not months
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Additional benefits not included in calculation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    • Improved audit readiness with complete trails
                  </div>
                  <div className="text-sm text-muted-foreground">
                    • Better customer experience with faster processing
                  </div>
                  <div className="text-sm text-muted-foreground">
                    • Reduced regulatory risk with automated compliance
                  </div>
                  <div className="text-sm text-muted-foreground">
                    • Ability to scale without hiring additional staff
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Summary */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {annualPositions.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Positions annually</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  ${(annualVolume / 1000000).toFixed(1)}M
                </div>
                <div className="text-sm text-muted-foreground">Annual volume</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  ${currentAnnualCost.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Current annual cost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  ${(currentAnnualCost - annualSavings).toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Cost with EscrowGrid</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to start saving?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              See these savings become a reality. Schedule a personalized demo to learn how EscrowGrid fits your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                asChild
              >
                <a
                  href="https://calendly.com/krishnagai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20"
                asChild
              >
                <Link to="/architecture">
                  Try Live Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
