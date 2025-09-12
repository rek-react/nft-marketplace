# NFT Marketplace Project

A decentralized NFT marketplace platform **in early development** with wallet-based authentication (Sign-In with Ethereum).  
Currently implements **only authentication** via wallet connection - core marketplace functionality is not yet implemented.

Built with **Next.js**, **Wagmi**, **RainbowKit**, **MUI** (frontend) and **NestJS**, **TypeORM**, **PostgreSQL** (backend).

---

## ⚠️ Current Development Status

**This is an early development version with limited functionality:**

- ✅ **Wallet Connection**: Connect/disconnect Ethereum wallets
- ✅ **SIWE Authentication**: Sign-In with Ethereum implementation
- ✅ **Session Management**: Backend session handling with Redis
- ✅ **Basic API Structure**: NestJS backend foundation
- ✅ **UI Foundation**: Next.js frontend with MUI components
- ⚠️ **Hardhat Network Required**: Frontend connects to local Hardhat network (must be running separately)

---

## 📂 Project Structure

```
nft-marketplace/
├── backend/                    # NestJS backend (API + DB)
│   ├── src/                   # Application source code
│   ├── test/                  # Unit & e2e tests
│   ├── Dockerfile             # Production Dockerfile
│   ├── Dockerfile.dev         # Development Dockerfile
│   └── Dockerfile.e2e         # E2E test Dockerfile
├── frontend/                  # Next.js frontend
│   ├── src/                   # App router + FSD architecture
│   ├── public/                # Static assets
│   ├── Dockerfile             # Production Dockerfile
│   └── Dockerfile.dev         # Development Dockerfile
├── docker-compose.dev.yml     # Development compose file
├── docker-compose.yml         # Production compose file
├── .env               # Environment variables
└── README.md                  # Documentation
```

---

## ✨ Currently Implemented Features

- **Wallet Authentication**: Connect wallet via RainbowKit + Wagmi
- **Sign-In with Ethereum (SIWE)**: Secure login without traditional passwords
- **Backend API Foundation**: NestJS with TypeORM & PostgreSQL setup
- **Session Management**: Redis-backed sessions (production) / MemoryStore (testing)
- **Basic Testing Framework**: Unit and E2E test setup
- **Frontend Foundation**: Next.js with MUI and FSD architecture
- **Hardhat Network Integration**: Frontend configured for local Hardhat development

---

## 🛠️ Prerequisites

- Docker & Docker Compose
- Node.js >= 22 (for local dev without Docker)
- PostgreSQL >= 14 (if running DB locally)
- **Hardhat**: Local Ethereum network for development

---

## ⚙️ Environment Variables

### Root (`.env`)

```env
POSTGRES_DB=nft_marketplace
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_PORT=5432

REDIS_HOST=redis
REDIS_PORT=6379
```

### Backend (`backend/.env`)

```env
PORT=3001

CLIENT_URL=http://localhost:3000

SESSION_SECRET_KEY=super-secret-key
SESSION_EXPIRES_IN=1d
```

### Frontend (`frontend/.env`)

```env
NEXT_PUBLIC_WALLET_CONNECT_ID=your-walletconnect-id
NEXT_PUBLIC_IPFS_GATEWAY=https://gateway.pinata.cloud/ipfs

# Hardhat Network Configuration
NEXT_PUBLIC_CHAIN_ID=31337
NEXT_PUBLIC_RPC_URL=http://localhost:8545
NEXT_PUBLIC_NETWORK_NAME=hardhat

PINATA_API_KEY=your-api-key
PINATA_API_SECRET=your-api-secret
PINATA_URL=https://api.pinata.cloud
```

---

## 💻 Development

### 1. Start Hardhat Network (Required First)

```bash
# In a separate terminal, navigate to your Hardhat project
cd path/to/your/hardhat-project
npx hardhat node
```

### 2. Start Local Development Environment

```bash
docker-compose -f docker-compose.dev.yml up --build
```

- Frontend → [http://localhost:3000](http://localhost:3000)
- Backend → [http://localhost:3001](http://localhost:3001)
- Hardhat Network → [http://localhost:8545](http://localhost:8545)

## Currently Available Testing Features:

    1. Wallet Connection**: Connect and disconnect Ethereum wallet to/from Hardhat network
    2. Message Signing**: Sign authentication messages using SIWE protocol
    3. Session Verification**: Verify backend session creation and management
    4. UI Navigation**: Test basic user interface navigation and layout

---

## 🧪 Testing

### Unit tests

```bash
docker-compose -f docker-compose.dev.yml exec backend npm run test
```

### E2E tests

```bash
docker-compose run --rm backend-e2e
```

---

## 📖 Authentication Flow (Currently Working)

    1. User clicks **Connect Wallet** in frontend
    2. Frontend connects to local Hardhat network (must be running)
    3. Frontend generates SIWE message via RainbowKit + Wagmi
    4. User signs message with their wallet
    5. Frontend sends signature to backend `/api/auth/verify` endpoint
    6. Backend verifies signature and creates session
    7. User receives session cookie and is authenticated

---

## 🔧 Hardhat Network Setup

To set up a local Hardhat network:

1.  **Install Hardhat**:

    ```bash
    npm install --save-dev hardhat
    ```

2.  **Create Hardhat project** (if not already done):

    ```bash
    npx hardhat
    ```

3.  **Start local network**:

    ```bash
    npx hardhat node
    ```

4.  **Configure wallets**: Import test accounts to MetaMask using private keys from Hardhat output

---

## 🛣️ Roadmap - What's Coming Next

- [ ] **Smart Contract Development**: ERC-721/ERC-1155 contracts
- [ ] **NFT Minting**: Create and deploy NFT collection functionality
- [ ] **Marketplace Core**: Listing, buying, and selling NFTs
- [ ] **Auction System**: Time-based auctions for NFTs
- [ ] **User Profiles**: Collection display and management
- [ ] **Search & Filtering**: Advanced NFT discovery
- [ ] **Notifications**: Event and activity notifications
- [ ] **Multi-chain Support**: Cross-chain compatibility

---

## 🤝 Contributing

## Note: This project is in early development. Contributions are welcome but please:

    1. Check existing issues for what's being worked on
    2. Focus on authentication improvements first
    3. Discuss major architectural changes before implementing
    4. Ensure Hardhat network compatibility for frontend changes

---

## ⚠️ Important Disclaimer

**This is NOT a production-ready application.** Key limitations:

- No smart contract functionality yet
- No financial transactions possible
- Core marketplace features missing
- Security audits not performed
- Requires local Hardhat network for operation
- Use only for development and testing purposes

---

## 🙏 Acknowledgments

- [NestJS](https://nestjs.com)
- [Next.js](https://nextjs.org)
- [Wagmi](https://wagmi.sh)
- [RainbowKit](https://www.rainbowkit.com)
- [MUI](https://mui.com)
- [TypeORM](https://typeorm.io)
- [PostgreSQL](https://www.postgresql.org)
- [Hardhat](https://hardhat.org) - Ethereum development environment

---

**Status**: Early Development • Authentication Only • Requires Hardhat Network • Not Production Ready
