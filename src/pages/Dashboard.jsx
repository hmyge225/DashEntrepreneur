import mockData from '../data/mockData.json';
import WelcomeBanner from '../components/desktop/WelcomeBanner';
import MobileWelcomeCard from '../components/mobile/MobileWelcomeCard';
import QuickActions from '../components/QuickActions';
import Progress from '../components/Progress';
import AISuggestions from '../components/AISuggestions';
import BadgesCard from '../components/BadgesCard';
import NextStepCard from '../components/NextStepCard';

export default function Dashboard({ user }) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden xl:flex gap-6 px-8 py-6">
        <div className="flex flex-col gap-5 flex-1 min-w-0">
          <WelcomeBanner user={user} />
          <QuickActions actions={mockData.quickActions} />
          <AISuggestions suggestions={mockData.aiSuggestions} />
        </div>
        <div className="flex flex-col gap-5 w-[320px] shrink-0">
          <Progress progressItems={mockData.progressItems} />
          <BadgesCard badges={mockData.badges} />
          <NextStepCard nextStep={mockData.nextStep} />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col gap-4 p-4 pb-24 xl:hidden">
        <MobileWelcomeCard user={user} />
        <QuickActions actions={mockData.quickActions} />
        <Progress progressItems={mockData.progressItems} />
        <AISuggestions suggestions={mockData.aiSuggestions} />
        <BadgesCard badges={mockData.badges} />
        <NextStepCard nextStep={mockData.nextStep} />
      </div>
    </>
  );
}
