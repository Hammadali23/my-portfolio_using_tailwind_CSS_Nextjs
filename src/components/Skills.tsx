export default function Skills() {
    const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];
  
    return (
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map(skill => (
            <div key={skill} className="p-4 bg-gray-100 rounded shadow-md">
              {skill}
            </div>
          ))}
        </div>
      </div>
    );
  }
  