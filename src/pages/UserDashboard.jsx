import Navbar from "../components/Navbar";
import TestCard from "../components/TestCard";

export default function UserDashboard() {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      
      <Navbar />

       <div className="flex-1 p-8 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-center">
          Available Tests
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestCard title="Java Fundamentals" duration="30" level="Easy" />
          <TestCard title="React Basics" duration="45" level="Medium" />
          <TestCard title="DSA Challenge" duration="60" level="Hard" />
          <TestCard title="Spring Boot" duration="50" level="Medium" />
          <TestCard title="AI Basics" duration="40" level="Easy" />
          <TestCard title="System Design" duration="60" level="Hard" />
          <TestCard title="Java Fundamentals" duration="30" level="Easy" />
          <TestCard title="React Basics" duration="45" level="Medium" />
          <TestCard title="DSA Challenge" duration="60" level="Hard" />
          <TestCard title="Spring Boot" duration="50" level="Medium" />
          <TestCard title="AI Basics" duration="40" level="Easy" />
          <TestCard title="System Design" duration="60" level="Hard" />
          <TestCard title="Java Fundamentals" duration="30" level="Easy" />
          <TestCard title="React Basics" duration="45" level="Medium" />
          <TestCard title="DSA Challenge" duration="60" level="Hard" />
          <TestCard title="Spring Boot" duration="50" level="Medium" />
          <TestCard title="AI Basics" duration="40" level="Easy" />
          <TestCard title="System Design" duration="60" level="Hard" />
      </div>
        </div>
      </div>
  );
}
