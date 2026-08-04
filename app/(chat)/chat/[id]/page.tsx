import { Suspense } from "react";
import { notFound } from "next/navigation";
import { AgentChatRouteSync } from "@/app/_components/AgentChatRouteSync";
import { SessionChatPage } from "@/app/_components/SessionChatPage";
import { isProvisionalChatId } from "@/lib/chat-id";
import { getChatForUser } from "@/lib/db/queries";
import { getServerViewer } from "@/lib/session";
import { getSetupStatus } from "@/lib/setup";
import { ExistingChat } from "@/app/_components/ExistingChat";

export default async function ChatPage({
  params,
}: {
  readonly params: Promise<{ readonly id: string }>
}) {
  const { id: chatId } = await params;

  return (
    <SessionChatPage chatId={chatId} key={chatId}>
      <Suspense fallback={null}>
        <ExistingChat chatId={chatId} />
      </Suspense>
    </SessionChatPage>
  );
}
