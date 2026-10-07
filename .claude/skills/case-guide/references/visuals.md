# Visuals

Every visual must teach something the text alone teaches less well: a scene the reader cannot picture, a sequence, a comparison of numbers, a structure. Do not add a visual that repeats a paragraph.

## Illustrations (Codex imagegen)

Use for scenes: rooms, apparatus, the participants' situation, and clearly labelled invented scenarios (such as an Indian family scene for Section D).

Run `bash .claude/skills/case-guide/scripts/imagegen.sh <prompt-file> <output-name> [reference-image]`. The script runs `codex exec` with the built-in `image_gen` tool, then copies the newest image from `~/.codex/generated_images/` into `_private/imagegen/out/<output-name>.png`. Codex's sandbox cannot write into the project, so the script does the copy. Then convert with `python .claude/skills/case-guide/scripts/to_webp.py <png> <public-name>`.

Prompt pattern (write it to a `.txt` file in `_private/imagegen/`):

```
Use the built-in image_gen tool to generate ONE image. Do not read files or run shell commands. Report the saved path.
[If a reference image is attached:] The attached image is a STYLE REFERENCE ONLY: match its painting style, light and palette, not its setting.
Image spec (landscape 3:2, about 1536x1024): <setting, period, viewpoint>.
- <each person: age, period clothing, pose, expression, what they hold>
- <every object the paper lists, with sizes>
- <what must NOT be present>
Style: warm painterly mid-century editorial illustration, soft daylight, muted petrol blue, soft gold, warm greys, off-white, the key object brightest. Calm documentary tone. No injury or frightening expressions.
Strict: no text, letters, numbers, logos, watermarks or captions anywhere.
```

Keep a consistent house style by attaching the case's first approved image as a style reference for later images.

Inspect every image before use, at full size:
- Every object the paper names is present and of the right size; nothing anachronistic (the first Bobo image had a "tablet" that had to be edited into an ink-pad tin).
- People's number, age, sex and actions match the procedure step.
- No text or pseudo-text.

Fix small errors with an edit run (attach the image with `-i` and ask for one change only). Tag historical scenes `tag="reconstruction"` and invented scenes `tag="invented"` on the `<Figure>`. Captions tell the reader what to notice.

## Code-drawn visuals

Use components, not images, for anything with numbers, order or structure:

- `<ColumnChart>`: grouped columns on desktop, automatic horizontal bars on phones, a table view, and a source line. Use the paper's own table values. Series colours: girls `#2F6FB0`, boys `#C8752B` (validated for colour-blind separation), or other validated pairs. Mark invented data with `invented`.
- `<Sequence>`: a real sequence of stages (rooms, phases). Keep it text-only when full figures follow on the same page.
- `<Timeline>`: dated events, marked study / theory / practice.
- Case-specific diagrams go in `src/components/cases/<slug>/` (for example the Bobo `Allocation` unit chart, one dot per child).

Check each visual's meaning: numbers match the source, groups and arrows mean what the text says, legends present for two or more series, labels readable at 390 px.

Before choosing chart colours, run the dataviz skill's palette validator on any new palette.
