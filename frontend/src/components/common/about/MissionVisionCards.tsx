import { Flag, Eye } from 'lucide-react';

function MissionVisionCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Mission Card */}
      <div className="bg-surface-light p-6 rounded-xl border border-border hover:border-primary/40 transition-colors shadow-md hover:shadow-lg group">
        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
          <Flag className="text-primary-dark group-hover:text-text-on-primary transition-colors" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-text-primary">
          Our Mission
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          To protect and serve every stray cow, ensuring they live a life free
          from hunger, cruelty, and neglect through dedicated rescue operations.
        </p>
      </div>

      {/* Vision Card */}
      <div className="bg-surface-light p-6 rounded-xl border border-border hover:border-primary/40 transition-colors shadow-md hover:shadow-lg group">
        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
          <Eye className="text-primary-dark group-hover:text-text-on-primary transition-colors" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-text-primary">Our Vision</h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          A compassionate world where no cow goes hungry or homeless, and
          traditional values of cow protection are upheld with modern care.
        </p>
      </div>
    </div>
  );
}

export default MissionVisionCards;
