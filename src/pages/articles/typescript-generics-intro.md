---
title: "TypeScript Generics - Recover your type checks and IntelliSense"
date: "2020-04-16"
---

In this article, you are going to learn how to keep your type checks, create reusable functions and types, and also the importance and benefits of choosing your types correctly.

## The Problem

While you are coding, you might find yourself writing duplicated code and instantly wondering how to make it more _DRY_ (Don't repeat yourself).
In this case, you would extract the reused code into a function or class and then proceed to remove the duplicated code from your codebase.

While you are trying to create reusable code, the first thing that may come to your mind is using _any_, but that is entirely wrong, as soon as you begin using _any_ you lose all the advantages typescript has to offer.

<figure>
  <p>
    <a href="https://dev-to-uploads.s3.amazonaws.com/i/uphkogn28imle6kxu6y8.gif" class="article-body-image-wrapper">
      <img src="https://dev-to-uploads.s3.amazonaws.com/i/uphkogn28imle6kxu6y8.gif" alt="Type checks while using any" loading="lazy">
    </a>
  </p>
  <figcaption>While you are using <b>any</b> you lose all typechecks</figcaption>
</figure>

As you can see in the example code above, while you are using _any_, the compiler cannot perform any type checks on the function parameters and cannot tell what the return type is, So it just types it as _any_.
As you may know, a variable typed as [_any_](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) can be assigned any value type. That's why we can pass objects and functions as function parameters.

While you were using _any_, the compiler was not able to provide any _Type_ information, autocompletion, or IntelliSense to the developer. There are two ways of recovering the type checks:

1. Tell the compiler the exact Type of the variable, but this requires the developer to set it correctly, plus it's prone to human error.
2. Use Generics.

**Rule of thumb**: Avoid using [_any_](https://www.typescriptlang.org/docs/handbook/basic-types.html#any), you should be able to find a better alternative almost every time.

## Generics to the Rescue

What are Generics? In simple words, Generic types are a way of creating re-usable types or let the compiler infer the type of property, parameter, or function. These features allow us to compose types this way, creating even more complex objects.f

<figure>
  <p>
    <a href="https://dev-to-uploads.s3.amazonaws.com/i/uvad3j1q4ijm56bffn9b.gif" class="article-body-image-wrapper">
      <img src="https://dev-to-uploads.s3.amazonaws.com/i/uvad3j1q4ijm56bffn9b.gif" alt="Type checks while using generics" loading="lazy">
    </a>
  </p>
  <figcaption>By using generics the compiler is able to infer the correct type for each parameter, this also works for the return type</figcaption>
</figure>

The code above uses generics, and you can quickly tell that by doing so, you have recovered the type checks on your code. Now the compiler can infer the correct parameter types and return types of the function. That's why now those parameters that shouldn't be accepted are underlined by the squiggly red line.

But what does that thing `<T>` even mean 😨?
Well, that is commonly called _diamond interface_, _diamond operator_ or just _angle brackets_ you can imagine it like this, just like `()` serves for declaring function parameters, `<>` serves for declaring Type parameters. So, in this case, `T` is a type parameter for our function, in the previous example, typescript inferred the type of _T_, but you can tell the compiler explicitly what type you expect it to be.

![explicit type parameter](https://dev-to-uploads.s3.amazonaws.com/i/s4vq06ipmcqvlh6rdevx.gif)

In the example above, by placing the expected Type between the angle brackets, we are setting explicitly the type we expect the function's parameters to be. Here `excludeValueTyped<string>(numberArray, "199");` we tell the function that `T` is of type _string_ therefore _source_ is now of type `string[]` and _excludedVal_ is now of type _string_ That's why _numberArray_ of type `number[]` is marked with an error.

I invite you to experiment with this code so you can better understand what is going on with the compiler. Try to set the correct types explicitly and make sure the te parameters match with the correct type.

```typescript
const numberArray = [1, 23, 45, 199, 34, 5]
const stringArray = ["using", "generics", "is", "cool"]

function excludeValueTyped<T>(source: T[], excludedVal: T): T[] {
  return source.filter(e => e !== excludedVal)
}

let filteredNumbers = excludeValueTyped<string>(numberArray, "199")
filteredNumbers = excludeValueTyped<boolean>(numberArray, 100)

let filteredStrings = excludeValueTyped<number>(stringArray, "any")
filteredStrings = excludeValueTyped(stringArray, {})
filteredStrings = excludeValueTyped<Function>(stringArray, () => {})
```

## Generic Interfaces and Classes

We are also able to create Generic Interfaces and Classes that can be composed into even more complex Types.

### The issue

Imagine that you are requesting data to a REST API, and every response has an envelope. When you define the interfaces that describe the responses of each endpoint, you will create something like this.

```typescript
export interface Product {
  name: string
  description: string
  unitPrice: number
  category: Category
}

export interface Category {
  name: string
  description: string
}

export interface ProductListResponse {
  statusCode: number
  result: Product[]
  errors?: Error[]
}

export interface ProductDetailResponse {
  statusCode: number
  result: Product
  errors?: Error[]
}
export interface CategoryListResponse {
  statusCode: number
  result: Category[]
  errors?: Error[]
}
export interface CategoryDetailResponse {
  statusCode: number
  result: Category
  errors?: Error[]
}
```

As you can tell, the code above doesn't feel just ok. I mean, it works, but there is some room for improvement and opportunity to remove duplicated lines of code.
Each Response has the same properties in common, and it seems like a waste of effort and space, writing them over and over again. Besides that, later on, if the API developers decide to incorporate another field to the response envelope. The maintenance cost of each response increases for each Response Interface you define.

### The Solution

Here comes once again Generics to the rescue. What we need to do is identify the properties in common and move them to a reusable _Interface_.
The use of Generics in _Interfaces_ is similar to functions. You have to append the angle brackets to the interface's name like this `MyGenericInterface<T>` and pass the Type parameters.

```typescript
export interface Product {
  name: string
  description: string
  unitPrice: number
  category: Category
}

export interface Category {
  name: string
  description: string
}

export interface ApiResponse<T> {
  statusCode: number
  result: T
  errors?: Error[]
}

export type ProductListResponse = ApiResponse<Product[]>
export type ProductDetailResponse = ApiResponse<Product>
export type CategoryListResponse = ApiResponse<Category[]>
export type CategoryDetailResponse = ApiResponse<Category>

export const productListResponse: ApiResponse<Product[]> = {}
export const productDetailResponse: ProductDetailResponse = {}
export const categoryListResponse: CategoryListResponse = {}
export const categoryDetailResponse: ApiResponse<Category> = {}
```

In the example above, we create a generic _Interface_ that takes `T` as a Type Parameter and sets it to _Result_ `ApiResponse<T>` this way, you have only one wrapper defined and you have to define each _Result_ type. The benefits of using this syntax are immediate. Now you can easily compose _Types_, define _Type aliases_, and if you try to assign a value to each _const_, the editor helps you auto-complete each object's properties.

As you can see in the code above, I assigned each _const_ a Type. Some of them are aliases, and the other ones are Interfaces composed inline. I've intentionally done that composition, so you can notice it makes no difference the way you assign the type. You always get the same benefits.

**Pro tip**: in Visual Studio Code you can activate [Intellisense](https://code.visualstudio.com/docs/editor/intellisense) (code completion) by placing your cursor inside the empty object and pressing
<kbd>Ctrl</kbd>+<kbd>Space</kbd>

Wait, what's that? Now they added a paginated endpoint 😲. No problem, you only need to create another _Generic Interface_ to define the shape of the pagination wrapper.

```typescript
export interface Product {
  name: string
  description: string
  unitPrice: number
  category: Category
}
export interface ApiResponse<T> {
  statusCode: number
  result: T
  errors?: Error[]
}

export interface PagedResponse<T> {
  currentPage: number
  pageCount: number
  pageSize: number
  rowCount: number
  firstRowOnPage: number
  lastRowOnPage: number
  items: T[]
}

export type PaginatedResponse<T> = ApiResponse<PagedResponse<T>>

export type PaginatedProductListResponse1 = ApiResponse<PagedResponse<Product>>
export type PaginatedProductListResponse2 = PaginatedResponse<Product>
```

In the example above, I created the interface `PagedResponse<T>` that defines the shape of the pagination object. Once created, I can create composite Types by defining _Type aliases_ that can also be generic by themselves.
If you are still confused about what is the shape of the composed type, `ApiResponse<PagedResponse<Product>>` looks like, here is an example of it to help you better understand what's going on.

```typescript
// shape of ApiResponse<PagedResponse<Product>>
{
  // ApiResponse
  statusCode: number;
  result: {
    // PagedResponse
    currentPage: number;
    pageCount: number;
    pageSize: number;
    rowCount: number;
    firstRowOnPage: number;
    lastRowOnPage: number;
    items: {
      // Product
      name: string;
      description: string;
      unitPrice: number;
      category: Category;
    }[];
  };
  errors?: Error[];
}
```

The same principles apply when defining generic classes. The following is an example of how you can do it.

```typescript
export class MyBaseClass<T> {
  constructor(param: T) {
    console.log(param)
  }
}
export class MyClass<T, K, ValType> extends MyBaseClass<ValType> {
  private field: T
  getValue(): T {
    return this.field
  }
  setValue(value: K) {}
  convertVal<ValType>(): ValType[] {
    // ... process it
    return []
  }
}
```

![Looks Good](https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif)

  <figcaption>Looking Good!</figcaption>

**Now go and recover your type checks!!**<br>

## Conclusion

In this article, I talked about the many benefits of using generics and some of the problems they solve. I have seen many new developers struggle with _any_ and losing their type checks. After reading this article, I hope you go to your code, remove most of the _any_ you've used, and refactor it to be generic.

Thanks for reading,<br>
Julio Mixco
