<template lang="md">

# Auto Complete (Not Recommended)

`BmAutoComplete` component renders an` input` element by default. You can define your own form component in the slot to instead.

## Notice

1. AutoComplete is a **not recommended** class by the offical BaiduMap JS API because of its poor customization.
2. If you have advanced UI customization requirements for the auto completed search box, It's recommended to use the [BaiduMap Web API](http://lbsyun.baidu.com/index.php?title=webapi/guide/webservice-placeapi) for requesets, and uses the response data with your custom UI components.
3. The popup of this component is sometimes overridden by another element, and you need to manually wrap the CSS class `.tangram-suggestion-main` and specify the` z-index` attribute to adjust it.
4. This component may be removed from version 1.0.0 and implemented in a better way in other component libraries.

## Instance Properties

|name|type|default|description|
|------|:---:|:---:|----|
|location|String, Map, Point|map|Set the range of the returned result.|
|types|'city', None||The response data type. 'city' or none.|


## Events

|name|parameter|description|
|------|:--:|----|
|searchcomplete|AutocompleteResult|Triggers when after searching.|
|confirm|{type,target,item}|Triggers when select an item.|
|highlight|{type,target,fromitem,toitem}|Triggers when highlight an item.|

## CSS Hooks

|name|描述|
|---|---|
|tangram-suggestion-main|The popup CSS hook.|

## Example

### Using CustomControls, AutoComplete and LocalSearch component

#### Code

```html
<baidu-map :center="{lng: 116.403765, lat: 39.914850}" :zoom="11">
  <bm-view class="map"></bm-view>
  <bm-control :offset="{width: '10px', height: '10px'}">
    <bm-auto-complete v-model="keyword">
      <search-field placeholder="Keywords"></search-field> <!-- This is a custom search box component -->
    </bm-auto-complete>
  </bm-control>
  <bm-local-search :keyword="keyword" :auto-viewport="true" ></bm-local-search>
</baidu-map>

<script>
export default {
  data () {
    return {
      keyword: ''
    }
  }
}
</script>

<style>
.tangram-suggestion-main {
  z-index: 1;
}
</style>
```

#### Preview

<doc-preview>
<baidu-map :center="{lng: 116.403765, lat: 39.914850}" :zoom="11">
  <bm-view class="map"></bm-view>
  <bm-control :offset="{width: '10px', height: '10px'}">
    <bm-auto-complete v-model="keyword">
      <text-field placeholder="Keywords"></text-field>
    </bm-auto-complete>
  </bm-control>
  <bm-local-search :keyword="keyword" :auto-viewport="true" ></bm-local-search>
</baidu-map>
</doc-preview>
</template>

<script>
export default {
  data () {
    return {
      keyword: ''
    }
  }
}
</script>

<style lang="stylus">
.tangram-suggestion-main
  z-index 1
</style>
