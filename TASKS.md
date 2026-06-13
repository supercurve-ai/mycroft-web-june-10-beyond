# Tasks

- [ ] Investigate the `react-hooks/exhaustive-deps` lint warning in
  `src/components/scroll-feature-slider.tsx` (the `useEffect` at ~line 265 is
  missing the `slides` dependency). Decide whether to add the dependency or
  restructure the effect — changing hook deps can alter slider behavior, so
  verify the scroll slider still works afterwards.
