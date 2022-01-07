import React, { FunctionComponent, ReactNode, useState } from "react";
import styled from "styled-components";
import { Map, MapkitContext, useMap } from "react-mapkit";
import { usePreferredColorScheme } from "../../hooks/usePreferredColorScheme";

type Props = {
  children?: ReactNode;
  showMarker?: string;
};

const MapElement = styled.div(({ theme }) => ({
  width: "100vw",
  maxWidth: "100vw",
  height: "100vh",
  maxHeight: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: -5,
}));

const MapScrim = styled.div(({ theme }) => ({
  width: "100vw",
  maxWidth: "100vw",
  height: "100vh",
  maxHeight: "100vh",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  background: "rgba(0, 0, 0, 0.25)",
}));

const route = [
  [-73.95346462726593, 40.719818880450106],
  [-73.95872712135315, 40.72307952345681],
  [-73.96607637405396, 40.71624093376681],
  [-73.96855473518372, 40.71076792966806],
  [-73.9683723449707, 40.70675844504397],
  [-73.96728873252869, 40.70431847824124],
  [-73.96219253540039, 40.700170329524624],
  [-73.96290063858031, 40.698022951066996],
  [-73.96538972854614, 40.69762437699446],
  [-73.98057103157043, 40.69827510894256],
  [-73.9804208278656, 40.70062582514679],
  [-73.98048520088196, 40.70091864211626],
  [-73.98080706596375, 40.701219591549126],
  [-73.98110747337341, 40.7013090627399],
  [-73.98285627365112, 40.70134159768859],
  [-73.98282408714293, 40.70226883704545],
  [-73.98277044296265, 40.702976458396705],
  [-73.9875876903534, 40.703143195666655],
  [-73.9876252412796, 40.702630782239055],
  [-73.98785054683685, 40.702992725465805],
  [-73.98852109909058, 40.702781253257584],
  [-73.988778591156, 40.70319606349438],
  [-73.98959398269653, 40.7032041970026],
  [-73.98956179618835, 40.70384674101423],
  [-73.99063467979431, 40.7038914748602],
  [-73.99066686630249, 40.7032326642736],
  [-73.99377286434174, 40.703342466490575],
  [-73.99396598339081, 40.70330993251924],
  [-73.99436295032501, 40.70291545685219],
  [-73.99313986301422, 40.70235424002123],
  [-73.99231374263763, 40.701825553173826],
  [-73.99117112159729, 40.70090237454063],
  [-73.9909029006958, 40.700633958968886],
  [-73.99094581604004, 40.70004832123981],
  [-73.99137496948242, 40.69892583453415],
  [-73.99143934249878, 40.69793347546237],
  [-73.99141788482666, 40.6968922959549],
  [-73.99081707000732, 40.69498884760204],
  [-73.99040937423706, 40.693756457806806],
  [-73.98979783058167, 40.692881975973975],
  [-73.98958325386047, 40.692336944281635],
  [-73.98920774459837, 40.69218644967064],
  [-73.98306012153625, 40.68975001664651],
  [-73.98114502429962, 40.68897717286968],
  [-73.98090362548828, 40.6888226030387],
  [-73.98015260696411, 40.68774873957852],
  [-73.977792263031, 40.6844700948299],
  [-73.97361874580382, 40.678766658506056],
  [-73.9711081981659, 40.67530042314329],
  [-73.97076487541199, 40.67482848044601],
  [-73.96996021270752, 40.67456809683816],
  [-73.96953105926514, 40.673933407533724],
  [-73.96953105926514, 40.67329057502838],
  [-73.96930575370789, 40.67304645979508],
  [-73.96841526031494, 40.672932539047004],
  [-73.96778225898743, 40.672899990226085],
  [-73.96643042564392, 40.67263146184729],
  [-73.96501421928406, 40.67225714775728],
  [-73.9634907245636, 40.67181773288338],
  [-73.96221399307251, 40.67161429909072],
  [-73.96093726158142, 40.67135390293046],
  [-73.9588987827301, 40.67089006975111],
  [-73.95727872848511, 40.670588983328834],
  [-73.95532608032227, 40.67032044564304],
  [-73.95522952079773, 40.67011700728232],
  [-73.95678520202637, 40.67040182081353],
  [-73.96143078804015, 40.671362040325874],
  [-73.96256804466248, 40.671602093043425],
  [-73.96225154399872, 40.669990875186976],
  [-73.96225288510323, 40.669990875186976],
  [-73.96097481250763, 40.6632892559703],
  [-73.96202087402344, 40.66324042567241],
  [-73.96227300167084, 40.66317531855298],
  [-73.96255195140839, 40.6629270970771],
  [-73.96294355392456, 40.662544590043474],
  [-73.96307229995728, 40.66222718892471],
  [-73.96303474903107, 40.66163307507891],
  [-73.96288454532623, 40.6609290840142],
  [-73.96190285682678, 40.65485736139743],
  [-73.97116184234619, 40.65126778558483],
  [-73.97142469882965, 40.6512148765607],
  [-73.9717948436737, 40.65123522619032],
  [-73.97185385227203, 40.6513410441644],
  [-73.97177338600159, 40.65159337865611],
  [-73.97146761417389, 40.65186606163085],
  [-73.9712208509445, 40.65194338943581],
  [-73.9707165956497, 40.65200850751782],
  [-73.97004067897797, 40.65209804477686],
  [-73.96946132183075, 40.652305607960685],
  [-73.96861910820007, 40.65286317645373],
  [-73.96829187870026, 40.6531114353785],
  [-73.96775543689726, 40.65337190276563],
  [-73.96712243556976, 40.65357946198678],
  [-73.96617829799652, 40.65374225308101],
  [-73.96548092365265, 40.65389690425261],
  [-73.96503031253815, 40.65405969457229],
  [-73.96464943885803, 40.65421841475158],
  [-73.96423637866974, 40.65449922645149],
  [-73.96390378475189, 40.654743409577705],
  [-73.9635443687439, 40.65516665821275],
  [-73.96317958831787, 40.65568757592381],
  [-73.96291136741638, 40.656192211077816],
  [-73.96279871463776, 40.65701833942119],
  [-73.96292209625243, 40.657417156339406],
  [-73.96313667297363, 40.65786480514232],
  [-73.96345317363739, 40.65842232717846],
  [-73.96357119083405, 40.658727537998374],
  [-73.96350145339966, 40.65900019181661],
  [-73.96348536014555, 40.65920366408915],
  [-73.96357119083405, 40.65957398203255],
  [-73.96395206451416, 40.660200669253506],
  [-73.96445631980896, 40.661083718526434],
  [-73.96486401557922, 40.66186502426482],
  [-73.96521806716918, 40.662581213152265],
  [-73.96527171134949, 40.662947443134485],
  [-73.96525025367737, 40.66319973373022],
  [-73.9652931690216, 40.663517130221024],
  [-73.96576523780823, 40.66451814002928],
  [-73.96628022193909, 40.66556796344367],
  [-73.96673083305359, 40.66612949011449],
  [-73.96754622459412, 40.66668287409205],
  [-73.96841526031494, 40.667089771146124],
  [-73.96869421005249, 40.667374597606795],
  [-73.96880149841309, 40.66785473088684],
  [-73.96881222724915, 40.66820465635386],
  [-73.96902680397034, 40.668603406391924],
  [-73.96917700767517, 40.66891263947382],
  [-73.9690375328064, 40.66929510998623],
  [-73.96880149841309, 40.669718266294915],
  [-73.96856546401978, 40.67015769500409],
  [-73.96854400634766, 40.67067849565044],
  [-73.9689302444458, 40.67108536832516],
  [-73.96948814392088, 40.67119929222918],
  [-73.97013187408447, 40.671134192879286],
  [-73.97045373916626, 40.67097144422648],
  [-73.9708399772644, 40.67056457085662],
  [-73.97116184234619, 40.66994611857968],
  [-73.97171974182129, 40.66949041323159],
  [-73.97221326828003, 40.66867664593566],
  [-73.97232055664062, 40.66810700291989],
  [-73.9722990989685, 40.66727694295732],
  [-73.97223472595215, 40.666707287985304],
  [-73.97238492965698, 40.66600741950127],
  [-73.97264242172241, 40.66564934441355],
  [-73.97328615188599, 40.66507967553905],
  [-73.97362947463989, 40.66452627825884],
  [-73.9741015434265, 40.6639403231926],
  [-73.97470235824585, 40.66343574664942],
  [-73.97538900375366, 40.663077657754684],
  [-73.9764404296875, 40.662524243863196],
  [-73.97695541381836, 40.6622638122078],
  [-73.97749185562134, 40.661694114416555],
  [-73.97757768630981, 40.661108134469295],
  [-73.9774489402771, 40.66073375569685],
  [-73.97691249847412, 40.660310542380444],
  [-73.97620439529419, 40.660131489784426],
  [-73.97573232650755, 40.6600501020819],
  [-73.97519588470459, 40.65988732637896],
  [-73.97476673126219, 40.65949666307131],
  [-73.97403717041016, 40.659089719692986],
  [-73.97345781326294, 40.65869905171428],
  [-73.97309303283691, 40.65843046615178],
  [-73.97257804870605, 40.658414188204134],
  [-73.97210597991943, 40.65857696750174],
  [-73.97181630134583, 40.65885369139608],
  [-73.97144079208374, 40.65934202487999],
  [-73.97118330001831, 40.659716411463386],
  [-73.97092580795288, 40.65996057549443],
  [-73.97063612937926, 40.66015590607582],
];

