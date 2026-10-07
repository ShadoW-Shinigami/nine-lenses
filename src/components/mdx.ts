// Components available in every case page without an import line.
import Note from './Note.astro';
import Term from './Term.astro';
import SourceCheck from './SourceCheck.astro';
import Callout from './Callout.astro';
import Try from './Try.astro';
import Figure from './Figure.astro';
import Quote from './Quote.astro';
import Sequence from './Sequence.astro';
import ColumnChart from './charts/ColumnChart.astro';
import SubpageGrid from './SubpageGrid.astro';
import Timeline from './Timeline.astro';

export const mdxComponents = { Note, Term, SourceCheck, Callout, Try, Figure, Quote, Sequence, ColumnChart, SubpageGrid, Timeline };
