# Overview //how to run the project

## Install dependencies

npm install

## Run the development server

npm run dev

## Dentist Find - Interview Project

## 1. Component & Styling Decisions

### Structure

1. I kept the architecture flat and simple. You'll notice `PracticeSummaryCard` is the main container, and smaller sub-components like `Metric` and `StatusBadge` sit right alongside it.
   - **Why?** I did that because until these components are needed in at least one other place, abstracting them too early adds file-hopping friction without adding value. If the app grew, I'd move them to a shared `/ui` folder immediately.

2. I declared strict types for the data displayed in the PracticeSummaryCard component. Ensuring that there are no `any` types in the code.

### Styling

I chose **Tailwind CSS**.

- It lets me prototype effectively at the speed of thought.
- It forces consistency. Instead of guessing "is this margin 18px or 20px?", I'm locked into the `m-4` / `m-5` scale, so everything aligns naturally.
- It's easy to delete. If I delete a component, its styles die with it.

### Consistency & Responsiveness

- **Visuals:** heavily relied on `slate` for neutrals and `indigo` for primary actions to keep it clean.
- **Mobile-first:** The card uses flexbox layouts that naturally wrap (like the metrics grid), so it doesn't break on narrow screens. I used widely supported flex gaps to handle spacing evenly.

## 2. Scaling & Real-World Use

### Integration into PracticeFuel

If this were landing in the real dashboard:

- I'd pull the `status` logic (the "High Performer" vs "At Risk" calculation) out of the UI component and into a utility helper or hook. Business logic shouldn't live in the view layer.
- I'd define a stricter TypeScript schema for the `PracticeSummary` data coming from the API (using Zod) to catch runtime errors early.

### One Extra Day?

If I had 24 more hours, I would focus on:

1. **Accessibility:** The trend chart is visual-only right now. I'd add a screen-reader-only table or description element so visually impaired users know the trend is "upward" or "volatile."
2. **Unit Tests:** Specifically for the `StatusBadge`. I want to be 100% sure that a `19%` conversion rate triggers the correct warning state.
3. **Loading States:** A skeleton loader would make the perceived performance much snappier while data fetches.

## 3. Time Management

Here is roughly how the 2 hours broke down:

1. **Setup (15m):** initializing Vite, cleaning up boilerplate, and reading the prompt requirements.
2. **Layout & Structure (45m):** Getting the semantic HTML in place and deciding on the component interface (`MetricProps` etc).
3. **Styling & Polish (40m):** Tweaking the Tailwind classes to match the design (obsessing over that shadow and border-radius!).
4. **Refactoring & Docs (20m):** Moving types to their own files (breaking out `MetricProps`) and writing this README.