var routeCoordinates: any;
var startCoordinate: any;
var finishCoordinate: any;
var overviewCoordinate: any;

const InitializeMap = (map: any, mapkit: any) => {
  const [initialized, setInitialized] = useState(false);
  if (map && !initialized) {
    routeCoordinates = route.map((coordinate) => {
      return new mapkit.Coordinate(coordinate[1], coordinate[0]);
    });

    const routeLineGradient = new mapkit.LineGradient({
      0: "#9fff00",
      1: "#8bd401",
    });

    const routeStyle = new mapkit.Style({
      lineWidth: 4,
      lineJoin: "round",
      lineGradient: routeLineGradient,
    });

    overviewCoordinate = new mapkit.PolylineOverlay(routeCoordinates, {
      style: routeStyle,
    });

    startCoordinate = new mapkit.Coordinate(
      40.719818880450106,
      -73.95346462726593
    );

    finishCoordinate = new mapkit.Coordinate(
      40.66015590607582,
      -73.97063612937926
    );

    const start = new mapkit.MarkerAnnotation(startCoordinate, {
        title: "Start",
      }),
      finish = new mapkit.MarkerAnnotation(finishCoordinate, {
        title: "Finish",
      });

    map.addOverlay(overviewCoordinate);
    // map.addAnnotations([start, finish]);

    map.showItems([start, finish, overviewCoordinate], {
      animate: true,
      padding: new mapkit.Padding(64, 0, 192, 192),
    });

    /**
     * Centers the map to the provided coordinate, with optional animation.
     * @see https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973935-setcenteranimated
     */
    // map.setCenterAnimated(center, false);

    // map.setCameraZoomRange(center, false);

    map.mapType = "mutedStandard";

    /**
     * A feature visibility setting that determines when the compass is visible. Because this is considered an `Adaptive` type control, it is set to one of `Adaptive | Visible | Hidden`.
     * @see https://developer.apple.com/documentation/mapkitjs/mapkit/featurevisibility/adaptive
     */
    map.showsCompass = "hidden";

    /**
     * A Boolean value that determines whether to display a control for zooming in and zooming out on a map.
     * @see https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973944-showszoomcontrol
     */
    map.showsZoomControl = false;

    /**
     * A Boolean value that determines whether to display a control that lets users choose the map type.
     * @see https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973939-showsmaptypecontrol
     */
    map.showsMapTypeControl = false;

    /**
     * A Boolean value that determines whether the map displays points of interest.
     * @see https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973940-showspointsofinterest
     */
    map.showsPointsOfInterest = false;

    /**
     * A Boolean value that determines whether the user may rotate the map using the compass control or a rotate gesture.
     * @see https://developer.apple.com/documentation/mapkitjs/mapkit/map/2991321-isrotationenabled
     */
    map.isRotationEnabled = false;

    /**
     * A Boolean value that determines whether the user may scroll the map with a pointing device or with gestures on a touchscreen.
     * @see https://developer.apple.com/documentation/mapkitjs/mapkit/map/2978329-isscrollenabled
     */
    map.isScrollEnabled = false;

    setInitialized(true);
  }
};

