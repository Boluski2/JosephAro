import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const StorySection = () => {
  const storyPoints = [
    {
      icon: "Lightbulb",
      title: "The Spark",
      description: "Leadership is a journey of evolving vision, relentless ​passion, and the continuous pursuit of excellence. My path ​has been shaped by the conviction that true leaders don't ​just create followers; they inspire more leaders."
    },
    {
      icon: "Target",
      title: "Finding Focus",
      description: "My education journey, steeped in the ​geography of people and places, has ​cemented my belief in the power of ​place to shape our projects, policies, ​and perspectives. It's about ​understanding that every place has a ​story, and every story deserves a place ​in our plans for a more connected and ​sustainable future."
    },
    {
      icon: "Rocket",
      title: "Taking Flight",
      description: "Transforming challenges into ​opportunities, and guiding teams toward shared victories. ​This journey has instilled in me the essence of leadership: ​the power to envision the future, ignite the present, and ​leave a trail of inspiration for others to follow."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-brand">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Icon name="BookOpen" size={16} className="mr-2" />
              My Story
            </div>
            <h2 className="text-4xl font-bold font-display mb-6">
              The Spatial Path of a <span className="text-gradient">Creative Architect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every great story has a beginning. Mine started with a simple belief: that great design has the power to change the world, one experience at a time.
            </p>
          </div>

          {/* Story Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              {storyPoints?.map((point, index) => (
                <div key={index} className="flex space-x-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center text-white shadow-brand group-hover:shadow-brand-lg transition-brand">
                      <Icon name={point?.icon} size={20} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{point?.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{point?.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-card rounded-2xl p-6 shadow-brand-lg">
                <Image
                  src="/image/jor7.png"
                  alt="Creative workspace with design tools and sketches"
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Behind the Scenes</h4>
                  <p className="text-sm text-muted-foreground">
                    12+ years of experience deploying Solutions to Critical ​Environmental Challenges; Supporting Innovative Urban ​Development & Engineering Campaigns and Solving ​Unique Business problems.
                     </p>
                    <p className="text-sm text-muted-foreground">
                    Experienced Technical Project Manager, GIS Leader in ​the Engineering, Hydrology, Climate Change, Urban ​Planning, Forestry, Environmental Monitoring, Disaster ​Risk Management, Surveys, and Data solutions space.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Quote */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 text-center">
            <Icon name="Quote" size={48} className="text-accent mx-auto mb-6 opacity-60" />
            <blockquote className="text-2xl md:text-3xl font-display text-foreground mb-6 leading-relaxed">
              "Your work is going to fill a large part of your life, and the ​only way to be truly satisfied is to do what you believe is ​great work. And the only way to do great work is to love ​what you do."
            </blockquote>
            <cite className="text-muted-foreground font-medium">— Steve Jobs</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;