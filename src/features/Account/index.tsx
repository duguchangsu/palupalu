import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { maskString } from "@/lib/string";

import { Switch, Match } from "@/logic/Switch";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Account = () => {
  const account = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div>
      <Switch fallback={<Skeleton className="h-[15px] w-[25px]" />}>
        <Match when={account.status === "connected"}>
          <Popover>
            <PopoverTrigger>
              {maskString(String(account.addresses))}
            </PopoverTrigger>
            <PopoverContent className="w-30">
              <Button onClick={() => disconnect()}>断开连接</Button>
            </PopoverContent>
          </Popover>
        </Match>

        <Match when={account.status === "disconnected"}>
          <Button
            variant="outline"
            onClick={() => connect({ connector: connectors[0] })}
          >
            连接账户
          </Button>
        </Match>
      </Switch>
    </div>
  );
};

export default Account;
