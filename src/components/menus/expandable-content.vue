<script lang="ts">
import { Vue } from 'vue-class-component';

export default abstract class ExpandableContent extends Vue {
  abstract expand (): void ;

  abstract collapse (): void;
}
</script>
