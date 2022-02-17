# NextJS Dynamic Routes

This repository describes the basic way how to generate dynamic routes in nextjs. The [[...slug]].js file must create all the logic to build the index which will contain the blog paginator.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

To generate static files:
```bash
npm run build
```

## Folder structure

![image](https://user-images.githubusercontent.com/22040822/154575007-5cbb5b15-770d-420a-95a2-194361111847.png)

### To create dynamic routes in [[...slug]].js, we have to return in getStaticPaths function this Object:

![image](https://user-images.githubusercontent.com/22040822/154575556-5d74edad-ae34-420b-9ecf-6d9cf8036791.png)

### Output:

![image](https://user-images.githubusercontent.com/22040822/154575666-96ec7139-ec0d-43d2-bbb1-b4a058e4f5c1.png)


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Learn Dynamic Routes](https://nextjs.org/docs/routing/dynamic-routes)
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
