interface AgentTrainingPageProps {
  agentId: string;
}

export default function AgentTrainingPage({ agentId }: AgentTrainingPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Training</h2>
        <p className="text-muted-foreground mt-1">
          Training functionality coming soon
        </p>
      </div>
    </div>
  );
}
