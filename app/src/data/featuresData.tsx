import React from 'react';
import { Activity, Lock, Zap, Compass, LineChart, Shield, 
  DatabaseZap,Wallet,LayoutGrid,Bot,MessagesSquare
} from 'lucide-react';

export const features = [
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "链上数据分析",
    description: "我们实现过多种 EVM 兼容链的数据聚合和分析，精通 Solana 生态数据分析，对HyperLiquid 这种新贵也很快支持到位。"
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "高频交易机器",
    description: "从最早期的 cex 搬砖，到 dex 套利，到 Solana集火的交易 Bot，我们一路实践过来，积累了丰富经验。"
  },
  {
    icon: <LayoutGrid className="h-6 w-6" />,
    title: "智能合约应用",
    description: "从 EVM 到WASM到 SVM，从 Solidiy到 Rust 到 Move，我们在多种平台上实现过 Dex/Game/SNS 等链上应用。"
  },
  {
    icon: <Wallet className="h-6 w-6" />,
    title: "钱包解决方案",
    description: "我们实践过 Chrome 扩展钱包，也发布过移动端钱包App。我们制作过 AA 账号钱包，也托管过Bot中央钱包。多种钱包方案我们都有涉猎。"
  },
  {
    icon: <MessagesSquare className="h-6 w-6" />,
    title: "AIAgent 应用",
    description: "面向 AI，我们积极拥抱。通过 MCP/A2A链接已有服务。我们也扩展过 A2A 协议，提供服务发现功能。"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "合约安全审计",
    description: "安全的合约能力，是我们构造应用的基石。我们有自己的安全审计流程和工具，保障合约的安全性。同时也可以帮助项目进行安全方面的保驾护航。"
  }
];
