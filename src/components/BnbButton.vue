<script setup lang="ts">
type Size = 'sm' | 'lg';
type BgColor = 'dark' | 'primary' | 'gradient';

const props = defineProps<{
  label?: string;
  to?: string;
  href?: string;
  target?: string;
  icon?: string;
  iconRight?: string;
  iconLeft?: string;
  border?: string;
  size?: Size;
  bgColor?: BgColor;
  rounded?: boolean;
  shadow?: boolean;
  round?: boolean;
}>();

const onHover = (event: any): void => {
  if (props.bgColor === 'gradient') {
    const button = event.target;
    const rect = button.getBoundingClientRect();
    const x = ((event.clientX - rect.left) * 100) / button.clientWidth;
    const y = ((event.clientY - rect.top) * 100) / button.clientHeight;
    button.style.setProperty('--mouse-x', x.toString());
    button.style.setProperty('--mouse-y', y.toString());
  }
};

const iconUrl = new URL(props.icon ?? '', import.meta.url).href
const iconLeftUrl = new URL(props.iconLeft ?? '', import.meta.url).href
const iconRightUrl = new URL(props.iconRight ?? '', import.meta.url).href
</script>

<template>
  <button
    :id="`bnb-button-${bgColor}`"
    class="bnb-button"
    :class="{
      round: round === true,
      rounded: rounded === true,
      shadow: shadow === true,
      'round-shadow': shadow && round,
      'bg-black': bgColor === 'dark',
      'bg-primary': bgColor === 'primary',
      'bg-gradient': bgColor === 'gradient',
      'border-dark': border === 'dark',
      'border-light': border === 'light',
      'button-sm': size === 'sm',
      'button-lg': size === 'lg',
    }"
    v-on:mousemove="onHover"
  >
    <img v-if="icon" :src="iconUrl" />
    <img v-if="iconLeft" :class="{ 'icon-left': !iconRight }" :src="iconLeftUrl" />
    <span v-if="label">{{ label }}</span>
    <img v-if="iconRight" :class="{ 'icon-right': !iconLeft || !label }" :src="iconRightUrl" />
  </button>
</template>

<style lang="scss" scoped>
.bnb-button {
  transition: all linear 0.1s;
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  &:hover {
    background-color: #f7f7f7;
  }
}

.icon-left {
  padding-right: 8px;
}

.icon-right {
  padding-left: 8px;
}

.shadow:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.button-sm {
  padding: 6px 8px 6px 12px;
}

.button-lg {
  padding: 14px 36px;
  min-width: 160px;
}

.border-dark {
  border: solid 1px #222;
}

.border-light {
  border: solid 1px #ddd;
}

.rounded {
  border-radius: 32px !important;
}

.round {
  padding: 10px;
  border-radius: 32px !important;

  &-shadow {
    box-shadow: 0px 0px 0px 1px transparent, 0px 0px 0px 4px transparent, 0px 2px 4px rgb(0 0 0 / 18%) !important;
  }
}

.bg-black {
  border: solid 1px #222;
  background-color: #222;
  color: white;

  &:hover {
    background-color: black;
  }
}

.bg-primary {
  border: solid 1px #ffa666;
  background-color: #ffa666;
  color: white;

  &:hover {
    background-color: #ffa666;
  }
}

.bg-gradient {
  --mouse-x: 50;
  --mouse-y: 50;
  background-size: 200% 200%;
  background-position: calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%);
  background-image: radial-gradient(circle, #ffa666 0%, #ff552f 80%, #e13838 100%);
  border: solid 1px #ffa666;
  color: white;
}
</style>
