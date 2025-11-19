import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/**
 * Style Guide Page
 * Displays the comprehensive design system including colors, typography, and components
 */
export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="font-sans text-5xl font-bold tracking-tight text-foreground">
            Bizova Design System
          </h1>
          <p className="text-lg text-muted-foreground">
            A comprehensive guide to colors, typography, and components used
            throughout the application.
          </p>
        </header>

        {/* Color Palette Section */}
        <section className="space-y-6">
          <div>
            <h2 className="mb-2 font-sans text-3xl font-semibold text-foreground">
              Color Palette
            </h2>
            <p className="text-muted-foreground">
              Our color system uses OKLCH color space for perceptually uniform
              colors with automatic dark mode support.
            </p>
          </div>

          {/* Primary Colors */}
          <Card>
            <CardHeader>
              <CardTitle>Primary Colors</CardTitle>
              <CardDescription>
                Main brand colors used for primary actions and key UI elements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <ColorSwatch
                  name="Background"
                  cssVar="--background"
                  className="bg-background text-foreground"
                  description="Main background color"
                />
                <ColorSwatch
                  name="Foreground"
                  cssVar="--foreground"
                  className="bg-foreground text-background"
                  description="Main text color"
                />
                <ColorSwatch
                  name="Primary"
                  cssVar="--primary"
                  className="bg-primary text-primary-foreground"
                  description="Primary actions and highlights"
                />
                <ColorSwatch
                  name="Primary Foreground"
                  cssVar="--primary-foreground"
                  className="bg-primary-foreground text-primary"
                  description="Text on primary background"
                />
                <ColorSwatch
                  name="Secondary"
                  cssVar="--secondary"
                  className="bg-secondary text-secondary-foreground"
                  description="Secondary actions"
                />
                <ColorSwatch
                  name="Secondary Foreground"
                  cssVar="--secondary-foreground"
                  className="bg-secondary-foreground text-secondary"
                  description="Text on secondary background"
                />
              </div>
            </CardContent>
          </Card>

          {/* Surface Colors */}
          <Card>
            <CardHeader>
              <CardTitle>Surface Colors</CardTitle>
              <CardDescription>
                Colors for cards, popovers, and other surface elements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <ColorSwatch
                  name="Card"
                  cssVar="--card"
                  className="bg-card text-card-foreground"
                  description="Card background"
                />
                <ColorSwatch
                  name="Card Foreground"
                  cssVar="--card-foreground"
                  className="bg-card-foreground text-card"
                  description="Text on cards"
                />
                <ColorSwatch
                  name="Popover"
                  cssVar="--popover"
                  className="bg-popover text-popover-foreground"
                  description="Popover background"
                />
                <ColorSwatch
                  name="Popover Foreground"
                  cssVar="--popover-foreground"
                  className="bg-popover-foreground text-popover"
                  description="Text on popovers"
                />
                <ColorSwatch
                  name="Muted"
                  cssVar="--muted"
                  className="bg-muted text-muted-foreground"
                  description="Subtle backgrounds"
                />
                <ColorSwatch
                  name="Muted Foreground"
                  cssVar="--muted-foreground"
                  className="bg-muted-foreground text-muted"
                  description="Subtle text"
                />
              </div>
            </CardContent>
          </Card>

          {/* Interactive Colors */}
          <Card>
            <CardHeader>
              <CardTitle>Interactive Colors</CardTitle>
              <CardDescription>
                Colors for accents, borders, and interactive elements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <ColorSwatch
                  name="Accent"
                  cssVar="--accent"
                  className="bg-accent text-accent-foreground"
                  description="Accent backgrounds"
                />
                <ColorSwatch
                  name="Accent Foreground"
                  cssVar="--accent-foreground"
                  className="bg-accent-foreground text-accent"
                  description="Text on accent"
                />
                <ColorSwatch
                  name="Border"
                  cssVar="--border"
                  className="bg-border text-foreground"
                  description="Border colors"
                />
                <ColorSwatch
                  name="Input"
                  cssVar="--input"
                  className="bg-input text-foreground"
                  description="Input borders"
                />
                <ColorSwatch
                  name="Ring"
                  cssVar="--ring"
                  className="bg-ring text-foreground"
                  description="Focus ring color"
                />
                <ColorSwatch
                  name="Destructive"
                  cssVar="--destructive"
                  className="bg-destructive text-white"
                  description="Destructive actions"
                />
              </div>
            </CardContent>
          </Card>

          {/* Chart Colors */}
          <Card>
            <CardHeader>
              <CardTitle>Chart Colors</CardTitle>
              <CardDescription>
                Data visualization color palette
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                <ColorSwatch
                  name="Chart 1"
                  cssVar="--chart-1"
                  className="bg-chart-1 text-white"
                  description="Primary chart color"
                />
                <ColorSwatch
                  name="Chart 2"
                  cssVar="--chart-2"
                  className="bg-chart-2 text-white"
                  description="Secondary chart color"
                />
                <ColorSwatch
                  name="Chart 3"
                  cssVar="--chart-3"
                  className="bg-chart-3 text-white"
                  description="Tertiary chart color"
                />
                <ColorSwatch
                  name="Chart 4"
                  cssVar="--chart-4"
                  className="bg-chart-4 text-foreground"
                  description="Quaternary chart color"
                />
                <ColorSwatch
                  name="Chart 5"
                  cssVar="--chart-5"
                  className="bg-chart-5 text-foreground"
                  description="Quinary chart color"
                />
              </div>
            </CardContent>
          </Card>

          {/* Sidebar Colors */}
          <Card>
            <CardHeader>
              <CardTitle>Sidebar Colors</CardTitle>
              <CardDescription>
                Colors specific to sidebar navigation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <ColorSwatch
                  name="Sidebar"
                  cssVar="--sidebar"
                  className="bg-sidebar text-sidebar-foreground"
                  description="Sidebar background"
                />
                <ColorSwatch
                  name="Sidebar Foreground"
                  cssVar="--sidebar-foreground"
                  className="bg-sidebar-foreground text-sidebar"
                  description="Sidebar text"
                />
                <ColorSwatch
                  name="Sidebar Primary"
                  cssVar="--sidebar-primary"
                  className="bg-sidebar-primary text-sidebar-primary-foreground"
                  description="Active sidebar items"
                />
                <ColorSwatch
                  name="Sidebar Accent"
                  cssVar="--sidebar-accent"
                  className="bg-sidebar-accent text-sidebar-accent-foreground"
                  description="Sidebar hover state"
                />
                <ColorSwatch
                  name="Sidebar Border"
                  cssVar="--sidebar-border"
                  className="bg-sidebar-border text-foreground"
                  description="Sidebar borders"
                />
                <ColorSwatch
                  name="Sidebar Ring"
                  cssVar="--sidebar-ring"
                  className="bg-sidebar-ring text-foreground"
                  description="Sidebar focus ring"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Typography Section */}
        <section className="space-y-6">
          <div>
            <h2 className="mb-2 font-sans text-3xl font-semibold text-foreground">
              Typography
            </h2>
            <p className="text-muted-foreground">
              Our typography system uses Inter for body text and headings, providing excellent readability across all screen sizes.
            </p>
          </div>

          {/* Font Families */}
          <Card>
            <CardHeader>
              <CardTitle>Font Families</CardTitle>
              <CardDescription>
                Primary font family for the application
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Inter (Primary)
                  </h3>
                  <code className="text-xs text-muted-foreground">
                    font-sans
                  </code>
                </div>
                <p className="font-sans text-2xl font-normal text-foreground">
                  The quick brown fox jumps over the lazy dog
                </p>
                <p className="font-sans text-sm text-muted-foreground">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
                  0123456789
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Heading Scales */}
          <Card>
            <CardHeader>
              <CardTitle>Heading Scale</CardTitle>
              <CardDescription>
                Hierarchical heading sizes from h1 to h6
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h1 className="text-5xl font-bold tracking-tight text-foreground">
                    Heading 1
                  </h1>
                  <code className="text-xs text-muted-foreground">
                    text-5xl / font-bold
                  </code>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-4xl font-semibold tracking-tight text-foreground">
                    Heading 2
                  </h2>
                  <code className="text-xs text-muted-foreground">
                    text-4xl / font-semibold
                  </code>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-3xl font-semibold text-foreground">
                    Heading 3
                  </h3>
                  <code className="text-xs text-muted-foreground">
                    text-3xl / font-semibold
                  </code>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="text-2xl font-semibold text-foreground">
                    Heading 4
                  </h4>
                  <code className="text-xs text-muted-foreground">
                    text-2xl / font-semibold
                  </code>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h5 className="text-xl font-semibold text-foreground">
                    Heading 5
                  </h5>
                  <code className="text-xs text-muted-foreground">
                    text-xl / font-semibold
                  </code>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h6 className="text-lg font-semibold text-foreground">
                    Heading 6
                  </h6>
                  <code className="text-xs text-muted-foreground">
                    text-lg / font-semibold
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Body Text Scales */}
          <Card>
            <CardHeader>
              <CardTitle>Body Text Scale</CardTitle>
              <CardDescription>
                Various body text sizes and weights
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-xl font-normal text-foreground">
                    Extra large body text for emphasis
                  </p>
                  <code className="text-xs text-muted-foreground">
                    text-xl / font-normal
                  </code>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-lg font-normal text-foreground">
                    Large body text for important content
                  </p>
                  <code className="text-xs text-muted-foreground">
                    text-lg / font-normal
                  </code>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-base font-normal text-foreground">
                    Base body text for general content
                  </p>
                  <code className="text-xs text-muted-foreground">
                    text-base / font-normal
                  </code>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm font-normal text-foreground">
                    Small body text for secondary content
                  </p>
                  <code className="text-xs text-muted-foreground">
                    text-sm / font-normal
                  </code>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-xs font-normal text-foreground">
                    Extra small text for captions and labels
                  </p>
                  <code className="text-xs text-muted-foreground">
                    text-xs / font-normal
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Font Weights */}
          <Card>
            <CardHeader>
              <CardTitle>Font Weights</CardTitle>
              <CardDescription>
                Available font weight variations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-2xl font-normal text-foreground">
                  Regular Weight (400)
                </p>
                <code className="text-xs text-muted-foreground">
                  font-normal
                </code>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-2xl font-medium text-foreground">
                  Medium Weight (500)
                </p>
                <code className="text-xs text-muted-foreground">
                  font-medium
                </code>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-2xl font-semibold text-foreground">
                  Semibold Weight (600)
                </p>
                <code className="text-xs text-muted-foreground">
                  font-semibold
                </code>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-2xl font-bold text-foreground">
                  Bold Weight (700)
                </p>
                <code className="text-xs text-muted-foreground">
                  font-bold
                </code>
              </div>
            </CardContent>
          </Card>

          {/* Text Colors */}
          <Card>
            <CardHeader>
              <CardTitle>Text Colors</CardTitle>
              <CardDescription>
                Semantic text color utilities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-base text-foreground">
                  Primary foreground text color
                </p>
                <code className="text-xs text-muted-foreground">
                  text-foreground
                </code>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-base text-muted-foreground">
                  Muted text for secondary information
                </p>
                <code className="text-xs text-muted-foreground">
                  text-muted-foreground
                </code>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-base text-primary">Primary accent text</p>
                <code className="text-xs text-muted-foreground">
                  text-primary
                </code>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-base text-destructive">
                  Destructive or error text
                </p>
                <code className="text-xs text-muted-foreground">
                  text-destructive
                </code>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Component Examples */}
        <section className="space-y-6">
          <div>
            <h2 className="mb-2 font-sans text-3xl font-semibold text-foreground">
              Component Showcase
            </h2>
            <p className="text-muted-foreground">
              Interactive examples of UI components using the design system
            </p>
          </div>

          {/* Buttons */}
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>
                Various button variants and sizes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Button Variants */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-muted-foreground">
                  Variants
                </h4>
                <div className="flex flex-wrap gap-3">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>

              {/* Button Sizes */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-muted-foreground">
                  Sizes
                </h4>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>

              {/* Button States */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-muted-foreground">
                  States
                </h4>
                <div className="flex flex-wrap gap-3">
                  <Button>Normal</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Inputs */}
          <Card>
            <CardHeader>
              <CardTitle>Form Inputs</CardTitle>
              <CardDescription>
                Input fields with various states
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="input-default">Default Input</Label>
                  <Input
                    id="input-default"
                    placeholder="Enter text..."
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="input-disabled">Disabled Input</Label>
                  <Input
                    id="input-disabled"
                    placeholder="Disabled"
                    disabled
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="input-email">Email Input</Label>
                  <Input
                    id="input-email"
                    placeholder="email@example.com"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="input-password">Password Input</Label>
                  <Input
                    id="input-password"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cards */}
          <Card>
            <CardHeader>
              <CardTitle>Card Components</CardTitle>
              <CardDescription>
                Card layouts with headers and content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Simple Card</CardTitle>
                    <CardDescription>
                      A basic card with title and description
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground">
                      This is the card content area where you can place any
                      content.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Feature Card</CardTitle>
                    <CardDescription>
                      Highlighting key features
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-foreground">
                        • Responsive design
                      </p>
                      <p className="text-sm text-foreground">
                        • Dark mode support
                      </p>
                      <p className="text-sm text-foreground">
                        • Accessible components
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Stats Card</CardTitle>
                    <CardDescription>Displaying metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-primary">42</p>
                      <p className="text-sm text-muted-foreground">
                        Active Users
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Border Radius */}
        <section className="space-y-6">
          <div>
            <h2 className="mb-2 font-sans text-3xl font-semibold text-foreground">
              Border Radius
            </h2>
            <p className="text-muted-foreground">
              Consistent border radius values throughout the design system
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Radius Scale</CardTitle>
              <CardDescription>
                Available border radius utilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                  <div className="flex h-20 items-center justify-center rounded-sm border-2 border-primary bg-primary/10">
                    <code className="text-sm font-mono">rounded-sm</code>
                  </div>
                  <p className="text-center text-xs text-muted-foreground">
                    Small (calc(var(--radius) - 4px))
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex h-20 items-center justify-center rounded-md border-2 border-primary bg-primary/10">
                    <code className="text-sm font-mono">rounded-md</code>
                  </div>
                  <p className="text-center text-xs text-muted-foreground">
                    Medium (calc(var(--radius) - 2px))
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex h-20 items-center justify-center rounded-lg border-2 border-primary bg-primary/10">
                    <code className="text-sm font-mono">rounded-lg</code>
                  </div>
                  <p className="text-center text-xs text-muted-foreground">
                    Large (var(--radius) = 0.625rem)
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex h-20 items-center justify-center rounded-xl border-2 border-primary bg-primary/10">
                    <code className="text-sm font-mono">rounded-xl</code>
                  </div>
                  <p className="text-center text-xs text-muted-foreground">
                    Extra Large (calc(var(--radius) + 4px))
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Spacing */}
        <section className="space-y-6">
          <div>
            <h2 className="mb-2 font-sans text-3xl font-semibold text-foreground">
              Spacing
            </h2>
            <p className="text-muted-foreground">
              Consistent spacing scale based on Tailwind&apos;s default spacing
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Spacing Scale</CardTitle>
              <CardDescription>
                Common spacing values used in the design system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { value: "1", px: "4px", rem: "0.25rem" },
                  { value: "2", px: "8px", rem: "0.5rem" },
                  { value: "3", px: "12px", rem: "0.75rem" },
                  { value: "4", px: "16px", rem: "1rem" },
                  { value: "6", px: "24px", rem: "1.5rem" },
                  { value: "8", px: "32px", rem: "2rem" },
                  { value: "12", px: "48px", rem: "3rem" },
                  { value: "16", px: "64px", rem: "4rem" },
                ].map((spacing) => (
                  <div
                    key={spacing.value}
                    className="flex items-center gap-4"
                  >
                    <div className="w-20 flex-shrink-0">
                      <code className="text-sm font-mono text-foreground">
                        {spacing.value}
                      </code>
                    </div>
                    <div className="flex-1">
                      <div
                        className="h-8 bg-primary"
                        style={{ width: spacing.px }}
                      />
                    </div>
                    <div className="w-32 flex-shrink-0 text-right text-sm text-muted-foreground">
                      {spacing.px} / {spacing.rem}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Shadow */}
        <section className="space-y-6">
          <div>
            <h2 className="mb-2 font-sans text-3xl font-semibold text-foreground">
              Shadows
            </h2>
            <p className="text-muted-foreground">
              Subtle elevation using shadow utilities
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Shadow Scale</CardTitle>
              <CardDescription>Available shadow utilities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-2">
                  <div className="flex h-24 items-center justify-center rounded-lg border bg-card shadow-xs">
                    <code className="text-sm font-mono">shadow-xs</code>
                  </div>
                  <p className="text-center text-xs text-muted-foreground">
                    Extra Small Shadow
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex h-24 items-center justify-center rounded-lg border bg-card shadow-sm">
                    <code className="text-sm font-mono">shadow-sm</code>
                  </div>
                  <p className="text-center text-xs text-muted-foreground">
                    Small Shadow
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex h-24 items-center justify-center rounded-lg border bg-card shadow">
                    <code className="text-sm font-mono">shadow</code>
                  </div>
                  <p className="text-center text-xs text-muted-foreground">
                    Default Shadow
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex h-24 items-center justify-center rounded-lg border bg-card shadow-md">
                    <code className="text-sm font-mono">shadow-md</code>
                  </div>
                  <p className="text-center text-xs text-muted-foreground">
                    Medium Shadow
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex h-24 items-center justify-center rounded-lg border bg-card shadow-lg">
                    <code className="text-sm font-mono">shadow-lg</code>
                  </div>
                  <p className="text-center text-xs text-muted-foreground">
                    Large Shadow
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex h-24 items-center justify-center rounded-lg border bg-card shadow-xl">
                    <code className="text-sm font-mono">shadow-xl</code>
                  </div>
                  <p className="text-center text-xs text-muted-foreground">
                    Extra Large Shadow
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

/**
 * ColorSwatch Component
 * Displays a color swatch with its name, CSS variable, and description
 */
interface ColorSwatchProps {
  name: string;
  cssVar: string;
  className: string;
  description: string;
}

function ColorSwatch({
  name,
  cssVar,
  className,
  description,
}: ColorSwatchProps) {
  return (
    <div className="space-y-2">
      <div className={`h-24 rounded-lg border ${className} flex items-center justify-center p-4`}>
        <code className="text-sm font-mono">{name}</code>
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium text-foreground">{name}</p>
        <p className="font-mono text-xs text-muted-foreground">{cssVar}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

