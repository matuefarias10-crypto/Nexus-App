# Nexus App

GraphQL API built with Nexus and Apollo Server, deployed on Vercel.

## 📁 Project Structure

```
nexus-app/
├── api/
│   └── graphql.ts          # Apollo Server handler for Vercel
├── schema/
│   ├── index.ts            # Nexus schema configuration
│   └── types.ts            # GraphQL types definitions
├── pages/                   # (Optional) Next.js pages
├── package.json
├── tsconfig.json
├── vercel.json            # Vercel deployment config
└── README.md
```

## 🚀 Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The GraphQL playground will be available at `http://localhost:4000/`

### Query Example

```graphql
query {
  hello(name: "Matheus")
  info
}
```

## 🌐 Deployment on Vercel

1. Push to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Deploy!

Your API will be available at: `https://<your-app>.vercel.app/api/graphql`

## 📝 Adding New Types

Edit `schema/types.ts` to add new GraphQL types and queries:

```typescript
export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.string('id');
    t.string('title');
    t.string('content');
  },
});
```

## 📚 Resources

- [Nexus Documentation](https://nexusjs.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [Vercel Functions](https://vercel.com/docs/functions)
