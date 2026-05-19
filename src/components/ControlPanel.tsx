"use client"

import React, { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { 
  Settings2, 
  Sparkles, 
  Code, 
  Layout, 
  Copy, 
  CheckCircle2, 
  RotateCcw,
  AlignLeft,
  AlignCenter
} from "lucide-react"
import { generateHeroCopy, type GenerateHeroCopyOutput } from "@/ai/flows/generate-hero-copy"
import { useToast } from "@/hooks/use-toast"

interface ControlPanelProps {
  settings: {
    gridSize: number
    gridOpacity: number
    glowIntensity: number
    highlightOpacity: number
    edgeFade: boolean
    highlights: boolean
    alignment: "center" | "left"
  }
  onSettingChange: (key: string, value: any) => void
  onCopySelect: (option: { headline: string; bodyText: string }) => void
}

export const ControlPanel = ({ 
  settings, 
  onSettingChange,
  onCopySelect 
}: ControlPanelProps) => {
  const [projectDescription, setProjectDescription] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [copyOptions, setCopyOptions] = useState<GenerateHeroCopyOutput["copyOptions"]>([])
  const { toast } = useToast()
  const [copied, setCopied] = useState(false)

  const handleGenerateCopy = async () => {
    if (!projectDescription) return
    setIsGenerating(true)
    try {
      const result = await generateHeroCopy({ projectDescription })
      setCopyOptions(result.copyOptions)
      toast({
        title: "Copy options generated",
        description: "Choose a minimalist option to apply to your hero section."
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Generation failed",
        description: "Could not reach the AI agent. Please try again."
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const exportTailwind = () => {
    const code = `
// Tailwind Configuration for Background
// Add this to your globals.css
.premium-grid {
  background-size: ${settings.gridSize}px ${settings.gridSize}px;
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, ${settings.gridOpacity}) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, ${settings.gridOpacity}) 1px, transparent 1px);
}

.radial-glow {
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, ${settings.glowIntensity}) 0%,
    transparent 70%
  );
}

// Hero Component JSX
<div className="premium-grid relative min-h-screen bg-[#f7f7f5]">
  <div className="radial-glow absolute inset-0 pointer-events-none" />
  ${settings.highlights ? '<div className="blurred-highlight absolute opacity-30 pointer-events-none" />' : ''}
  <div className="relative z-10">
    {/* Hero Content */}
  </div>
</div>
`.trim()

    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    toast({
      title: "Code exported",
      description: "Tailwind CSS snippet copied to clipboard."
    })
  }

  return (
    <Card className="w-full h-full bg-white/80 backdrop-blur-xl border-none shadow-2xl overflow-hidden flex flex-col">
      <CardHeader className="border-b bg-white/50 py-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Settings2 className="w-4 h-4 text-secondary-foreground" />
            GridSpace Designer
          </CardTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => {
              onSettingChange("gridSize", 64)
              onSettingChange("gridOpacity", 0.04)
              onSettingChange("glowIntensity", 0.4)
              onSettingChange("highlightOpacity", 0.3)
              onSettingChange("edgeFade", true)
              onSettingChange("highlights", true)
              onSettingChange("alignment", "center")
            }}
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="p-0 flex-1 overflow-y-auto">
        <Tabs defaultValue="visual" className="w-full h-full flex flex-col">
          <TabsList className="w-full justify-start rounded-none border-b bg-white/30 h-12">
            <TabsTrigger value="visual" className="flex-1 gap-2 h-full"><Layout className="w-4 h-4" /> Visual</TabsTrigger>
            <TabsTrigger value="copy" className="flex-1 gap-2 h-full"><Sparkles className="w-4 h-4" /> Copy</TabsTrigger>
            <TabsTrigger value="export" className="flex-1 gap-2 h-full"><Code className="w-4 h-4" /> Export</TabsTrigger>
          </TabsList>

          <TabsContent value="visual" className="p-6 space-y-8 flex-1 m-0">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Grid Density</Label>
                <span className="text-xs font-mono">{settings.gridSize}px</span>
              </div>
              <Slider 
                value={[settings.gridSize]} 
                min={24} max={128} step={4}
                onValueChange={([val]) => onSettingChange("gridSize", val)}
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Grid Opacity</Label>
                <span className="text-xs font-mono">{(settings.gridOpacity * 100).toFixed(0)}%</span>
              </div>
              <Slider 
                value={[settings.gridOpacity * 100]} 
                min={0} max={20} step={1}
                onValueChange={([val]) => onSettingChange("gridOpacity", val / 100)}
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Central Glow</Label>
                <span className="text-xs font-mono">{(settings.glowIntensity * 100).toFixed(0)}%</span>
              </div>
              <Slider 
                value={[settings.glowIntensity * 100]} 
                min={0} max={100} step={5}
                onValueChange={([val]) => onSettingChange("glowIntensity", val / 100)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-between space-x-2 border p-3 rounded-lg bg-white/50">
                <Label htmlFor="edge-fade" className="text-xs font-medium">Edge Fading</Label>
                <Switch 
                  id="edge-fade" 
                  checked={settings.edgeFade} 
                  onCheckedChange={(val) => onSettingChange("edgeFade", val)} 
                />
              </div>
              <div className="flex items-center justify-between space-x-2 border p-3 rounded-lg bg-white/50">
                <Label htmlFor="highlights" className="text-xs font-medium">Spotlights</Label>
                <Switch 
                  id="highlights" 
                  checked={settings.highlights} 
                  onCheckedChange={(val) => onSettingChange("highlights", val)} 
                />
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <Label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Layout Alignment</Label>
              <div className="flex gap-2">
                <Button 
                  variant={settings.alignment === "center" ? "default" : "outline"} 
                  className="flex-1 gap-2"
                  onClick={() => onSettingChange("alignment", "center")}
                >
                  <AlignCenter className="w-4 h-4" /> Centered
                </Button>
                <Button 
                  variant={settings.alignment === "left" ? "default" : "outline"} 
                  className="flex-1 gap-2"
                  onClick={() => onSettingChange("alignment", "left")}
                >
                  <AlignLeft className="w-4 h-4" /> Apple-Style
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="copy" className="p-6 space-y-6 flex-1 m-0">
            <div className="space-y-3">
              <Label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Describe your project</Label>
              <Input 
                placeholder="e.g. A minimalist task manager for architects" 
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                className="bg-white/50"
              />
              <Button 
                onClick={handleGenerateCopy} 
                className="w-full gap-2" 
                disabled={isGenerating || !projectDescription}
              >
                {isGenerating ? "Generating..." : <><Sparkles className="w-4 h-4" /> Generate Copy</>}
              </Button>
            </div>

            <div className="space-y-4 overflow-y-auto max-h-[400px]">
              {copyOptions.map((option, idx) => (
                <div 
                  key={idx} 
                  className="group relative border p-4 rounded-xl bg-white hover:border-primary transition-all cursor-pointer"
                  onClick={() => onCopySelect(option)}
                >
                  <h4 className="font-semibold text-sm mb-1">{option.headline}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">{option.bodyText}</p>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="sm" className="h-6 px-2 text-[10px]">Apply</Button>
                  </div>
                </div>
              ))}
              {!isGenerating && copyOptions.length === 0 && (
                <div className="text-center py-12 border border-dashed rounded-xl">
                  <p className="text-xs text-muted-foreground">Enter a description to see AI magic</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="export" className="p-6 flex-1 m-0 flex flex-col justify-center items-center">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold">Ready for production</h3>
              <p className="text-sm text-muted-foreground max-w-[200px]">
                Copy the Tailwind CSS and React component structure for your landing page.
              </p>
              <Button onClick={exportTailwind} className="gap-2 w-full max-w-[200px]">
                {copied ? <><CheckCircle2 className="w-4 h-4" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy Code</>}
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}