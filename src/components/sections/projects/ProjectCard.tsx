
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  previewUrl?: string;
}

export function ProjectCard({ title, description, tags, image, previewUrl }: ProjectProps) {
  return (
    <Card className="overflow-hidden group">
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 group-hover:text-primary transition-colors">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        {previewUrl && (
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => window.open(previewUrl, '_blank')}
          >
            Preview <ArrowRight className="ml-2" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
