import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function Home() {
  const serverId = useSelector((state) => state.server.serverId);
  const channelId = useSelector((state) => state.server.channelId);

  if (!serverId || !channelId) {
    return <Navigate to="channels/@me" replace />;
  }

  return <Navigate to={`channels/${serverId}/${channelId}`} replace />;
}
