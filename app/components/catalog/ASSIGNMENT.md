# React web: memoization practice

Your React Native catalog has been ported to HTML and React state at /catalog.
Product data and save-toggle logic are preserved. This baseline uses a normal
list, not virtualization. No memoization has been implemented for you.

1. Add a Saved only checkbox controlled by boolean state.
2. Derive visibleProducts: all products when unchecked, saved products when checked.
3. Show an empty message when no products match.
4. Check that unsaving a product removes it immediately in Saved only mode.
5. Add useMemo around the visibleProducts calculation yourself.
6. Identify every reactive value the calculation reads for its dependencies.
7. Add unrelated state (for example, a practice counter) to trigger a re-render.
   Observe when filtering runs before and after useMemo, keeping inputs unchanged.
   Development Strict Mode may run calculations more than once.

Explain aloud: What value is cached? When is it recalculated? Does saving change
its dependencies? Is the calculation expensive enough to justify memoization?
Correctness should stay the same if useMemo is removed.

Later: explore React.memo for ProductRow and useCallback for toggleSaved.
Those address different problems from caching a filtered array.
