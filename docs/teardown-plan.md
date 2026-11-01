# Pronaj teardown plan

Build two machines with the teardown skill. Leave the greenhouse as a page until there is a real section drawing. The skill the agent must follow, unchanged, is [portfolio/docs/teardown-skill.md](../../portfolio/docs/teardown-skill.md) (upstream: [elvarofficial/teardown](https://github.com/elvarofficial/teardown), MIT).

Do not add three.js to this Next app. Each simulator is one offline HTML page the skill emits. It lives on its own route and is linked from the sector page. It is not part of the first paint of `/`, `/living`, or `/global`.

Install and the nine prompts are in the skill doc. Run them from this repo so `./teardown-out` is created here. Add `teardown-out/` to `.gitignore`. Copy only the finished file under 1 MB into `public/sim/`.

## What is in the model, and what is a label

A gauge has to be a function of the one input. If a number on the marketing page cannot be derived, it stays a caption and never a live readout.

| On the site today | In the model | Treatment |
|---|---|---|
| ISO box size (20 ft, 40 ft, 2×, 3×) | Yes | External size from ISO 668. 20 ft: 6.058 × 2.438 × 2.591 m. 40 ft: 12.192 × 2.438 × 2.591 m. Internal floor used for the area gauge is 5.898 × 2.352 m and 12.032 × 2.352 m. |
| Page areas 160 / 320 / 640 / 960 sq ft | No | Those are rounded brochure figures. The area gauge shows the ISO floor you computed. Write both numbers in the hand check. Do not force the mesh to hit 160. |
| Prices, "From $45,000", sustainability 92 / 88 / 85 / 82 | No | Captions only. |
| "Solar Ready" and "Solar Capacity 5 kW" | Nameplate only | A roof patch may be labelled 5 kW. Do not simulate irradiance, yield, or a sun path from that phrase. |
| Cocopeat compression 5:1, moisture &lt; 20%, pH 5.5–6.5, EC &lt; 0.5 mS/cm, 5 kg and 25 kg packs | Yes, with the assumption written on the panel | See the press below. |
| Greenhouse tons/year, "40% water saved", "30% yield", "50+ data points" | No | Brochure. Do not build this machine from `GreenhouseBreakdown`. |

Hand-check the container before any geometry: 12.032 × 2.352 = 28.30 m² = 304.6 sq ft for one 40 ft floor. Two boxes are 609 sq ft, three are 914 sq ft, against the page's 320 / 640 / 960. 20 ft internal floor is 13.87 m² = 149.3 sq ft, against the page's 160. Show that check in the model file.

## 1. Container shell

This is the first machine. Closest upstream example: the Cessna gear, because one stroke poses the whole assembly.

**Routes.** Link "Take it apart" from `/living/container-housing` to `/living/container-housing/simulator`. The route iframes `/sim/container.html`. The link is text beside the existing model picker, not a new hero.

**Reference, before the build prompt.** Save a drawing into `docs/teardown-refs/container/`. An ISO 668 general-arrangement drawing is a valid reference for the shell, the corner castings, and the doors. A stock photo of a finished tiny house is not a measured interior. Until someone photographs or dimensions our fit-out, the machine is the steel box: corrugated shell, corner castings, doors, and the joint where a second and third box seat. Kitchen, bath, and porch are buttons that isolate those openings only if the drawing shows them. Otherwise those words stay off the callouts.

**One input.** `seat`, from 0 to 1.

- Studio 20 and Compact 40 are one box. `seat` opens the doors (0 shut, 1 open) and the section plane rides with it, so the cut and the doors are the same function.
- Family Double is two 40 ft boxes. `seat` slides the second box from 2.4 m apart to seated on the long joint.
- Executive Triple adds the third box over the second half of the same 0..1 range: 0–0.5 seats the second, 0.5–1 seats the third. Still one input. Write that split in the model and show it on the console.

The model picker on the page (Studio 20, Compact 40, Family Double, Executive Triple) is a parameter, like destination on a voyage. It changes which function `seat` runs. It is not a second animation.

**Buttons.** Isolate shell, doors, corner castings, and the joint. Cut, glass, solid. Cameras: hero 3/4, long side, door end, top, inside the section. The accent is the box that is moving.

**Console, 1600×900.** Title and the live number: boxes seated, and internal floor m² from the ISO sizes above. A 2D plan view redrawn from the same `seat`. Callouts only for parts in the reference. No price, no sustainability score.

**Look.** Pale studio, one accent on the moving module. Corrugation is geometry, not a photo stretched on a box. Metal roughness at least 0.45. Near-white liners get an ink edge.

**Bonus slider.** Door or joint gap past the seated stop, so a visitor can see the seal open. Same model.

**Ship.** `public/sim/container.html` under 1 MB, shaders warmed, quality tiers, reduced motion holds frame 0. Preview card 1200×630 from frame 0, absolute image URL. `teardown-out/` stays gitignored.

## 2. Cocopeat press

Start this only after the container page is up and a reference exists. Closest example: the Cessna stroke, a ram along one axis.

**Reference gate.** There is no press photo or manual in this repo. Stop and ask for one picture of the real machine, or a page from its manual, and save it at `docs/teardown-refs/cocopeat/`. Do not invent a generic hydraulic press. The pipeline steps on `/global/cocopeat` (production, packaging, export, delivery) are a supply chain, not the mechanism. The machine is the baler that turns loose peat into a block.

**Route.** `/global/cocopeat/simulator`, iframe `/sim/cocopeat.html`, linked from the cocopeat page once the reference is in the repo.

**One input.** `stroke`, 0 loose to 1 fully pressed.

**Numbers that may drive gauges.**

- Compression 5:1, from `src/components/global/cocopeat-pipeline.tsx`. Treat it as uniaxial: the ram travel closes the chamber to one fifth of the loose height. Write that assumption on the panel. The live numbers are chamber height and volume ratio, both `f(stroke)`.
- Moisture ends under 20% at stroke 1. If we do not have a measured curve, moisture is a straight interpolation from a stated loose value to 18% and the panel says the curve is assumed. Do not draw a smooth chart that pretends to be lab data.
- pH 5.5–6.5 and EC &lt; 0.5 mS/cm are properties of the finished material, constant on the spec plate, not a time series.
- 5 kg blocks and 25 kg bales are a pack-size parameter, same as the container model picker. Mass is not animated.

**Hand check.** Loose height H, pressed height H/5, ratio 5. State H from the reference. If the reference has no height, pick nothing and stop.

**Buttons.** Isolate ram, chamber, block. Cut the chamber. Cameras: 3/4, side section, top. Accent on the ram.

**Bonus slider.** A second peat charge or a moisture start value, still feeding the same stroke function.

## 3. Greenhouse — do not build yet

`src/components/global/greenhouse-breakdown.tsx` lists climate control, drip irrigation, a 16-hour lamp cycle, ventilation, "50+ data points", and crop yields (tomatoes 45 tons/year, peppers 30, cucumbers 35, leafy greens 20, plus 40% water and 30% yield). Those are brochure lines. The skill will turn them into a generic glass house.

Build this only after a section drawing is saved at `docs/teardown-refs/greenhouse/` and someone marks which of those figures are measured. The one input, when that day comes, is hour of day, and the only gauges are quantities on the drawing. Until then, do not add a simulator link on `/global/greenhouse`.

## Order

1. Install the skill. Read `portfolio/docs/teardown-skill.md` and run a bundled example (`v8-live` or `cessna-live`) once, so the toolchain is real, before any Pronaj geometry.
2. Save the ISO reference under `docs/teardown-refs/container/`. Write the hand check (the square-foot table above) into the model file.
3. Build the container with prompts 1–5 of the skill. Review the stills. Publish `public/sim/container.html` and the iframe route. Link it from the container-housing page.
4. Stop for a press photo. Then repeat for cocopeat.
5. Leave the greenhouse blocked.

## Done when

- Container: `seat` poses every part and every live number; the ISO hand check is visible in the source; brochure price and sustainability % are absent from the console; the page is under 1 MB; a still sheet has been read; reduced motion does not autoplay.
- Cocopeat: not started without a file in `docs/teardown-refs/cocopeat/`; stroke, height, and the 5:1 ratio share one function; the moisture curve is labelled if it is assumed.
- Greenhouse: no route, no link, no mesh.
- Neither simulator is imported into the home page or the global landing page.
