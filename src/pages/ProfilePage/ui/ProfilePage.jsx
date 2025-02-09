import { UserAvatar } from "../../../entities/UserAvatar";
import { UserStatus } from "../../../entities/UserStatus";
import { ProfileForm } from "../../../features/ProfileForm";
import { StatsCard } from "../../../widgets/StatsCard";
import { ProjectsList } from "../../../widgets/ProjectsList";

import img from "../../../shared/images/img.png";

export function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-sm space-y-4">
            <div className="flex flex-col items-center">
              <UserAvatar src={img} alt="User Avatar" size="lg" />
              <h1 className="text-2xl font-bold mt-4">Pogodayev Mikhail</h1>
              <UserStatus isOnline={true} />
            </div>
            <ProfileForm />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="grid grid-cols-3 gap-4">
            <StatsCard count={5} label="Projects" color="blue" />
            <StatsCard count={4} label="Projects Complete" color="green" />
            <StatsCard count={1} label="Projects in Progress" color="red" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <ProjectsList />
          </div>
        </div>
      </div>
    </div>
  );
}
