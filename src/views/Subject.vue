<template>
  <div class="subjectContainer">
    <div class="subjectHeadingContainer">
      <div class="subjectHeading" :class="currentSubject.backgroundClass">
        {{currentSubject.heading}}
      </div>
    </div>
    <div class="bandsContainer">
      <div v-for="(band, idx) in currentBands" :key="idx"
        @click="goToBand(band.id)"
        class="bandContainer"
      >
        <div class="bandTitleImage" :class="band.backgroundClass">
        </div>
        <div class="bandInfo">
          <div class="bandHeading">{{band.heading}}</div>
          <div v-if="band.latestRead" class="bandLastRead"
            @click.stop="goToPage(band.id, band.latestRead.pageId)">
            <div class="latestText">zuletz </div>
            <div class="latestTeaser">{{band.latestRead.teaserText}}</div>
            <div class="latestIcon"></div>
          </div>
          <div class="bandTeaser"> {{band.teaserText}} </div>
        </div>
      </div>
      <div class="teacherStoreButton">
        <button class="addBandButton"
        v-on:click="showTeacherStore = !showTeacherStore">
          <fa :icon="plusIcon" class="icon plus-icon"></fa>
          Band hinzufügen
        </button>
      </div>
      <div>
        <transition name="teacherStore">
          <box-content-frame
            class="teacherStore"
            v-show="showTeacherStore" frameFlavour="teacherStoreFrameFlavour">
            <div class="teacherStorClose">
              <fa @click="showTeacherStore = !showTeacherStore" :icon="closeIcon" class="icon"></fa>
            </div>
            <TeacherStore></TeacherStore>
          </box-content-frame>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Subject } from '@/store/data/subjects';
import { Band } from '@/store/data/band';
import SubjectStore from '@/store/subject-module';
import BandStore from '@/store/band-module';
import { Router, useRouter } from 'vue-router';
import { Prop } from 'vue-property-decorator';
import BoxContentFrame from '../components/menus/box-content-frame.vue';
import TeacherStore from '../components/ecosystem/teacher-store.vue';

@Options({
  components: { BoxContentFrame, TeacherStore },
})
export default class BandComponent extends Vue {
  @Prop({ type: String })
  private subjectId = '';

  private currentSubject = {} as Subject;

  private currentBands = [] as Band[];

  mounted(): void {
    this.currentSubject = SubjectStore.subjectWithId(this.subjectId);
    this.currentBands = BandStore.bandsWithIds(this.currentSubject.bandIds);
  }

  private router: Router = useRouter();

  goToBand(bandId: string): void {
    this.router.push(`/band/${bandId}`);
  }

  goToPage(bandId: string, pageId: string): void {
    this.router.push(`/band/${bandId}/page/${pageId}/`);
  }

  private showTeacherStore = false;

  private plusIcon = 'plus';

  private closeIcon = 'times';
}
</script>

<style lang="scss">

@import "../colors";
@import "../text";
@import "../style";

.subjectContainer {
  margin-left: 10%;
  margin-right: 10%;

  .subjectHeadingContainer {
    display: flex;
    justify-content: center;
    margin-bottom: 35px;

    .subjectHeading {
      border-radius: 15px;
      background-size: cover;
      padding: 35px;
      @include slider-heading;
      text-align: center;
      width: 70%;
      float: center;
      color: $color_grey_0;
    }
  }

  .bandsContainer {

    .bandContainer {
      @include drop-shadow-elevation-1;
      display: flex;
      border-radius: 15px;
      background-color: $color_grey_0;
      margin-bottom: 20px;

      &:hover {
          cursor: pointer;
        }

      .bandTitleImage {
        background-size: cover;
        border-radius: 15px 0px 0px 15px;
        width: 20%;
      }

      .bandInfo {
        padding-left: 10px;
        width: 80%;
        padding-right: 10px;

        .bandHeading {
          @include slider-heading;
          padding-top: 10px;
          padding-bottom: 10px;
        }

        .bandTeaser {
          @include info-text;
          margin-bottom: 10px;
          padding-bottom: 10px;
        }

        .bandLastRead {
          border-radius: 15px;
          background-color: $color_grey_8;
          display: flex;
          align-content: center;
          padding-top: 1px;
          padding-bottom: 1px;
          padding-left: 10px;
          padding-right: 10px;
          margin-bottom: 5px;
          width: 50%;
          white-space: nowrap;

          .latestText {
            @include info-text;
            color: $color_grey_3;
            padding-right: 5px;
          }

          .latestTeaser {
            @include info-heading;
            color: $color_grey_1;
            overflow: hidden;
            text-overflow: ellipsis;
          }

        }
      }
    }
  }

}

.teacherStoreButton {
  display: flex;
  justify-content: flex-end;
  .addBandButton {
    @include text-icon-button;
    background-color: $color_green_1;
    color: $color_green_9;
    border: transparent;

    .plus-icon {
      color: $color_green_6;
    }
  }
}

.teacherStoreFrameFlavour {
  @include drop-shadow-elevation-3;
  border: 2px solid $color_grey_3;
  background-color: $color_grey_0;
  padding: 16px !important;
}

.teacherStore {
  position: absolute;
  width: 80%;
  left: 50%;
  top: 10%;
  -webkit-transform: translate(-50%, 0);

  .teacherStorClose{
    display: flex;
    justify-content: flex-end;

    .icon {
      color: $color_grey_3;
      width: 10px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}

$animation-depth: 40px;

@mixin transition {
  transition: all 89ms ease-out;
}

.teacherStore-enter-from {
  opacity: 0;
  transform: translate(-50%, -$animation-depth);
}

.teacherStore-enter-active {
  @include transition;
}

.teacherStore-leave-active {
  @include transition;
}

.teacherStore-leave-to {
  opacity: 0;
  transform: translate(-50%, -$animation-depth);
}

.frenchRev {
  background-image: url('~@/assets/menu-images/french-revolution.jpg');
}

.cubaCrisis {
  background-image: url('~@/assets/menu-images/cuba-crisis.jpg');
}
</style>
