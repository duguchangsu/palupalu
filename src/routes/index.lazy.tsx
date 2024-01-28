import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useAccount } from "wagmi";
import { useToast } from "@/components/ui/use-toast";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const account = useAccount();
  const { toast } = useToast();

  return (
    <div className="p-2 flex h-full	items-center justify-center">
      <Button
        variant="outline"
        onClick={() => {
          if (account.status === "connected") {
            toast({
              title: "获取成功",
              description: "Friday, February 10, 2023 at 5:57 PM",
            });
          } else {
            toast({
              title: "请先右上角登录",
              description: "Friday, February 10, 2023 at 5:57 PM",
            });
          }
        }}
      >
        获取免费服务器
      </Button>
    </div>
  );
}
