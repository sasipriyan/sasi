window.BACKEND_PREP_DATA = {
  "metadata": {
    "title": "Backend Development and REST API Interview Preparation",
    "total": 247,
    "updated": "2026-06-26",
    "focusTopics": [
      "REST principles and RESTful API design",
      "Resource naming, versioning and idempotency",
      "HTTP methods, status codes and headers",
      "Authentication vs authorization, JWT, sessions and OAuth",
      "Node.js event loop, async flow and Express middleware",
      "Validation, sanitization, CORS, rate limiting and API security",
      "Pagination, indexing, transactions and query optimization",
      "Background jobs, queues and long-running tasks",
      "Swagger/OpenAPI documentation and standard error responses",
      "Caching, Redis, ETags, WebSockets and backend system design"
    ]
  },
  "questions": [
    {
      "id": 1,
      "category": "REST API Design",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "rest-api-design",
        "technical",
        "beginner"
      ],
      "question": "What is REST?",
      "answer": "REST is an architectural style for designing network APIs around resources. A REST API uses standard HTTP methods, clear resource URLs, stateless requests and predictable representations such as JSON.",
      "keyPoints": [
        "REST is not a protocol; HTTP is commonly used for REST APIs.",
        "Focus on resources like users, orders and products.",
        "A good REST API is stateless, cache-aware and consistent."
      ]
    },
    {
      "id": 2,
      "category": "REST API Design",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "rest-api-design",
        "technical",
        "beginner"
      ],
      "question": "What are the main REST principles?",
      "answer": "The main REST principles are client-server separation, stateless communication, cacheability, uniform interface, layered system and optional code-on-demand. In interviews, the most important ones are statelessness, resource-based URLs and correct HTTP method usage.",
      "keyPoints": [
        "Client and server responsibilities are separated.",
        "Each request should contain all information needed to process it.",
        "Uniform interface means predictable URLs, methods and response formats."
      ]
    },
    {
      "id": 3,
      "category": "REST API Design",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "rest-api-design",
        "technical",
        "beginner"
      ],
      "question": "What is a RESTful API?",
      "answer": "A RESTful API is an API that follows REST constraints and exposes resources through HTTP endpoints. It uses methods like GET, POST, PUT, PATCH and DELETE to perform operations on resources.",
      "keyPoints": [
        "Resource URLs should use nouns, not verbs.",
        "HTTP methods describe the action.",
        "Responses should use proper status codes."
      ]
    },
    {
      "id": 4,
      "category": "REST API Design",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "rest-api-design",
        "technical",
        "intermediate"
      ],
      "question": "What are REST constraints?",
      "answer": "REST constraints are design rules that make APIs scalable and understandable: client-server, stateless, cacheable, uniform interface, layered system and optional code-on-demand. Following them keeps APIs predictable and easier to evolve.",
      "keyPoints": [
        "Statelessness is the most commonly discussed constraint.",
        "Cacheability improves performance.",
        "Layering allows proxies, gateways and load balancers."
      ]
    },
    {
      "id": 5,
      "category": "REST API Design",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "rest-api-design",
        "technical",
        "beginner"
      ],
      "question": "What is the difference between REST and SOAP?",
      "answer": "REST is an architectural style that commonly uses HTTP and JSON, while SOAP is a protocol with strict XML-based message formats and standards. REST is usually lighter and simpler for web APIs; SOAP is common in legacy enterprise systems that need formal contracts and WS-* standards.",
      "keyPoints": [
        "REST is resource-oriented; SOAP is operation/message-oriented.",
        "SOAP has stricter built-in standards.",
        "REST is more common in modern web and mobile APIs."
      ]
    },
    {
      "id": 6,
      "category": "REST API Design",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "rest-api-design",
        "technical",
        "beginner"
      ],
      "question": "Why is REST stateless?",
      "answer": "REST is stateless so each request can be handled independently by any server. This improves scalability, load balancing and reliability because the server does not need to remember previous client requests.",
      "keyPoints": [
        "Client sends authentication and context with each request.",
        "Server-side sessions are possible but must be designed carefully.",
        "Stateless APIs scale horizontally more easily."
      ]
    },
    {
      "id": 7,
      "category": "REST API Design",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "rest-api-design",
        "technical",
        "intermediate"
      ],
      "question": "What makes an API RESTful?",
      "answer": "An API is RESTful when it models resources clearly, uses standard HTTP methods correctly, remains stateless, sends proper status codes and supports consistent representations. It should not expose action-style URLs for basic CRUD operations.",
      "keyPoints": [
        "Use /users/123, not /getUserById.",
        "Use GET for reads and POST for creation.",
        "Keep request and response formats consistent."
      ]
    },
    {
      "id": 8,
      "category": "REST API Design",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "rest-api-design",
        "technical",
        "intermediate"
      ],
      "question": "What is resource-oriented architecture?",
      "answer": "Resource-oriented architecture designs APIs around business entities called resources. Each resource has an identifier and can be represented as JSON, XML or another format.",
      "keyPoints": [
        "Examples: users, products, orders, payments.",
        "Operations are expressed with HTTP methods.",
        "Relationships can be represented with links or nested routes."
      ]
    },
    {
      "id": 9,
      "category": "REST API Design",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "rest-api-design",
        "technical",
        "beginner"
      ],
      "question": "What is the difference between URI and URL?",
      "answer": "A URI identifies a resource, while a URL is a URI that also tells where and how to access it. In practice, API developers usually work with URLs such as https://api.example.com/users/1.",
      "keyPoints": [
        "URI is the broader term.",
        "URL includes location and access method.",
        "Interview answer can mention that every URL is a URI, but not every URI is a URL."
      ]
    },
    {
      "id": 10,
      "category": "REST API Design",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "rest-api-design",
        "technical",
        "intermediate"
      ],
      "question": "What are REST API design best practices?",
      "answer": "Use plural nouns for resources, correct HTTP methods, meaningful status codes, consistent error format, pagination for large lists, validation, versioning, authentication and documentation. Also avoid exposing internal implementation details.",
      "keyPoints": [
        "Design for consistency first.",
        "Document request and response examples.",
        "Use filters, sorting and pagination for collection endpoints."
      ]
    },
    {
      "id": 11,
      "category": "Resource Design",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "resource-design",
        "technical",
        "beginner"
      ],
      "question": "How should REST resources be named?",
      "answer": "Resources should be named with clear nouns that represent business entities, usually in lowercase and plural form. For example, use /users, /orders and /products instead of /getUsers or /createOrder.",
      "keyPoints": [
        "Use nouns, not verbs.",
        "Keep names predictable and consistent.",
        "Use hyphens only when readability needs them."
      ]
    },
    {
      "id": 12,
      "category": "Resource Design",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "resource-design",
        "technical",
        "beginner"
      ],
      "question": "Should REST resource names be singular or plural?",
      "answer": "Plural names are generally preferred because endpoints represent collections and individual items within those collections. For example, use /users for all users and /users/123 for one user.",
      "keyPoints": [
        "Plural naming is the common convention.",
        "Consistency matters more than personal preference.",
        "Avoid mixing singular and plural in the same API."
      ]
    },
    {
      "id": 13,
      "category": "Resource Design",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "resource-design",
        "technical",
        "intermediate"
      ],
      "question": "When should nested resources be used?",
      "answer": "Nested resources are useful when a resource clearly belongs to another resource, such as /users/123/orders. Avoid deeply nested URLs because they become difficult to maintain and reuse.",
      "keyPoints": [
        "One or two nesting levels are usually enough.",
        "Use query parameters for filtering relationships when nesting gets deep.",
        "Nested routes should show ownership or strong relationship."
      ]
    },
    {
      "id": 14,
      "category": "Resource Design",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "resource-design",
        "technical",
        "intermediate"
      ],
      "question": "What are common API versioning strategies?",
      "answer": "Common strategies include URI versioning like /v1/users, header versioning, query parameter versioning and content negotiation. URI versioning is simple and common, while header-based versioning keeps URLs cleaner.",
      "keyPoints": [
        "Version only when breaking changes are introduced.",
        "Keep old versions available during migration.",
        "Document deprecation timelines clearly."
      ]
    },
    {
      "id": 15,
      "category": "Resource Design",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "resource-design",
        "technical",
        "beginner"
      ],
      "question": "What is the difference between URI parameters and query parameters?",
      "answer": "Path or URI parameters identify a specific resource, while query parameters modify the request, usually for filtering, sorting, searching or pagination. For example, /users/10 identifies one user, while /users?role=admin filters a collection.",
      "keyPoints": [
        "Path params are part of resource identity.",
        "Query params are optional modifiers.",
        "Use query params for list filtering."
      ]
    },
    {
      "id": 16,
      "category": "Resource Design",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "resource-design",
        "technical",
        "beginner"
      ],
      "question": "What is the difference between path parameters and query parameters?",
      "answer": "Path parameters are required parts of the route and identify resources. Query parameters come after the question mark and are used for optional controls like page, limit, sort and filter.",
      "keyPoints": [
        "Example path param: /products/42.",
        "Example query param: /products?category=books.",
        "Do not put optional filters into path params."
      ]
    },
    {
      "id": 17,
      "category": "Resource Design",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "resource-design",
        "technical",
        "beginner"
      ],
      "question": "How do you design CRUD APIs?",
      "answer": "A typical CRUD design uses GET /resources for list, GET /resources/:id for detail, POST /resources for create, PUT or PATCH /resources/:id for update and DELETE /resources/:id for deletion.",
      "keyPoints": [
        "Use correct methods for each operation.",
        "Return 201 for successful creation.",
        "Validate input and return standard error responses."
      ]
    },
    {
      "id": 18,
      "category": "Resource Design",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "resource-design",
        "technical",
        "beginner"
      ],
      "question": "What naming conventions do you follow for REST APIs?",
      "answer": "Use lowercase plural nouns, consistent route structure, readable query names and standard JSON field naming. Avoid verbs in URLs for basic CRUD and keep response keys consistent across endpoints.",
      "keyPoints": [
        "Prefer /user-profiles over mixed casing in paths.",
        "Use consistent JSON naming, such as camelCase or snake_case.",
        "Do not expose database table names blindly."
      ]
    },
    {
      "id": 19,
      "category": "Idempotency",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "idempotency",
        "technical",
        "intermediate"
      ],
      "question": "What is idempotency?",
      "answer": "Idempotency means making the same request multiple times has the same effect as making it once. It is important for safe retries when networks fail or clients accidentally send duplicate requests.",
      "keyPoints": [
        "GET, PUT and DELETE are expected to be idempotent.",
        "POST is not idempotent by default.",
        "Payment APIs often use idempotency keys."
      ]
    },
    {
      "id": 20,
      "category": "Idempotency",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "idempotency",
        "technical",
        "intermediate"
      ],
      "question": "Which HTTP methods are idempotent?",
      "answer": "GET, HEAD, OPTIONS, PUT and DELETE are idempotent by definition. PATCH can be idempotent depending on implementation, while POST is generally not idempotent.",
      "keyPoints": [
        "Safe methods do not change server state.",
        "Idempotent methods can still return different response metadata.",
        "Idempotency is about effect on server state."
      ]
    },
    {
      "id": 21,
      "category": "Idempotency",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "idempotency",
        "technical",
        "intermediate"
      ],
      "question": "Why is POST not idempotent by default?",
      "answer": "POST usually creates a new resource or triggers a new operation each time it is sent. Sending the same POST twice may create two orders, two payments or two records unless the API adds duplicate protection.",
      "keyPoints": [
        "Use POST for non-idempotent operations.",
        "Add idempotency keys for retries.",
        "Creation APIs must handle accidental duplicates carefully."
      ]
    },
    {
      "id": 22,
      "category": "Idempotency",
      "type": "Technical",
      "difficulty": "Advanced",
      "tags": [
        "idempotency",
        "technical",
        "advanced"
      ],
      "question": "How do payment gateways implement idempotency?",
      "answer": "Payment gateways accept an idempotency key with a payment request and store the result for that key. If the client retries with the same key, the gateway returns the original result instead of charging again.",
      "keyPoints": [
        "Idempotency key should be unique per logical operation.",
        "Store request hash and response result.",
        "Expire keys after a safe retention period."
      ]
    },
    {
      "id": 23,
      "category": "Idempotency",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "idempotency",
        "technical",
        "intermediate"
      ],
      "question": "What are idempotency keys?",
      "answer": "An idempotency key is a unique client-generated value sent with a request to identify one logical operation. The server uses it to detect duplicate retries and return the same outcome.",
      "keyPoints": [
        "Often sent in an Idempotency-Key header.",
        "Useful for payments, orders and form submissions.",
        "Server should reject same key with different request body."
      ]
    },
    {
      "id": 24,
      "category": "Idempotency",
      "type": "Scenario",
      "difficulty": "Intermediate",
      "tags": [
        "idempotency",
        "scenario",
        "intermediate"
      ],
      "question": "What are safe retries in API design?",
      "answer": "Safe retries mean clients can retry failed or timed-out requests without causing duplicate side effects. They are achieved through idempotent methods, idempotency keys, deduplication and clear timeout behavior.",
      "keyPoints": [
        "Retries are common in unreliable networks.",
        "Do not blindly retry non-idempotent operations.",
        "Use backoff and idempotency for critical writes."
      ]
    },
    {
      "id": 25,
      "category": "Idempotency",
      "type": "Scenario",
      "difficulty": "Intermediate",
      "tags": [
        "idempotency",
        "scenario",
        "intermediate"
      ],
      "question": "How do you handle duplicate requests?",
      "answer": "Handle duplicate requests by using unique constraints, idempotency keys, request deduplication tables, optimistic locking or business-level checks. The best solution depends on whether the operation is create, update or payment-like.",
      "keyPoints": [
        "Prevent duplicates at both API and database layers.",
        "Return existing result when duplicate is safe.",
        "Use 409 Conflict when the duplicate represents a real conflict."
      ]
    },
    {
      "id": 26,
      "category": "HTTP Protocol",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-protocol",
        "technical",
        "beginner"
      ],
      "question": "What is HTTP?",
      "answer": "HTTP is the application-layer protocol used by the web for communication between clients and servers. Backend APIs use HTTP requests and responses to transfer data, metadata and status information.",
      "keyPoints": [
        "Request and response are the core units.",
        "Headers carry metadata.",
        "Statelessness improves scalability but requires explicit auth/session design."
      ]
    },
    {
      "id": 27,
      "category": "HTTP Protocol",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-protocol",
        "technical",
        "beginner"
      ],
      "question": "What is the HTTP request lifecycle?",
      "answer": "A client resolves the server address, opens a connection, sends an HTTP request, the server processes it through routing, middleware and business logic, then returns a response with status, headers and body.",
      "keyPoints": [
        "Request and response are the core units.",
        "Headers carry metadata.",
        "Statelessness improves scalability but requires explicit auth/session design."
      ]
    },
    {
      "id": 28,
      "category": "HTTP Protocol",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-protocol",
        "technical",
        "beginner"
      ],
      "question": "What is the difference between HTTP and HTTPS?",
      "answer": "HTTPS is HTTP over TLS. It encrypts traffic, verifies server identity and protects against many man-in-the-middle attacks, while plain HTTP sends data without encryption.",
      "keyPoints": [
        "Request and response are the core units.",
        "Headers carry metadata.",
        "Statelessness improves scalability but requires explicit auth/session design."
      ]
    },
    {
      "id": 29,
      "category": "HTTP Protocol",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-protocol",
        "technical",
        "beginner"
      ],
      "question": "What is the difference between HTTP/1.1, HTTP/2 and HTTP/3?",
      "answer": "HTTP/1.1 uses text-based requests and limited connection reuse. HTTP/2 adds multiplexing and binary framing over TCP. HTTP/3 runs over QUIC on UDP to reduce head-of-line blocking and improve connection setup.",
      "keyPoints": [
        "Request and response are the core units.",
        "Headers carry metadata.",
        "Statelessness improves scalability but requires explicit auth/session design."
      ]
    },
    {
      "id": 30,
      "category": "HTTP Protocol",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-protocol",
        "technical",
        "beginner"
      ],
      "question": "Why is HTTP called stateless?",
      "answer": "HTTP is stateless because each request is independent; the protocol does not remember previous requests. Applications add continuity through cookies, tokens, sessions or other state mechanisms.",
      "keyPoints": [
        "Request and response are the core units.",
        "Headers carry metadata.",
        "Statelessness improves scalability but requires explicit auth/session design."
      ]
    },
    {
      "id": 31,
      "category": "HTTP Methods",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-methods",
        "technical",
        "beginner"
      ],
      "question": "When should GET be used in REST APIs?",
      "answer": "GET retrieves a resource or collection without changing server state. It is safe and idempotent, so it should not create, update or delete data.",
      "keyPoints": [
        "Use methods according to HTTP semantics.",
        "Correct methods improve caching, retries and client behavior.",
        "Wrong method choice makes APIs harder to integrate."
      ]
    },
    {
      "id": 32,
      "category": "HTTP Methods",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-methods",
        "technical",
        "beginner"
      ],
      "question": "When should POST be used in REST APIs?",
      "answer": "POST submits data to create a resource or trigger a server-side operation. It is not idempotent by default because sending it twice may create duplicate effects.",
      "keyPoints": [
        "Use methods according to HTTP semantics.",
        "Correct methods improve caching, retries and client behavior.",
        "Wrong method choice makes APIs harder to integrate."
      ]
    },
    {
      "id": 33,
      "category": "HTTP Methods",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-methods",
        "technical",
        "beginner"
      ],
      "question": "When should PUT be used in REST APIs?",
      "answer": "PUT replaces a resource at a known URL with the representation sent by the client. It is idempotent because repeating the same PUT should leave the resource in the same state.",
      "keyPoints": [
        "Use methods according to HTTP semantics.",
        "Correct methods improve caching, retries and client behavior.",
        "Wrong method choice makes APIs harder to integrate."
      ]
    },
    {
      "id": 34,
      "category": "HTTP Methods",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-methods",
        "technical",
        "beginner"
      ],
      "question": "When should PATCH be used in REST APIs?",
      "answer": "PATCH partially updates a resource. It sends only the fields or operations that need to change, and it may or may not be idempotent depending on the patch design.",
      "keyPoints": [
        "Use methods according to HTTP semantics.",
        "Correct methods improve caching, retries and client behavior.",
        "Wrong method choice makes APIs harder to integrate."
      ]
    },
    {
      "id": 35,
      "category": "HTTP Methods",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-methods",
        "technical",
        "beginner"
      ],
      "question": "When should DELETE be used in REST APIs?",
      "answer": "DELETE removes a resource or marks it deleted. It is idempotent because deleting the same resource again should not create a new side effect.",
      "keyPoints": [
        "Use methods according to HTTP semantics.",
        "Correct methods improve caching, retries and client behavior.",
        "Wrong method choice makes APIs harder to integrate."
      ]
    },
    {
      "id": 36,
      "category": "HTTP Methods",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-methods",
        "technical",
        "beginner"
      ],
      "question": "When should OPTIONS be used in REST APIs?",
      "answer": "OPTIONS asks the server which methods or communication options are supported for a resource. It is often used in CORS preflight requests.",
      "keyPoints": [
        "Use methods according to HTTP semantics.",
        "Correct methods improve caching, retries and client behavior.",
        "Wrong method choice makes APIs harder to integrate."
      ]
    },
    {
      "id": 37,
      "category": "HTTP Methods",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-methods",
        "technical",
        "beginner"
      ],
      "question": "When should HEAD be used in REST APIs?",
      "answer": "HEAD is like GET but returns only headers, not the response body. It is useful for checking metadata, cache status or whether a resource exists.",
      "keyPoints": [
        "Use methods according to HTTP semantics.",
        "Correct methods improve caching, retries and client behavior.",
        "Wrong method choice makes APIs harder to integrate."
      ]
    },
    {
      "id": 38,
      "category": "HTTP Methods",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "http-methods",
        "technical",
        "intermediate"
      ],
      "question": "When should PUT be used?",
      "answer": "Use PUT when the client is replacing a full resource or writing to a known resource URL. It should be idempotent, so repeating the same request should produce the same final state.",
      "keyPoints": [
        "Know safe vs idempotent clearly.",
        "This topic is frequently asked in REST interviews.",
        "Correct method semantics support retries and caching."
      ]
    },
    {
      "id": 39,
      "category": "HTTP Methods",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "http-methods",
        "technical",
        "intermediate"
      ],
      "question": "What is the difference between PUT and PATCH?",
      "answer": "PUT usually replaces the whole resource, while PATCH updates part of the resource. PUT is generally idempotent; PATCH depends on the patch format and server behavior.",
      "keyPoints": [
        "Know safe vs idempotent clearly.",
        "This topic is frequently asked in REST interviews.",
        "Correct method semantics support retries and caching."
      ]
    },
    {
      "id": 40,
      "category": "HTTP Methods",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "http-methods",
        "technical",
        "intermediate"
      ],
      "question": "Can a DELETE request have a body?",
      "answer": "HTTP does not forbid a DELETE body, but many clients, servers and proxies handle it inconsistently. Prefer identifying the resource in the URL and use query parameters or a separate action endpoint only when the design truly needs extra input.",
      "keyPoints": [
        "Know safe vs idempotent clearly.",
        "This topic is frequently asked in REST interviews.",
        "Correct method semantics support retries and caching."
      ]
    },
    {
      "id": 41,
      "category": "HTTP Methods",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "http-methods",
        "technical",
        "intermediate"
      ],
      "question": "What are safe HTTP methods?",
      "answer": "Safe methods are methods intended only for reading and not changing server state. GET, HEAD and OPTIONS are safe methods.",
      "keyPoints": [
        "Know safe vs idempotent clearly.",
        "This topic is frequently asked in REST interviews.",
        "Correct method semantics support retries and caching."
      ]
    },
    {
      "id": 42,
      "category": "HTTP Methods",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "http-methods",
        "technical",
        "intermediate"
      ],
      "question": "What are idempotent HTTP methods?",
      "answer": "Idempotent methods can be repeated without changing the final server state beyond the first request. GET, HEAD, OPTIONS, PUT and DELETE are idempotent; POST is usually not.",
      "keyPoints": [
        "Know safe vs idempotent clearly.",
        "This topic is frequently asked in REST interviews.",
        "Correct method semantics support retries and caching."
      ]
    },
    {
      "id": 43,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-status-codes",
        "technical",
        "beginner"
      ],
      "question": "What does HTTP 200 mean?",
      "answer": "OK. The request succeeded and the response body usually contains the requested data.",
      "keyPoints": [
        "Use status codes to communicate outcome clearly.",
        "Pair status codes with a consistent JSON error body when needed.",
        "Avoid returning 200 for failed operations."
      ]
    },
    {
      "id": 44,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-status-codes",
        "technical",
        "beginner"
      ],
      "question": "What does HTTP 201 mean?",
      "answer": "Created. A new resource was successfully created, commonly after POST.",
      "keyPoints": [
        "Use status codes to communicate outcome clearly.",
        "Pair status codes with a consistent JSON error body when needed.",
        "Avoid returning 200 for failed operations."
      ]
    },
    {
      "id": 45,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-status-codes",
        "technical",
        "beginner"
      ],
      "question": "What does HTTP 202 mean?",
      "answer": "Accepted. The request was accepted for processing, but processing is not complete yet.",
      "keyPoints": [
        "Use status codes to communicate outcome clearly.",
        "Pair status codes with a consistent JSON error body when needed.",
        "Avoid returning 200 for failed operations."
      ]
    },
    {
      "id": 46,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-status-codes",
        "technical",
        "beginner"
      ],
      "question": "What does HTTP 204 mean?",
      "answer": "No Content. The request succeeded, but there is no response body.",
      "keyPoints": [
        "Use status codes to communicate outcome clearly.",
        "Pair status codes with a consistent JSON error body when needed.",
        "Avoid returning 200 for failed operations."
      ]
    },
    {
      "id": 47,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-status-codes",
        "technical",
        "beginner"
      ],
      "question": "What does HTTP 301 mean?",
      "answer": "Moved Permanently. The resource has a permanent new URL.",
      "keyPoints": [
        "Use status codes to communicate outcome clearly.",
        "Pair status codes with a consistent JSON error body when needed.",
        "Avoid returning 200 for failed operations."
      ]
    },
    {
      "id": 48,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-status-codes",
        "technical",
        "beginner"
      ],
      "question": "What does HTTP 302 mean?",
      "answer": "Found. The resource is temporarily available at another URL.",
      "keyPoints": [
        "Use status codes to communicate outcome clearly.",
        "Pair status codes with a consistent JSON error body when needed.",
        "Avoid returning 200 for failed operations."
      ]
    },
    {
      "id": 49,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-status-codes",
        "technical",
        "beginner"
      ],
      "question": "What does HTTP 304 mean?",
      "answer": "Not Modified. The cached client copy is still valid.",
      "keyPoints": [
        "Use status codes to communicate outcome clearly.",
        "Pair status codes with a consistent JSON error body when needed.",
        "Avoid returning 200 for failed operations."
      ]
    },
    {
      "id": 50,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-status-codes",
        "technical",
        "beginner"
      ],
      "question": "What does HTTP 400 mean?",
      "answer": "Bad Request. The request is malformed or invalid at a general request level.",
      "keyPoints": [
        "Use status codes to communicate outcome clearly.",
        "Pair status codes with a consistent JSON error body when needed.",
        "Avoid returning 200 for failed operations."
      ]
    },
    {
      "id": 51,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-status-codes",
        "technical",
        "beginner"
      ],
      "question": "What does HTTP 401 mean?",
      "answer": "Unauthorized. Authentication is missing, invalid or expired.",
      "keyPoints": [
        "Use status codes to communicate outcome clearly.",
        "Pair status codes with a consistent JSON error body when needed.",
        "Avoid returning 200 for failed operations."
      ]
    },
    {
      "id": 52,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-status-codes",
        "technical",
        "beginner"
      ],
      "question": "What does HTTP 403 mean?",
      "answer": "Forbidden. The user is authenticated but does not have permission.",
      "keyPoints": [
        "Use status codes to communicate outcome clearly.",
        "Pair status codes with a consistent JSON error body when needed.",
        "Avoid returning 200 for failed operations."
      ]
    },
    {
      "id": 53,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-status-codes",
        "technical",
        "beginner"
      ],
      "question": "What does HTTP 404 mean?",
      "answer": "Not Found. The requested resource does not exist or is not visible to the client.",
      "keyPoints": [
        "Use status codes to communicate outcome clearly.",
        "Pair status codes with a consistent JSON error body when needed.",
        "Avoid returning 200 for failed operations."
      ]
    },
    {
      "id": 54,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-status-codes",
        "technical",
        "beginner"
      ],
      "question": "What does HTTP 405 mean?",
      "answer": "Method Not Allowed. The path exists, but the HTTP method is not supported.",
      "keyPoints": [
        "Use status codes to communicate outcome clearly.",
        "Pair status codes with a consistent JSON error body when needed.",
        "Avoid returning 200 for failed operations."
      ]
    },
    {
      "id": 55,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-status-codes",
        "technical",
        "beginner"
      ],
      "question": "What does HTTP 409 mean?",
      "answer": "Conflict. The request conflicts with current server state, such as duplicate unique data or version conflict.",
      "keyPoints": [
        "Use status codes to communicate outcome clearly.",
        "Pair status codes with a consistent JSON error body when needed.",
        "Avoid returning 200 for failed operations."
      ]
    },
    {
      "id": 56,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-status-codes",
        "technical",
        "beginner"
      ],
      "question": "What does HTTP 415 mean?",
      "answer": "Unsupported Media Type. The server does not support the request Content-Type.",
      "keyPoints": [
        "Use status codes to communicate outcome clearly.",
        "Pair status codes with a consistent JSON error body when needed.",
        "Avoid returning 200 for failed operations."
      ]
    },
    {
      "id": 57,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-status-codes",
        "technical",
        "beginner"
      ],
      "question": "What does HTTP 422 mean?",
      "answer": "Unprocessable Entity. The request format is valid, but business or validation rules failed.",
      "keyPoints": [
        "Use status codes to communicate outcome clearly.",
        "Pair status codes with a consistent JSON error body when needed.",
        "Avoid returning 200 for failed operations."
      ]
    },
    {
      "id": 58,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-status-codes",
        "technical",
        "beginner"
      ],
      "question": "What does HTTP 429 mean?",
      "answer": "Too Many Requests. The client exceeded rate limits.",
      "keyPoints": [
        "Use status codes to communicate outcome clearly.",
        "Pair status codes with a consistent JSON error body when needed.",
        "Avoid returning 200 for failed operations."
      ]
    },
    {
      "id": 59,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-status-codes",
        "technical",
        "beginner"
      ],
      "question": "What does HTTP 500 mean?",
      "answer": "Internal Server Error. An unexpected server error occurred.",
      "keyPoints": [
        "Use status codes to communicate outcome clearly.",
        "Pair status codes with a consistent JSON error body when needed.",
        "Avoid returning 200 for failed operations."
      ]
    },
    {
      "id": 60,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-status-codes",
        "technical",
        "beginner"
      ],
      "question": "What does HTTP 502 mean?",
      "answer": "Bad Gateway. A gateway received an invalid response from an upstream server.",
      "keyPoints": [
        "Use status codes to communicate outcome clearly.",
        "Pair status codes with a consistent JSON error body when needed.",
        "Avoid returning 200 for failed operations."
      ]
    },
    {
      "id": 61,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-status-codes",
        "technical",
        "beginner"
      ],
      "question": "What does HTTP 503 mean?",
      "answer": "Service Unavailable. The server is temporarily overloaded or down for maintenance.",
      "keyPoints": [
        "Use status codes to communicate outcome clearly.",
        "Pair status codes with a consistent JSON error body when needed.",
        "Avoid returning 200 for failed operations."
      ]
    },
    {
      "id": 62,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-status-codes",
        "technical",
        "beginner"
      ],
      "question": "What does HTTP 504 mean?",
      "answer": "Gateway Timeout. A gateway did not receive a timely response from an upstream server.",
      "keyPoints": [
        "Use status codes to communicate outcome clearly.",
        "Pair status codes with a consistent JSON error body when needed.",
        "Avoid returning 200 for failed operations."
      ]
    },
    {
      "id": 63,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "http-status-codes",
        "technical",
        "intermediate"
      ],
      "question": "What is the difference between 401 and 403?",
      "answer": "401 means the client is not authenticated or the credentials are invalid. 403 means the client is authenticated but lacks permission for the requested action.",
      "keyPoints": [
        "Status code precision helps clients recover correctly.",
        "This is a high-frequency backend interview topic.",
        "Use consistent error payloads along with codes."
      ]
    },
    {
      "id": 64,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "http-status-codes",
        "technical",
        "intermediate"
      ],
      "question": "What is the difference between 400 and 422?",
      "answer": "400 is used for malformed or generally invalid requests. 422 is used when the syntax is valid but semantic validation fails, such as an invalid email format or business rule violation.",
      "keyPoints": [
        "Status code precision helps clients recover correctly.",
        "This is a high-frequency backend interview topic.",
        "Use consistent error payloads along with codes."
      ]
    },
    {
      "id": 65,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "http-status-codes",
        "technical",
        "intermediate"
      ],
      "question": "When should 204 No Content be returned?",
      "answer": "Return 204 when the request succeeds and the server has no body to send back, such as a successful DELETE or update where the client does not need the updated resource.",
      "keyPoints": [
        "Status code precision helps clients recover correctly.",
        "This is a high-frequency backend interview topic.",
        "Use consistent error payloads along with codes."
      ]
    },
    {
      "id": 66,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "http-status-codes",
        "technical",
        "intermediate"
      ],
      "question": "What is the difference between 500 and 503?",
      "answer": "500 means an unexpected server error occurred. 503 means the service is temporarily unavailable, often due to overload, maintenance or dependency failure.",
      "keyPoints": [
        "Status code precision helps clients recover correctly.",
        "This is a high-frequency backend interview topic.",
        "Use consistent error payloads along with codes."
      ]
    },
    {
      "id": 67,
      "category": "HTTP Status Codes",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "http-status-codes",
        "technical",
        "intermediate"
      ],
      "question": "Why use 409 Conflict?",
      "answer": "Use 409 when the request cannot be completed because it conflicts with current state, such as duplicate unique fields, optimistic locking conflict or duplicate idempotency key mismatch.",
      "keyPoints": [
        "Status code precision helps clients recover correctly.",
        "This is a high-frequency backend interview topic.",
        "Use consistent error payloads along with codes."
      ]
    },
    {
      "id": 68,
      "category": "HTTP Headers",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-headers",
        "technical",
        "beginner"
      ],
      "question": "What is the Authorization header used for?",
      "answer": "The Authorization header carries credentials such as Bearer tokens or Basic auth values. Backend developers use headers for authentication, content negotiation, caching, security and request metadata.",
      "keyPoints": [
        "Headers are metadata, not the main resource body.",
        "Know Authorization, Content-Type, Accept, Cache-Control and Cookie especially well.",
        "Security-sensitive headers must be configured carefully."
      ]
    },
    {
      "id": 69,
      "category": "HTTP Headers",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-headers",
        "technical",
        "beginner"
      ],
      "question": "What is the Content-Type header used for?",
      "answer": "The Content-Type header tells the server the format of the request body, such as application/json. Backend developers use headers for authentication, content negotiation, caching, security and request metadata.",
      "keyPoints": [
        "Headers are metadata, not the main resource body.",
        "Know Authorization, Content-Type, Accept, Cache-Control and Cookie especially well.",
        "Security-sensitive headers must be configured carefully."
      ]
    },
    {
      "id": 70,
      "category": "HTTP Headers",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-headers",
        "technical",
        "beginner"
      ],
      "question": "What is the Accept header used for?",
      "answer": "The Accept header tells the server what response formats the client can accept. Backend developers use headers for authentication, content negotiation, caching, security and request metadata.",
      "keyPoints": [
        "Headers are metadata, not the main resource body.",
        "Know Authorization, Content-Type, Accept, Cache-Control and Cookie especially well.",
        "Security-sensitive headers must be configured carefully."
      ]
    },
    {
      "id": 71,
      "category": "HTTP Headers",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-headers",
        "technical",
        "beginner"
      ],
      "question": "What is the Cache-Control header used for?",
      "answer": "The Cache-Control header defines caching behavior for clients and intermediaries. Backend developers use headers for authentication, content negotiation, caching, security and request metadata.",
      "keyPoints": [
        "Headers are metadata, not the main resource body.",
        "Know Authorization, Content-Type, Accept, Cache-Control and Cookie especially well.",
        "Security-sensitive headers must be configured carefully."
      ]
    },
    {
      "id": 72,
      "category": "HTTP Headers",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-headers",
        "technical",
        "beginner"
      ],
      "question": "What is the ETag header used for?",
      "answer": "The ETag header represents a version identifier for a resource and supports caching or optimistic concurrency. Backend developers use headers for authentication, content negotiation, caching, security and request metadata.",
      "keyPoints": [
        "Headers are metadata, not the main resource body.",
        "Know Authorization, Content-Type, Accept, Cache-Control and Cookie especially well.",
        "Security-sensitive headers must be configured carefully."
      ]
    },
    {
      "id": 73,
      "category": "HTTP Headers",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-headers",
        "technical",
        "beginner"
      ],
      "question": "What is the Origin header used for?",
      "answer": "The Origin header identifies the scheme, host and port that initiated a browser request, important for CORS. Backend developers use headers for authentication, content negotiation, caching, security and request metadata.",
      "keyPoints": [
        "Headers are metadata, not the main resource body.",
        "Know Authorization, Content-Type, Accept, Cache-Control and Cookie especially well.",
        "Security-sensitive headers must be configured carefully."
      ]
    },
    {
      "id": 74,
      "category": "HTTP Headers",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-headers",
        "technical",
        "beginner"
      ],
      "question": "What is the Cookie header used for?",
      "answer": "The Cookie header sends stored cookies from the client to the server. Backend developers use headers for authentication, content negotiation, caching, security and request metadata.",
      "keyPoints": [
        "Headers are metadata, not the main resource body.",
        "Know Authorization, Content-Type, Accept, Cache-Control and Cookie especially well.",
        "Security-sensitive headers must be configured carefully."
      ]
    },
    {
      "id": 75,
      "category": "HTTP Headers",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-headers",
        "technical",
        "beginner"
      ],
      "question": "What is the Set-Cookie header used for?",
      "answer": "The Set-Cookie header instructs the browser to store a cookie from the server. Backend developers use headers for authentication, content negotiation, caching, security and request metadata.",
      "keyPoints": [
        "Headers are metadata, not the main resource body.",
        "Know Authorization, Content-Type, Accept, Cache-Control and Cookie especially well.",
        "Security-sensitive headers must be configured carefully."
      ]
    },
    {
      "id": 76,
      "category": "HTTP Headers",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-headers",
        "technical",
        "beginner"
      ],
      "question": "What is the User-Agent header used for?",
      "answer": "The User-Agent header identifies the client software making the request. Backend developers use headers for authentication, content negotiation, caching, security and request metadata.",
      "keyPoints": [
        "Headers are metadata, not the main resource body.",
        "Know Authorization, Content-Type, Accept, Cache-Control and Cookie especially well.",
        "Security-sensitive headers must be configured carefully."
      ]
    },
    {
      "id": 77,
      "category": "HTTP Headers",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "http-headers",
        "technical",
        "beginner"
      ],
      "question": "What is the Host header used for?",
      "answer": "The Host header identifies the target host and port for the request. Backend developers use headers for authentication, content negotiation, caching, security and request metadata.",
      "keyPoints": [
        "Headers are metadata, not the main resource body.",
        "Know Authorization, Content-Type, Accept, Cache-Control and Cookie especially well.",
        "Security-sensitive headers must be configured carefully."
      ]
    },
    {
      "id": 78,
      "category": "Authentication",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "authentication",
        "technical",
        "beginner"
      ],
      "question": "Explain Authentication vs Authorization?",
      "answer": "Authentication verifies who the user is. Authorization checks what that authenticated user is allowed to do.",
      "keyPoints": [
        "Security answers should mention HTTPS.",
        "Authentication proves identity; authorization controls access.",
        "Never store passwords or tokens carelessly."
      ]
    },
    {
      "id": 79,
      "category": "Authentication",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "authentication",
        "technical",
        "beginner"
      ],
      "question": "Explain Session Authentication?",
      "answer": "Session authentication stores user login state on the server and sends the client a session cookie. The server looks up the session on each request.",
      "keyPoints": [
        "Security answers should mention HTTPS.",
        "Authentication proves identity; authorization controls access.",
        "Never store passwords or tokens carelessly."
      ]
    },
    {
      "id": 80,
      "category": "Authentication",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "authentication",
        "technical",
        "beginner"
      ],
      "question": "Explain JWT Authentication?",
      "answer": "JWT authentication uses signed tokens containing claims. The server verifies the token signature and expiry before trusting the claims.",
      "keyPoints": [
        "Security answers should mention HTTPS.",
        "Authentication proves identity; authorization controls access.",
        "Never store passwords or tokens carelessly."
      ]
    },
    {
      "id": 81,
      "category": "Authentication",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "authentication",
        "technical",
        "beginner"
      ],
      "question": "Explain OAuth 2.0?",
      "answer": "OAuth 2.0 is an authorization framework that allows a client app to access protected resources with delegated permission.",
      "keyPoints": [
        "Security answers should mention HTTPS.",
        "Authentication proves identity; authorization controls access.",
        "Never store passwords or tokens carelessly."
      ]
    },
    {
      "id": 82,
      "category": "Authentication",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "authentication",
        "technical",
        "beginner"
      ],
      "question": "Explain OpenID Connect?",
      "answer": "OpenID Connect builds authentication on top of OAuth 2.0 and provides identity information through an ID token.",
      "keyPoints": [
        "Security answers should mention HTTPS.",
        "Authentication proves identity; authorization controls access.",
        "Never store passwords or tokens carelessly."
      ]
    },
    {
      "id": 83,
      "category": "Authentication",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "authentication",
        "technical",
        "beginner"
      ],
      "question": "Explain API Keys?",
      "answer": "API keys identify an application or client, but by themselves they are not strong user authentication. They are common for server-to-server or public developer APIs.",
      "keyPoints": [
        "Security answers should mention HTTPS.",
        "Authentication proves identity; authorization controls access.",
        "Never store passwords or tokens carelessly."
      ]
    },
    {
      "id": 84,
      "category": "Authentication",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "authentication",
        "technical",
        "beginner"
      ],
      "question": "Explain Basic Authentication?",
      "answer": "Basic Auth sends a base64-encoded username and password with each request. It must only be used over HTTPS and is less common for modern user-facing APIs.",
      "keyPoints": [
        "Security answers should mention HTTPS.",
        "Authentication proves identity; authorization controls access.",
        "Never store passwords or tokens carelessly."
      ]
    },
    {
      "id": 85,
      "category": "Authentication",
      "type": "Technical",
      "difficulty": "Beginner",
      "tags": [
        "authentication",
        "technical",
        "beginner"
      ],
      "question": "Explain Bearer Token?",
      "answer": "A bearer token grants access to whoever possesses it, so it must be protected carefully and transmitted only over HTTPS.",
      "keyPoints": [
        "Security answers should mention HTTPS.",
        "Authentication proves identity; authorization controls access.",
        "Never store passwords or tokens carelessly."
      ]
    },
    {
      "id": 86,
      "category": "JWT and Tokens",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "jwt-and-tokens",
        "technical",
        "intermediate"
      ],
      "question": "What is the structure of a JWT?",
      "answer": "A JWT has three base64url-encoded parts: header, payload and signature. The header describes the algorithm, the payload contains claims and the signature proves integrity.",
      "keyPoints": [
        "JWT payload is not private unless encrypted.",
        "Always verify signature and expiry.",
        "Prefer short-lived access tokens."
      ]
    },
    {
      "id": 87,
      "category": "JWT and Tokens",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "jwt-and-tokens",
        "technical",
        "intermediate"
      ],
      "question": "What is the JWT header?",
      "answer": "The JWT header contains metadata such as token type and signing algorithm, for example HS256 or RS256.",
      "keyPoints": [
        "JWT payload is not private unless encrypted.",
        "Always verify signature and expiry.",
        "Prefer short-lived access tokens."
      ]
    },
    {
      "id": 88,
      "category": "JWT and Tokens",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "jwt-and-tokens",
        "technical",
        "intermediate"
      ],
      "question": "What is the JWT payload?",
      "answer": "The JWT payload contains claims such as subject, issuer, audience, expiry and application-specific data. It is encoded, not encrypted by default.",
      "keyPoints": [
        "JWT payload is not private unless encrypted.",
        "Always verify signature and expiry.",
        "Prefer short-lived access tokens."
      ]
    },
    {
      "id": 89,
      "category": "JWT and Tokens",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "jwt-and-tokens",
        "technical",
        "intermediate"
      ],
      "question": "What is the JWT signature?",
      "answer": "The signature is created from the header, payload and secret or private key. It lets the server verify the token was not changed.",
      "keyPoints": [
        "JWT payload is not private unless encrypted.",
        "Always verify signature and expiry.",
        "Prefer short-lived access tokens."
      ]
    },
    {
      "id": 90,
      "category": "JWT and Tokens",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "jwt-and-tokens",
        "technical",
        "intermediate"
      ],
      "question": "How is a JWT verified?",
      "answer": "The server verifies the signature, expiry, issuer, audience and other required claims. A decoded token should not be trusted until verification succeeds.",
      "keyPoints": [
        "JWT payload is not private unless encrypted.",
        "Always verify signature and expiry.",
        "Prefer short-lived access tokens."
      ]
    },
    {
      "id": 91,
      "category": "JWT and Tokens",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "jwt-and-tokens",
        "technical",
        "intermediate"
      ],
      "question": "What is an access token?",
      "answer": "An access token is a short-lived credential used to access protected APIs. It should expire quickly to reduce risk if stolen.",
      "keyPoints": [
        "JWT payload is not private unless encrypted.",
        "Always verify signature and expiry.",
        "Prefer short-lived access tokens."
      ]
    },
    {
      "id": 92,
      "category": "JWT and Tokens",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "jwt-and-tokens",
        "technical",
        "intermediate"
      ],
      "question": "What is a refresh token?",
      "answer": "A refresh token is a longer-lived credential used to obtain new access tokens. It must be stored securely and can be rotated or revoked.",
      "keyPoints": [
        "JWT payload is not private unless encrypted.",
        "Always verify signature and expiry.",
        "Prefer short-lived access tokens."
      ]
    },
    {
      "id": 93,
      "category": "JWT and Tokens",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "jwt-and-tokens",
        "technical",
        "intermediate"
      ],
      "question": "Why should JWTs expire?",
      "answer": "JWT expiry limits the damage of a stolen token and forces periodic re-authentication or refresh.",
      "keyPoints": [
        "JWT payload is not private unless encrypted.",
        "Always verify signature and expiry.",
        "Prefer short-lived access tokens."
      ]
    },
    {
      "id": 94,
      "category": "JWT and Tokens",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "jwt-and-tokens",
        "technical",
        "intermediate"
      ],
      "question": "How can JWT revocation be handled?",
      "answer": "JWT revocation can be handled using short expiry, refresh token rotation, token version fields or server-side deny lists for critical cases.",
      "keyPoints": [
        "JWT payload is not private unless encrypted.",
        "Always verify signature and expiry.",
        "Prefer short-lived access tokens."
      ]
    },
    {
      "id": 95,
      "category": "JWT and Tokens",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "jwt-and-tokens",
        "technical",
        "intermediate"
      ],
      "question": "What is JWT blacklisting?",
      "answer": "JWT blacklisting stores revoked token identifiers until they expire. It adds server-side state to reject tokens that would otherwise verify successfully.",
      "keyPoints": [
        "JWT payload is not private unless encrypted.",
        "Always verify signature and expiry.",
        "Prefer short-lived access tokens."
      ]
    },
    {
      "id": 96,
      "category": "Sessions",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "sessions",
        "technical",
        "intermediate"
      ],
      "question": "How do sessions work?",
      "answer": "After login, the server creates a session record and sends the browser a session ID cookie. Later requests include that cookie, and the server uses it to retrieve user state.",
      "keyPoints": [
        "Cookies should be protected with security attributes.",
        "Shared stores help horizontal scaling.",
        "Session invalidation is simpler than stateless token revocation."
      ]
    },
    {
      "id": 97,
      "category": "Sessions",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "sessions",
        "technical",
        "intermediate"
      ],
      "question": "What are session cookies?",
      "answer": "Session cookies store a session identifier in the browser. They should use HttpOnly, Secure and SameSite attributes where appropriate.",
      "keyPoints": [
        "Cookies should be protected with security attributes.",
        "Shared stores help horizontal scaling.",
        "Session invalidation is simpler than stateless token revocation."
      ]
    },
    {
      "id": 98,
      "category": "Sessions",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "sessions",
        "technical",
        "intermediate"
      ],
      "question": "What are sticky sessions?",
      "answer": "Sticky sessions route the same client to the same backend server. They can help stateful session storage but reduce flexibility compared with shared session stores.",
      "keyPoints": [
        "Cookies should be protected with security attributes.",
        "Shared stores help horizontal scaling.",
        "Session invalidation is simpler than stateless token revocation."
      ]
    },
    {
      "id": 99,
      "category": "Sessions",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "sessions",
        "technical",
        "intermediate"
      ],
      "question": "Where can session data be stored?",
      "answer": "Session data can be stored in memory, Redis, a database or another shared store. Production systems usually avoid single-server memory sessions.",
      "keyPoints": [
        "Cookies should be protected with security attributes.",
        "Shared stores help horizontal scaling.",
        "Session invalidation is simpler than stateless token revocation."
      ]
    },
    {
      "id": 100,
      "category": "OAuth and OIDC",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "oauth-and-oidc",
        "technical",
        "intermediate"
      ],
      "question": "What is the OAuth flow?",
      "answer": "OAuth redirects the user to an authorization server, obtains consent or login, then returns an authorization result that the client exchanges for tokens.",
      "keyPoints": [
        "Use trusted libraries for OAuth flows.",
        "Validate redirect URIs and state.",
        "Know OAuth is framework, JWT is token format."
      ]
    },
    {
      "id": 101,
      "category": "OAuth and OIDC",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "oauth-and-oidc",
        "technical",
        "intermediate"
      ],
      "question": "What is Authorization Code Flow?",
      "answer": "Authorization Code Flow is an OAuth flow where the client receives a short-lived code and exchanges it server-side for tokens. It is the standard flow for web apps.",
      "keyPoints": [
        "Use trusted libraries for OAuth flows.",
        "Validate redirect URIs and state.",
        "Know OAuth is framework, JWT is token format."
      ]
    },
    {
      "id": 102,
      "category": "OAuth and OIDC",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "oauth-and-oidc",
        "technical",
        "intermediate"
      ],
      "question": "What is Client Credentials Flow?",
      "answer": "Client Credentials Flow is used for machine-to-machine authentication where no user is involved. The client authenticates itself and receives an access token.",
      "keyPoints": [
        "Use trusted libraries for OAuth flows.",
        "Validate redirect URIs and state.",
        "Know OAuth is framework, JWT is token format."
      ]
    },
    {
      "id": 103,
      "category": "OAuth and OIDC",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "oauth-and-oidc",
        "technical",
        "intermediate"
      ],
      "question": "What is PKCE?",
      "answer": "PKCE protects public clients by adding a code verifier and challenge to OAuth Authorization Code Flow, reducing authorization code interception risk.",
      "keyPoints": [
        "Use trusted libraries for OAuth flows.",
        "Validate redirect URIs and state.",
        "Know OAuth is framework, JWT is token format."
      ]
    },
    {
      "id": 104,
      "category": "OAuth and OIDC",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "oauth-and-oidc",
        "technical",
        "intermediate"
      ],
      "question": "How does Google Login work?",
      "answer": "Google Login typically uses OAuth 2.0 with OpenID Connect. The app redirects to Google, receives identity tokens or codes, verifies them and creates an app session.",
      "keyPoints": [
        "Use trusted libraries for OAuth flows.",
        "Validate redirect URIs and state.",
        "Know OAuth is framework, JWT is token format."
      ]
    },
    {
      "id": 105,
      "category": "OAuth and OIDC",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "oauth-and-oidc",
        "technical",
        "intermediate"
      ],
      "question": "What is the difference between OAuth and JWT?",
      "answer": "OAuth is an authorization framework. JWT is a token format. OAuth systems may use JWTs, but they are not the same thing.",
      "keyPoints": [
        "Use trusted libraries for OAuth flows.",
        "Validate redirect URIs and state.",
        "Know OAuth is framework, JWT is token format."
      ]
    },
    {
      "id": 106,
      "category": "Node.js Backend Development",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "node-js-backend-development",
        "technical",
        "intermediate"
      ],
      "question": "What is Node.js?",
      "answer": "Node.js is a JavaScript runtime built on Chrome V8 that runs JavaScript outside the browser. It is widely used for backend APIs because of its non-blocking I/O model.",
      "keyPoints": [
        "Node is strong for I/O-heavy systems.",
        "Avoid blocking the event loop with CPU-heavy work.",
        "Understand promises, queues and async behavior."
      ]
    },
    {
      "id": 107,
      "category": "Node.js Backend Development",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "node-js-backend-development",
        "technical",
        "intermediate"
      ],
      "question": "What is the Node.js event loop?",
      "answer": "The event loop coordinates asynchronous operations in Node.js. It lets Node handle many I/O tasks without blocking the main JavaScript thread.",
      "keyPoints": [
        "Node is strong for I/O-heavy systems.",
        "Avoid blocking the event loop with CPU-heavy work.",
        "Understand promises, queues and async behavior."
      ]
    },
    {
      "id": 108,
      "category": "Node.js Backend Development",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "node-js-backend-development",
        "technical",
        "intermediate"
      ],
      "question": "Is Node.js single-threaded?",
      "answer": "JavaScript execution in Node.js is mostly single-threaded, but Node uses libuv and worker threads internally for some I/O and CPU-related operations.",
      "keyPoints": [
        "Node is strong for I/O-heavy systems.",
        "Avoid blocking the event loop with CPU-heavy work.",
        "Understand promises, queues and async behavior."
      ]
    },
    {
      "id": 109,
      "category": "Node.js Backend Development",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "node-js-backend-development",
        "technical",
        "intermediate"
      ],
      "question": "What is non-blocking I/O?",
      "answer": "Non-blocking I/O means Node can start an I/O operation and continue handling other work while waiting for the result.",
      "keyPoints": [
        "Node is strong for I/O-heavy systems.",
        "Avoid blocking the event loop with CPU-heavy work.",
        "Understand promises, queues and async behavior."
      ]
    },
    {
      "id": 110,
      "category": "Node.js Backend Development",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "node-js-backend-development",
        "technical",
        "intermediate"
      ],
      "question": "What is the callback queue?",
      "answer": "The callback queue stores callbacks waiting to be executed by the event loop after the current call stack is clear.",
      "keyPoints": [
        "Node is strong for I/O-heavy systems.",
        "Avoid blocking the event loop with CPU-heavy work.",
        "Understand promises, queues and async behavior."
      ]
    },
    {
      "id": 111,
      "category": "Node.js Backend Development",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "node-js-backend-development",
        "technical",
        "intermediate"
      ],
      "question": "What is the microtask queue?",
      "answer": "The microtask queue contains promise callbacks and other high-priority microtasks that run before the event loop continues to the next macrotask phase.",
      "keyPoints": [
        "Node is strong for I/O-heavy systems.",
        "Avoid blocking the event loop with CPU-heavy work.",
        "Understand promises, queues and async behavior."
      ]
    },
    {
      "id": 112,
      "category": "Node.js Backend Development",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "node-js-backend-development",
        "technical",
        "intermediate"
      ],
      "question": "What is the promise queue?",
      "answer": "The promise queue, commonly discussed as part of the microtask queue, runs promise resolution callbacks after the current synchronous code completes.",
      "keyPoints": [
        "Node is strong for I/O-heavy systems.",
        "Avoid blocking the event loop with CPU-heavy work.",
        "Understand promises, queues and async behavior."
      ]
    },
    {
      "id": 113,
      "category": "Node.js Backend Development",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "node-js-backend-development",
        "technical",
        "intermediate"
      ],
      "question": "What are Event Emitters?",
      "answer": "Event Emitters are Node.js objects that emit named events and allow listeners to respond. They are useful for streams, sockets and event-driven code.",
      "keyPoints": [
        "Node is strong for I/O-heavy systems.",
        "Avoid blocking the event loop with CPU-heavy work.",
        "Understand promises, queues and async behavior."
      ]
    },
    {
      "id": 114,
      "category": "Node.js Backend Development",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "node-js-backend-development",
        "technical",
        "intermediate"
      ],
      "question": "What are streams in Node.js?",
      "answer": "Streams process data piece by piece instead of loading everything into memory. They are useful for files, network data and large uploads/downloads.",
      "keyPoints": [
        "Node is strong for I/O-heavy systems.",
        "Avoid blocking the event loop with CPU-heavy work.",
        "Understand promises, queues and async behavior."
      ]
    },
    {
      "id": 115,
      "category": "Node.js Backend Development",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "node-js-backend-development",
        "technical",
        "intermediate"
      ],
      "question": "What are buffers in Node.js?",
      "answer": "Buffers represent raw binary data in Node.js. They are used when working with files, streams, sockets and binary protocols.",
      "keyPoints": [
        "Node is strong for I/O-heavy systems.",
        "Avoid blocking the event loop with CPU-heavy work.",
        "Understand promises, queues and async behavior."
      ]
    },
    {
      "id": 116,
      "category": "Express.js",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "express-js",
        "technical",
        "intermediate"
      ],
      "question": "What is Express.js?",
      "answer": "Express.js is a minimal Node.js web framework for building APIs and web servers. It provides routing, middleware and request/response helpers.",
      "keyPoints": [
        "Middleware order matters.",
        "Keep route handlers thin and move business logic to services.",
        "Always centralize error handling."
      ]
    },
    {
      "id": 117,
      "category": "Express.js",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "express-js",
        "technical",
        "intermediate"
      ],
      "question": "How would you explain Express architecture?",
      "answer": "Express handles incoming HTTP requests through a chain of middleware and route handlers. Each middleware can read or modify request/response and pass control using next().",
      "keyPoints": [
        "Middleware order matters.",
        "Keep route handlers thin and move business logic to services.",
        "Always centralize error handling."
      ]
    },
    {
      "id": 118,
      "category": "Express.js",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "express-js",
        "technical",
        "intermediate"
      ],
      "question": "What is routing in Express?",
      "answer": "Routing maps HTTP methods and paths to handler functions. For example, GET /users can return users and POST /users can create a user.",
      "keyPoints": [
        "Middleware order matters.",
        "Keep route handlers thin and move business logic to services.",
        "Always centralize error handling."
      ]
    },
    {
      "id": 119,
      "category": "Express.js",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "express-js",
        "technical",
        "intermediate"
      ],
      "question": "What is middleware in Express?",
      "answer": "Middleware is a function that runs during the request-response cycle and can execute logic, modify req/res, end the response or call next().",
      "keyPoints": [
        "Middleware order matters.",
        "Keep route handlers thin and move business logic to services.",
        "Always centralize error handling."
      ]
    },
    {
      "id": 120,
      "category": "Express.js",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "express-js",
        "technical",
        "intermediate"
      ],
      "question": "What is error middleware in Express?",
      "answer": "Error middleware has four arguments: err, req, res and next. Express calls it when an error is passed with next(err) or thrown in supported async flows.",
      "keyPoints": [
        "Middleware order matters.",
        "Keep route handlers thin and move business logic to services.",
        "Always centralize error handling."
      ]
    },
    {
      "id": 121,
      "category": "Express.js",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "express-js",
        "technical",
        "intermediate"
      ],
      "question": "What is the request object in Express?",
      "answer": "The request object contains incoming data such as params, query, body, headers, cookies and authenticated user data added by middleware.",
      "keyPoints": [
        "Middleware order matters.",
        "Keep route handlers thin and move business logic to services.",
        "Always centralize error handling."
      ]
    },
    {
      "id": 122,
      "category": "Express.js",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "express-js",
        "technical",
        "intermediate"
      ],
      "question": "What is the response object in Express?",
      "answer": "The response object is used to send status codes, JSON, headers, cookies, redirects and final responses to the client.",
      "keyPoints": [
        "Middleware order matters.",
        "Keep route handlers thin and move business logic to services.",
        "Always centralize error handling."
      ]
    },
    {
      "id": 123,
      "category": "Express.js",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "express-js",
        "technical",
        "intermediate"
      ],
      "question": "What does next() do in Express?",
      "answer": "next() passes control to the next middleware or route handler. Calling next(err) skips normal handlers and invokes error-handling middleware.",
      "keyPoints": [
        "Middleware order matters.",
        "Keep route handlers thin and move business logic to services.",
        "Always centralize error handling."
      ]
    },
    {
      "id": 124,
      "category": "Express.js",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "express-js",
        "technical",
        "intermediate"
      ],
      "question": "What is Express Router?",
      "answer": "Express Router lets you create modular route handlers for a feature or resource and mount them under a base path.",
      "keyPoints": [
        "Middleware order matters.",
        "Keep route handlers thin and move business logic to services.",
        "Always centralize error handling."
      ]
    },
    {
      "id": 125,
      "category": "Express.js",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "express-js",
        "technical",
        "intermediate"
      ],
      "question": "What is global middleware?",
      "answer": "Global middleware is registered at the app level and runs for matching requests before route-specific handlers, such as logging, CORS or JSON body parsing.",
      "keyPoints": [
        "Middleware order matters.",
        "Keep route handlers thin and move business logic to services.",
        "Always centralize error handling."
      ]
    },
    {
      "id": 126,
      "category": "Express Middleware",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "express-middleware",
        "technical",
        "intermediate"
      ],
      "question": "What are the types of middleware?",
      "answer": "Common middleware types include application-level, router-level, built-in, third-party, authentication, validation, logging and error-handling middleware.",
      "keyPoints": [
        "Middleware controls request flow.",
        "Order and error paths are common interview traps.",
        "Always end the response or call next()."
      ]
    },
    {
      "id": 127,
      "category": "Express Middleware",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "express-middleware",
        "technical",
        "intermediate"
      ],
      "question": "What is authentication middleware?",
      "answer": "Authentication middleware verifies credentials or tokens, identifies the user and attaches user information to the request for later authorization checks.",
      "keyPoints": [
        "Middleware controls request flow.",
        "Order and error paths are common interview traps.",
        "Always end the response or call next()."
      ]
    },
    {
      "id": 128,
      "category": "Express Middleware",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "express-middleware",
        "technical",
        "intermediate"
      ],
      "question": "What is logging middleware?",
      "answer": "Logging middleware records request method, URL, status, duration and sometimes correlation IDs for debugging and monitoring.",
      "keyPoints": [
        "Middleware controls request flow.",
        "Order and error paths are common interview traps.",
        "Always end the response or call next()."
      ]
    },
    {
      "id": 129,
      "category": "Express Middleware",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "express-middleware",
        "technical",
        "intermediate"
      ],
      "question": "What is error handling middleware?",
      "answer": "Error handling middleware centralizes error responses and logging so every route does not repeat try-catch response logic.",
      "keyPoints": [
        "Middleware controls request flow.",
        "Order and error paths are common interview traps.",
        "Always end the response or call next()."
      ]
    },
    {
      "id": 130,
      "category": "Express Middleware",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "express-middleware",
        "technical",
        "intermediate"
      ],
      "question": "Why does middleware execution order matter?",
      "answer": "Middleware runs in the order it is registered. Body parsing, CORS, auth, validation and routes must be ordered correctly or requests may fail.",
      "keyPoints": [
        "Middleware controls request flow.",
        "Order and error paths are common interview traps.",
        "Always end the response or call next()."
      ]
    },
    {
      "id": 131,
      "category": "Express Middleware",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "express-middleware",
        "technical",
        "intermediate"
      ],
      "question": "What happens if next() is not called?",
      "answer": "If middleware neither sends a response nor calls next(), the request hangs because Express does not know how to continue.",
      "keyPoints": [
        "Middleware controls request flow.",
        "Order and error paths are common interview traps.",
        "Always end the response or call next()."
      ]
    },
    {
      "id": 132,
      "category": "ORM",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "orm",
        "technical",
        "intermediate"
      ],
      "question": "What is an ORM?",
      "answer": "An ORM maps application objects to database tables or documents, letting developers query and persist data using language-level APIs instead of raw SQL for every operation.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 133,
      "category": "ORM",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "orm",
        "technical",
        "intermediate"
      ],
      "question": "Why use an ORM?",
      "answer": "ORMs improve productivity with models, relationships, migrations, type safety and query helpers, though developers still need database knowledge for performance.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 134,
      "category": "ORM",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "orm",
        "technical",
        "intermediate"
      ],
      "question": "Prisma vs Mongoose?",
      "answer": "Prisma is commonly used with relational databases and provides strong type-safe queries. Mongoose is an ODM for MongoDB with schemas, models and document-oriented patterns.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 135,
      "category": "ORM",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "orm",
        "technical",
        "intermediate"
      ],
      "question": "Sequelize vs Prisma?",
      "answer": "Sequelize is a mature Node ORM with model-based APIs. Prisma is newer, schema-first and strongly type-safe with generated clients.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 136,
      "category": "ORM",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "orm",
        "technical",
        "intermediate"
      ],
      "question": "What are Hibernate basics?",
      "answer": "Hibernate is a Java ORM that maps Java objects to relational tables and manages persistence, relationships, lazy loading and transactions.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 137,
      "category": "ORM",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "orm",
        "technical",
        "intermediate"
      ],
      "question": "How do ORM relationships work?",
      "answer": "ORM relationships model associations such as one-to-one, one-to-many and many-to-many between entities.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 138,
      "category": "ORM",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "orm",
        "technical",
        "intermediate"
      ],
      "question": "How are transactions handled with ORMs?",
      "answer": "ORM transactions group multiple database operations so either all succeed or all roll back.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 139,
      "category": "ORM",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "orm",
        "technical",
        "intermediate"
      ],
      "question": "What are migrations?",
      "answer": "Migrations are version-controlled database schema changes, such as creating tables, adding columns or changing indexes.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 140,
      "category": "ORM",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "orm",
        "technical",
        "intermediate"
      ],
      "question": "What is lazy loading?",
      "answer": "Lazy loading fetches related data only when it is accessed, reducing initial query size but risking N+1 query problems.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 141,
      "category": "ORM",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "orm",
        "technical",
        "intermediate"
      ],
      "question": "What is eager loading?",
      "answer": "Eager loading fetches related data upfront, often through joins or include options, to avoid repeated queries.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 142,
      "category": "Database Queries",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "database-queries",
        "technical",
        "intermediate"
      ],
      "question": "How do you implement pagination?",
      "answer": "Pagination limits large result sets into smaller pages using offset-limit or cursor-based techniques.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 143,
      "category": "Database Queries",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "database-queries",
        "technical",
        "intermediate"
      ],
      "question": "What is offset pagination?",
      "answer": "Offset pagination uses limit and offset, such as page 3 with 20 items per page. It is simple but can be slow or inconsistent for very large changing datasets.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 144,
      "category": "Database Queries",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "database-queries",
        "technical",
        "intermediate"
      ],
      "question": "What is cursor pagination?",
      "answer": "Cursor pagination uses a stable cursor such as createdAt or id to fetch the next page. It performs better for large datasets and real-time feeds.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 145,
      "category": "Database Queries",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "database-queries",
        "technical",
        "intermediate"
      ],
      "question": "How do filtering APIs work?",
      "answer": "Filtering APIs use query parameters to narrow results by fields such as status, category, date range or owner.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 146,
      "category": "Database Queries",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "database-queries",
        "technical",
        "intermediate"
      ],
      "question": "How do sorting APIs work?",
      "answer": "Sorting APIs accept sort fields and direction, but should only allow safe indexed fields to avoid performance and security problems.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 147,
      "category": "Database Queries",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "database-queries",
        "technical",
        "intermediate"
      ],
      "question": "How do you implement search?",
      "answer": "Search can start with database LIKE or full-text indexes, and for advanced needs use search engines such as Elasticsearch or OpenSearch.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 148,
      "category": "Database Queries",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "database-queries",
        "technical",
        "intermediate"
      ],
      "question": "What is indexing?",
      "answer": "Indexing creates data structures that speed up reads for selected columns or fields, but indexes cost storage and slow some writes.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 149,
      "category": "Database Queries",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "database-queries",
        "technical",
        "intermediate"
      ],
      "question": "What is aggregation?",
      "answer": "Aggregation computes summaries such as count, sum, average and grouped results from database records.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 150,
      "category": "Database Queries",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "database-queries",
        "technical",
        "intermediate"
      ],
      "question": "What are database transactions?",
      "answer": "Transactions group operations with ACID guarantees so data remains consistent even when errors occur.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 151,
      "category": "Background Jobs",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "background-jobs",
        "technical",
        "intermediate"
      ],
      "question": "What are background jobs?",
      "answer": "Background jobs run work outside the request-response path, such as emails, reports, video processing and retries.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 152,
      "category": "Background Jobs",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "background-jobs",
        "technical",
        "intermediate"
      ],
      "question": "What is BullMQ?",
      "answer": "BullMQ is a Node.js queue library backed by Redis for background jobs, retries, delayed jobs and workers.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 153,
      "category": "Background Jobs",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "background-jobs",
        "technical",
        "intermediate"
      ],
      "question": "What is a Redis queue?",
      "answer": "A Redis queue uses Redis data structures to store jobs that worker processes consume asynchronously.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 154,
      "category": "Background Jobs",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "background-jobs",
        "technical",
        "intermediate"
      ],
      "question": "What is RabbitMQ?",
      "answer": "RabbitMQ is a message broker used for reliable communication between services through queues and exchanges.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 155,
      "category": "Background Jobs",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "background-jobs",
        "technical",
        "intermediate"
      ],
      "question": "What are cron jobs?",
      "answer": "Cron jobs are scheduled tasks that run at fixed times or intervals, such as nightly cleanup or report generation.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 156,
      "category": "Background Jobs",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "background-jobs",
        "technical",
        "intermediate"
      ],
      "question": "What are delayed jobs?",
      "answer": "Delayed jobs are queued jobs scheduled to run in the future, such as reminder emails.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 157,
      "category": "Background Jobs",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "background-jobs",
        "technical",
        "intermediate"
      ],
      "question": "How do retry mechanisms work?",
      "answer": "Retry mechanisms reprocess failed jobs with limits and backoff so temporary failures can recover automatically.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 158,
      "category": "Background Jobs",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "background-jobs",
        "technical",
        "intermediate"
      ],
      "question": "What is a dead letter queue?",
      "answer": "A dead letter queue stores messages or jobs that failed repeatedly and need manual inspection or special handling.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 159,
      "category": "Background Jobs",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "background-jobs",
        "technical",
        "intermediate"
      ],
      "question": "What are worker processes?",
      "answer": "Worker processes consume jobs from a queue and execute them separately from the web API server.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 160,
      "category": "API Security",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-security",
        "technical",
        "intermediate"
      ],
      "question": "What is SQL injection?",
      "answer": "SQL injection happens when untrusted input is inserted into SQL queries, allowing attackers to alter query behavior. Use parameterized queries and validation.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 161,
      "category": "API Security",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-security",
        "technical",
        "intermediate"
      ],
      "question": "What is NoSQL injection?",
      "answer": "NoSQL injection manipulates query objects or operators in document databases. Validate input and avoid passing raw user objects into queries.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 162,
      "category": "API Security",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-security",
        "technical",
        "intermediate"
      ],
      "question": "What is XSS?",
      "answer": "Cross-site scripting injects malicious scripts into pages viewed by users. APIs help prevent it by escaping output, validating input and using safe content handling.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 163,
      "category": "API Security",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-security",
        "technical",
        "intermediate"
      ],
      "question": "What is CSRF?",
      "answer": "CSRF tricks a logged-in browser into sending unwanted requests. SameSite cookies, CSRF tokens and proper auth design help prevent it.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 164,
      "category": "API Security",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-security",
        "technical",
        "intermediate"
      ],
      "question": "What is CORS?",
      "answer": "CORS is a browser security mechanism that controls which origins can access resources from another origin.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 165,
      "category": "API Security",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-security",
        "technical",
        "intermediate"
      ],
      "question": "What is Helmet in Express?",
      "answer": "Helmet is Express middleware that sets security-related HTTP headers to reduce common web vulnerabilities.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 166,
      "category": "API Security",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-security",
        "technical",
        "intermediate"
      ],
      "question": "What is rate limiting?",
      "answer": "Rate limiting restricts how many requests a client can make in a time window to protect against abuse and overload.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 167,
      "category": "API Security",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-security",
        "technical",
        "intermediate"
      ],
      "question": "Why is input validation important?",
      "answer": "Input validation ensures incoming data matches expected type, format and business rules before processing.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 168,
      "category": "API Security",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-security",
        "technical",
        "intermediate"
      ],
      "question": "What is sanitization?",
      "answer": "Sanitization cleans or transforms input to remove unsafe content before storing, querying or rendering it.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 169,
      "category": "API Security",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-security",
        "technical",
        "intermediate"
      ],
      "question": "How should API keys be secured?",
      "answer": "API keys should be stored hashed or encrypted when appropriate, scoped, rotated, rate-limited and never exposed in frontend code if secret.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 170,
      "category": "API Security",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-security",
        "technical",
        "intermediate"
      ],
      "question": "What are OAuth scopes?",
      "answer": "OAuth scopes limit what an access token can do, such as read:orders or write:payments.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 171,
      "category": "API Development",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-development",
        "technical",
        "intermediate"
      ],
      "question": "How do you design CRUD APIs?",
      "answer": "Design CRUD APIs around resources with list, detail, create, update and delete endpoints using proper HTTP methods and status codes.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 172,
      "category": "API Development",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-development",
        "technical",
        "intermediate"
      ],
      "question": "How do file upload APIs work?",
      "answer": "File upload APIs usually accept multipart/form-data, validate file type and size, store files in object storage and save metadata in a database.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 173,
      "category": "API Development",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-development",
        "technical",
        "intermediate"
      ],
      "question": "How do image upload APIs work?",
      "answer": "Image upload APIs validate image type, scan or sanitize files, generate thumbnails if needed and store them in a CDN-backed object store.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 174,
      "category": "API Development",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-development",
        "technical",
        "intermediate"
      ],
      "question": "What is multipart/form-data?",
      "answer": "multipart/form-data is a request encoding used to send files and fields together in one HTTP request.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 175,
      "category": "API Development",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-development",
        "technical",
        "intermediate"
      ],
      "question": "Where should validation happen?",
      "answer": "Validation should happen at the API boundary and again where business rules require it. Never rely only on frontend validation.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 176,
      "category": "API Development",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-development",
        "technical",
        "intermediate"
      ],
      "question": "How should API error responses be designed?",
      "answer": "API error responses should be consistent, include a status, code, message and optional field errors, and avoid leaking sensitive internals.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 177,
      "category": "API Development",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-development",
        "technical",
        "intermediate"
      ],
      "question": "What is response standardization?",
      "answer": "Response standardization means using consistent response shapes for success, errors, pagination and metadata across endpoints.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 178,
      "category": "API Development",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-development",
        "technical",
        "intermediate"
      ],
      "question": "Why is API documentation important?",
      "answer": "Documentation helps frontend teams, mobile teams and external clients integrate correctly with examples, schemas and error cases.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 179,
      "category": "Swagger and OpenAPI",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "swagger-and-openapi",
        "technical",
        "intermediate"
      ],
      "question": "What is Swagger?",
      "answer": "Swagger is a set of tools around the OpenAPI Specification for designing, documenting and testing REST APIs.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 180,
      "category": "Swagger and OpenAPI",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "swagger-and-openapi",
        "technical",
        "intermediate"
      ],
      "question": "What is the OpenAPI Specification?",
      "answer": "OpenAPI is a standard machine-readable format for describing API endpoints, methods, parameters, request bodies and responses.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 181,
      "category": "Swagger and OpenAPI",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "swagger-and-openapi",
        "technical",
        "intermediate"
      ],
      "question": "How does Swagger help API documentation?",
      "answer": "Swagger UI can render interactive API documentation from an OpenAPI file, making endpoints easier to understand and test.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 182,
      "category": "Swagger and OpenAPI",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "swagger-and-openapi",
        "technical",
        "intermediate"
      ],
      "question": "How can Swagger be used for API testing?",
      "answer": "Swagger tools allow developers to try requests, validate schemas and generate clients or server stubs from the API contract.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 183,
      "category": "WebSockets and Realtime APIs",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "websockets-and-realtime-apis",
        "technical",
        "intermediate"
      ],
      "question": "What are WebSockets?",
      "answer": "WebSockets provide a persistent full-duplex connection between client and server for real-time communication.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 184,
      "category": "WebSockets and Realtime APIs",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "websockets-and-realtime-apis",
        "technical",
        "intermediate"
      ],
      "question": "What is HTTP polling?",
      "answer": "Polling repeatedly sends HTTP requests at intervals to check for updates. It is simple but can waste resources.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 185,
      "category": "WebSockets and Realtime APIs",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "websockets-and-realtime-apis",
        "technical",
        "intermediate"
      ],
      "question": "What is long polling?",
      "answer": "Long polling keeps a request open until new data is available or a timeout occurs, reducing empty responses compared with regular polling.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 186,
      "category": "WebSockets and Realtime APIs",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "websockets-and-realtime-apis",
        "technical",
        "intermediate"
      ],
      "question": "What are Server-Sent Events?",
      "answer": "SSE is a one-way server-to-client streaming mechanism over HTTP, useful for notifications and live updates.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 187,
      "category": "WebSockets and Realtime APIs",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "websockets-and-realtime-apis",
        "technical",
        "intermediate"
      ],
      "question": "What is the WebSocket handshake?",
      "answer": "The WebSocket handshake starts as an HTTP request with upgrade headers, then switches the connection protocol to WebSocket.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 188,
      "category": "WebSockets and Realtime APIs",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "websockets-and-realtime-apis",
        "technical",
        "intermediate"
      ],
      "question": "What is Socket.IO?",
      "answer": "Socket.IO is a real-time library that provides WebSocket-like communication with fallbacks, rooms and reconnection features.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 189,
      "category": "WebSockets and Realtime APIs",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "websockets-and-realtime-apis",
        "technical",
        "intermediate"
      ],
      "question": "What is real-time communication?",
      "answer": "Real-time communication delivers updates quickly without users manually refreshing, such as chat, notifications and live dashboards.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 190,
      "category": "WebSockets and Realtime APIs",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "websockets-and-realtime-apis",
        "technical",
        "intermediate"
      ],
      "question": "WebSocket vs HTTP?",
      "answer": "HTTP is request-response, while WebSocket keeps a persistent two-way connection for real-time messages.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 191,
      "category": "WebSockets and Realtime APIs",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "websockets-and-realtime-apis",
        "technical",
        "intermediate"
      ],
      "question": "SSE vs WebSocket?",
      "answer": "SSE is one-way server-to-client over HTTP; WebSocket is two-way and better for interactive real-time apps like chat.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 192,
      "category": "WebSockets and Realtime APIs",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "websockets-and-realtime-apis",
        "technical",
        "intermediate"
      ],
      "question": "Polling vs long polling?",
      "answer": "Polling asks repeatedly on a timer; long polling waits until data is ready before responding.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 193,
      "category": "WebSockets and Realtime APIs",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "websockets-and-realtime-apis",
        "technical",
        "intermediate"
      ],
      "question": "How would you design chat application architecture?",
      "answer": "Use WebSockets or Socket.IO for real-time messaging, store messages in a database, use Redis pub/sub for multiple servers and add authentication, presence and delivery states.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 194,
      "category": "GraphQL",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "graphql",
        "technical",
        "intermediate"
      ],
      "question": "What is GraphQL?",
      "answer": "GraphQL is an API query language and runtime where clients request exactly the fields they need from a typed schema.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 195,
      "category": "GraphQL",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "graphql",
        "technical",
        "intermediate"
      ],
      "question": "GraphQL vs REST?",
      "answer": "REST exposes multiple resource endpoints, while GraphQL exposes a schema and usually one endpoint where clients shape the response.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 196,
      "category": "GraphQL",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "graphql",
        "technical",
        "intermediate"
      ],
      "question": "What is a GraphQL schema?",
      "answer": "A schema defines types, fields, queries, mutations and subscriptions available in a GraphQL API.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 197,
      "category": "GraphQL",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "graphql",
        "technical",
        "intermediate"
      ],
      "question": "What is a resolver?",
      "answer": "A resolver is a function that returns data for a GraphQL field.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 198,
      "category": "GraphQL",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "graphql",
        "technical",
        "intermediate"
      ],
      "question": "What is a mutation?",
      "answer": "A mutation is a GraphQL operation used to change data, such as creating or updating a record.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 199,
      "category": "GraphQL",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "graphql",
        "technical",
        "intermediate"
      ],
      "question": "What is a subscription?",
      "answer": "A subscription is a GraphQL operation for real-time updates, often implemented over WebSockets.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 200,
      "category": "GraphQL",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "graphql",
        "technical",
        "intermediate"
      ],
      "question": "What is a GraphQL query?",
      "answer": "A query is a GraphQL operation used to read data.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 201,
      "category": "GraphQL",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "graphql",
        "technical",
        "intermediate"
      ],
      "question": "What are GraphQL advantages?",
      "answer": "GraphQL can reduce over-fetching, provide strong typing and let clients request nested data in one operation.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 202,
      "category": "GraphQL",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "graphql",
        "technical",
        "intermediate"
      ],
      "question": "What is the N+1 problem in GraphQL?",
      "answer": "The N+1 problem occurs when resolvers trigger one query for a list and then one additional query per item. DataLoader or batching can fix it.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 203,
      "category": "gRPC",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "grpc",
        "technical",
        "intermediate"
      ],
      "question": "What is gRPC?",
      "answer": "gRPC is a high-performance RPC framework that commonly uses HTTP/2 and Protocol Buffers for service-to-service communication.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 204,
      "category": "gRPC",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "grpc",
        "technical",
        "intermediate"
      ],
      "question": "What are Protocol Buffers?",
      "answer": "Protocol Buffers are a compact binary serialization format and schema language used by gRPC.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 205,
      "category": "gRPC",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "grpc",
        "technical",
        "intermediate"
      ],
      "question": "What are unary calls in gRPC?",
      "answer": "Unary calls are request-response RPC calls where the client sends one request and receives one response.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 206,
      "category": "gRPC",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "grpc",
        "technical",
        "intermediate"
      ],
      "question": "What is streaming in gRPC?",
      "answer": "Streaming allows clients, servers or both to send multiple messages over one RPC connection.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 207,
      "category": "gRPC",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "grpc",
        "technical",
        "intermediate"
      ],
      "question": "REST vs gRPC?",
      "answer": "REST is resource-oriented and human-readable over HTTP/JSON, while gRPC is RPC-oriented, strongly typed and efficient for internal service communication.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 208,
      "category": "API Performance",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-performance",
        "technical",
        "intermediate"
      ],
      "question": "What is API caching?",
      "answer": "API caching stores responses or computed data so repeated requests can be served faster and with less backend load.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 209,
      "category": "API Performance",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-performance",
        "technical",
        "intermediate"
      ],
      "question": "How is Redis used for caching?",
      "answer": "Redis stores frequently accessed data in memory with optional expiry, making repeated reads much faster than hitting the database.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 210,
      "category": "API Performance",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-performance",
        "technical",
        "intermediate"
      ],
      "question": "How do ETags improve API performance?",
      "answer": "ETags let clients validate whether cached content has changed, allowing servers to return 304 Not Modified instead of the full response.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 211,
      "category": "API Performance",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-performance",
        "technical",
        "intermediate"
      ],
      "question": "What is compression?",
      "answer": "Compression reduces response size before sending it over the network, improving transfer time for text-based responses.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 212,
      "category": "API Performance",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-performance",
        "technical",
        "intermediate"
      ],
      "question": "What is Gzip?",
      "answer": "Gzip is a common compression format used for HTTP responses such as JSON, HTML, CSS and JavaScript.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 213,
      "category": "API Performance",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-performance",
        "technical",
        "intermediate"
      ],
      "question": "How does a CDN help APIs?",
      "answer": "A CDN caches static assets and sometimes API responses near users, reducing latency and origin load.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 214,
      "category": "API Performance",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-performance",
        "technical",
        "intermediate"
      ],
      "question": "How does database indexing improve API speed?",
      "answer": "Indexes let the database find matching rows faster for common filters and sorting patterns.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 215,
      "category": "API Performance",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-performance",
        "technical",
        "intermediate"
      ],
      "question": "What is connection pooling?",
      "answer": "Connection pooling reuses database connections instead of opening a new connection for every request.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 216,
      "category": "API Performance",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-performance",
        "technical",
        "intermediate"
      ],
      "question": "How can lazy loading hurt performance?",
      "answer": "Lazy loading can create many small queries, especially N+1 patterns, which slows APIs under load.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 217,
      "category": "API Performance",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "api-performance",
        "technical",
        "intermediate"
      ],
      "question": "How do you optimize database queries?",
      "answer": "Optimize queries by adding indexes, selecting only needed fields, avoiding N+1 queries, using pagination and analyzing query plans.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 218,
      "category": "Error Handling",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "error-handling",
        "technical",
        "intermediate"
      ],
      "question": "What is a global error handler?",
      "answer": "A global error handler centralizes how API errors are logged and returned to clients.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 219,
      "category": "Error Handling",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "error-handling",
        "technical",
        "intermediate"
      ],
      "question": "How do you handle async errors?",
      "answer": "Handle async errors with try-catch, promise rejection handling or async middleware wrappers, then pass errors to centralized error middleware.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 220,
      "category": "Error Handling",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "error-handling",
        "technical",
        "intermediate"
      ],
      "question": "When do you use try-catch?",
      "answer": "Use try-catch around code that can throw and where you can recover, transform or forward the error properly.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 221,
      "category": "Error Handling",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "error-handling",
        "technical",
        "intermediate"
      ],
      "question": "How does Express error middleware work?",
      "answer": "Express error middleware receives err, req, res and next, then logs and formats the error response.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 222,
      "category": "Error Handling",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "error-handling",
        "technical",
        "intermediate"
      ],
      "question": "How should validation errors be returned?",
      "answer": "Validation errors should return 400 or 422 with field-level details that help clients fix the request.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 223,
      "category": "Error Handling",
      "type": "Technical",
      "difficulty": "Intermediate",
      "tags": [
        "error-handling",
        "technical",
        "intermediate"
      ],
      "question": "Why is logging important in backend errors?",
      "answer": "Logging captures stack traces, request IDs and context needed to debug production failures without exposing internals to users.",
      "keyPoints": [
        "Give examples when possible.",
        "Mention tradeoffs, not only definitions.",
        "Connect the concept to production API behavior."
      ]
    },
    {
      "id": 224,
      "category": "System Design Basics",
      "type": "Scenario",
      "difficulty": "Advanced",
      "tags": [
        "system-design-basics",
        "scenario",
        "advanced"
      ],
      "question": "Design URL Shortener API?",
      "answer": "Use a POST endpoint to create short URLs, generate unique codes, store original URL metadata and redirect with GET /:code. Add rate limits, analytics, expiry and collision handling.",
      "keyPoints": [
        "Start with requirements and APIs.",
        "Discuss database schema and scaling choices.",
        "Call out security, observability and failure handling."
      ]
    },
    {
      "id": 225,
      "category": "System Design Basics",
      "type": "Scenario",
      "difficulty": "Advanced",
      "tags": [
        "system-design-basics",
        "scenario",
        "advanced"
      ],
      "question": "Design Authentication Service?",
      "answer": "Design login, token/session creation, refresh, logout, password hashing, MFA support, rate limiting and audit logging. Keep authorization checks separate but integrated.",
      "keyPoints": [
        "Start with requirements and APIs.",
        "Discuss database schema and scaling choices.",
        "Call out security, observability and failure handling."
      ]
    },
    {
      "id": 226,
      "category": "System Design Basics",
      "type": "Scenario",
      "difficulty": "Advanced",
      "tags": [
        "system-design-basics",
        "scenario",
        "advanced"
      ],
      "question": "Design File Upload API?",
      "answer": "Use multipart uploads or presigned URLs, validate file metadata, store files in object storage, process asynchronously and save metadata in a database.",
      "keyPoints": [
        "Start with requirements and APIs.",
        "Discuss database schema and scaling choices.",
        "Call out security, observability and failure handling."
      ]
    },
    {
      "id": 227,
      "category": "System Design Basics",
      "type": "Scenario",
      "difficulty": "Advanced",
      "tags": [
        "system-design-basics",
        "scenario",
        "advanced"
      ],
      "question": "Design Notification API?",
      "answer": "Support notification creation, user preferences, delivery channels, background workers, retries and read/unread state.",
      "keyPoints": [
        "Start with requirements and APIs.",
        "Discuss database schema and scaling choices.",
        "Call out security, observability and failure handling."
      ]
    },
    {
      "id": 228,
      "category": "System Design Basics",
      "type": "Scenario",
      "difficulty": "Advanced",
      "tags": [
        "system-design-basics",
        "scenario",
        "advanced"
      ],
      "question": "Design Payment API?",
      "answer": "Use idempotency keys, transaction records, webhook handling, provider integration, status transitions and strict audit logs.",
      "keyPoints": [
        "Start with requirements and APIs.",
        "Discuss database schema and scaling choices.",
        "Call out security, observability and failure handling."
      ]
    },
    {
      "id": 229,
      "category": "System Design Basics",
      "type": "Scenario",
      "difficulty": "Advanced",
      "tags": [
        "system-design-basics",
        "scenario",
        "advanced"
      ],
      "question": "Design Chat Backend?",
      "answer": "Use WebSockets for real-time delivery, database persistence, Redis pub/sub for scale, authentication and delivery/read receipts.",
      "keyPoints": [
        "Start with requirements and APIs.",
        "Discuss database schema and scaling choices.",
        "Call out security, observability and failure handling."
      ]
    },
    {
      "id": 230,
      "category": "System Design Basics",
      "type": "Scenario",
      "difficulty": "Advanced",
      "tags": [
        "system-design-basics",
        "scenario",
        "advanced"
      ],
      "question": "Design Todo API?",
      "answer": "Use REST CRUD endpoints for todos, validation, ownership checks, pagination, filtering by status and proper auth.",
      "keyPoints": [
        "Start with requirements and APIs.",
        "Discuss database schema and scaling choices.",
        "Call out security, observability and failure handling."
      ]
    },
    {
      "id": 231,
      "category": "System Design Basics",
      "type": "Scenario",
      "difficulty": "Advanced",
      "tags": [
        "system-design-basics",
        "scenario",
        "advanced"
      ],
      "question": "Design Blog API?",
      "answer": "Support posts, authors, slugs, drafts, comments, tags, search, pagination, auth and caching for public reads.",
      "keyPoints": [
        "Start with requirements and APIs.",
        "Discuss database schema and scaling choices.",
        "Call out security, observability and failure handling."
      ]
    },
    {
      "id": 232,
      "category": "System Design Basics",
      "type": "Scenario",
      "difficulty": "Advanced",
      "tags": [
        "system-design-basics",
        "scenario",
        "advanced"
      ],
      "question": "Design E-commerce Backend?",
      "answer": "Model products, carts, orders, payments, inventory and users. Use transactions, idempotency, caching, async jobs and clear service boundaries.",
      "keyPoints": [
        "Start with requirements and APIs.",
        "Discuss database schema and scaling choices.",
        "Call out security, observability and failure handling."
      ]
    },
    {
      "id": 233,
      "category": "Scenario-Based Questions",
      "type": "Scenario",
      "difficulty": "Advanced",
      "tags": [
        "scenario-based-questions",
        "scenario",
        "advanced"
      ],
      "question": "How would you design a login system?",
      "answer": "I would hash passwords with bcrypt or Argon2, validate credentials, issue a secure session or tokens, protect cookies, add rate limiting, handle refresh/logout and log suspicious activity.",
      "keyPoints": [
        "State assumptions first.",
        "Cover correctness, security and scalability.",
        "Mention monitoring and failure handling for senior interviews."
      ]
    },
    {
      "id": 234,
      "category": "Scenario-Based Questions",
      "type": "Scenario",
      "difficulty": "Advanced",
      "tags": [
        "scenario-based-questions",
        "scenario",
        "advanced"
      ],
      "question": "How would you secure REST APIs?",
      "answer": "I would use HTTPS, strong authentication, authorization checks, validation, sanitization, rate limiting, safe headers, CORS configuration, logging and secret management.",
      "keyPoints": [
        "State assumptions first.",
        "Cover correctness, security and scalability.",
        "Mention monitoring and failure handling for senior interviews."
      ]
    },
    {
      "id": 235,
      "category": "Scenario-Based Questions",
      "type": "Scenario",
      "difficulty": "Advanced",
      "tags": [
        "scenario-based-questions",
        "scenario",
        "advanced"
      ],
      "question": "How would you prevent duplicate payment requests?",
      "answer": "Use idempotency keys, unique transaction IDs, database constraints and payment status tracking so retries return the original result instead of charging twice.",
      "keyPoints": [
        "State assumptions first.",
        "Cover correctness, security and scalability.",
        "Mention monitoring and failure handling for senior interviews."
      ]
    },
    {
      "id": 236,
      "category": "Scenario-Based Questions",
      "type": "Scenario",
      "difficulty": "Advanced",
      "tags": [
        "scenario-based-questions",
        "scenario",
        "advanced"
      ],
      "question": "How would you implement refresh tokens?",
      "answer": "Issue short-lived access tokens and long-lived refresh tokens stored securely. Rotate refresh tokens, detect reuse and allow revocation on logout or compromise.",
      "keyPoints": [
        "State assumptions first.",
        "Cover correctness, security and scalability.",
        "Mention monitoring and failure handling for senior interviews."
      ]
    },
    {
      "id": 237,
      "category": "Scenario-Based Questions",
      "type": "Scenario",
      "difficulty": "Advanced",
      "tags": [
        "scenario-based-questions",
        "scenario",
        "advanced"
      ],
      "question": "How would you upload large files?",
      "answer": "Use chunked or multipart uploads, presigned object storage URLs, resumable upload tracking and background processing after upload completes.",
      "keyPoints": [
        "State assumptions first.",
        "Cover correctness, security and scalability.",
        "Mention monitoring and failure handling for senior interviews."
      ]
    },
    {
      "id": 238,
      "category": "Scenario-Based Questions",
      "type": "Scenario",
      "difficulty": "Advanced",
      "tags": [
        "scenario-based-questions",
        "scenario",
        "advanced"
      ],
      "question": "How would you implement pagination for millions of records?",
      "answer": "Prefer cursor pagination using indexed stable columns, avoid large offsets and return next cursor metadata.",
      "keyPoints": [
        "State assumptions first.",
        "Cover correctness, security and scalability.",
        "Mention monitoring and failure handling for senior interviews."
      ]
    },
    {
      "id": 239,
      "category": "Scenario-Based Questions",
      "type": "Scenario",
      "difficulty": "Advanced",
      "tags": [
        "scenario-based-questions",
        "scenario",
        "advanced"
      ],
      "question": "How would you cache frequently requested APIs?",
      "answer": "Use HTTP caching, Redis, CDN caching or application-level caches with clear invalidation and TTL strategy.",
      "keyPoints": [
        "State assumptions first.",
        "Cover correctness, security and scalability.",
        "Mention monitoring and failure handling for senior interviews."
      ]
    },
    {
      "id": 240,
      "category": "Scenario-Based Questions",
      "type": "Scenario",
      "difficulty": "Advanced",
      "tags": [
        "scenario-based-questions",
        "scenario",
        "advanced"
      ],
      "question": "How would you handle concurrent requests?",
      "answer": "Use transactions, locks, optimistic concurrency, idempotency and database constraints depending on the shared resource being modified.",
      "keyPoints": [
        "State assumptions first.",
        "Cover correctness, security and scalability.",
        "Mention monitoring and failure handling for senior interviews."
      ]
    },
    {
      "id": 241,
      "category": "Scenario-Based Questions",
      "type": "Scenario",
      "difficulty": "Advanced",
      "tags": [
        "scenario-based-questions",
        "scenario",
        "advanced"
      ],
      "question": "How would you implement API rate limiting?",
      "answer": "Track request counts per user, IP or API key in Redis and reject excess requests with 429 and retry metadata.",
      "keyPoints": [
        "State assumptions first.",
        "Cover correctness, security and scalability.",
        "Mention monitoring and failure handling for senior interviews."
      ]
    },
    {
      "id": 242,
      "category": "Scenario-Based Questions",
      "type": "Scenario",
      "difficulty": "Advanced",
      "tags": [
        "scenario-based-questions",
        "scenario",
        "advanced"
      ],
      "question": "How would you implement RBAC?",
      "answer": "Define roles, permissions and user-role mappings, then enforce authorization checks in middleware or service layer for every protected action.",
      "keyPoints": [
        "State assumptions first.",
        "Cover correctness, security and scalability.",
        "Mention monitoring and failure handling for senior interviews."
      ]
    },
    {
      "id": 243,
      "category": "Scenario-Based Questions",
      "type": "Scenario",
      "difficulty": "Advanced",
      "tags": [
        "scenario-based-questions",
        "scenario",
        "advanced"
      ],
      "question": "How would you version an API without breaking clients?",
      "answer": "Introduce a new version for breaking changes, keep old versions for migration, document differences and deprecate with clear timelines.",
      "keyPoints": [
        "State assumptions first.",
        "Cover correctness, security and scalability.",
        "Mention monitoring and failure handling for senior interviews."
      ]
    },
    {
      "id": 244,
      "category": "Scenario-Based Questions",
      "type": "Scenario",
      "difficulty": "Advanced",
      "tags": [
        "scenario-based-questions",
        "scenario",
        "advanced"
      ],
      "question": "How would you handle long-running tasks like video processing?",
      "answer": "Accept the request, create a job, process it with workers, return 202 with job status endpoint and notify the client when complete.",
      "keyPoints": [
        "State assumptions first.",
        "Cover correctness, security and scalability.",
        "Mention monitoring and failure handling for senior interviews."
      ]
    },
    {
      "id": 245,
      "category": "Scenario-Based Questions",
      "type": "Scenario",
      "difficulty": "Advanced",
      "tags": [
        "scenario-based-questions",
        "scenario",
        "advanced"
      ],
      "question": "How would you implement real-time notifications?",
      "answer": "Use WebSockets or SSE for delivery, persist notifications, use a queue for fan-out and support read/unread status.",
      "keyPoints": [
        "State assumptions first.",
        "Cover correctness, security and scalability.",
        "Mention monitoring and failure handling for senior interviews."
      ]
    },
    {
      "id": 246,
      "category": "Scenario-Based Questions",
      "type": "Scenario",
      "difficulty": "Advanced",
      "tags": [
        "scenario-based-questions",
        "scenario",
        "advanced"
      ],
      "question": "How would you secure API secrets and environment variables?",
      "answer": "Store secrets in a secret manager or environment configuration, never commit them, rotate regularly and restrict access by environment.",
      "keyPoints": [
        "State assumptions first.",
        "Cover correctness, security and scalability.",
        "Mention monitoring and failure handling for senior interviews."
      ]
    },
    {
      "id": 247,
      "category": "Scenario-Based Questions",
      "type": "Scenario",
      "difficulty": "Advanced",
      "tags": [
        "scenario-based-questions",
        "scenario",
        "advanced"
      ],
      "question": "How would you design a scalable REST API for e-commerce?",
      "answer": "Separate product, cart, order and payment concerns, use caching for product reads, transactions for orders, idempotency for payments and queues for email/inventory side effects.",
      "keyPoints": [
        "State assumptions first.",
        "Cover correctness, security and scalability.",
        "Mention monitoring and failure handling for senior interviews."
      ]
    }
  ]
};
