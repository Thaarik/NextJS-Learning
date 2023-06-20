# NEXT.JS

1. Next.js simplifies the development process
2. Optimizes the web app through priary features.

***Benefits*:**
1. React does client side rendering while Next.js does server side rendering. Next.js also has options in which we can control on either client side or server side rendering.

2. Client-side rendering happens on client's browser. When a user request a webpage to the server. The server sends the html,css and JS of the page to the user. The user browsr downloads and executes the downloaded document and rendering the components, displaying the webpage.

3. Server side rendering renders the web page directly in the server before transfering it to the client. 

4. This aspect SEO enables easy crawling, indexing in server side rendering. SEO is crucial for optimizing a website's visibility and ranking in search engine results.

5. this helps in increased organic traffic, enhanced user experience, credibility & trustworthiness and competitive advantage. It impacts the sucess of the website and online presence.

6. Routing: In React we need react router. In next.js it used a file based route system. Each folder becomes a route and the file insdie the folder becomes route path

7. Next.JS has flexibility to create Fullstack app in Next.JS v9. this feature is done usinf API routes. It enables the creation of serverless functions to handle API requests. Serverless APIs s a way to create API endpoints without the need of a traditional server. We can create a API endoint by creating a route.js in a folder inside next.js app.
Moving from react+express+webpack to next.js resulted in removing 20000+ lines of code and 30+dependencies while improving Hot Module Reloading from 1.3s to 131 ms.

8. Automatic code splitting. Code splitting is a techniquethat breaks down large bundles of JS code into smaller, more manageable chunks that can be loaded as needed. This reduces the load time of the website.In reatc, it's manual.

9. So, Next.JS mainly let us focus on building the essential business logic of the application and automates most of the remaining process.

10. Next.JS is fundamentally built on top of react. It is just an extenson of react.

***How to create routing?***
1. Routing is created in file-based. So, under the app folder, if you create a newpages folder and inside that folder page.js then the routing will be localhost:3000/newpages. We can created nested routing too
2. If you want to create dynamic routing, say :postId, then this is how it must be created -> app > newpages > [postId] >page1.js, where the dynamic routing must have  '[]' brackets.
3. You can create the layout navigation (navigating to the top page) and loading style under the componenet/routing folder.

***Error Handling in Next.js:***
1. Error handling is simple. Just create an error page and place it in wherever the routing folder you want to keep it in.

***Data Fetching:***
Next.js has three choices for selecting how to fetch data. They are:
  
  i. **Server-Side-Rendering (SSR):** Dynamic server-rendered data. It is fetched fresh on each request with SSR each request to the server triggers a new rendering cycle and data fetch ensuring the content is always upto date. Consider a page.js file with page react function. It is an sync function in which it fetches data with params(argument). Here we are using '{cache: 'no-store'}. It is a dynamic page in which we get the ID through params. With the 'cache: no-store', it means 'Hey! dont store it! Simply display the body and the title of the fetched post'. This ensures that it refetches it every single time making it as server-side rendered.![image](https://github.com/Thaarik/NextJS-Learning/assets/52432079/def3070a-ca44-4acb-8e82-e47c62b59135)


  ii. **Static-Site Generation (SSG):** Same as above but the only difference is to remove '{cache: 'no-store'}'. By default, next.js use statis site generation. It will automatically fetch the data and cache it. This method is ideal for content that does not change frequently such as blog posts, documentation and marketing pages. ![image](https://github.com/Thaarik/NextJS-Learning/assets/52432079/2628df27-2e5e-4283-92ca-3edee4b63eaf)


  iii. **Incremental-Static Generation (ISR):** (High Sr for short). Instead of using a cache, it uses '{next: { revalidate:10}}'. It uses both the functionality of SSR and SSG to create dynamic content in static site. You can specify the certain data to be statically fetched at build time while defining the revalidation time interval. So, the data will be cached refreshed in the given revalidation time so that we  always get new data.![image](https://github.com/Thaarik/NextJS-Learning/assets/52432079/9ee28458-0088-48ff-9c83-c60ba3115dc6)


***Next.js API Endpoints:***
Next.js allows application to be full stack. Using the same file based routing system, Next.js allows us to handle HTTP requests and develop backend functionality without requiring an external server.
There are two different ways for route handlers. 
1 -> create a file based route handlers right behind the api folder within the app directory -> app > api > route.js
2 -> create a direct route handler within the app directory ->  app > route.js. This approach is not good because it may interefere with other component pages while implementing routing.
So all the backend function logic and API endpoints are kept using 1st approach. 
To create an API backend route -> create users folder under app > api > users > route.js and it accepts the below code:
![image](https://github.com/Thaarik/NextJS-Learning/assets/52432079/d4049ac2-d0ec-4ac3-bacf-5b444a703248)

When compared to express.js and next.js in backend function:

***Express.js***:

![image](https://github.com/Thaarik/NextJS-Learning/assets/52432079/73ba0c0a-7182-4956-8d08-b7709616e2fc)

***Next.js***:

![image](https://github.com/Thaarik/NextJS-Learning/assets/52432079/5aa9635c-945f-4eab-bd2f-b123fa7d3582)

***How to improve SEO in Next.js app:***
There are two types of metadata: Static and Dynamic
Static Metadata -> ![image](https://github.com/Thaarik/NextJS-Learning/assets/52432079/68ac7286-c738-49f7-860d-0f30145f9781)

Dynamic Metadata -> ![image](https://github.com/Thaarik/NextJS-Learning/assets/52432079/20abb679-e27c-45ee-a3eb-e62387cb968c)


Next.js Docs: https://nextjs.org/docs