/**
 * We can calculate an approximate route progression by rounding to the nearest integer as a function of "how far along are we" versus "how many datapoints have been provided".
 *
 * We need to round since `routeProgession` is passed as an array accessor to `routeCoordinates`.
 */
function routeProgression(progression: any, total: number) {
  return Math.round((progression / 100) * total);
}

const mapShouldTransitionToRegion = (map: any, mapkit: any, region: any) => {
  if (map) {
    if (region !== "") {
      const span = new mapkit.CoordinateSpan(0.07, 0.07);
      const focusRegion = new mapkit.CoordinateRegion(
        routeCoordinates[routeProgression(region, routeCoordinates.length - 1)],
        span
      );
      map.setRegionAnimated(focusRegion);
    } else {
      map.showItems([overviewCoordinate], {
        animate: true,
        padding: new mapkit.Padding(64, 0, 192, 192),
      });
    }
  }
};

const BrooklynHalfMap: FunctionComponent<Props> = ({ showMarker }: Props) => {
  /**
   * Returns either a light or dark map color scheme value for the user's preferred color scheme.
   */
  const preferredMapColorScheme =
    usePreferredColorScheme() === "light" ? "light" : "dark";

  const { map, mapkit, mapProps } = useMap();

  InitializeMap(map, mapkit);

  /**
   * The map’s color scheme when displaying standard or muted standard map types.
   * @see https://developer.apple.com/documentation/mapkitjs/mapkit/map/3122649-colorscheme
   */
  if (map) {
    map.colorScheme = preferredMapColorScheme;
  }

  mapShouldTransitionToRegion(map, mapkit, showMarker);

  return (
    <MapElement>
      <MapScrim />
      <Map {...mapProps} />
    </MapElement>
  );
};

export default React.memo(BrooklynHalfMap);
