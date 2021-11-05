<script setup lang="ts">
    import { computed } from 'vue'
    import { Display, Direction, AlignType, JustifyType } from './types'

    interface Props {
        tag?: keyof HTMLElementTagNameMap
        display?: Display
        wrap?: boolean
        direction?: Direction
        align?: AlignType
        justify?: JustifyType
    }

    const COMPONENT_NAME = 'awe-box'

    const BOX_TYPE: Record<Display, string> = {
        flex: 'flex',
        'inline-flex': 'inline-flex',
        block: 'block',
    }

    const DIRECTION: Record<Direction, string> = {
        h: 'horizontal',
        horizontal: 'horizontal',
        v: 'vertical',
        vertical: 'vertical',
        'h-r': 'horizontal-reverse',
        'v-r': 'vertical-reverse',
        'horizontal-reverse': 'horizontal-reverse',
        'vertical-reverse': 'vertical-reverse',
    }

    const ALIGN: Record<AlignType, string> = {
        start: 'align-start',
        end: 'align-end',
        center: 'align-center',
        baseline: 'align-baseline',
        stretch: 'align-stretch',
    }

    const JUSTIFY: Record<JustifyType, string> = {
        start: 'justify-start',
        end: 'justify-end',
        center: 'justify-center',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
    }

    const props = withDefaults(defineProps<Props>(), {
        tag: 'div',
        display: 'flex',
        wrap: false,
        direction: 'h',
        align: 'stretch',
        justify: 'start',
    })

    const boxClasses = computed(() => [
        `${COMPONENT_NAME}-${BOX_TYPE[props.display]}`,
        props.wrap && `${COMPONENT_NAME}-is-wrap`,
        `${COMPONENT_NAME}-${DIRECTION[props.direction]}`,
        `${COMPONENT_NAME}-${ALIGN[props.align]}`,
        `${COMPONENT_NAME}-${JUSTIFY[props.justify]}`,
    ])
</script>

<template>
    <component :is="tag" :class="boxClasses">
        <slot />
    </component>
</template>

<style lang="stylus">
    $component-name = awe-box

    $box-type = flex, inline-flex, box

    $direction = {
        h: row
        horizontal: row
        v: column
        vertical: column
        h-r: row-reverse
        horizontal-reverse: row-reverse
        v-r: column-reverse
        vertical-reverse: column-reverse
    }

    $align = {
        align-start: flex-start
        align-end: flex-end
        align-center: center
        baseline: baseline
        stretch: stretch
    }

    $justify = {
        justify-start: flex-start
        justify-end: flex-end
        justify-center: center
        between: space-between
        around: space-around
    }

    for type in $box-type
        .{$component-name}-{type}
            display type

    .{$component-name}-flex
        &-wrap
            flex-wrap wrap
        &-inline
            display inline-flex

        for direction, value in $direction
            &-{direction}
                flex-direction value

        for name, property in $align
            &-{name}
                align-items property

        for name, property in $justify
            &-{name}
                justify-content property
</style>
