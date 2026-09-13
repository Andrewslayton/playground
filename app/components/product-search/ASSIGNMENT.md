# Debounced product search

Practice useState, useEffect, useRef, and extracting a custom hook.
This is an original interview exercise. UI and hook implementation are yours.

## Stage 1: input and focus

Build a labeled controlled search input. Add a Focus search button using useRef.
Create a named focusSearchInput handler. Typing should update the input immediately.

## Stage 2: debounce

Wait until the user stops typing for 400 ms before updating a debounced query.
Implement this in ProductSearch first. Clean up the previous timer on each change.
Hint: distinguish the text currently in the input from the query ready to search.

## Stage 3: asynchronous search

Call the supplied searchProducts(query, signal?) API for the debounced query.
Display loading, success results, no matches, and error states distinctly.
For an empty or whitespace-only input, clear results/error/loading and skip searching.
An older response must not replace newer results, errors, or loading state.
Handle cleanup when the query changes or the component unmounts.
The optional AbortSignal supports cancellation; cancellation is not a user-facing error.
Choose a clear policy for old results while a new query is pending.

## Stage 4: extract the hook

Move working debounce behavior into useDebouncedValue(value, delayMs).
Its current return value is only a placeholder; it does not debounce.
Keep search requests and their lifecycle in ProductSearch.

## Supplied API

searchProducts returns Promise<Product[]>; products have id, name, and price.
Search is case-insensitive and ignores leading/trailing whitespace.
One-character queries take 1800 ms; longer queries take 300 ms.
The exact query error rejects so you can test error handling.
The query zzzz produces no matches. No live API or credentials are needed.

## Manual checks

- Type wireless quickly: search once after typing pauses for 400 ms.
- Type w, wait about 500 ms, then replace it with mouse: the slow w result must not overwrite mouse.
- Clear input while a request is pending: results must stay cleared.
- Search error, then headphones: the error should clear and results recover.
- Search zzzz: show no matches, not an error.
- Click Focus search: the cursor moves into the input.
- Navigate away while a timer/request is pending: cleanup should run.
- Development Strict Mode can run an extra effect setup/cleanup cycle; your cleanup should support it.

## Explain aloud

What causes each effect to run? When does cleanup run? Why does typing state live
in useState while the input element lives in useRef? Why not make the effect
callback itself async? How can an old response overwrite a new one? What makes
useDebouncedValue reusable?

Start with Stage 1. Ask for hints one step at a time.
