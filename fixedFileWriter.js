"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AccessModifierType: () => AccessModifierType,
  Accessory: () => Accessory,
  AccessoryDescription: () => AccessoryDescription,
  AccessoryType: () => AccessoryType,
  AccountService: () => AccountService,
  Accoutrement: () => Accoutrement,
  ActivityHistoryService: () => ActivityHistoryService,
  Actor: () => Actor,
  ActuatorRelativeTo: () => ActuatorRelativeTo,
  ActuatorType: () => ActuatorType,
  AdGui: () => AdGui,
  AdPortal: () => AdPortal,
  AdService: () => AdService,
  AdShape: () => AdShape,
  AdornCullingMode: () => AdornCullingMode,
  AdvancedDragger: () => AdvancedDragger,
  AirController: () => AirController,
  AlignOrientation: () => AlignOrientation,
  AlignPosition: () => AlignPosition,
  AlignType: () => AlignType,
  AlphaMode: () => AlphaMode,
  AnalyticsService: () => AnalyticsService,
  AngularVelocity: () => AngularVelocity,
  Animation: () => Animation,
  AnimationClip: () => AnimationClip,
  AnimationClipProvider: () => AnimationClipProvider,
  AnimationConstraint: () => AnimationConstraint,
  AnimationController: () => AnimationController,
  AnimationFromVideoCreatorService: () => AnimationFromVideoCreatorService,
  AnimationFromVideoCreatorStudioService: () => AnimationFromVideoCreatorStudioService,
  AnimationPriority: () => AnimationPriority,
  AnimationRigData: () => AnimationRigData,
  Animator: () => Animator,
  AnimatorRetargetingMode: () => AnimatorRetargetingMode,
  AppStorageService: () => AppStorageService,
  AppUpdateService: () => AppUpdateService,
  ApplyStrokeMode: () => ApplyStrokeMode,
  ArcHandles: () => ArcHandles,
  AspectType: () => AspectType,
  AssetCounterService: () => AssetCounterService,
  AssetDeliveryProxy: () => AssetDeliveryProxy,
  AssetImportService: () => AssetImportService,
  AssetManagerService: () => AssetManagerService,
  AssetService: () => AssetService,
  Atmosphere: () => Atmosphere,
  Attachment: () => Attachment,
  AudioAnalyzer: () => AudioAnalyzer,
  AudioApiRollout: () => AudioApiRollout,
  AudioChorus: () => AudioChorus,
  AudioCompressor: () => AudioCompressor,
  AudioDeviceInput: () => AudioDeviceInput,
  AudioDeviceOutput: () => AudioDeviceOutput,
  AudioDistortion: () => AudioDistortion,
  AudioEcho: () => AudioEcho,
  AudioEmitter: () => AudioEmitter,
  AudioEqualizer: () => AudioEqualizer,
  AudioFader: () => AudioFader,
  AudioFlanger: () => AudioFlanger,
  AudioListener: () => AudioListener,
  AudioPitchShifter: () => AudioPitchShifter,
  AudioPlayer: () => AudioPlayer,
  AudioReverb: () => AudioReverb,
  AudioSearchParams: () => AudioSearchParams,
  AudioSubType: () => AudioSubType,
  AutomaticSize: () => AutomaticSize,
  AvatarChatService: () => AvatarChatService,
  AvatarCreationService: () => AvatarCreationService,
  AvatarEditorService: () => AvatarEditorService,
  AvatarImportService: () => AvatarImportService,
  AvatarJointUpgrade: () => AvatarJointUpgrade,
  AvatarUnificationMode: () => AvatarUnificationMode,
  Axes: () => Axes,
  Backpack: () => Backpack,
  BackpackItem: () => BackpackItem,
  BadgeService: () => BadgeService,
  BallSocketConstraint: () => BallSocketConstraint,
  BasePart: () => BasePart,
  BasePlayerGui: () => BasePlayerGui,
  BaseRemoteEvent: () => BaseRemoteEvent,
  BaseScript: () => BaseScript,
  BaseWrap: () => BaseWrap,
  Beam: () => Beam,
  BevelMesh: () => BevelMesh,
  BillboardGui: () => BillboardGui,
  BinType: () => BinType,
  BinaryStringValue: () => BinaryStringValue,
  BindableEvent: () => BindableEvent,
  BindableFunction: () => BindableFunction,
  BlockMesh: () => BlockMesh,
  BloomEffect: () => BloomEffect,
  BlurEffect: () => BlurEffect,
  BodyAngularVelocity: () => BodyAngularVelocity,
  BodyColors: () => BodyColors,
  BodyForce: () => BodyForce,
  BodyGyro: () => BodyGyro,
  BodyMover: () => BodyMover,
  BodyPart: () => BodyPart,
  BodyPartDescription: () => BodyPartDescription,
  BodyPosition: () => BodyPosition,
  BodyThrust: () => BodyThrust,
  BodyVelocity: () => BodyVelocity,
  Bone: () => Bone,
  BoolValue: () => BoolValue,
  BorderMode: () => BorderMode,
  BoxHandleAdornment: () => BoxHandleAdornment,
  Breakpoint: () => Breakpoint,
  BrickColorValue: () => BrickColorValue,
  BrowserService: () => BrowserService,
  BubbleChatConfiguration: () => BubbleChatConfiguration,
  BubbleChatMessageProperties: () => BubbleChatMessageProperties,
  BulkImportService: () => BulkImportService,
  BuoyancySensor: () => BuoyancySensor,
  ButtonStyle: () => ButtonStyle,
  CFrame: () => CFrame,
  CFrameValue: () => CFrameValue,
  CSGAsyncDynamicCollision: () => CSGAsyncDynamicCollision,
  CSGDictionaryService: () => CSGDictionaryService,
  CacheableContentProvider: () => CacheableContentProvider,
  CalloutService: () => CalloutService,
  Camera: () => Camera,
  CameraMode: () => CameraMode,
  CameraType: () => CameraType,
  CanvasGroup: () => CanvasGroup,
  CaptureService: () => CaptureService,
  ChangeHistoryService: () => ChangeHistoryService,
  CharacterAppearance: () => CharacterAppearance,
  CharacterControlMode: () => CharacterControlMode,
  CharacterMesh: () => CharacterMesh,
  Chat: () => Chat,
  ChatInputBarConfiguration: () => ChatInputBarConfiguration,
  ChatVersion: () => ChatVersion,
  ChatWindowConfiguration: () => ChatWindowConfiguration,
  ChatbotUIService: () => ChatbotUIService,
  ChorusSoundEffect: () => ChorusSoundEffect,
  ClassMap: () => ClassMap,
  ClickDetector: () => ClickDetector,
  ClientAnimatorThrottlingMode: () => ClientAnimatorThrottlingMode,
  ClimbController: () => ClimbController,
  Clothing: () => Clothing,
  Clouds: () => Clouds,
  ClusterPacketCache: () => ClusterPacketCache,
  CollaboratorsService: () => CollaboratorsService,
  CollectionService: () => CollectionService,
  Color3: () => Color3,
  Color3Value: () => Color3Value,
  ColorCorrectionEffect: () => ColorCorrectionEffect,
  ColorSequence: () => ColorSequence,
  ColorSequenceKeypoint: () => ColorSequenceKeypoint,
  CommandService: () => CommandService,
  CommerceService: () => CommerceService,
  CompressorSoundEffect: () => CompressorSoundEffect,
  ConeHandleAdornment: () => ConeHandleAdornment,
  Configuration: () => Configuration,
  ConfigureServerService: () => ConfigureServerService,
  ConnectivityService: () => ConnectivityService,
  Constraint: () => Constraint,
  ContentProvider: () => ContentProvider,
  ContextActionService: () => ContextActionService,
  Controller: () => Controller,
  ControllerBase: () => ControllerBase,
  ControllerManager: () => ControllerManager,
  ControllerPartSensor: () => ControllerPartSensor,
  ControllerSensor: () => ControllerSensor,
  ControllerService: () => ControllerService,
  ConversationalAIAcceptanceService: () => ConversationalAIAcceptanceService,
  CookiesService: () => CookiesService,
  CoreGui: () => CoreGui,
  CoreInstance: () => CoreInstance,
  CorePackages: () => CorePackages,
  CoreScriptDebuggingManagerHelper: () => CoreScriptDebuggingManagerHelper,
  CoreScriptSyncService: () => CoreScriptSyncService,
  CornerWedgePart: () => CornerWedgePart,
  CreationDBService: () => CreationDBService,
  CrossDMScriptChangeListener: () => CrossDMScriptChangeListener,
  CurveAnimation: () => CurveAnimation,
  CustomEvent: () => CustomEvent,
  CustomEventReceiver: () => CustomEventReceiver,
  CylinderHandleAdornment: () => CylinderHandleAdornment,
  CylinderMesh: () => CylinderMesh,
  CylindricalConstraint: () => CylindricalConstraint,
  DataModelMesh: () => DataModelMesh,
  DataModelPatchService: () => DataModelPatchService,
  DataStoreGetOptions: () => DataStoreGetOptions,
  DataStoreIncrementOptions: () => DataStoreIncrementOptions,
  DataStoreOptions: () => DataStoreOptions,
  DataStoreService: () => DataStoreService,
  DataStoreSetOptions: () => DataStoreSetOptions,
  DataType: () => DataType,
  Debris: () => Debris,
  DebuggablePluginWatcher: () => DebuggablePluginWatcher,
  DebuggerConnectionManager: () => DebuggerConnectionManager,
  DebuggerManager: () => DebuggerManager,
  DebuggerUIService: () => DebuggerUIService,
  DebuggerWatch: () => DebuggerWatch,
  Decal: () => Decal,
  DecreaseMinimumPartDensityMode: () => DecreaseMinimumPartDensityMode,
  DepthOfFieldEffect: () => DepthOfFieldEffect,
  DevCameraOcclusionMode: () => DevCameraOcclusionMode,
  DevComputerCameraMovementMode: () => DevComputerCameraMovementMode,
  DevComputerMovementMode: () => DevComputerMovementMode,
  DevTouchCameraMovementMode: () => DevTouchCameraMovementMode,
  DevTouchMovementMode: () => DevTouchMovementMode,
  DeviceIdService: () => DeviceIdService,
  Dialog: () => Dialog,
  DialogBehaviorType: () => DialogBehaviorType,
  DialogChoice: () => DialogChoice,
  DialogPurpose: () => DialogPurpose,
  DialogTone: () => DialogTone,
  DistortionSoundEffect: () => DistortionSoundEffect,
  DominantAxis: () => DominantAxis,
  DoubleConstrainedValue: () => DoubleConstrainedValue,
  DraftsService: () => DraftsService,
  DragDetector: () => DragDetector,
  DragDetectorDragStyle: () => DragDetectorDragStyle,
  DragDetectorPermissionPolicy: () => DragDetectorPermissionPolicy,
  DragDetectorResponseStyle: () => DragDetectorResponseStyle,
  Dragger: () => Dragger,
  DraggerService: () => DraggerService,
  DynamicRotate: () => DynamicRotate,
  EasingDirection: () => EasingDirection,
  EasingStyle: () => EasingStyle,
  EchoSoundEffect: () => EchoSoundEffect,
  EditableImage: () => EditableImage,
  EditableMesh: () => EditableMesh,
  EditorLiveScripting: () => EditorLiveScripting,
  ElasticBehavior: () => ElasticBehavior,
  EngineAPICloudProcessingService: () => EngineAPICloudProcessingService,
  EnumItem: () => EnumItem,
  EnumMap: () => EnumMap,
  EqualizerSoundEffect: () => EqualizerSoundEffect,
  EulerRotationCurve: () => EulerRotationCurve,
  EventIngestService: () => EventIngestService,
  ExampleService: () => ExampleService,
  ExperienceAuthService: () => ExperienceAuthService,
  ExperienceInviteOptions: () => ExperienceInviteOptions,
  ExperienceNotificationService: () => ExperienceNotificationService,
  ExperienceService: () => ExperienceService,
  ExperienceStateCaptureService: () => ExperienceStateCaptureService,
  Explosion: () => Explosion,
  ExplosionType: () => ExplosionType,
  FaceAnimatorService: () => FaceAnimatorService,
  FaceControls: () => FaceControls,
  FaceInstance: () => FaceInstance,
  Faces: () => Faces,
  FacialAnimationRecordingService: () => FacialAnimationRecordingService,
  FacialAnimationStreamingServiceV2: () => FacialAnimationStreamingServiceV2,
  Feature: () => Feature,
  FieldOfViewMode: () => FieldOfViewMode,
  FileMesh: () => FileMesh,
  FillDirection: () => FillDirection,
  Fire: () => Fire,
  Flag: () => Flag,
  FlagStand: () => FlagStand,
  FlagStandService: () => FlagStandService,
  FlangeSoundEffect: () => FlangeSoundEffect,
  FloatCurve: () => FloatCurve,
  FloorWire: () => FloorWire,
  FluidFidelity: () => FluidFidelity,
  FluidForces: () => FluidForces,
  FlyweightService: () => FlyweightService,
  Folder: () => Folder,
  Font: () => Font,
  FontSize: () => FontSize,
  FontStyle: () => FontStyle,
  FontWeight: () => FontWeight,
  ForceField: () => ForceField,
  ForceLimitMode: () => ForceLimitMode,
  FormFactor: () => FormFactor,
  FormFactorPart: () => FormFactorPart,
  Frame: () => Frame,
  FrameStyle: () => FrameStyle,
  FramerateManagerMode: () => FramerateManagerMode,
  FriendService: () => FriendService,
  FunctionalTest: () => FunctionalTest,
  GameAvatarType: () => GameAvatarType,
  GamePassService: () => GamePassService,
  GamepadService: () => GamepadService,
  GenericChallengeService: () => GenericChallengeService,
  Geometry: () => Geometry,
  GeometryService: () => GeometryService,
  GetTextBoundsParams: () => GetTextBoundsParams,
  Glue: () => Glue,
  GoogleAnalyticsConfiguration: () => GoogleAnalyticsConfiguration,
  GraphicsMode: () => GraphicsMode,
  GroundController: () => GroundController,
  GroupService: () => GroupService,
  GuiBase: () => GuiBase,
  GuiBase2d: () => GuiBase2d,
  GuiBase3d: () => GuiBase3d,
  GuiButton: () => GuiButton,
  GuiLabel: () => GuiLabel,
  GuiMain: () => GuiMain,
  GuiObject: () => GuiObject,
  GuiService: () => GuiService,
  GuidRegistryService: () => GuidRegistryService,
  HSRDataContentProvider: () => HSRDataContentProvider,
  HandleAdornment: () => HandleAdornment,
  Handles: () => Handles,
  HandlesBase: () => HandlesBase,
  HandlesStyle: () => HandlesStyle,
  HapticService: () => HapticService,
  Hat: () => Hat,
  HeightmapImporterService: () => HeightmapImporterService,
  HiddenSurfaceRemovalAsset: () => HiddenSurfaceRemovalAsset,
  Highlight: () => Highlight,
  HighlightDepthMode: () => HighlightDepthMode,
  HingeConstraint: () => HingeConstraint,
  Hint: () => Hint,
  Hole: () => Hole,
  Hopper: () => Hopper,
  HopperBin: () => HopperBin,
  HorizontalAlignment: () => HorizontalAlignment,
  HttpRbxApiService: () => HttpRbxApiService,
  HttpService: () => HttpService,
  Humanoid: () => Humanoid,
  HumanoidCollisionType: () => HumanoidCollisionType,
  HumanoidController: () => HumanoidController,
  HumanoidDescription: () => HumanoidDescription,
  HumanoidDisplayDistanceType: () => HumanoidDisplayDistanceType,
  HumanoidHealthDisplayType: () => HumanoidHealthDisplayType,
  HumanoidRigType: () => HumanoidRigType,
  IKControl: () => IKControl,
  IKControlConstraintSupport: () => IKControlConstraintSupport,
  IKControlType: () => IKControlType,
  ILegacyStudioBridge: () => ILegacyStudioBridge,
  IXPService: () => IXPService,
  ImageButton: () => ImageButton,
  ImageHandleAdornment: () => ImageHandleAdornment,
  ImageLabel: () => ImageLabel,
  InOut: () => InOut,
  IncrementalPatchBuilder: () => IncrementalPatchBuilder,
  InputType: () => InputType,
  InsertService: () => InsertService,
  Instance: () => Instance,
  InstanceAdornment: () => InstanceAdornment,
  IntConstrainedValue: () => IntConstrainedValue,
  IntValue: () => IntValue,
  InternalSyncItem: () => InternalSyncItem,
  InternalSyncService: () => InternalSyncService,
  IntersectOperation: () => IntersectOperation,
  ItemLineAlignment: () => ItemLineAlignment,
  JointInstance: () => JointInstance,
  JointsService: () => JointsService,
  KeyCode: () => KeyCode,
  KeyboardService: () => KeyboardService,
  Keyframe: () => Keyframe,
  KeyframeMarker: () => KeyframeMarker,
  KeyframeSequence: () => KeyframeSequence,
  KeyframeSequenceProvider: () => KeyframeSequenceProvider,
  LSPFileSyncService: () => LSPFileSyncService,
  LanguageService: () => LanguageService,
  LayerCollector: () => LayerCollector,
  LeftRight: () => LeftRight,
  LegacyStudioBridge: () => LegacyStudioBridge,
  Light: () => Light,
  Lighting: () => Lighting,
  LineForce: () => LineForce,
  LineHandleAdornment: () => LineHandleAdornment,
  LineJoinMode: () => LineJoinMode,
  LinearVelocity: () => LinearVelocity,
  LiveScriptingService: () => LiveScriptingService,
  LoadCharacterLayeredClothing: () => LoadCharacterLayeredClothing,
  LoadDynamicHeads: () => LoadDynamicHeads,
  LocalScript: () => LocalScript,
  LocalStorageService: () => LocalStorageService,
  LocalizationService: () => LocalizationService,
  LocalizationTable: () => LocalizationTable,
  LodDataService: () => LodDataService,
  LogReporterService: () => LogReporterService,
  LogService: () => LogService,
  LoginService: () => LoginService,
  LuaSourceContainer: () => LuaSourceContainer,
  LuaWebService: () => LuaWebService,
  LuauScriptAnalyzerService: () => LuauScriptAnalyzerService,
  ManualGlue: () => ManualGlue,
  ManualSurfaceJointInstance: () => ManualSurfaceJointInstance,
  ManualWeld: () => ManualWeld,
  MarkerCurve: () => MarkerCurve,
  MarketplaceService: () => MarketplaceService,
  Material: () => Material,
  MaterialGenerationService: () => MaterialGenerationService,
  MaterialPattern: () => MaterialPattern,
  MaterialService: () => MaterialService,
  MaterialVariant: () => MaterialVariant,
  MemStorageService: () => MemStorageService,
  MemoryStoreService: () => MemoryStoreService,
  MeshContentProvider: () => MeshContentProvider,
  MeshPart: () => MeshPart,
  MeshPartDetailLevel: () => MeshPartDetailLevel,
  MeshPartHeadsAndAccessories: () => MeshPartHeadsAndAccessories,
  MeshType: () => MeshType,
  Message: () => Message,
  MessageBusService: () => MessageBusService,
  MessagingService: () => MessagingService,
  MetaBreakpointManager: () => MetaBreakpointManager,
  Model: () => Model,
  ModelLevelOfDetail: () => ModelLevelOfDetail,
  ModelStreamingBehavior: () => ModelStreamingBehavior,
  ModelStreamingMode: () => ModelStreamingMode,
  ModuleScript: () => ModuleScript,
  Motor: () => Motor,
  Motor6D: () => Motor6D,
  MotorFeature: () => MotorFeature,
  MouseBehavior: () => MouseBehavior,
  MouseService: () => MouseService,
  NameOcclusion: () => NameOcclusion,
  NegateOperation: () => NegateOperation,
  NetworkClient: () => NetworkClient,
  NetworkPeer: () => NetworkPeer,
  NetworkServer: () => NetworkServer,
  NetworkSettings: () => NetworkSettings,
  NoCollisionConstraint: () => NoCollisionConstraint,
  Noise: () => Noise,
  NoiseType: () => NoiseType,
  NonReplicatedCSGDictionaryService: () => NonReplicatedCSGDictionaryService,
  NormalId: () => NormalId,
  NotificationService: () => NotificationService,
  NumberPose: () => NumberPose,
  NumberRange: () => NumberRange,
  NumberSequence: () => NumberSequence,
  NumberSequenceKeypoint: () => NumberSequenceKeypoint,
  NumberValue: () => NumberValue,
  ObjectValue: () => ObjectValue,
  OmniRecommendationsService: () => OmniRecommendationsService,
  OpenCloudService: () => OpenCloudService,
  OperationGraph: () => OperationGraph,
  OrientationAlignmentMode: () => OrientationAlignmentMode,
  PVAdornment: () => PVAdornment,
  PVInstance: () => PVInstance,
  PackageService: () => PackageService,
  PackageUIService: () => PackageUIService,
  Pants: () => Pants,
  ParabolaAdornment: () => ParabolaAdornment,
  Part: () => Part,
  PartAdornment: () => PartAdornment,
  PartOperation: () => PartOperation,
  PartOperationAsset: () => PartOperationAsset,
  PartType: () => PartType,
  ParticleEmitter: () => ParticleEmitter,
  ParticleEmitterShape: () => ParticleEmitterShape,
  ParticleEmitterShapeInOut: () => ParticleEmitterShapeInOut,
  ParticleEmitterShapeStyle: () => ParticleEmitterShapeStyle,
  ParticleFlipbookLayout: () => ParticleFlipbookLayout,
  ParticleFlipbookMode: () => ParticleFlipbookMode,
  ParticleOrientation: () => ParticleOrientation,
  PatchBundlerFileWatch: () => PatchBundlerFileWatch,
  Path2D: () => Path2D,
  PathfindingLink: () => PathfindingLink,
  PathfindingModifier: () => PathfindingModifier,
  PathfindingService: () => PathfindingService,
  PermissionsService: () => PermissionsService,
  PhysicalProperties: () => PhysicalProperties,
  PhysicsService: () => PhysicsService,
  PhysicsSteppingMethod: () => PhysicsSteppingMethod,
  PitchShiftSoundEffect: () => PitchShiftSoundEffect,
  PlaceStatsService: () => PlaceStatsService,
  PlacesService: () => PlacesService,
  Plane: () => Plane,
  PlaneConstraint: () => PlaneConstraint,
  PlatformCloudStorageService: () => PlatformCloudStorageService,
  PlatformFriendsService: () => PlatformFriendsService,
  Player: () => Player,
  PlayerCharacterDestroyBehavior: () => PlayerCharacterDestroyBehavior,
  PlayerEmulatorService: () => PlayerEmulatorService,
  PlayerViewService: () => PlayerViewService,
  Players: () => Players,
  PluginAction: () => PluginAction,
  PluginCapabilities: () => PluginCapabilities,
  PluginDebugService: () => PluginDebugService,
  PluginGuiService: () => PluginGuiService,
  PluginManagementService: () => PluginManagementService,
  PluginPolicyService: () => PluginPolicyService,
  PointLight: () => PointLight,
  PointsService: () => PointsService,
  PolicyService: () => PolicyService,
  Pose: () => Pose,
  PoseBase: () => PoseBase,
  PoseEasingDirection: () => PoseEasingDirection,
  PoseEasingStyle: () => PoseEasingStyle,
  PositionAlignmentMode: () => PositionAlignmentMode,
  PostEffect: () => PostEffect,
  PrimalPhysicsSolver: () => PrimalPhysicsSolver,
  PrismaticConstraint: () => PrismaticConstraint,
  ProcessInstancePhysicsService: () => ProcessInstancePhysicsService,
  ProjectFolderService: () => ProjectFolderService,
  ProximityPrompt: () => ProximityPrompt,
  ProximityPromptExclusivity: () => ProximityPromptExclusivity,
  ProximityPromptService: () => ProximityPromptService,
  ProximityPromptStyle: () => ProximityPromptStyle,
  PublishService: () => PublishService,
  QualityLevel: () => QualityLevel,
  R15CollisionType: () => R15CollisionType,
  RBXMAxis: () => RBXMAxis,
  RBXMFace: () => RBXMFace,
  RBXMFont: () => RBXMFont,
  Ray: () => Ray,
  RayValue: () => RayValue,
  RbxAnalyticsService: () => RbxAnalyticsService,
  Rect: () => Rect,
  ReflectionMetadata: () => ReflectionMetadata,
  ReflectionMetadataCallbacks: () => ReflectionMetadataCallbacks,
  ReflectionMetadataClass: () => ReflectionMetadataClass,
  ReflectionMetadataClasses: () => ReflectionMetadataClasses,
  ReflectionMetadataEnum: () => ReflectionMetadataEnum,
  ReflectionMetadataEnumItem: () => ReflectionMetadataEnumItem,
  ReflectionMetadataEnums: () => ReflectionMetadataEnums,
  ReflectionMetadataEvents: () => ReflectionMetadataEvents,
  ReflectionMetadataFunctions: () => ReflectionMetadataFunctions,
  ReflectionMetadataItem: () => ReflectionMetadataItem,
  ReflectionMetadataMember: () => ReflectionMetadataMember,
  ReflectionMetadataProperties: () => ReflectionMetadataProperties,
  ReflectionMetadataYieldFunctions: () => ReflectionMetadataYieldFunctions,
  ReflectionService: () => ReflectionService,
  RejectCharacterDeletions: () => RejectCharacterDeletions,
  RemoteCursorService: () => RemoteCursorService,
  RemoteDebuggerServer: () => RemoteDebuggerServer,
  RemoteEvent: () => RemoteEvent,
  RemoteFunction: () => RemoteFunction,
  RenderFidelity: () => RenderFidelity,
  RenderSettings: () => RenderSettings,
  RenderingTest: () => RenderingTest,
  RenderingTestComparisonMethod: () => RenderingTestComparisonMethod,
  ReplicateInstanceDestroySetting: () => ReplicateInstanceDestroySetting,
  ReplicatedFirst: () => ReplicatedFirst,
  ReplicatedStorage: () => ReplicatedStorage,
  ResamplerMode: () => ResamplerMode,
  ReverbSoundEffect: () => ReverbSoundEffect,
  ReverbType: () => ReverbType,
  RibbonNotificationService: () => RibbonNotificationService,
  RigidConstraint: () => RigidConstraint,
  RobloxEditableImage: () => RobloxEditableImage,
  RobloxEditableMesh: () => RobloxEditableMesh,
  RobloxFile: () => RobloxFile,
  RobloxPluginGuiService: () => RobloxPluginGuiService,
  RobloxReplicatedStorage: () => RobloxReplicatedStorage,
  RobloxServerStorage: () => RobloxServerStorage,
  RocketPropulsion: () => RocketPropulsion,
  RodConstraint: () => RodConstraint,
  RollOffMode: () => RollOffMode,
  RomarkService: () => RomarkService,
  RopeConstraint: () => RopeConstraint,
  Rotate: () => Rotate,
  RotateP: () => RotateP,
  RotateV: () => RotateV,
  RotationCurve: () => RotationCurve,
  RotationOrder: () => RotationOrder,
  RtMessagingService: () => RtMessagingService,
  RtlTextSupport: () => RtlTextSupport,
  RunContext: () => RunContext,
  RunService: () => RunService,
  RuntimeScriptService: () => RuntimeScriptService,
  SafeAreaCompatibility: () => SafeAreaCompatibility,
  SafetyService: () => SafetyService,
  ScaleType: () => ScaleType,
  ScreenGui: () => ScreenGui,
  ScreenInsets: () => ScreenInsets,
  ScreenOrientation: () => ScreenOrientation,
  Script: () => Script,
  ScriptChangeService: () => ScriptChangeService,
  ScriptCloneWatcher: () => ScriptCloneWatcher,
  ScriptCloneWatcherHelper: () => ScriptCloneWatcherHelper,
  ScriptCommitService: () => ScriptCommitService,
  ScriptContext: () => ScriptContext,
  ScriptEditorService: () => ScriptEditorService,
  ScriptProfilerService: () => ScriptProfilerService,
  ScriptRegistrationService: () => ScriptRegistrationService,
  ScriptService: () => ScriptService,
  ScrollBarInset: () => ScrollBarInset,
  ScrollingDirection: () => ScrollingDirection,
  ScrollingFrame: () => ScrollingFrame,
  Seat: () => Seat,
  Selection: () => Selection,
  SelectionBehavior: () => SelectionBehavior,
  SelectionBox: () => SelectionBox,
  SelectionHighlightManager: () => SelectionHighlightManager,
  SelectionLasso: () => SelectionLasso,
  SelectionPartLasso: () => SelectionPartLasso,
  SelectionPointLasso: () => SelectionPointLasso,
  SelectionSphere: () => SelectionSphere,
  SensorBase: () => SensorBase,
  SensorMode: () => SensorMode,
  SensorUpdateType: () => SensorUpdateType,
  ServerScriptService: () => ServerScriptService,
  ServerStorage: () => ServerStorage,
  ServiceVisibility: () => ServiceVisibility,
  ServiceVisibilityService: () => ServiceVisibilityService,
  SessionService: () => SessionService,
  SharedString: () => SharedString,
  SharedStringValue: () => SharedStringValue,
  SharedTableRegistry: () => SharedTableRegistry,
  Shirt: () => Shirt,
  ShirtGraphic: () => ShirtGraphic,
  ShorelineUpgraderService: () => ShorelineUpgraderService,
  SignalBehavior: () => SignalBehavior,
  SizeConstraint: () => SizeConstraint,
  SkateboardController: () => SkateboardController,
  SkateboardPlatform: () => SkateboardPlatform,
  Skin: () => Skin,
  Sky: () => Sky,
  SlidingBallConstraint: () => SlidingBallConstraint,
  Smoke: () => Smoke,
  SmoothVoxelsUpgraderService: () => SmoothVoxelsUpgraderService,
  Snap: () => Snap,
  SnippetService: () => SnippetService,
  SocialService: () => SocialService,
  SolidModelContentProvider: () => SolidModelContentProvider,
  SortOrder: () => SortOrder,
  Sound: () => Sound,
  SoundEffect: () => SoundEffect,
  SoundGroup: () => SoundGroup,
  SoundService: () => SoundService,
  Sparkles: () => Sparkles,
  SpawnLocation: () => SpawnLocation,
  SpawnerService: () => SpawnerService,
  SpecialMesh: () => SpecialMesh,
  SphereHandleAdornment: () => SphereHandleAdornment,
  SpotLight: () => SpotLight,
  SpringConstraint: () => SpringConstraint,
  StandalonePluginScripts: () => StandalonePluginScripts,
  StartCorner: () => StartCorner,
  StarterCharacterScripts: () => StarterCharacterScripts,
  StarterGear: () => StarterGear,
  StarterGui: () => StarterGui,
  StarterPack: () => StarterPack,
  StarterPlayer: () => StarterPlayer,
  StarterPlayerScripts: () => StarterPlayerScripts,
  StartupMessageService: () => StartupMessageService,
  Stats: () => Stats,
  StopWatchReporter: () => StopWatchReporter,
  StreamOutBehavior: () => StreamOutBehavior,
  StreamingIntegrityMode: () => StreamingIntegrityMode,
  StreamingService: () => StreamingService,
  StringValue: () => StringValue,
  StudioAssetService: () => StudioAssetService,
  StudioAttachment: () => StudioAttachment,
  StudioCallout: () => StudioCallout,
  StudioData: () => StudioData,
  StudioDeviceEmulatorService: () => StudioDeviceEmulatorService,
  StudioPublishService: () => StudioPublishService,
  StudioScriptDebugEventListener: () => StudioScriptDebugEventListener,
  StudioSdkService: () => StudioSdkService,
  StudioService: () => StudioService,
  StudioWidgetsService: () => StudioWidgetsService,
  Style: () => Style,
  StyleBase: () => StyleBase,
  StyleDerive: () => StyleDerive,
  StyleLink: () => StyleLink,
  StyleRule: () => StyleRule,
  StyleSheet: () => StyleSheet,
  StylingService: () => StylingService,
  SunRaysEffect: () => SunRaysEffect,
  SurfaceAppearance: () => SurfaceAppearance,
  SurfaceGui: () => SurfaceGui,
  SurfaceGuiBase: () => SurfaceGuiBase,
  SurfaceGuiSizingMode: () => SurfaceGuiSizingMode,
  SurfaceLight: () => SurfaceLight,
  SurfaceSelection: () => SurfaceSelection,
  SurfaceType: () => SurfaceType,
  SwimController: () => SwimController,
  TableMajorAxis: () => TableMajorAxis,
  TaskScheduler: () => TaskScheduler,
  Team: () => Team,
  TeamCreateData: () => TeamCreateData,
  TeamCreatePublishService: () => TeamCreatePublishService,
  TeamCreateService: () => TeamCreateService,
  Teams: () => Teams,
  Technology: () => Technology,
  TeleportOptions: () => TeleportOptions,
  TeleportService: () => TeleportService,
  TemporaryCageMeshProvider: () => TemporaryCageMeshProvider,
  TemporaryScriptService: () => TemporaryScriptService,
  Terrain: () => Terrain,
  TerrainAcquisitionMethod: () => TerrainAcquisitionMethod,
  TerrainDetail: () => TerrainDetail,
  TerrainFace: () => TerrainFace,
  TerrainRegion: () => TerrainRegion,
  TestService: () => TestService,
  TextBox: () => TextBox,
  TextBoxService: () => TextBoxService,
  TextButton: () => TextButton,
  TextChannel: () => TextChannel,
  TextChatCommand: () => TextChatCommand,
  TextChatConfigurations: () => TextChatConfigurations,
  TextChatMessageProperties: () => TextChatMessageProperties,
  TextChatService: () => TextChatService,
  TextDirection: () => TextDirection,
  TextLabel: () => TextLabel,
  TextService: () => TextService,
  TextTruncate: () => TextTruncate,
  TextXAlignment: () => TextXAlignment,
  TextYAlignment: () => TextYAlignment,
  Texture: () => Texture,
  TextureGenerationService: () => TextureGenerationService,
  TextureMode: () => TextureMode,
  ThirdPartyUserService: () => ThirdPartyUserService,
  ThreadPoolConfig: () => ThreadPoolConfig,
  TimerService: () => TimerService,
  ToastNotificationService: () => ToastNotificationService,
  Tool: () => Tool,
  TopBottom: () => TopBottom,
  Torque: () => Torque,
  TorsionSpringConstraint: () => TorsionSpringConstraint,
  TouchInputService: () => TouchInputService,
  TracerService: () => TracerService,
  TrackerStreamAnimation: () => TrackerStreamAnimation,
  Trail: () => Trail,
  TremoloSoundEffect: () => TremoloSoundEffect,
  TriStateBoolean: () => TriStateBoolean,
  TriangleMeshPart: () => TriangleMeshPart,
  TrussPart: () => TrussPart,
  TutorialService: () => TutorialService,
  Tween: () => Tween,
  TweenBase: () => TweenBase,
  TweenService: () => TweenService,
  UDim: () => UDim,
  UDim2: () => UDim2,
  UGCAvatarService: () => UGCAvatarService,
  UGCValidationService: () => UGCValidationService,
  UIAspectRatioConstraint: () => UIAspectRatioConstraint,
  UIBase: () => UIBase,
  UIComponent: () => UIComponent,
  UIConstraint: () => UIConstraint,
  UICorner: () => UICorner,
  UIFlexAlignment: () => UIFlexAlignment,
  UIFlexItem: () => UIFlexItem,
  UIFlexMode: () => UIFlexMode,
  UIGradient: () => UIGradient,
  UIGridLayout: () => UIGridLayout,
  UIGridStyleLayout: () => UIGridStyleLayout,
  UILayout: () => UILayout,
  UIListLayout: () => UIListLayout,
  UIPadding: () => UIPadding,
  UIPageLayout: () => UIPageLayout,
  UIScale: () => UIScale,
  UISizeConstraint: () => UISizeConstraint,
  UIStroke: () => UIStroke,
  UITableLayout: () => UITableLayout,
  UITextSizeConstraint: () => UITextSizeConstraint,
  UnionOperation: () => UnionOperation,
  UniqueId: () => UniqueId,
  UniversalConstraint: () => UniversalConstraint,
  UnreliableRemoteEvent: () => UnreliableRemoteEvent,
  UnvalidatedAssetService: () => UnvalidatedAssetService,
  UserInputService: () => UserInputService,
  UserService: () => UserService,
  UserStorageService: () => UserStorageService,
  VRScaling: () => VRScaling,
  VRService: () => VRService,
  VRStatusService: () => VRStatusService,
  ValueBase: () => ValueBase,
  Vector2: () => Vector2,
  Vector3: () => Vector3,
  Vector3Curve: () => Vector3Curve,
  Vector3Value: () => Vector3Value,
  VectorForce: () => VectorForce,
  VehicleController: () => VehicleController,
  VehicleSeat: () => VehicleSeat,
  VelocityConstraintMode: () => VelocityConstraintMode,
  VelocityMotor: () => VelocityMotor,
  VersionControlService: () => VersionControlService,
  VerticalAlignment: () => VerticalAlignment,
  VerticalScrollBarPosition: () => VerticalScrollBarPosition,
  VideoCaptureService: () => VideoCaptureService,
  VideoDeviceCaptureQuality: () => VideoDeviceCaptureQuality,
  VideoDeviceInput: () => VideoDeviceInput,
  VideoFrame: () => VideoFrame,
  VideoService: () => VideoService,
  ViewMode: () => ViewMode,
  ViewportFrame: () => ViewportFrame,
  VirtualCursorMode: () => VirtualCursorMode,
  VirtualInputManager: () => VirtualInputManager,
  VirtualUser: () => VirtualUser,
  VisibilityCheckDispatcher: () => VisibilityCheckDispatcher,
  Visit: () => Visit,
  VisualizationMode: () => VisualizationMode,
  VisualizationModeCategory: () => VisualizationModeCategory,
  VisualizationModeService: () => VisualizationModeService,
  VoiceChatInternal: () => VoiceChatInternal,
  VoiceChatService: () => VoiceChatService,
  VolumetricAudio: () => VolumetricAudio,
  WedgePart: () => WedgePart,
  Weld: () => Weld,
  WeldConstraint: () => WeldConstraint,
  Wire: () => Wire,
  WireframeHandleAdornment: () => WireframeHandleAdornment,
  Workspace: () => Workspace,
  WorldModel: () => WorldModel,
  WorldRoot: () => WorldRoot,
  WrapLayer: () => WrapLayer,
  WrapLayerAutoSkin: () => WrapLayerAutoSkin,
  WrapTarget: () => WrapTarget,
  ZIndexBehavior: () => ZIndexBehavior
});
module.exports = __toCommonJS(src_exports);

// src/lib/roblox_file.ts
var import_axios = __toESM(require("axios"));

// src/lib/util.ts
function formatNum(num) {
  if (Math.abs(num) < 1e-4)
    return "0";
  return Number(num.toPrecision(5)).toString();
}
function narrowCopyArray(arr) {
  const copyArr = [];
  for (const val of arr) {
    copyArr.push(val);
  }
  return copyArr;
}
function bytesToBitArray(bytes) {
  const output = new Uint8Array(bytes.length * 8);
  for (let i = 0; i < bytes.length; i++) {
    const val = bytes[i];
    const offset = i * 8;
    for (let j = 0; j < 8; ++j) {
      const bit = val >> j & 1;
      output[7 - j + offset] = bit;
    }
  }
  return output;
}
function bitsToByteArray(bits) {
  const outBytes = new Uint8Array(bits.length / 8);
  for (let i = 0; i < 4; ++i) {
    let val = 0;
    const offset = i * 8;
    for (let j = 0; j < 8; ++j) {
      val |= bits[j + offset] << 7 - j;
    }
    outBytes[i] = val;
  }
  return outBytes;
}
function floatsEqual(num1, num2, eps = 1e-8) {
  return Math.abs(num1 - num2) < eps;
}

// src/lib/roblox_types.ts
var import_blake2b = __toESM(require("blake2b"));
var DataType = /* @__PURE__ */ ((DataType2) => {
  DataType2[DataType2["String"] = 1] = "String";
  DataType2[DataType2["Bool"] = 2] = "Bool";
  DataType2[DataType2["Int32"] = 3] = "Int32";
  DataType2[DataType2["Float32"] = 4] = "Float32";
  DataType2[DataType2["Float64"] = 5] = "Float64";
  DataType2[DataType2["UDim"] = 6] = "UDim";
  DataType2[DataType2["UDim2"] = 7] = "UDim2";
  DataType2[DataType2["Ray"] = 8] = "Ray";
  DataType2[DataType2["Faces"] = 9] = "Faces";
  DataType2[DataType2["Axes"] = 10] = "Axes";
  DataType2[DataType2["BrickColor"] = 11] = "BrickColor";
  DataType2[DataType2["Color3"] = 12] = "Color3";
  DataType2[DataType2["Vector2"] = 13] = "Vector2";
  DataType2[DataType2["Vector3"] = 14] = "Vector3";
  DataType2[DataType2["CFrame"] = 16] = "CFrame";
  DataType2[DataType2["Enum"] = 18] = "Enum";
  DataType2[DataType2["Referent"] = 19] = "Referent";
  DataType2[DataType2["Vector3int16"] = 20] = "Vector3int16";
  DataType2[DataType2["NumberSequence"] = 21] = "NumberSequence";
  DataType2[DataType2["ColorSequence"] = 22] = "ColorSequence";
  DataType2[DataType2["NumberRange"] = 23] = "NumberRange";
  DataType2[DataType2["Rect"] = 24] = "Rect";
  DataType2[DataType2["PhysicalProperties"] = 25] = "PhysicalProperties";
  DataType2[DataType2["Color3uint8"] = 26] = "Color3uint8";
  DataType2[DataType2["Int64"] = 27] = "Int64";
  DataType2[DataType2["SharedString"] = 28] = "SharedString";
  DataType2[DataType2["Bytecode"] = 29] = "Bytecode";
  DataType2[DataType2["OptionalCFrame"] = 30] = "OptionalCFrame";
  DataType2[DataType2["UniqueId"] = 31] = "UniqueId";
  DataType2[DataType2["Font"] = 32] = "Font";
  DataType2[DataType2["SecurityCapabilities"] = 33] = "SecurityCapabilities";
  return DataType2;
})(DataType || {});
var ChildContainer = class {
  _children = /* @__PURE__ */ new Set();
  /**
   * Finds the first child that satisfies the given predicate.
   * @param predicate this will keep searching until the predicate returns true
   * @returns the first child that met the predicate, or undefined if none were found.
   */
  FindFirstChild(predicate) {
    for (const child of this._children) {
      if (predicate(child))
        return child;
    }
    return void 0;
  }
  /**
   * Finds the first child of a given class.
   * @param className the class name
   * @param predicate this will keep searching until the predicate returns true
   * @returns the first child of the given class or undefined
   */
  FindFirstChildOfClass(className, predicate) {
    return this.FindFirstChild((child) => child.IsA(className) && (!predicate || predicate(child)));
  }
  /**
   * Finds the first descendant that satisfies the given predicate. Performs a depth-first search.
   * @param predicate this will keep searching until the predicate returns true
   * @returns the first descendant that met the predicate, or undefined if none were found.
   */
  FindFirstDescendant(predicate) {
    for (const child of this._children) {
      if (predicate(child))
        return child;
      const childResult = child.FindFirstDescendant(predicate);
      if (childResult)
        return childResult;
    }
    return void 0;
  }
  /**
   * Finds the first descendant of a given class. Performs a depth-first search.
   * @param className the class name
   * @param predicate this will keep searching until the predicate returns true
   * @returns the first descendant of the given class or undefined
   */
  FindFirstDescendantOfClass(className, predicate) {
    return this.FindFirstDescendant((child) => child.IsA(className) && (!predicate || predicate(child)));
  }
  /**
   * Gathers a list of children that satisfy the given predicate.
   * @param predicate this will include the child if the predicate returns true
   * @returns the list of children that met the predicate, this will have a length of 0 if none were found.
   */
  FindChildren(predicate) {
    const children = [];
    for (const child of this._children) {
      if (predicate(child))
        children.push(child);
    }
    return children;
  }
  /**
   * Gathers a list of children that are of the given class.
   * @param predicate this will include the child if the predicate returns true
   * @returns the list of children, this will have a length of 0 if none were found.
   */
  FindChildrenOfClass(className, predicate) {
    return this.FindChildren((child) => child.IsA(className) && (!predicate || predicate(child)));
  }
  /**
   * Gathers a list of descendants that satisfy the given predicate.
   * @param predicate this will include the descendant if the predicate returns true
   * @returns the list of descendants that met the predicate, this will have a length of 0 if none were found.
   */
  FindDescendants(predicate) {
    const descendants = [];
    for (const child of this._children) {
      if (predicate(child))
        descendants.push(child);
      const childResult = child.FindDescendants(predicate);
      for (const descendant of childResult) {
        descendants.push(descendant);
      }
    }
    return descendants;
  }
  GetAllDescendants() {
    const descendants = [];
    this.GetAllDescendantsHelper(descendants);
    return descendants;
  }
  GetAllDescendantsHelper(descendants) {
    for (const child of this._children) {
      descendants.push(child);
      child.GetAllDescendantsHelper(descendants);
    }
  }
  /**
  * Gathers a list of descendants that are of the given class.
  * @param predicate this will include the descendant if the predicate returns true
  * @returns the list of descendants, this will have a length of 0 if none were found.
  */
  FindDescendantsOfClass(className, predicate) {
    return this.FindDescendants((child) => child.IsA(className) && (!predicate || predicate(child)));
  }
};
var CoreInstance = class _CoreInstance extends ChildContainer {
  _classNameList = [];
  _isService;
  _props = /* @__PURE__ */ new Map();
  _parent;
  /**
   * Creates a new Instance.
   * @param isService whether or not this is a service, false by default
   */
  constructor(isService = false, className) {
    super();
    if (className) {
      this.addClassName(className);
    }
    this._isService = isService;
  }
  /**
   * Derived classes must use this to add their class name to the list of class
   * of this instance names in order for inheritance checks to work properly.
   * @param className the class name
   */
  addClassName(className) {
    this._classNameList.push(className);
  }
  /**
   * The children of this Instance. This is a readonly array; you cannot change children directly.
   * You must change the parent value of child instances if you want to move them.
   */
  get Children() {
    return Array.from(this._children.values());
  }
  /**
   * Read-only access to the raw property data. Meant for internal use.
   */
  get Props() {
    return this._props;
  }
  /**
   * Gets a property value. This is a copy of the value.
   * @param propName the name of the property
   * @param type the DataType of the property
   * @returns The value of the property, or undefined.
   * @example
   * const size: Vector3 | undefined = part.GetProp("size", DataType.Vector3);
   */
  GetProp(propName, type) {
    const prop = this._props.get(propName);
    if (prop?.type === type) {
      return _CoreInstance.CopyValue(prop);
    }
    return void 0;
  }
  static CopyValue(rbxValue) {
    switch (rbxValue.type) {
      case 4 /* Float32 */:
      case 3 /* Int32 */:
      case 5 /* Float64 */:
      case 11 /* BrickColor */:
      case 27 /* Int64 */:
      case 1 /* String */:
      case 2 /* Bool */:
      case 19 /* Referent */:
      case 18 /* Enum */:
      case 29 /* Bytecode */:
      case 33 /* SecurityCapabilities */:
        return rbxValue.value;
      default:
        return rbxValue.value.Copy();
    }
  }
  /**
   * Sets a property value.
   * @param propName the name of the property
   * @param type: the DataType of the property
   * @param value The RobloxValue to set, or undefined to reset the property to its default value.
   * @example
   * part.SetProp("size", DataType.Vector3, new Vector3(2, 3, 4));
   */
  SetProp(propName, type, value) {
    if (value === void 0) {
      this._props.delete(propName);
      return;
    }
    const valueCopy = _CoreInstance.CopyValue({ type, value });
    this._props.set(propName, { type, value: valueCopy });
  }
  /**
   * The class name.
   */
  get ClassName() {
    return this._classNameList[this._classNameList.length - 1];
  }
  /**
   * The list of class names that this inherits from, stored in order from
   * highest base class to lowest derived class.
   */
  get ClassNameList() {
    return this._classNameList;
  }
  /**
   * Whether or not this is a service.
   */
  get IsService() {
    return this._isService;
  }
  /**
   * The name of this instance.
   */
  get Name() {
    return this.GetProp("Name", 1 /* String */) ?? "";
  }
  set Name(newName) {
    this.SetProp("Name", 1 /* String */, newName);
  }
  /**
   * The parent of this instance. This is undefined if the parent is the root of the model.
   */
  get Parent() {
    return this._parent;
  }
  set Parent(newParent) {
    if (this._parent) {
      this._parent._children.delete(this);
    }
    if (newParent) {
      newParent._children.add(this);
    }
    this._parent = newParent;
  }
  /**
   * @param className the class name
   * @returns whether or not this is an instance of the given class name.
   */
  IsA(className) {
    return this._classNameList.includes(className);
  }
  /**
   * This is like IsA but allows any string to be used. Does not provide strong typing unlike IsA.
   * @param className the class name
   * @returns whether or not this is an instance of the given class name.
   */
  IsAUnsafe(className) {
    return this._classNameList.includes(className);
  }
  /**
   * A title string that represents this instance for debugging purposes.
   * @returns \{Class name\} "\{Name\}"
   */
  GetTitleString() {
    return `${this.ClassName} "${this.Name}"`;
  }
  toString() {
    const propStrings = [];
    this._props.forEach((value, key) => {
      if (key.toLowerCase() === "name") {
        return;
      }
      let valueStr;
      if (typeof value.value === "number") {
        valueStr = formatNum(value.value);
      } else if (typeof value.value === "string") {
        valueStr = `"${value.value}"`;
      } else {
        valueStr = value.value.toString();
      }
      propStrings.push(`${key}: ${valueStr}`);
    });
    return `${this.GetTitleString()} {${propStrings.join(", ")}}`;
  }
};
function deepCopyArray(arr) {
  const copyArr = [];
  for (const val of arr) {
    copyArr.push(val.Copy());
  }
  return copyArr;
}
var UDim = class _UDim {
  Scale;
  Offset;
  constructor(scale, offset) {
    this.Scale = scale;
    this.Offset = offset;
  }
  toString() {
    return `UDim(Scale: ${formatNum(this.Scale)}, Offset: ${formatNum(this.Offset)})`;
  }
  Copy() {
    return new _UDim(this.Scale, this.Offset);
  }
};
var UDim2 = class _UDim2 {
  X;
  Y;
  constructor(x, y) {
    this.X = x;
    this.Y = y;
  }
  toString() {
    return `UDim2(X: ${this.X}, Y: ${this.Y})`;
  }
  Copy() {
    return new _UDim2(this.X.Copy(), this.Y.Copy());
  }
};
var Ray = class _Ray {
  Origin;
  Direction;
  constructor(origin, direction) {
    this.Origin = origin;
    this.Direction = direction;
  }
  toString() {
    return `Ray(Origin: ${this.Origin}, Direction: ${this.Direction})`;
  }
  Copy() {
    return new _Ray(this.Origin, this.Direction);
  }
};
var RBXMFace = /* @__PURE__ */ ((RBXMFace2) => {
  RBXMFace2[RBXMFace2["Front"] = 1] = "Front";
  RBXMFace2[RBXMFace2["Bottom"] = 2] = "Bottom";
  RBXMFace2[RBXMFace2["Left"] = 4] = "Left";
  RBXMFace2[RBXMFace2["Back"] = 8] = "Back";
  RBXMFace2[RBXMFace2["Top"] = 16] = "Top";
  RBXMFace2[RBXMFace2["Right"] = 32] = "Right";
  return RBXMFace2;
})(RBXMFace || {});
var Faces = class _Faces {
  Faces;
  constructor(...faces) {
    this.Faces = faces;
  }
  toString() {
    if (this.Faces.length === 0) {
      return "Faces(<none>)";
    } else {
      return `Faces(${this.Faces.map((face) => RBXMFace[face]).join(", ")})`;
    }
  }
  Copy() {
    return new _Faces(...narrowCopyArray(this.Faces));
  }
};
var RBXMAxis = /* @__PURE__ */ ((RBXMAxis2) => {
  RBXMAxis2[RBXMAxis2["X"] = 1] = "X";
  RBXMAxis2[RBXMAxis2["Y"] = 2] = "Y";
  RBXMAxis2[RBXMAxis2["Z"] = 4] = "Z";
  return RBXMAxis2;
})(RBXMAxis || {});
var Axes = class _Axes {
  Axes;
  constructor(...axes) {
    this.Axes = axes;
  }
  toString() {
    if (this.Axes.length === 0) {
      return "Axes(<none>)";
    } else {
      return `Axes(${this.Axes.map((axis) => RBXMAxis[axis]).join(", ")})`;
    }
  }
  Copy() {
    return new _Axes(...narrowCopyArray(this.Axes));
  }
};
var Color3 = class _Color3 {
  R;
  G;
  B;
  constructor(r, g, b) {
    this.R = r;
    this.G = g;
    this.B = b;
  }
  /**
   * Converts a float RGB to its uint8 representation.
   * @param float a float between 0 to 1
   * @returns the uint8 form
   */
  static FloatToUint8(float) {
    return Math.round(float * 255);
  }
  /**
   * Creates a Color3 from 0-255 RGB values.
   * @param r red
   * @param g green
   * @param b blue
   * @returns a Color3
   */
  static FromRGB(r, g, b) {
    return new _Color3(r / 255, g / 255, b / 255);
  }
  toString() {
    return `Color3(R: ${_Color3.FloatToUint8(this.R)}, G: ${_Color3.FloatToUint8(this.G)}, B: ${_Color3.FloatToUint8(this.B)})`;
  }
  Copy() {
    return new _Color3(this.R, this.G, this.B);
  }
};
var Vector2 = class _Vector2 {
  X;
  Y;
  constructor(x, y) {
    this.X = x;
    this.Y = y;
  }
  /**
   * The magnitude of this Vector2.
   */
  get Magnitude() {
    return Math.sqrt(this.Dot(this));
  }
  /**
   * Calculates the cross product of two Vector2's.
   * @param other the other Vector2
   * @returns the resultant cross product
   */
  Cross(other) {
    return new _Vector2(this.X * other.Y, this.Y * other.X);
  }
  /**
   * Calculates the dot product of two Vector2's.
   * @param other the other Vector2
   * @returns the dot product
   */
  Dot(other) {
    const dotX = this.X * other.X;
    const dotY = this.Y * other.Y;
    return dotX + dotY;
  }
  /**
   * Adds two Vector2's, returns a new Vector2
   * @param other the other Vector2
   * @returns the result of the addition as a new Vector2
   */
  Add(other) {
    return new _Vector2(this.X + other.X, this.Y + other.Y);
  }
  /**
   * Subtracts two Vector2's, returns a new Vector2
   * @param other the other Vector2
   * @returns the result of the subtraction as a new Vector2
   */
  Subtract(other) {
    return new _Vector2(this.X - other.X, this.Y - other.Y);
  }
  /**
   * Multiplies this Vector2 by a scalar amount.
   * @param scalar a scalar amount
   * @returns the result of the multiplication as a new Vector2
   */
  Multiply(scalar) {
    return new _Vector2(this.X * scalar, this.Y * scalar);
  }
  /**
   * Divides this Vector2 by a scalar amount.
   * @param scalar a scalar amount
   * @returns the result of the division as a new Vector2
   */
  Divide(scalar) {
    return new _Vector2(this.X / scalar, this.Y / scalar);
  }
  toString() {
    return `Vector2(X: ${formatNum(this.X)}, Y: ${formatNum(this.Y)})`;
  }
  Copy() {
    return new _Vector2(this.X, this.Y);
  }
};
var Vector3 = class _Vector3 {
  X;
  Y;
  Z;
  constructor(x, y, z) {
    this.X = x;
    this.Y = y;
    this.Z = z;
  }
  /**
   * Unit vector that points in the positive X direction
   */
  static get XAxis() {
    return new _Vector3(1, 0, 0);
  }
  /**
   * Unit vector that points in the positive Y direction
   */
  static get YAxis() {
    return new _Vector3(0, 1, 0);
  }
  /**
   * Unit vector that points in the positive Z direction
   */
  static get ZAxis() {
    return new _Vector3(0, 0, 1);
  }
  /**
   * The magnitude of this Vector3.
   */
  get Magnitude() {
    return Math.sqrt(this.Dot(this));
  }
  /**
   * Calculates the cross product of two Vector3's.
   * @param other the other Vector3
   * @returns the resultant cross product
   */
  Cross(other) {
    const crossX = this.Y * other.Z - other.Y * this.Z;
    const crossY = this.Z * other.X - other.Z * this.X;
    const crossZ = this.X * other.Y - other.X * this.Y;
    return new _Vector3(crossX, crossY, crossZ);
  }
  /**
   * Calculates the dot product of two Vector3's.
   * @param other the other Vector3
   * @returns the dot product
   */
  Dot(other) {
    const dotX = this.X * other.X;
    const dotY = this.Y * other.Y;
    const dotZ = this.Z * other.Z;
    return dotX + dotY + dotZ;
  }
  /**
   * Adds two Vector3's, returns a new Vector3
   * @param other the other Vector3
   * @returns the result of the addition as a new Vector3
   */
  Add(other) {
    return new _Vector3(this.X + other.X, this.Y + other.Y, this.Z + other.Z);
  }
  /**
   * Subtracts two Vector3's, returns a new Vector3
   * @param other the other Vector3
   * @returns the result of the subtraction as a new Vector3
   */
  Subtract(other) {
    return new _Vector3(this.X - other.X, this.Y - other.Y, this.Z - other.Z);
  }
  /**
   * Multiplies this Vector3 by a scalar amount.
   * @param scalar a scalar amount
   * @returns the result of the multiplication as a new Vector3
   */
  Multiply(scalar) {
    return new _Vector3(this.X * scalar, this.Y * scalar, this.Z * scalar);
  }
  /**
   * Divides this Vector3 by a scalar amount.
   * @param scalar a scalar amount
   * @returns the result of the division as a new Vector3
   */
  Divide(scalar) {
    return new _Vector3(this.X / scalar, this.Y / scalar, this.Z / scalar);
  }
  toString() {
    return `Vector3(X: ${formatNum(this.X)}, Y: ${formatNum(this.Y)}, Z: ${formatNum(this.Z)})`;
  }
  Copy() {
    return new _Vector3(this.X, this.Y, this.Z);
  }
};
var CFrame = class _CFrame {
  Position;
  Orientation;
  constructor(position, orientation) {
    this.Position = position;
    this.Orientation = orientation;
  }
  /**
   * The identity CFrame
   */
  static get Identity() {
    return new _CFrame(new Vector3(0, 0, 0), [1, 0, 0, 0, 1, 0, 0, 0, 1]);
  }
  toString() {
    return `CFrame(Position: ${this.Position}, Orientation: [${this.Orientation.map(formatNum).join(", ")}])`;
  }
  Copy() {
    return new _CFrame(this.Position.Copy(), narrowCopyArray(this.Orientation));
  }
};
var NumberSequence = class _NumberSequence {
  Keypoints;
  constructor(...keypoints) {
    this.Keypoints = keypoints;
  }
  toString() {
    return `NumberSequence(Keypoints: ${this.Keypoints.join(", ")})`;
  }
  Copy() {
    return new _NumberSequence(...deepCopyArray(this.Keypoints));
  }
};
var NumberSequenceKeypoint = class _NumberSequenceKeypoint {
  Time;
  Value;
  Envelope;
  constructor(time, value, envelope) {
    this.Time = time;
    this.Value = value;
    this.Envelope = envelope;
  }
  toString() {
    return `NumberSequenceKeypoint(Time: ${formatNum(this.Time)}, Value: ${formatNum(this.Value)}, Envelope: ${formatNum(this.Envelope)})`;
  }
  Copy() {
    return new _NumberSequenceKeypoint(this.Time, this.Value, this.Envelope);
  }
};
var ColorSequence = class _ColorSequence {
  Keypoints;
  constructor(...keypoints) {
    this.Keypoints = keypoints;
  }
  toString() {
    return `ColorSequence(Keypoints: ${this.Keypoints.join(", ")})`;
  }
  Copy() {
    return new _ColorSequence(...deepCopyArray(this.Keypoints));
  }
};
var ColorSequenceKeypoint = class _ColorSequenceKeypoint {
  Time;
  Color;
  constructor(time, color) {
    this.Time = time;
    this.Color = color;
  }
  toString() {
    return `ColorSequenceKeypoint(Time: ${formatNum(this.Time)}, Color: ${this.Color})`;
  }
  Copy() {
    return new _ColorSequenceKeypoint(this.Time, this.Color.Copy());
  }
};
var NumberRange = class _NumberRange {
  Min;
  Max;
  constructor(min, max) {
    this.Min = min;
    this.Max = max;
  }
  toString() {
    return `NumberRange(Min: ${formatNum(this.Min)}, Max: ${formatNum(this.Max)})`;
  }
  Copy() {
    return new _NumberRange(this.Min, this.Max);
  }
};
var Rect = class _Rect {
  Min;
  Max;
  constructor(min, max) {
    this.Min = min;
    this.Max = max;
  }
  toString() {
    return `Rect(Min: ${this.Min}, Max: ${this.Max})`;
  }
  Copy() {
    return new _Rect(this.Min.Copy(), this.Max.Copy());
  }
};
var PhysicalProperties = class _PhysicalProperties {
  Density;
  Friction;
  Elasticity;
  FrictionWeight;
  ElasticityWeight;
  constructor(density, friction, elasticity, frictionWeight, elasticityWeight) {
    this.Density = density;
    this.Friction = friction;
    this.Elasticity = elasticity;
    this.FrictionWeight = frictionWeight;
    this.ElasticityWeight = elasticityWeight;
  }
  toString() {
    return `PhysicalProperties(Density: ${formatNum(this.Density)}, Friction: ${formatNum(this.Friction)}, Elasticity: ${formatNum(this.Elasticity)}, FrictionWeight: ${formatNum(this.FrictionWeight)}, ElasticityWeight: ${formatNum(this.ElasticityWeight)})`;
  }
  Copy() {
    return new _PhysicalProperties(this.Density, this.Friction, this.Elasticity, this.FrictionWeight, this.ElasticityWeight);
  }
};
var SharedString = class {
  Value;
  Hash;
  constructor(value, hash) {
    this.Value = value;
    if (hash) {
      this.Hash = Buffer.from(hash, "binary");
    } else {
      const input = Buffer.from(this.Value);
      this.Hash = (0, import_blake2b.default)(16).update(input).digest();
    }
  }
};
var SharedStringValue = class _SharedStringValue {
  Index;
  constructor(index) {
    this.Index = index;
  }
  toString() {
    return `SharedString(Index: ${this.Index})`;
  }
  Copy() {
    return new _SharedStringValue(this.Index);
  }
};
var UniqueId = class _UniqueId {
  Index;
  Time;
  Random;
  constructor(index, time, random) {
    this.Index = index;
    this.Time = time;
    this.Random = random;
  }
  toString() {
    return `${BigInt.asUintN(63, this.Random).toString(16).padStart(16, "0")}${this.Time.toString(16).padStart(8, "0")}${this.Index.toString(16).padStart(8, "0")}`;
  }
  Copy() {
    return new _UniqueId(this.Index, this.Time, this.Random);
  }
};
var FontWeight = /* @__PURE__ */ ((FontWeight2) => {
  FontWeight2[FontWeight2["Thin"] = 100] = "Thin";
  FontWeight2[FontWeight2["ExtraLight"] = 200] = "ExtraLight";
  FontWeight2[FontWeight2["Light"] = 300] = "Light";
  FontWeight2[FontWeight2["Regular"] = 400] = "Regular";
  FontWeight2[FontWeight2["Medium"] = 500] = "Medium";
  FontWeight2[FontWeight2["SemiBold"] = 600] = "SemiBold";
  FontWeight2[FontWeight2["Bold"] = 700] = "Bold";
  FontWeight2[FontWeight2["ExtraBold"] = 800] = "ExtraBold";
  FontWeight2[FontWeight2["Heavy"] = 900] = "Heavy";
  return FontWeight2;
})(FontWeight || {});
var FontStyle = /* @__PURE__ */ ((FontStyle2) => {
  FontStyle2[FontStyle2["Normal"] = 0] = "Normal";
  FontStyle2[FontStyle2["Italic"] = 1] = "Italic";
  return FontStyle2;
})(FontStyle || {});
var RBXMFont = class _RBXMFont {
  Family;
  Weight;
  Style;
  CachedFaceId;
  constructor(family, weight, style, cachedFaceId) {
    this.Family = family;
    this.Weight = weight;
    this.Style = style;
    this.CachedFaceId = cachedFaceId;
  }
  toString() {
    return `Font(Family: ${this.Family}, Weight: ${FontWeight[this.Weight]}, Style: ${FontStyle[this.Style]}, CachedFaceId: ${this.CachedFaceId || "<none>"})`;
  }
  Copy() {
    return new _RBXMFont(this.Family, this.Weight, this.Style, this.CachedFaceId);
  }
};
var EnumItem = class _EnumItem {
  _name;
  _value;
  constructor(name, value) {
    this._name = name, this._value = value;
  }
  /**
   * The name of this Enum.
   */
  get Name() {
    return this._name;
  }
  /**
   * The value of this Enum.
   */
  get Value() {
    return this._value;
  }
  toString() {
    return this._name !== "" ? this._name : this._value.toString();
  }
  /**
   * Allows you to construct an EnumItem that hasn't been mapped by the generated types.
   * @param value the value of the enum
   * @returns the unknown enum with the given value.
   */
  static MakeUnknownEnum(value) {
    return new _EnumItem("", value);
  }
};

// src/lib/roblox_file_reader.ts
var import_lz4 = __toESM(require("lz4"));
var fzstd = __toESM(require("fzstd"));

// src/lib/roblox_file_bytes.ts
var RobloxFileByteReader = class _RobloxFileByteReader {
  data;
  idx = 0;
  constructor(data = new Uint8Array()) {
    this.data = data;
  }
  get length() {
    return this.data.length;
  }
  get index() {
    return this.idx;
  }
  get dataArray() {
    return this.data;
  }
  getUint8() {
    const val = this.data[this.idx];
    ++this.idx;
    return val;
  }
  getUintOfSize(numBytes) {
    let val = 0;
    for (let i = 0; i < numBytes; ++i) {
      val += this.getUint8() << i * 8;
    }
    return val;
  }
  getUint16() {
    return this.getUintOfSize(2);
  }
  getUint32() {
    return this.getUintOfSize(4);
  }
  static bytesToInt32(bytes) {
    return Buffer.from(bytes).readInt32BE(0);
  }
  static untransformInt32(int32) {
    return int32 >> 1 ^ -(int32 & 1);
  }
  static untransformInt64(int64) {
    return int64 >> BigInt(1) ^ -(int64 & BigInt(1));
  }
  static bytesToRobloxFloat32(bytes) {
    const robloxBitArray = bytesToBitArray(bytes);
    const standardBitArray = new Uint8Array(32);
    for (let i = 0; i < 31; ++i) {
      standardBitArray[i + 1] = robloxBitArray[i];
    }
    standardBitArray[0] = robloxBitArray[31];
    const outBytes = bitsToByteArray(standardBitArray);
    return Buffer.from(outBytes).readFloatBE(0);
  }
  getBytesReversed(numBytes) {
    const bytes = new Uint8Array(numBytes);
    for (let i = numBytes - 1; i >= 0; --i) {
      bytes[i] = this.getUint8();
    }
    return bytes;
  }
  getInt16() {
    const bytes = this.getBytes(2);
    return Buffer.from(bytes).readInt16LE(0);
  }
  getInt32() {
    const bytes = this.getBytesReversed(4);
    return _RobloxFileByteReader.bytesToInt32(bytes);
  }
  getInt64() {
    const bytes = this.getBytes(8);
    return Buffer.from(bytes).readBigInt64LE(0);
  }
  getFloat32() {
    const bytes = this.getBytes(4);
    return Buffer.from(bytes).readFloatLE(0);
  }
  getFloat64() {
    const bytes = this.getBytes(8);
    return Buffer.from(bytes).readDoubleLE(0);
  }
  getBytes(numBytes) {
    const bytes = new Uint8Array(numBytes);
    for (let i = 0; i < numBytes; ++i) {
      bytes[i] = this.data[this.idx];
      ++this.idx;
    }
    return bytes;
  }
  getBytesAsString(numBytes) {
    let s = "";
    for (let i = 0; i < numBytes; ++i) {
      s += String.fromCharCode(this.data[this.idx]);
      ++this.idx;
    }
    return s;
  }
  skipBytes(numBytes) {
    this.idx += numBytes;
  }
  getString() {
    const length = this.getUint32();
    return this.getBytesAsString(length);
  }
  getBool() {
    return this.getUint8() !== 0;
  }
  static convertInterleaved(bytes, length, converter) {
    const byteSize = bytes.length / length;
    const rotatedBytes = new Array(length);
    for (let i = 0; i < length; ++i) {
      const transform = new Uint8Array(byteSize);
      for (let j = byteSize - 1; j >= 0; --j) {
        transform[j] = bytes[i + j * length];
      }
      rotatedBytes[i] = converter(transform);
    }
    return rotatedBytes;
  }
  getInterleavedFloat32Array(length) {
    const interleavedBytes = this.getBytes(length * 4);
    return _RobloxFileByteReader.convertInterleaved(interleavedBytes, length, _RobloxFileByteReader.bytesToRobloxFloat32);
  }
  getInterleavedInt32Array(length) {
    const interleavedBytes = this.getBytes(length * 4);
    const bytes = _RobloxFileByteReader.convertInterleaved(interleavedBytes, length, _RobloxFileByteReader.bytesToInt32);
    return bytes.map(_RobloxFileByteReader.untransformInt32);
  }
  getInterleavedUint32Array(length) {
    const interleavedBytes = this.getBytes(length * 4);
    return _RobloxFileByteReader.convertInterleaved(interleavedBytes, length, (bytes) => Buffer.from(bytes).readUint32BE(0));
  }
  getInterleavedInt64Array(length) {
    const interleavedBytes = this.getBytes(length * 8);
    const bytes = _RobloxFileByteReader.convertInterleaved(interleavedBytes, length, (bytes2) => Buffer.from(bytes2).readBigInt64BE(0));
    return bytes.map(_RobloxFileByteReader.untransformInt64);
  }
  getInterleavedUint64Array(length) {
    const interleavedBytes = this.getBytes(length * 8);
    return _RobloxFileByteReader.convertInterleaved(interleavedBytes, length, (bytes) => Buffer.from(bytes).readBigUint64BE(0));
  }
  getFloat32Array(length) {
    const bytes = new Array(length);
    for (let i = 0; i < length; ++i) {
      bytes[i] = this.getFloat32();
    }
    return bytes;
  }
  getFloat64Array(length) {
    const bytes = new Array(length);
    for (let i = 0; i < length; ++i) {
      bytes[i] = this.getFloat64();
    }
    return bytes;
  }
  getReferentArray(length) {
    const referents = this.getInterleavedInt32Array(length);
    for (let i = 1; i < length; ++i) {
      referents[i] = referents[i - 1] + referents[i];
    }
    return referents;
  }
};
var RobloxFileByteWriter = class _RobloxFileByteWriter {
  data = [];
  get bytes() {
    return new Uint8Array(this.data);
  }
  putUint8(uint8) {
    this.data.push(uint8);
  }
  putUint16(uint16) {
    const buf = Buffer.alloc(2);
    buf.writeUInt16LE(uint16);
    this.putBytes(buf);
  }
  putUint32(uint32) {
    const buf = Buffer.alloc(4);
    buf.writeUInt32LE(uint32);
    this.putBytes(buf);
  }
  static int32ToBytes(int32) {
    const buf = Buffer.alloc(4);
    buf.writeInt32BE(int32);
    return buf;
  }
  static transformInt32(int32) {
    return int32 << 1 ^ int32 >> 31;
  }
  static transformInt64(int64) {
    return int64 << BigInt(1) ^ int64 >> BigInt(63);
  }
  static f32ToRobloxF32Bytes(f32) {
    const bytes = Buffer.allocUnsafe(4);
    bytes.writeFloatBE(f32);
    const origBitArray = bytesToBitArray(bytes);
    const robloxBitArray = new Uint8Array(32);
    for (let i = 0; i < 31; ++i) {
      robloxBitArray[i] = origBitArray[i + 1];
    }
    robloxBitArray[31] = origBitArray[0];
    return bitsToByteArray(robloxBitArray);
  }
  putBytesReversed(bytes) {
    for (let i = bytes.length - 1; i >= 0; --i) {
      this.putUint8(bytes[i]);
    }
  }
  putInt16(int16) {
    const buf = Buffer.alloc(2);
    buf.writeInt16LE(int16);
    this.putBytes(buf);
  }
  putInt32(int32) {
    this.putBytesReversed(_RobloxFileByteWriter.int32ToBytes(int32));
  }
  putInt64(int64) {
    const buf = Buffer.alloc(8);
    buf.writeBigInt64LE(int64);
    this.putBytes(buf);
  }
  putFloat32(f32) {
    const buf = Buffer.alloc(4);
    buf.writeFloatLE(f32);
    this.putBytes(buf);
  }
  putFloat64(f64) {
    const buf = Buffer.alloc(8);
    buf.writeDoubleLE(f64);
    this.putBytes(buf);
  }
  putBytes(bytes) {
    for (const byte of bytes) {
      this.putUint8(byte);
    }
  }
  putStringAsBytes(str) {
    if (typeof str !== "string") {
      throw new TypeError("Expected a string but received " + typeof str);
    }
  
    for (let i = 0; i < str.length; ++i) {
      this.putUint8(str.charCodeAt(i));
    }
  }
  putString(str) {
    if (typeof str !== "string") {
      str = String(str);
    }
    this.putUint32(str.length);
    return this.putStringAsBytes(str);
  }
  putBool(bool) {
    this.putUint8(bool ? 1 : 0);
  }
  putBytesInterleaved(bytes, length) {
    const byteSize = bytes.length / length;
    const rotatedBytes = new Uint8Array(bytes.length);
    for (let i = 0; i < length; ++i) {
      for (let j = 0; j < byteSize; ++j) {
        rotatedBytes[j * length + i] = bytes[i * byteSize + j];
      }
    }
    this.putBytes(rotatedBytes);
  }
  putInterleavedFloat32Array(nums) {
    const bytes = new Uint8Array(nums.length * 4);
    for (let i = 0; i < nums.length; ++i) {
      const rbxF32bytes = _RobloxFileByteWriter.f32ToRobloxF32Bytes(nums[i]);
      for (let j = 0; j < 4; ++j) {
        bytes[i * 4 + j] = rbxF32bytes[j];
      }
    }
    this.putBytesInterleaved(bytes, nums.length);
  }
  putInterleavedInt32Array(nums) {
    const bytes = new Uint8Array(nums.length * 4);
    for (let i = 0; i < nums.length; ++i) {
      const buf = Buffer.allocUnsafe(4);
      buf.writeInt32BE(_RobloxFileByteWriter.transformInt32(nums[i]));
      for (let j = 0; j < 4; ++j) {
        bytes[i * 4 + j] = buf[j];
      }
    }
    this.putBytesInterleaved(bytes, nums.length);
  }
  putInterleavedUint32Array(nums) {
    const bytes = new Uint8Array(nums.length * 4);
    for (let i = 0; i < nums.length; ++i) {
      const buf = Buffer.allocUnsafe(4);
      buf.writeUint32BE(nums[i]);
      for (let j = 0; j < 4; ++j) {
        bytes[i * 4 + j] = buf[j];
      }
    }
    this.putBytesInterleaved(bytes, nums.length);
  }
  putInterleavedInt64Array(nums) {
    const bytes = new Uint8Array(nums.length * 8);
    for (let i = 0; i < nums.length; ++i) {
      const buf = Buffer.allocUnsafe(8);
      buf.writeBigInt64BE(_RobloxFileByteWriter.transformInt64(nums[i]));
      for (let j = 0; j < 8; ++j) {
        bytes[i * 8 + j] = buf[j];
      }
    }
    this.putBytesInterleaved(bytes, nums.length);
  }
  putInterleavedUint64Array(nums) {
    const bytes = new Uint8Array(nums.length * 8);
    for (let i = 0; i < nums.length; ++i) {
      const buf = Buffer.allocUnsafe(8);
      buf.writeBigUint64BE(nums[i]);
      for (let j = 0; j < 4; ++j) {
        bytes[i * 8 + j] = buf[j];
      }
    }
    this.putBytesInterleaved(bytes, nums.length);
  }
  putFloat32Array(nums) {
    for (const num of nums) {
      this.putFloat32(num);
    }
  }
  putFloat64Array(nums) {
    for (const num of nums) {
      this.putFloat64(num);
    }
  }
  putReferentArray(referents) {
    if (referents.length < 1) {
      return;
    }
    let prevReferent = referents[0];
    const accumlated = [prevReferent];
    for (let i = 1; i < referents.length; ++i) {
      const curReferent = referents[i];
      accumlated.push(curReferent - prevReferent);
      prevReferent = curReferent;
    }
    this.putInterleavedInt32Array(accumlated);
  }
};

// src/lib/roblox_file_dom.ts
var RobloxFileDOM = class {
  MAGIC_HEADER = "<roblox!\x89\xFF\r\n\n";
  MAGIC_END = "</roblox>";
  dataTypeParsers = /* @__PURE__ */ new Map();
  classIdToInfo = /* @__PURE__ */ new Map();
  referentIdToClassId = /* @__PURE__ */ new Map();
  constructor() {
    this.dataTypeParsers.set(1 /* String */, new StringParser());
    this.dataTypeParsers.set(2 /* Bool */, new BoolParser());
    this.dataTypeParsers.set(3 /* Int32 */, new Int32Parser());
    this.dataTypeParsers.set(4 /* Float32 */, new Float32Parser());
    this.dataTypeParsers.set(5 /* Float64 */, new Float64Parser());
    this.dataTypeParsers.set(6 /* UDim */, new UDimParser());
    this.dataTypeParsers.set(7 /* UDim2 */, new UDim2Parser());
    this.dataTypeParsers.set(8 /* Ray */, new RayParser());
    this.dataTypeParsers.set(9 /* Faces */, new FacesParser());
    this.dataTypeParsers.set(10 /* Axes */, new AxesParser());
    this.dataTypeParsers.set(11 /* BrickColor */, new BrickColorParser());
    this.dataTypeParsers.set(12 /* Color3 */, new Color3Parser());
    this.dataTypeParsers.set(13 /* Vector2 */, new Vector2Parser());
    this.dataTypeParsers.set(14 /* Vector3 */, new Vector3Parser());
    this.dataTypeParsers.set(16 /* CFrame */, new CFrameParser());
    this.dataTypeParsers.set(18 /* Enum */, new EnumParser());
    this.dataTypeParsers.set(19 /* Referent */, new ReferentParser());
    this.dataTypeParsers.set(26 /* Color3uint8 */, new Color3uint8Parser());
    this.dataTypeParsers.set(20 /* Vector3int16 */, new Vector3int16Parser());
    this.dataTypeParsers.set(21 /* NumberSequence */, new NumberSequenceParser());
    this.dataTypeParsers.set(22 /* ColorSequence */, new ColorSequenceParser());
    this.dataTypeParsers.set(23 /* NumberRange */, new NumberRangeParser());
    this.dataTypeParsers.set(24 /* Rect */, new RectParser());
    this.dataTypeParsers.set(25 /* PhysicalProperties */, new PhysicalPropertiesParser());
    this.dataTypeParsers.set(27 /* Int64 */, new Int64Parser());
    this.dataTypeParsers.set(28 /* SharedString */, new SharedStringParser());
    this.dataTypeParsers.set(29 /* Bytecode */, new BytecodeParser());
    this.dataTypeParsers.set(30 /* OptionalCFrame */, new OptionalCFrameParser());
    this.dataTypeParsers.set(31 /* UniqueId */, new UniqueIdParser());
    this.dataTypeParsers.set(32 /* Font */, new FontParser());
    this.dataTypeParsers.set(33 /* SecurityCapabilities */, new SecurityCapabilitiesParser());
  }
};
var DataTypeParser = class {
};
var StringParser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    for (let i = 0; i < numInstances; ++i) {
      const str = bytes.getString();
      outValues.push(str ? { type: 1 /* String */, value: str } : void 0);
    }
  }
  write(writer, values) {
    for (const value of values) {
      if (value?.type === 1 /* String */) {
        writer.putString(value.value);
      } else {
        writer.putString("");
      }
    }
  }
};
var BoolParser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    for (let i = 0; i < numInstances; ++i) {
      const bool = bytes.getBool();
      outValues.push({ type: 2 /* Bool */, value: bool });
    }
  }
  write(writer, values) {
    for (const value of values) {
      if (value?.type === 2 /* Bool */) {
        writer.putBool(value.value);
      } else {
        writer.putBool(false);
      }
    }
  }
};
var Int32Parser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    const ints = bytes.getInterleavedInt32Array(numInstances);
    for (let i = 0; i < numInstances; ++i) {
      outValues.push({ type: 3 /* Int32 */, value: ints[i] });
    }
  }
  write(writer, values) {
    const nums = [];
    for (const value of values) {
      if (value?.type === 3 /* Int32 */) {
        nums.push(value.value);
      } else {
        nums.push(0);
      }
    }
    writer.putInterleavedInt32Array(nums);
  }
};
var Float32Parser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    const floats = bytes.getInterleavedFloat32Array(numInstances);
    for (let i = 0; i < numInstances; ++i) {
      outValues.push({ type: 4 /* Float32 */, value: floats[i] });
    }
  }
  write(writer, values) {
    const nums = [];
    for (const value of values) {
      if (value?.type === 4 /* Float32 */) {
        nums.push(value.value);
      } else {
        nums.push(0);
      }
    }
    writer.putInterleavedFloat32Array(nums);
  }
};
var Float64Parser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    const floats = bytes.getFloat64Array(numInstances);
    for (let i = 0; i < numInstances; ++i) {
      outValues.push({ type: 5 /* Float64 */, value: floats[i] });
    }
  }
  write(writer, values) {
    const nums = [];
    for (const value of values) {
      if (value?.type === 5 /* Float64 */) {
        nums.push(value.value);
      } else {
        nums.push(0);
      }
    }
    writer.putFloat64Array(nums);
  }
};
var UDimParser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    const scales = bytes.getInterleavedFloat32Array(numInstances);
    const offsets = bytes.getInterleavedInt32Array(numInstances);
    for (let i = 0; i < numInstances; ++i) {
      outValues.push({ type: 6 /* UDim */, value: new UDim(scales[i], offsets[i]) });
    }
  }
  write(writer, values) {
    const scales = [];
    const offsets = [];
    for (const value of values) {
      if (value?.type === 6 /* UDim */) {
        scales.push(value.value.Scale);
        offsets.push(value.value.Offset);
      } else {
        scales.push(0);
        offsets.push(0);
      }
    }
    writer.putInterleavedFloat32Array(scales);
    writer.putInterleavedInt32Array(offsets);
  }
};
var UDim2Parser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    const scalesX = bytes.getInterleavedFloat32Array(numInstances);
    const scalesY = bytes.getInterleavedFloat32Array(numInstances);
    const offsetsX = bytes.getInterleavedInt32Array(numInstances);
    const offsetsY = bytes.getInterleavedInt32Array(numInstances);
    for (let i = 0; i < numInstances; ++i) {
      const x = new UDim(scalesX[i], offsetsX[i]);
      const y = new UDim(scalesY[i], offsetsY[i]);
      outValues.push({ type: 7 /* UDim2 */, value: new UDim2(x, y) });
    }
  }
  write(writer, values) {
    const scalesX = [];
    const scalesY = [];
    const offsetsX = [];
    const offsetsY = [];
    for (const value of values) {
      if (value?.type === 7 /* UDim2 */) {
        const x = value.value.X;
        const y = value.value.Y;
        scalesX.push(x.Scale);
        scalesY.push(y.Scale);
        offsetsX.push(x.Offset);
        offsetsY.push(y.Offset);
      } else {
        scalesX.push(0);
        scalesY.push(0);
        offsetsX.push(0);
        offsetsY.push(0);
      }
    }
    writer.putInterleavedFloat32Array(scalesX);
    writer.putInterleavedFloat32Array(scalesY);
    writer.putInterleavedInt32Array(offsetsX);
    writer.putInterleavedInt32Array(offsetsY);
  }
};
var RayParser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    const origin = new Vector3(bytes.getFloat32(), bytes.getFloat32(), bytes.getFloat32());
    const direction = new Vector3(bytes.getFloat32(), bytes.getFloat32(), bytes.getFloat32());
    for (let i = 0; i < numInstances; ++i) {
      outValues.push({ type: 8 /* Ray */, value: new Ray(origin, direction) });
    }
  }
  write(writer, values) {
    for (const value of values) {
      if (value?.type === 8 /* Ray */) {
        const ray = value.value;
        writer.putFloat32(ray.Origin.X);
        writer.putFloat32(ray.Origin.Y);
        writer.putFloat32(ray.Origin.Z);
        writer.putFloat32(ray.Direction.X);
        writer.putFloat32(ray.Direction.Y);
        writer.putFloat32(ray.Direction.Z);
      } else {
        writer.putFloat32(0);
        writer.putFloat32(0);
        writer.putFloat32(0);
        writer.putFloat32(0);
        writer.putFloat32(0);
        writer.putFloat32(0);
      }
    }
  }
};
var FacesParser = class extends DataTypeParser {
  FacesList = [1 /* Front */, 2 /* Bottom */, 4 /* Left */, 8 /* Back */, 16 /* Top */, 32 /* Right */];
  read(bytes, numInstances, outValues) {
    for (let i = 0; i < numInstances; ++i) {
      const faces = new Array();
      const facesBytes = bytes.getUint8();
      for (const face of this.FacesList) {
        if ((facesBytes & face) > 0) {
          faces.push(face);
        }
      }
      outValues.push({ type: 9 /* Faces */, value: new Faces(...faces) });
    }
  }
  write(writer, values) {
    for (const value of values) {
      if (value?.type === 9 /* Faces */) {
        let bitMask = 0;
        for (const face of value.value.Faces) {
          bitMask |= face;
        }
        writer.putUint8(bitMask);
      } else {
        writer.putUint8(0);
      }
    }
  }
};
var AxesParser = class extends DataTypeParser {
  AxisList = [1 /* X */, 2 /* Y */, 4 /* Z */];
  read(bytes, numInstances, outValues) {
    for (let i = 0; i < numInstances; ++i) {
      const axes = new Array();
      const axesBytes = bytes.getUint8();
      for (const axis of this.AxisList) {
        if ((axesBytes & axis) > 0) {
          axes.push(axis);
        }
      }
      outValues.push({ type: 10 /* Axes */, value: new Axes(...axes) });
    }
  }
  write(writer, values) {
    for (const value of values) {
      if (value?.type === 10 /* Axes */) {
        let bitMask = 0;
        for (const axis of value.value.Axes) {
          bitMask |= axis;
        }
        writer.putUint8(bitMask);
      } else {
        writer.putUint8(0);
      }
    }
  }
};
var BrickColorParser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    const brickColors = bytes.getInterleavedUint32Array(numInstances);
    for (let i = 0; i < numInstances; ++i) {
      outValues.push({ type: 11 /* BrickColor */, value: brickColors[i] });
    }
  }
  write(writer, values) {
    const brickColors = [];
    for (const value of values) {
      if (value?.type === 11 /* BrickColor */) {
        brickColors.push(value.value);
      } else {
        brickColors.push(0);
      }
    }
    writer.putInterleavedUint32Array(brickColors);
  }
};
var Color3Parser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    const rVals = bytes.getInterleavedFloat32Array(numInstances);
    const gVals = bytes.getInterleavedFloat32Array(numInstances);
    const bVals = bytes.getInterleavedFloat32Array(numInstances);
    for (let i = 0; i < numInstances; ++i) {
      outValues.push({ type: 12 /* Color3 */, value: new Color3(rVals[i], gVals[i], bVals[i]) });
    }
  }
  write(writer, values) {
    const r = [];
    const g = [];
    const b = [];
    for (const value of values) {
      if (value?.type === 12 /* Color3 */) {
        const color = value.value;
        r.push(color.R);
        g.push(color.G);
        b.push(color.B);
      } else {
        r.push(0);
        g.push(0);
        b.push(0);
      }
    }
    writer.putInterleavedFloat32Array(r);
    writer.putInterleavedFloat32Array(g);
    writer.putInterleavedFloat32Array(b);
  }
};
var Vector2Parser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    const xVals = bytes.getInterleavedFloat32Array(numInstances);
    const yVals = bytes.getInterleavedFloat32Array(numInstances);
    for (let i = 0; i < numInstances; ++i) {
      outValues.push({ type: 13 /* Vector2 */, value: new Vector2(xVals[i], yVals[i]) });
    }
  }
  write(writer, values) {
    const x = [];
    const y = [];
    for (const value of values) {
      if (value?.type === 13 /* Vector2 */) {
        x.push(value.value.X);
        y.push(value.value.Y);
      } else {
        x.push(0);
        y.push(0);
      }
    }
    writer.putInterleavedFloat32Array(x);
    writer.putInterleavedFloat32Array(y);
  }
};
var Vector3Parser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    const xVals = bytes.getInterleavedFloat32Array(numInstances);
    const yVals = bytes.getInterleavedFloat32Array(numInstances);
    const zVals = bytes.getInterleavedFloat32Array(numInstances);
    for (let i = 0; i < numInstances; ++i) {
      outValues.push({ type: 14 /* Vector3 */, value: new Vector3(xVals[i], yVals[i], zVals[i]) });
    }
  }
  write(writer, values) {
    const x = [];
    const y = [];
    const z = [];
    for (const value of values) {
      if (value?.type === 14 /* Vector3 */) {
        x.push(value.value.X);
        y.push(value.value.Y);
        z.push(value.value.Z);
      } else {
        x.push(0);
        y.push(0);
        z.push(0);
      }
    }
    writer.putInterleavedFloat32Array(x);
    writer.putInterleavedFloat32Array(y);
    writer.putInterleavedFloat32Array(z);
  }
};
var CFrameParser = class _CFrameParser extends DataTypeParser {
  // protected readonly orientIdToArray = new Map<number, number[]>([
  //     [0x02, [1, 0, 0, 0, 1, 0, 0, 0, 1]], //(0, 0, 0)
  //     [0x03, [1, 0, 0, 0, 0, -1, 0, 1, 0]], //(90, 0, 0)
  //     [0x05, [1, 0, 0, 0, -1, 0, 0, 0, -1]], //(0, 180, 180)
  //     [0x06, [1, 0, 0, 0, 0, 1, 0, -1, 0]], //(-90, 0, 0)
  //     [0x07, [0, 1, 0, 1, 0, 0, 0, 0, -1]], //(0, 180, 90)
  //     [0x09, [0, 0, 1, 1, 0, 0, 0, 1, 0]], //(0, 90, 90)
  //     [0x0a, [0, -1, 0, 1, 0, 0, 0, 0, 1]], //(0, 0, 90)
  //     [0x0c, [0, 0, -1, 1, 0, 0, 0, -1, 0]], //(0, -90, 90)
  //     [0x0d, [0, 0, -1, 1, 0, 0, 0, -1, 0]], //(-90, -90, 0)
  //     [0x0e, [0, 0, -1, 0, 1, 0, 1, 0, 0]], //(0, -90, 0)
  //     [0x10, [0, 0, -1, -1, 0, 0, 0, 1, 0]], //(90, -90, 0)
  //     [0x11, [0, 0, 1, 0, -1, 0, 1, 0, 0]], //(0, 90, 180)
  //     [0x14, [-1, 0, 0, 0, 1, 0, 0, 0, -1]], //(0, 180, 0)
  //     [0x15, [-1, 0, 0, 0, 0, -1, 0, -1, 0]], //(-90, -180, 0)
  //     [0x17, [-1, 0, 0, 0, -1, 0, 0, 0, 1]], //(0, 0, 180)
  //     [0x18, [-1, 0, 0, 0, 0, 1, 0, 1, 0]], //(90, 180, 0)
  //     [0x19, [0, 1, 0, -1, 0, 0, 0, 0, 1]], //(0, 0, -90)
  //     [0x1b, [0, 0, -1, -1, 0, 0, 0, 1, 0]], //(0, -90, -90)
  //     [0x1c, [0, -1, 0, -1, 0, 0, 0, 0, -1]], //(0, -180, -90)
  //     [0x1e, [0, 0, 1, -1, 0, 0, 0, -1, 0]], //(0, 90, -90)
  //     [0x1f, [0, 0, 1, 1, 0, 0, 0, 1, 0]], //(90, 90, 0)
  //     [0x20, [0, 0, 1, 0, 1, 0, -1, 0, 0]], //(0, 90, 0)
  //     [0x22, [0, 0, 1, -1, 0, 0, 0, -1, 0]], //(-90, 90, 0)
  //     [0x23, [0, 0, -1, 0, -1, 0, -1, 0, 0]] //(0, -90, 180)
  // ]);
  orientIdToArray = /* @__PURE__ */ new Map([
    [2, [1, 0, 0, 0, 1, 0, 0, 0, 1]],
    [3, [1, 0, 0, 0, 0, -1, 0, 1, 0]],
    [5, [1, 0, 0, 0, -1, 0, 0, 0, -1]],
    [6, [1, 0, 0, 0, 0, 1, 0, -1, 0]],
    [7, [0, 1, 0, 1, 0, 0, 0, 0, -1]],
    [9, [0, 0, 1, 1, 0, 0, 0, 1, 0]],
    [10, [0, -1, 0, 1, 0, 0, 0, 0, 1]],
    [12, [0, 0, -1, 1, 0, 0, 0, -1, 0]],
    [13, [0, 1, 0, 0, 0, 1, 1, 0, 0]],
    [14, [0, 0, -1, 0, 1, 0, 1, 0, 0]],
    [16, [0, -1, 0, 0, 0, -1, 1, 0, 0]],
    [17, [0, 0, 1, 0, -1, 0, 1, 0, 0]],
    [20, [-1, 0, 0, 0, 1, 0, 0, 0, -1]],
    [21, [-1, 0, 0, 0, 0, 1, 0, 1, 0]],
    [23, [-1, 0, 0, 0, -1, 0, 0, 0, 1]],
    [24, [-1, 0, 0, 0, 0, -1, 0, -1, 0]],
    [25, [0, 1, 0, -1, 0, 0, 0, 0, 1]],
    [27, [0, 0, -1, -1, 0, 0, 0, 1, 0]],
    [28, [0, -1, 0, -1, 0, 0, 0, 0, -1]],
    [30, [0, 0, 1, -1, 0, 0, 0, -1, 0]],
    [31, [0, 1, 0, 0, 0, -1, -1, 0, 0]],
    [32, [0, 0, 1, 0, 1, 0, -1, 0, 0]],
    [34, [0, -1, 0, 0, 0, 1, -1, 0, 0]],
    [35, [0, 0, -1, 0, -1, 0, -1, 0, 0]]
  ]);
  orientationToId = /* @__PURE__ */ new Map();
  constructor() {
    super();
    for (const [orientId, orientation] of this.orientIdToArray) {
      this.orientationToId.set(_CFrameParser.getOrientationKey(orientation), orientId);
    }
  }
  read(bytes, numInstances, outValues) {
    const orientations = [];
    for (let i = 0; i < numInstances; ++i) {
      const orientId = bytes.getUint8();
      if (orientId > 0) {
        const orientation = this.getOrientationFromId(orientId);
        orientations.push(orientation);
      } else {
        orientations.push(bytes.getFloat32Array(9));
      }
    }
    const xVals = bytes.getInterleavedFloat32Array(numInstances);
    const yVals = bytes.getInterleavedFloat32Array(numInstances);
    const zVals = bytes.getInterleavedFloat32Array(numInstances);
    for (let i = 0; i < numInstances; ++i) {
      const position = new Vector3(xVals[i], yVals[i], zVals[i]);
      const orientation = orientations[i];
      outValues.push({ type: 16 /* CFrame */, value: new CFrame(position, orientation) });
    }
  }
  write(writer, values) {
    this.writeCFrame(writer, values, 16 /* CFrame */);
  }
  writeCFrame(writer, values, type) {
    const hasValueArray = [];
    const x = [];
    const y = [];
    const z = [];
    for (const value of values) {
      const hasValue = value?.type === type;
      hasValueArray.push(hasValue);
      const cframe = hasValue ? value.value : CFrame.Identity;
      const orientId = this.getOrientId(cframe.Orientation);
      if (orientId === -1) {
        writer.putUint8(0);
        writer.putFloat32Array(cframe.Orientation);
      } else {
        writer.putUint8(orientId);
      }
      const pos = cframe.Position;
      x.push(pos.X);
      y.push(pos.Y);
      z.push(pos.Z);
    }
    writer.putInterleavedFloat32Array(x);
    writer.putInterleavedFloat32Array(y);
    writer.putInterleavedFloat32Array(z);
    return hasValueArray;
  }
  getOrientationFromId(orientId) {
    const orientation = this.orientIdToArray.get(orientId);
    if (!orientation) {
      return [];
    }
    return narrowCopyArray(orientation);
  }
  getOrientId(orientation) {
    for (let i = 0; i < 9; i += 3) {
      let equalsZero = 0;
      let equalsOne = 0;
      for (let j = 0; j < 3; ++j) {
        const val = Math.abs(orientation[i + j]);
        if (floatsEqual(val, 0)) {
          equalsZero += 1;
        } else if (floatsEqual(val, 1)) {
          equalsOne += 1;
        }
      }
      if (equalsZero !== 2 && equalsOne !== 1) {
        return -1;
      }
    }
    const key = _CFrameParser.getOrientationKey(orientation);
    const id = this.orientationToId.get(key);
    return id ?? -1;
  }
  static getOrientationKey(orientation) {
    let key = 0;
    for (let i = 0; i < 9; ++i) {
      const val = Math.round(orientation[i]);
      if (val < 0) {
        key |= 1 << i + 9;
      } else if (val > 0) {
        key |= 1 << i;
      }
    }
    return key;
  }
};
var EnumParser = class extends DataTypeParser {
  read(bytes, numInstances, outValues, extraInfo) {
    const enumValues = bytes.getInterleavedUint32Array(numInstances);
    const enumFactory = extraInfo?.enumFactory;
    for (let i = 0; i < numInstances; ++i) {
      outValues.push({ type: 18 /* Enum */, value: this.createEnumValue(enumValues[i], enumFactory) });
    }
  }
  createEnumValue(value, enumFactory) {
    if (enumFactory) {
      const enumValue = enumFactory(value);
      return enumValue ?? EnumItem.MakeUnknownEnum(value);
    }
    return EnumItem.MakeUnknownEnum(value);
  }
  write(writer, values) {
    const enums = [];
    for (const value of values) {
      if (value?.type === 18 /* Enum */) {
        enums.push(value.value.Value);
      } else {
        enums.push(0);
      }
    }
    writer.putInterleavedUint32Array(enums);
  }
};
var ReferentParser = class extends DataTypeParser {
  read(bytes, numInstances, outValues, extraInfo) {
    const referents = bytes.getReferentArray(numInstances);
    const getInstance = extraInfo?.getInstanceFromReferent;
    for (let i = 0; i < numInstances; ++i) {
      const referent = referents[i];
      const instance = getInstance ? getInstance(referent) : null;
      outValues.push(instance ? { type: 19 /* Referent */, value: instance } : void 0);
    }
  }
  write(writer, values, extraInfo) {
    const referents = [];
    const getReferent = extraInfo?.getReferentFromInstance;
    for (const value of values) {
      if (value?.type === 19 /* Referent */) {
        referents.push(getReferent ? getReferent(value.value) : -1);
      } else {
        referents.push(-1);
      }
    }
    writer.putReferentArray(referents);
  }
};
var Color3uint8Parser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    const rVals = bytes.getBytes(numInstances);
    const gVals = bytes.getBytes(numInstances);
    const bVals = bytes.getBytes(numInstances);
    for (let i = 0; i < numInstances; ++i) {
      outValues.push({ type: 26 /* Color3uint8 */, value: Color3.FromRGB(rVals[i], gVals[i], bVals[i]) });
    }
  }
  write(writer, values) {
    const r = [];
    const g = [];
    const b = [];
    for (const value of values) {
      if (value?.type === 26 /* Color3uint8 */) {
        const color = value.value;
        r.push(Color3.FloatToUint8(color.R));
        g.push(Color3.FloatToUint8(color.G));
        b.push(Color3.FloatToUint8(color.B));
      } else {
        r.push(0);
        g.push(0);
        b.push(0);
      }
    }
    writer.putBytes(new Uint8Array(r));
    writer.putBytes(new Uint8Array(g));
    writer.putBytes(new Uint8Array(b));
  }
};
var Vector3int16Parser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    for (let i = 0; i < numInstances; ++i) {
      const x = bytes.getInt16();
      const y = bytes.getInt16();
      const z = bytes.getInt16();
      outValues.push({ type: 20 /* Vector3int16 */, value: new Vector3(x, y, z) });
    }
  }
  write(writer, values) {
    for (const value of values) {
      if (value?.type === 20 /* Vector3int16 */) {
        const vec = value.value;
        writer.putInt16(vec.X);
        writer.putInt16(vec.Y);
        writer.putInt16(vec.Z);
      } else {
        writer.putInt16(0);
        writer.putInt16(0);
        writer.putInt16(0);
      }
    }
  }
};
var NumberSequenceParser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    for (let i = 0; i < numInstances; ++i) {
      const keypoints = [];
      const numKeypoints = bytes.getUint32();
      for (let j = 0; j < numKeypoints; ++j) {
        const time = bytes.getFloat32();
        const value = bytes.getFloat32();
        const envelope = bytes.getFloat32();
        keypoints.push(new NumberSequenceKeypoint(time, value, envelope));
      }
      outValues.push({ type: 21 /* NumberSequence */, value: new NumberSequence(...keypoints) });
    }
  }
  write(writer, values) {
    for (const value of values) {
      if (value?.type === 21 /* NumberSequence */) {
        const seq = value.value;
        writer.putUint32(seq.Keypoints.length);
        for (const keypt of seq.Keypoints) {
          writer.putFloat32(keypt.Time);
          writer.putFloat32(keypt.Value);
          writer.putFloat32(keypt.Envelope);
        }
      } else {
        writer.putUint32(0);
      }
    }
  }
};
var ColorSequenceParser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    for (let i = 0; i < numInstances; ++i) {
      const keypoints = [];
      const numKeypoints = bytes.getUint32();
      for (let j = 0; j < numKeypoints; ++j) {
        const time = bytes.getFloat32();
        const r = bytes.getFloat32();
        const g = bytes.getFloat32();
        const b = bytes.getFloat32();
        bytes.getFloat32();
        keypoints.push(new ColorSequenceKeypoint(time, new Color3(r, g, b)));
      }
      outValues.push({ type: 22 /* ColorSequence */, value: new ColorSequence(...keypoints) });
    }
  }
  write(writer, values) {
    for (const value of values) {
      if (value?.type === 22 /* ColorSequence */) {
        const seq = value.value;
        writer.putUint32(seq.Keypoints.length);
        for (const keypt of seq.Keypoints) {
          writer.putFloat32(keypt.Time);
          writer.putFloat32(keypt.Color.R);
          writer.putFloat32(keypt.Color.G);
          writer.putFloat32(keypt.Color.B);
          writer.putFloat32(0);
        }
      } else {
        writer.putUint32(0);
      }
    }
  }
};
var NumberRangeParser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    for (let i = 0; i < numInstances; ++i) {
      const min = bytes.getFloat32();
      const max = bytes.getFloat32();
      outValues.push({ type: 23 /* NumberRange */, value: new NumberRange(min, max) });
    }
  }
  write(writer, values) {
    for (const value of values) {
      if (value?.type === 23 /* NumberRange */) {
        writer.putFloat32(value.value.Min);
        writer.putFloat32(value.value.Max);
      } else {
        writer.putFloat32(0);
        writer.putFloat32(0);
      }
    }
  }
};
var RectParser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    const minXs = bytes.getInterleavedFloat32Array(numInstances);
    const minYs = bytes.getInterleavedFloat32Array(numInstances);
    const maxXs = bytes.getInterleavedFloat32Array(numInstances);
    const maxYs = bytes.getInterleavedFloat32Array(numInstances);
    for (let i = 0; i < numInstances; ++i) {
      const min = new Vector2(minXs[i], minYs[i]);
      const max = new Vector2(maxXs[i], maxYs[i]);
      outValues.push({ type: 24 /* Rect */, value: new Rect(min, max) });
    }
  }
  write(writer, values) {
    const minXs = [];
    const minYs = [];
    const maxXs = [];
    const maxYs = [];
    for (const value of values) {
      if (value?.type === 24 /* Rect */) {
        const rect = value.value;
        minXs.push(rect.Min.X);
        minYs.push(rect.Min.Y);
        maxXs.push(rect.Max.X);
        maxYs.push(rect.Max.Y);
      } else {
        minXs.push(0);
        minYs.push(0);
        maxXs.push(0);
        maxYs.push(0);
      }
    }
    writer.putInterleavedFloat32Array(minXs);
    writer.putInterleavedFloat32Array(minYs);
    writer.putInterleavedFloat32Array(maxXs);
    writer.putInterleavedFloat32Array(maxYs);
  }
};
var PhysicalPropertiesParser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    for (let i = 0; i < numInstances; ++i) {
      if (!bytes.getBool()) {
        outValues.push(void 0);
        continue;
      }
      const density = bytes.getFloat32();
      const friction = bytes.getFloat32();
      const elasticity = bytes.getFloat32();
      const frictionWeight = bytes.getFloat32();
      const elasticityWeight = bytes.getFloat32();
      outValues.push({ type: 25 /* PhysicalProperties */, value: new PhysicalProperties(density, friction, elasticity, frictionWeight, elasticityWeight) });
    }
  }
  write(writer, values) {
    for (const value of values) {
      if (value?.type === 25 /* PhysicalProperties */) {
        const props = value.value;
        writer.putBool(true);
        writer.putFloat32(props.Density);
        writer.putFloat32(props.Friction);
        writer.putFloat32(props.Elasticity);
        writer.putFloat32(props.FrictionWeight);
        writer.putFloat32(props.ElasticityWeight);
      } else {
        writer.putBool(false);
      }
    }
  }
};
var Int64Parser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    const int64s = bytes.getInterleavedInt64Array(numInstances);
    for (let i = 0; i < numInstances; ++i) {
      outValues.push({ type: 27 /* Int64 */, value: int64s[i] });
    }
  }
  write(writer, values) {
    const nums = [];
    for (const value of values) {
      if (value?.type === 27 /* Int64 */) {
        nums.push(value.value);
      } else {
        nums.push(BigInt(0));
      }
    }
    writer.putInterleavedInt64Array(nums);
  }
};
var SharedStringParser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    const indices = bytes.getInterleavedUint32Array(numInstances);
    for (let i = 0; i < numInstances; ++i) {
      outValues.push({ type: 28 /* SharedString */, value: new SharedStringValue(indices[i]) });
    }
  }
  write(writer, values, extraInfo) {
    const sharedStrings = extraInfo?.sharedStrings;
    if (sharedStrings === void 0) {
      throw new Error("Missing shared strings array");
    }
    const indices = [];
    for (const value of values) {
      if (value?.type === 28 /* SharedString */) {
        indices.push(value.value.Index);
      } else {
        sharedStrings.push(new SharedString(""));
        indices.push(sharedStrings.length - 1);
      }
    }
    writer.putInterleavedUint32Array(indices);
  }
};
var BytecodeParser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    for (let i = 0; i < numInstances; ++i) {
      const byteCode = bytes.getString();
      outValues.push(byteCode ? { type: 29 /* Bytecode */, value: byteCode } : void 0);
    }
  }
  write(writer, values) {
    for (const value of values) {
      if (value?.type === 29 /* Bytecode */) {
        writer.putString(value.value);
      } else {
        writer.putString("");
      }
    }
  }
};
var OptionalCFrameParser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    bytes.getUint8();
    const cFrameValues = [];
    new CFrameParser().read(bytes, numInstances, cFrameValues);
    bytes.getUint8();
    for (let i = 0; i < numInstances; ++i) {
      const hasValue = bytes.getBool();
      const cFrame = cFrameValues[i];
      if (hasValue && cFrame) {
        outValues.push({ type: 30 /* OptionalCFrame */, value: cFrame.value });
      } else {
        outValues.push(void 0);
      }
    }
  }
  write(writer, values) {
    writer.putUint8(16 /* CFrame */);
    const hasValueArray = new CFrameParser().writeCFrame(writer, values, 30 /* OptionalCFrame */);
    writer.putUint8(2);
    for (const hasValue of hasValueArray) {
      writer.putBool(hasValue);
    }
  }
};
var UniqueIdParser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    const interleavedBytes = bytes.getBytes(numInstances * 16);
    const uniqueIds = RobloxFileByteReader.convertInterleaved(interleavedBytes, numInstances, (bytes2) => {
      const reader = new RobloxFileByteReader(bytes2.reverse());
      const random = RobloxFileByteReader.untransformInt64(reader.getInt64());
      const time = reader.getUint32();
      const index = reader.getUint32();
      return new UniqueId(index, time, random);
    });
    for (let i = 0; i < numInstances; ++i) {
      outValues.push({ type: 31 /* UniqueId */, value: uniqueIds[i] });
    }
  }
  write(writer, values) {
    const idWriter = new RobloxFileByteWriter();
    for (let i = values.length - 1; i >= 0; --i) {
      const value = values[i];
      if (!value || value.type !== 31 /* UniqueId */) {
        throw new Error("Tried to write missing unique ID");
      }
      const id = value.value;
      idWriter.putInt64(RobloxFileByteWriter.transformInt64(id.Random));
      idWriter.putUint32(id.Time);
      idWriter.putUint32(id.Index);
    }
    writer.putBytesInterleaved(idWriter.bytes.reverse(), values.length);
  }
};
var FontParser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    for (let i = 0; i < numInstances; ++i) {
      const family = bytes.getString();
      const weight = bytes.getUint16();
      const style = bytes.getUint8();
      const cachedFaceId = bytes.getString();
      outValues.push({ type: 32 /* Font */, value: new RBXMFont(family, weight, style, cachedFaceId) });
    }
  }
  write(writer, values) {
    for (const value of values) {
      if (value?.type === 32 /* Font */) {
        const font = value.value;
        writer.putString(font.Family);
        writer.putUint16(font.Weight);
        writer.putUint8(font.Style);
        writer.putString(font.CachedFaceId ?? "");
      } else {
        writer.putString("");
        writer.putUint16(0);
        writer.putUint8(0);
        writer.putString("");
      }
    }
  }
};
var SecurityCapabilitiesParser = class extends DataTypeParser {
  read(bytes, numInstances, outValues) {
    const values = bytes.getInterleavedUint64Array(numInstances);
    for (let i = 0; i < numInstances; ++i) {
      outValues.push({ type: 33 /* SecurityCapabilities */, value: values[i] });
    }
  }
  write(writer, values) {
    const nums = [];
    for (const value of values) {
      if (value?.type === 33 /* SecurityCapabilities */) {
        nums.push(value.value);
      } else {
        nums.push(BigInt(0));
      }
    }
    writer.putInterleavedInt64Array(nums);
  }
};

// src/generated/generated_types.ts
var Instance = class extends CoreInstance {
  constructor(isService = false) {
    super(isService);
    this.addClassName("Instance");
    this.AttributesSerialize = "";
    this.Capabilities = BigInt(0);
    this.DefinesCapabilities = false;
    this.HistoryId = new UniqueId(0, 0, BigInt(0));
    this.SourceAssetId = BigInt(-1);
    this.Tags = "";
    this.UniqueId = new UniqueId(0, 0, BigInt(0));
    this.Archivable = true;
  }
  get AttributesSerialize() {
    return this.GetProp("AttributesSerialize", 1 /* String */);
  }
  set AttributesSerialize(value) {
    this.SetProp("AttributesSerialize", 1 /* String */, value);
  }
  get Capabilities() {
    return this.GetProp("Capabilities", 33 /* SecurityCapabilities */);
  }
  set Capabilities(value) {
    this.SetProp("Capabilities", 33 /* SecurityCapabilities */, value);
  }
  get DefinesCapabilities() {
    return this.GetProp("DefinesCapabilities", 2 /* Bool */);
  }
  set DefinesCapabilities(value) {
    this.SetProp("DefinesCapabilities", 2 /* Bool */, value);
  }
  get HistoryId() {
    return this.GetProp("HistoryId", 31 /* UniqueId */);
  }
  set HistoryId(value) {
    this.SetProp("HistoryId", 31 /* UniqueId */, value);
  }
  get SourceAssetId() {
    return this.GetProp("SourceAssetId", 27 /* Int64 */);
  }
  set SourceAssetId(value) {
    this.SetProp("SourceAssetId", 27 /* Int64 */, value);
  }
  get Tags() {
    return this.GetProp("Tags", 1 /* String */);
  }
  set Tags(value) {
    this.SetProp("Tags", 1 /* String */, value);
  }
  get UniqueId() {
    return this.GetProp("UniqueId", 31 /* UniqueId */);
  }
  set UniqueId(value) {
    this.SetProp("UniqueId", 31 /* UniqueId */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get Archivable() {
    return this.GetProp("archivable", 2 /* Bool */);
  }
  /**@deprecated Deprecated by Roblox*/
  set Archivable(value) {
    this.SetProp("archivable", 2 /* Bool */, value);
  }
};
var AccessoryDescription = class extends Instance {
  constructor() {
    super();
    this.addClassName("AccessoryDescription");
    this.Name = "AccessoryDescription";
    this.AccessoryType = AccessoryType.Unknown;
    this.AssetId = BigInt(0);
    this.IsLayered = false;
    this.Order = 0;
    this.Puffiness = 1;
  }
  get AccessoryType() {
    return this.GetProp("AccessoryType", 18 /* Enum */);
  }
  set AccessoryType(value) {
    this.SetProp("AccessoryType", 18 /* Enum */, value);
  }
  get AssetId() {
    return this.GetProp("AssetId", 27 /* Int64 */);
  }
  set AssetId(value) {
    this.SetProp("AssetId", 27 /* Int64 */, value);
  }
  get Instance() {
    return this.GetProp("Instance", 19 /* Referent */);
  }
  set Instance(value) {
    this.SetProp("Instance", 19 /* Referent */, value);
  }
  get IsLayered() {
    return this.GetProp("IsLayered", 2 /* Bool */);
  }
  set IsLayered(value) {
    this.SetProp("IsLayered", 2 /* Bool */, value);
  }
  get Order() {
    return this.GetProp("Order", 3 /* Int32 */);
  }
  set Order(value) {
    this.SetProp("Order", 3 /* Int32 */, value);
  }
  get Puffiness() {
    return this.GetProp("Puffiness", 4 /* Float32 */);
  }
  set Puffiness(value) {
    this.SetProp("Puffiness", 4 /* Float32 */, value);
  }
};
var AccountService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("AccountService");
    this.Name = "AccountService";
  }
};
var Accoutrement = class extends Instance {
  constructor() {
    super();
    this.addClassName("Accoutrement");
    this.Name = "Accoutrement";
    this.AttachmentPoint = CFrame.Identity;
  }
  get AttachmentPoint() {
    return this.GetProp("AttachmentPoint", 16 /* CFrame */);
  }
  set AttachmentPoint(value) {
    this.SetProp("AttachmentPoint", 16 /* CFrame */, value);
  }
};
var Accessory = class extends Accoutrement {
  constructor() {
    super();
    this.addClassName("Accessory");
    this.Name = "Accessory";
    this.AccessoryType = AccessoryType.Unknown;
  }
  get AccessoryType() {
    return this.GetProp("AccessoryType", 18 /* Enum */);
  }
  set AccessoryType(value) {
    this.SetProp("AccessoryType", 18 /* Enum */, value);
  }
};
var Hat = class extends Accoutrement {
  constructor() {
    super();
    this.addClassName("Hat");
    this.Name = "Hat";
  }
};
var ActivityHistoryService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ActivityHistoryService");
    this.Name = "ActivityHistoryService";
  }
};
var AdPortal = class extends Instance {
  constructor() {
    super();
    this.addClassName("AdPortal");
    this.Name = "AdPortal";
  }
};
var AdService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("AdService");
    this.Name = "AdService";
  }
};
var AdvancedDragger = class extends Instance {
  constructor() {
    super();
    this.addClassName("AdvancedDragger");
    this.Name = "AdvancedDragger";
  }
};
var AnalyticsService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("AnalyticsService");
    this.Name = "AnalyticsService";
    this.ApiKey = "";
  }
  /**@deprecated Deprecated by Roblox*/
  get ApiKey() {
    return this.GetProp("ApiKey", 1 /* String */);
  }
  /**@deprecated Deprecated by Roblox*/
  set ApiKey(value) {
    this.SetProp("ApiKey", 1 /* String */, value);
  }
};
var Animation = class extends Instance {
  constructor() {
    super();
    this.addClassName("Animation");
    this.Name = "Animation";
    this.AnimationId = "";
  }
  get AnimationId() {
    return this.GetProp("AnimationId", 1 /* String */);
  }
  set AnimationId(value) {
    this.SetProp("AnimationId", 1 /* String */, value);
  }
};
var AnimationClip = class extends Instance {
  constructor() {
    super();
    this.addClassName("AnimationClip");
    this.Loop = true;
    this.Priority = AnimationPriority.Action;
  }
  get GuidBinaryString() {
    return this.GetProp("GuidBinaryString", 1 /* String */);
  }
  set GuidBinaryString(value) {
    this.SetProp("GuidBinaryString", 1 /* String */, value);
  }
  get Loop() {
    return this.GetProp("Loop", 2 /* Bool */);
  }
  set Loop(value) {
    this.SetProp("Loop", 2 /* Bool */, value);
  }
  get Priority() {
    return this.GetProp("Priority", 18 /* Enum */);
  }
  set Priority(value) {
    this.SetProp("Priority", 18 /* Enum */, value);
  }
};
var CurveAnimation = class extends AnimationClip {
  constructor() {
    super();
    this.addClassName("CurveAnimation");
    this.Name = "CurveAnimation";
  }
};
var KeyframeSequence = class extends AnimationClip {
  constructor() {
    super();
    this.addClassName("KeyframeSequence");
    this.Name = "KeyframeSequence";
    this.AuthoredHipHeight = 2;
  }
  get AuthoredHipHeight() {
    return this.GetProp("AuthoredHipHeight", 4 /* Float32 */);
  }
  set AuthoredHipHeight(value) {
    this.SetProp("AuthoredHipHeight", 4 /* Float32 */, value);
  }
};
var AnimationClipProvider = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("AnimationClipProvider");
    this.Name = "AnimationClipProvider";
  }
};
var AnimationController = class extends Instance {
  constructor() {
    super();
    this.addClassName("AnimationController");
    this.Name = "AnimationController";
  }
};
var AnimationFromVideoCreatorService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("AnimationFromVideoCreatorService");
    this.Name = "AnimationFromVideoCreatorService";
  }
};
var AnimationFromVideoCreatorStudioService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("AnimationFromVideoCreatorStudioService");
    this.Name = "AnimationFromVideoCreatorStudioService";
  }
};
var AnimationRigData = class extends Instance {
  constructor() {
    super();
    this.addClassName("AnimationRigData");
    this.Name = "AnimationRigData";
    this.ArticulatedJoint = "";
    this.EndEffectorRotationConstraint = "";
    this.EndEffectorTranslationConstraint = "";
    this.EndEffectorWeight = "";
    this.FacsControl = "";
    this.Label = "";
    this.PostTransform = "";
    this.PreTransform = "";
    this.RootMotion = "";
    this.Transform = "";
    this.Weight = "";
  }
  get ArticulatedJoint() {
    return this.GetProp("articulatedJoint", 1 /* String */);
  }
  set ArticulatedJoint(value) {
    this.SetProp("articulatedJoint", 1 /* String */, value);
  }
  get EndEffectorRotationConstraint() {
    return this.GetProp("endEffectorRotationConstraint", 1 /* String */);
  }
  set EndEffectorRotationConstraint(value) {
    this.SetProp("endEffectorRotationConstraint", 1 /* String */, value);
  }
  get EndEffectorTranslationConstraint() {
    return this.GetProp("endEffectorTranslationConstraint", 1 /* String */);
  }
  set EndEffectorTranslationConstraint(value) {
    this.SetProp("endEffectorTranslationConstraint", 1 /* String */, value);
  }
  get EndEffectorWeight() {
    return this.GetProp("endEffectorWeight", 1 /* String */);
  }
  set EndEffectorWeight(value) {
    this.SetProp("endEffectorWeight", 1 /* String */, value);
  }
  get FacsControl() {
    return this.GetProp("facsControl", 1 /* String */);
  }
  set FacsControl(value) {
    this.SetProp("facsControl", 1 /* String */, value);
  }
  get Label() {
    return this.GetProp("label", 1 /* String */);
  }
  set Label(value) {
    this.SetProp("label", 1 /* String */, value);
  }
  get PostTransform() {
    return this.GetProp("postTransform", 1 /* String */);
  }
  set PostTransform(value) {
    this.SetProp("postTransform", 1 /* String */, value);
  }
  get PreTransform() {
    return this.GetProp("preTransform", 1 /* String */);
  }
  set PreTransform(value) {
    this.SetProp("preTransform", 1 /* String */, value);
  }
  get RootMotion() {
    return this.GetProp("rootMotion", 1 /* String */);
  }
  set RootMotion(value) {
    this.SetProp("rootMotion", 1 /* String */, value);
  }
  get Transform() {
    return this.GetProp("transform", 1 /* String */);
  }
  set Transform(value) {
    this.SetProp("transform", 1 /* String */, value);
  }
  get Weight() {
    return this.GetProp("weight", 1 /* String */);
  }
  set Weight(value) {
    this.SetProp("weight", 1 /* String */, value);
  }
};
var Animator = class extends Instance {
  constructor() {
    super();
    this.addClassName("Animator");
    this.Name = "Animator";
    this.PreferLodEnabled = true;
  }
  get PreferLodEnabled() {
    return this.GetProp("PreferLodEnabled", 2 /* Bool */);
  }
  set PreferLodEnabled(value) {
    this.SetProp("PreferLodEnabled", 2 /* Bool */, value);
  }
};
var AppUpdateService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("AppUpdateService");
    this.Name = "AppUpdateService";
  }
};
var AssetCounterService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("AssetCounterService");
    this.Name = "AssetCounterService";
  }
};
var AssetDeliveryProxy = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("AssetDeliveryProxy");
    this.Name = "AssetDeliveryProxy";
    this.Interface = "";
    this.Port = 0;
    this.StartServer = false;
  }
  get Interface() {
    return this.GetProp("Interface", 1 /* String */);
  }
  set Interface(value) {
    this.SetProp("Interface", 1 /* String */, value);
  }
  get Port() {
    return this.GetProp("Port", 3 /* Int32 */);
  }
  set Port(value) {
    this.SetProp("Port", 3 /* Int32 */, value);
  }
  get StartServer() {
    return this.GetProp("StartServer", 2 /* Bool */);
  }
  set StartServer(value) {
    this.SetProp("StartServer", 2 /* Bool */, value);
  }
};
var AssetImportService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("AssetImportService");
    this.Name = "AssetImportService";
  }
};
var AssetManagerService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("AssetManagerService");
    this.Name = "AssetManagerService";
  }
};
var AssetService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("AssetService");
    this.Name = "AssetService";
  }
};
var Atmosphere = class extends Instance {
  constructor() {
    super();
    this.addClassName("Atmosphere");
    this.Name = "Atmosphere";
    this.Color = Color3.FromRGB(200, 170, 108);
    this.Decay = Color3.FromRGB(92, 60, 14);
    this.Density = 0.395;
    this.Glare = 0;
    this.Haze = 0;
    this.Offset = 0;
  }
  get Color() {
    return this.GetProp("Color", 12 /* Color3 */);
  }
  set Color(value) {
    this.SetProp("Color", 12 /* Color3 */, value);
  }
  get Decay() {
    return this.GetProp("Decay", 12 /* Color3 */);
  }
  set Decay(value) {
    this.SetProp("Decay", 12 /* Color3 */, value);
  }
  get Density() {
    return this.GetProp("Density", 4 /* Float32 */);
  }
  set Density(value) {
    this.SetProp("Density", 4 /* Float32 */, value);
  }
  get Glare() {
    return this.GetProp("Glare", 4 /* Float32 */);
  }
  set Glare(value) {
    this.SetProp("Glare", 4 /* Float32 */, value);
  }
  get Haze() {
    return this.GetProp("Haze", 4 /* Float32 */);
  }
  set Haze(value) {
    this.SetProp("Haze", 4 /* Float32 */, value);
  }
  get Offset() {
    return this.GetProp("Offset", 4 /* Float32 */);
  }
  set Offset(value) {
    this.SetProp("Offset", 4 /* Float32 */, value);
  }
};
var Attachment = class extends Instance {
  constructor() {
    super();
    this.addClassName("Attachment");
    this.Name = "Attachment";
    this.Visible = false;
    this.CFrame = CFrame.Identity;
  }
  get CFrame() {
    return this.GetProp("CFrame", 16 /* CFrame */);
  }
  set CFrame(value) {
    this.SetProp("CFrame", 16 /* CFrame */, value);
  }
  get Visible() {
    return this.GetProp("Visible", 2 /* Bool */);
  }
  set Visible(value) {
    this.SetProp("Visible", 2 /* Bool */, value);
  }
};
var Bone = class extends Attachment {
  constructor() {
    super();
    this.addClassName("Bone");
    this.Name = "Bone";
  }
};
var AudioAnalyzer = class extends Instance {
  constructor() {
    super();
    this.addClassName("AudioAnalyzer");
    this.Name = "AudioAnalyzer";
  }
};
var AudioChorus = class extends Instance {
  constructor() {
    super();
    this.addClassName("AudioChorus");
    this.Name = "AudioChorus";
    this.Depth = 0.45;
    this.Mix = 0.85;
    this.Rate = 5;
  }
  get Depth() {
    return this.GetProp("Depth", 4 /* Float32 */);
  }
  set Depth(value) {
    this.SetProp("Depth", 4 /* Float32 */, value);
  }
  get Mix() {
    return this.GetProp("Mix", 4 /* Float32 */);
  }
  set Mix(value) {
    this.SetProp("Mix", 4 /* Float32 */, value);
  }
  get Rate() {
    return this.GetProp("Rate", 4 /* Float32 */);
  }
  set Rate(value) {
    this.SetProp("Rate", 4 /* Float32 */, value);
  }
};
var AudioCompressor = class extends Instance {
  constructor() {
    super();
    this.addClassName("AudioCompressor");
    this.Name = "AudioCompressor";
    this.Attack = 0.1;
    this.MakeupGain = 0;
    this.Ratio = 40;
    this.Release = 0.1;
    this.Threshold = -40;
  }
  get Attack() {
    return this.GetProp("Attack", 4 /* Float32 */);
  }
  set Attack(value) {
    this.SetProp("Attack", 4 /* Float32 */, value);
  }
  get MakeupGain() {
    return this.GetProp("MakeupGain", 4 /* Float32 */);
  }
  set MakeupGain(value) {
    this.SetProp("MakeupGain", 4 /* Float32 */, value);
  }
  get Ratio() {
    return this.GetProp("Ratio", 4 /* Float32 */);
  }
  set Ratio(value) {
    this.SetProp("Ratio", 4 /* Float32 */, value);
  }
  get Release() {
    return this.GetProp("Release", 4 /* Float32 */);
  }
  set Release(value) {
    this.SetProp("Release", 4 /* Float32 */, value);
  }
  get Threshold() {
    return this.GetProp("Threshold", 4 /* Float32 */);
  }
  set Threshold(value) {
    this.SetProp("Threshold", 4 /* Float32 */, value);
  }
};
var AudioDeviceInput = class extends Instance {
  constructor() {
    super();
    this.addClassName("AudioDeviceInput");
    this.Name = "AudioDeviceInput";
    this.AccessType = AccessModifierType.Deny;
    this.Active = true;
    this.Muted = false;
  }
  get AccessType() {
    return this.GetProp("AccessType", 18 /* Enum */);
  }
  set AccessType(value) {
    this.SetProp("AccessType", 18 /* Enum */, value);
  }
  get Active() {
    return this.GetProp("Active", 2 /* Bool */);
  }
  set Active(value) {
    this.SetProp("Active", 2 /* Bool */, value);
  }
  get Muted() {
    return this.GetProp("Muted", 2 /* Bool */);
  }
  set Muted(value) {
    this.SetProp("Muted", 2 /* Bool */, value);
  }
  get Player() {
    return this.GetProp("Player", 19 /* Referent */);
  }
  set Player(value) {
    this.SetProp("Player", 19 /* Referent */, value);
  }
};
var AudioDeviceOutput = class extends Instance {
  constructor() {
    super();
    this.addClassName("AudioDeviceOutput");
    this.Name = "AudioDeviceOutput";
  }
  get Player() {
    return this.GetProp("Player", 19 /* Referent */);
  }
  set Player(value) {
    this.SetProp("Player", 19 /* Referent */, value);
  }
};
var AudioDistortion = class extends Instance {
  constructor() {
    super();
    this.addClassName("AudioDistortion");
    this.Name = "AudioDistortion";
    this.Level = 0.5;
  }
  get Level() {
    return this.GetProp("Level", 4 /* Float32 */);
  }
  set Level(value) {
    this.SetProp("Level", 4 /* Float32 */, value);
  }
};
var AudioEcho = class extends Instance {
  constructor() {
    super();
    this.addClassName("AudioEcho");
    this.Name = "AudioEcho";
    this.DelayTime = 1;
    this.DryLevel = 0;
    this.Feedback = 0.5;
    this.WetLevel = 0;
  }
  get DelayTime() {
    return this.GetProp("DelayTime", 4 /* Float32 */);
  }
  set DelayTime(value) {
    this.SetProp("DelayTime", 4 /* Float32 */, value);
  }
  get DryLevel() {
    return this.GetProp("DryLevel", 4 /* Float32 */);
  }
  set DryLevel(value) {
    this.SetProp("DryLevel", 4 /* Float32 */, value);
  }
  get Feedback() {
    return this.GetProp("Feedback", 4 /* Float32 */);
  }
  set Feedback(value) {
    this.SetProp("Feedback", 4 /* Float32 */, value);
  }
  get WetLevel() {
    return this.GetProp("WetLevel", 4 /* Float32 */);
  }
  set WetLevel(value) {
    this.SetProp("WetLevel", 4 /* Float32 */, value);
  }
};
var AudioEmitter = class extends Instance {
  constructor() {
    super();
    this.addClassName("AudioEmitter");
    this.Name = "AudioEmitter";
    this.AudioInteractionGroup = "";
    this.DistanceAttenuation = "";
  }
  get AudioInteractionGroup() {
    return this.GetProp("AudioInteractionGroup", 1 /* String */);
  }
  set AudioInteractionGroup(value) {
    this.SetProp("AudioInteractionGroup", 1 /* String */, value);
  }
  get DistanceAttenuation() {
    return this.GetProp("DistanceAttenuation", 1 /* String */);
  }
  set DistanceAttenuation(value) {
    this.SetProp("DistanceAttenuation", 1 /* String */, value);
  }
};
var AudioEqualizer = class extends Instance {
  constructor() {
    super();
    this.addClassName("AudioEqualizer");
    this.Name = "AudioEqualizer";
    this.HighGain = 0;
    this.LowGain = 0;
    this.MidGain = 0;
    this.MidRange = new NumberRange(400, 4e3);
  }
  get HighGain() {
    return this.GetProp("HighGain", 4 /* Float32 */);
  }
  set HighGain(value) {
    this.SetProp("HighGain", 4 /* Float32 */, value);
  }
  get LowGain() {
    return this.GetProp("LowGain", 4 /* Float32 */);
  }
  set LowGain(value) {
    this.SetProp("LowGain", 4 /* Float32 */, value);
  }
  get MidGain() {
    return this.GetProp("MidGain", 4 /* Float32 */);
  }
  set MidGain(value) {
    this.SetProp("MidGain", 4 /* Float32 */, value);
  }
  get MidRange() {
    return this.GetProp("MidRange", 23 /* NumberRange */);
  }
  set MidRange(value) {
    this.SetProp("MidRange", 23 /* NumberRange */, value);
  }
};
var AudioFader = class extends Instance {
  constructor() {
    super();
    this.addClassName("AudioFader");
    this.Name = "AudioFader";
    this.Volume = 1;
  }
  get Volume() {
    return this.GetProp("Volume", 4 /* Float32 */);
  }
  set Volume(value) {
    this.SetProp("Volume", 4 /* Float32 */, value);
  }
};
var AudioFlanger = class extends Instance {
  constructor() {
    super();
    this.addClassName("AudioFlanger");
    this.Name = "AudioFlanger";
    this.Depth = 0.45;
    this.Mix = 0.85;
    this.Rate = 5;
  }
  get Depth() {
    return this.GetProp("Depth", 4 /* Float32 */);
  }
  set Depth(value) {
    this.SetProp("Depth", 4 /* Float32 */, value);
  }
  get Mix() {
    return this.GetProp("Mix", 4 /* Float32 */);
  }
  set Mix(value) {
    this.SetProp("Mix", 4 /* Float32 */, value);
  }
  get Rate() {
    return this.GetProp("Rate", 4 /* Float32 */);
  }
  set Rate(value) {
    this.SetProp("Rate", 4 /* Float32 */, value);
  }
};
var AudioListener = class extends Instance {
  constructor() {
    super();
    this.addClassName("AudioListener");
    this.Name = "AudioListener";
    this.AudioInteractionGroup = "";
  }
  get AudioInteractionGroup() {
    return this.GetProp("AudioInteractionGroup", 1 /* String */);
  }
  set AudioInteractionGroup(value) {
    this.SetProp("AudioInteractionGroup", 1 /* String */, value);
  }
};
var AudioPitchShifter = class extends Instance {
  constructor() {
    super();
    this.addClassName("AudioPitchShifter");
    this.Name = "AudioPitchShifter";
    this.Pitch = 1.25;
  }
  get Pitch() {
    return this.GetProp("Pitch", 4 /* Float32 */);
  }
  set Pitch(value) {
    this.SetProp("Pitch", 4 /* Float32 */, value);
  }
};
var AudioPlayer = class extends Instance {
  constructor() {
    super();
    this.addClassName("AudioPlayer");
    this.Name = "AudioPlayer";
    this.AssetId = "";
    this.AutoLoad = true;
    this.LoopRegion = new NumberRange(0, 6e4);
    this.Looping = false;
    this.PlaybackRegion = new NumberRange(0, 6e4);
    this.PlaybackSpeed = 1;
    this.TimePosition = 0;
  }
  get AssetId() {
    return this.GetProp("AssetId", 1 /* String */);
  }
  set AssetId(value) {
    this.SetProp("AssetId", 1 /* String */, value);
  }
  get AutoLoad() {
    return this.GetProp("AutoLoad", 2 /* Bool */);
  }
  set AutoLoad(value) {
    this.SetProp("AutoLoad", 2 /* Bool */, value);
  }
  get LoopRegion() {
    return this.GetProp("LoopRegion", 23 /* NumberRange */);
  }
  set LoopRegion(value) {
    this.SetProp("LoopRegion", 23 /* NumberRange */, value);
  }
  get Looping() {
    return this.GetProp("Looping", 2 /* Bool */);
  }
  set Looping(value) {
    this.SetProp("Looping", 2 /* Bool */, value);
  }
  get PlaybackRegion() {
    return this.GetProp("PlaybackRegion", 23 /* NumberRange */);
  }
  set PlaybackRegion(value) {
    this.SetProp("PlaybackRegion", 23 /* NumberRange */, value);
  }
  get PlaybackSpeed() {
    return this.GetProp("PlaybackSpeed", 5 /* Float64 */);
  }
  set PlaybackSpeed(value) {
    this.SetProp("PlaybackSpeed", 5 /* Float64 */, value);
  }
  get TimePosition() {
    return this.GetProp("TimePosition", 5 /* Float64 */);
  }
  set TimePosition(value) {
    this.SetProp("TimePosition", 5 /* Float64 */, value);
  }
};
var AudioReverb = class extends Instance {
  constructor() {
    super();
    this.addClassName("AudioReverb");
    this.Name = "AudioReverb";
    this.DecayRatio = 0.5;
    this.DecayTime = 1.5;
    this.Density = 1;
    this.Diffusion = 1;
    this.DryLevel = 0;
    this.EarlyDelayTime = 0.02;
    this.HighCutFrequency = 2e4;
    this.LateDelayTime = 0.04;
    this.LowShelfFrequency = 250;
    this.LowShelfGain = 0;
    this.ReferenceFrequency = 5e3;
    this.WetLevel = -6;
  }
  get DecayRatio() {
    return this.GetProp("DecayRatio", 4 /* Float32 */);
  }
  set DecayRatio(value) {
    this.SetProp("DecayRatio", 4 /* Float32 */, value);
  }
  get DecayTime() {
    return this.GetProp("DecayTime", 4 /* Float32 */);
  }
  set DecayTime(value) {
    this.SetProp("DecayTime", 4 /* Float32 */, value);
  }
  get Density() {
    return this.GetProp("Density", 4 /* Float32 */);
  }
  set Density(value) {
    this.SetProp("Density", 4 /* Float32 */, value);
  }
  get Diffusion() {
    return this.GetProp("Diffusion", 4 /* Float32 */);
  }
  set Diffusion(value) {
    this.SetProp("Diffusion", 4 /* Float32 */, value);
  }
  get DryLevel() {
    return this.GetProp("DryLevel", 4 /* Float32 */);
  }
  set DryLevel(value) {
    this.SetProp("DryLevel", 4 /* Float32 */, value);
  }
  get EarlyDelayTime() {
    return this.GetProp("EarlyDelayTime", 4 /* Float32 */);
  }
  set EarlyDelayTime(value) {
    this.SetProp("EarlyDelayTime", 4 /* Float32 */, value);
  }
  get HighCutFrequency() {
    return this.GetProp("HighCutFrequency", 4 /* Float32 */);
  }
  set HighCutFrequency(value) {
    this.SetProp("HighCutFrequency", 4 /* Float32 */, value);
  }
  get LateDelayTime() {
    return this.GetProp("LateDelayTime", 4 /* Float32 */);
  }
  set LateDelayTime(value) {
    this.SetProp("LateDelayTime", 4 /* Float32 */, value);
  }
  get LowShelfFrequency() {
    return this.GetProp("LowShelfFrequency", 4 /* Float32 */);
  }
  set LowShelfFrequency(value) {
    this.SetProp("LowShelfFrequency", 4 /* Float32 */, value);
  }
  get LowShelfGain() {
    return this.GetProp("LowShelfGain", 4 /* Float32 */);
  }
  set LowShelfGain(value) {
    this.SetProp("LowShelfGain", 4 /* Float32 */, value);
  }
  get ReferenceFrequency() {
    return this.GetProp("ReferenceFrequency", 4 /* Float32 */);
  }
  set ReferenceFrequency(value) {
    this.SetProp("ReferenceFrequency", 4 /* Float32 */, value);
  }
  get WetLevel() {
    return this.GetProp("WetLevel", 4 /* Float32 */);
  }
  set WetLevel(value) {
    this.SetProp("WetLevel", 4 /* Float32 */, value);
  }
};
var AudioSearchParams = class extends Instance {
  constructor() {
    super();
    this.addClassName("AudioSearchParams");
    this.Name = "AudioSearchParams";
    this.Album = "";
    this.Artist = "";
    this.AudioSubType = AudioSubType.Music;
    this.AudioSubtype = AudioSubType.Music;
    this.MaxDuration = 2147483647;
    this.MinDuration = 0;
    this.SearchKeyword = "";
    this.Tag = "";
    this.Title = "";
  }
  get Album() {
    return this.GetProp("Album", 1 /* String */);
  }
  set Album(value) {
    this.SetProp("Album", 1 /* String */, value);
  }
  get Artist() {
    return this.GetProp("Artist", 1 /* String */);
  }
  set Artist(value) {
    this.SetProp("Artist", 1 /* String */, value);
  }
  get AudioSubType() {
    return this.GetProp("AudioSubType", 18 /* Enum */);
  }
  set AudioSubType(value) {
    this.SetProp("AudioSubType", 18 /* Enum */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get AudioSubtype() {
    return this.GetProp("AudioSubtype", 18 /* Enum */);
  }
  /**@deprecated Deprecated by Roblox*/
  set AudioSubtype(value) {
    this.SetProp("AudioSubtype", 18 /* Enum */, value);
  }
  get MaxDuration() {
    return this.GetProp("MaxDuration", 3 /* Int32 */);
  }
  set MaxDuration(value) {
    this.SetProp("MaxDuration", 3 /* Int32 */, value);
  }
  get MinDuration() {
    return this.GetProp("MinDuration", 3 /* Int32 */);
  }
  set MinDuration(value) {
    this.SetProp("MinDuration", 3 /* Int32 */, value);
  }
  get SearchKeyword() {
    return this.GetProp("SearchKeyword", 1 /* String */);
  }
  set SearchKeyword(value) {
    this.SetProp("SearchKeyword", 1 /* String */, value);
  }
  get Tag() {
    return this.GetProp("Tag", 1 /* String */);
  }
  set Tag(value) {
    this.SetProp("Tag", 1 /* String */, value);
  }
  get Title() {
    return this.GetProp("Title", 1 /* String */);
  }
  set Title(value) {
    this.SetProp("Title", 1 /* String */, value);
  }
};
var AvatarChatService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("AvatarChatService");
    this.Name = "AvatarChatService";
  }
};
var AvatarCreationService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("AvatarCreationService");
    this.Name = "AvatarCreationService";
  }
};
var AvatarEditorService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("AvatarEditorService");
    this.Name = "AvatarEditorService";
  }
};
var AvatarImportService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("AvatarImportService");
    this.Name = "AvatarImportService";
  }
};
var Backpack = class extends Instance {
  constructor() {
    super();
    this.addClassName("Backpack");
    this.Name = "Backpack";
  }
};
var BadgeService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("BadgeService");
    this.Name = "BadgeService";
  }
};
var BasePlayerGui = class extends Instance {
  constructor() {
    super();
    this.addClassName("BasePlayerGui");
  }
};
var CoreGui = class extends BasePlayerGui {
  constructor() {
    super();
    this.addClassName("CoreGui");
    this.Name = "CoreGui";
  }
  get SelectionImageObject() {
    return this.GetProp("SelectionImageObject", 19 /* Referent */);
  }
  set SelectionImageObject(value) {
    this.SetProp("SelectionImageObject", 19 /* Referent */, value);
  }
};
var StarterGui = class extends BasePlayerGui {
  constructor() {
    super();
    this.addClassName("StarterGui");
    this.Name = "StarterGui";
    this.ResetPlayerGuiOnSpawn = true;
    this.ScreenOrientation = ScreenOrientation.LandscapeSensor;
    this.ShowDevelopmentGui = true;
  }
  /**@deprecated Deprecated by Roblox*/
  get ResetPlayerGuiOnSpawn() {
    return this.GetProp("ResetPlayerGuiOnSpawn", 2 /* Bool */);
  }
  /**@deprecated Deprecated by Roblox*/
  set ResetPlayerGuiOnSpawn(value) {
    this.SetProp("ResetPlayerGuiOnSpawn", 2 /* Bool */, value);
  }
  get RtlTextSupport() {
    return this.GetProp("RtlTextSupport", 18 /* Enum */);
  }
  set RtlTextSupport(value) {
    this.SetProp("RtlTextSupport", 18 /* Enum */, value);
  }
  get ScreenOrientation() {
    return this.GetProp("ScreenOrientation", 18 /* Enum */);
  }
  set ScreenOrientation(value) {
    this.SetProp("ScreenOrientation", 18 /* Enum */, value);
  }
  get ShowDevelopmentGui() {
    return this.GetProp("ShowDevelopmentGui", 2 /* Bool */);
  }
  set ShowDevelopmentGui(value) {
    this.SetProp("ShowDevelopmentGui", 2 /* Bool */, value);
  }
  get VirtualCursorMode() {
    return this.GetProp("VirtualCursorMode", 18 /* Enum */);
  }
  set VirtualCursorMode(value) {
    this.SetProp("VirtualCursorMode", 18 /* Enum */, value);
  }
};
var BaseRemoteEvent = class extends Instance {
  constructor() {
    super();
    this.addClassName("BaseRemoteEvent");
  }
};
var RemoteEvent = class extends BaseRemoteEvent {
  constructor() {
    super();
    this.addClassName("RemoteEvent");
    this.Name = "RemoteEvent";
  }
};
var UnreliableRemoteEvent = class extends BaseRemoteEvent {
  constructor() {
    super();
    this.addClassName("UnreliableRemoteEvent");
    this.Name = "UnreliableRemoteEvent";
  }
};
var BaseWrap = class extends Instance {
  constructor() {
    super();
    this.addClassName("BaseWrap");
    this.CageMeshId = "";
    this.CageOrigin = CFrame.Identity;
    this.ImportOrigin = CFrame.Identity;
  }
  get CageMeshId() {
    return this.GetProp("CageMeshId", 1 /* String */);
  }
  set CageMeshId(value) {
    this.SetProp("CageMeshId", 1 /* String */, value);
  }
  get CageOrigin() {
    return this.GetProp("CageOrigin", 16 /* CFrame */);
  }
  set CageOrigin(value) {
    this.SetProp("CageOrigin", 16 /* CFrame */, value);
  }
  get HSRAssetId() {
    return this.GetProp("HSRAssetId", 1 /* String */);
  }
  set HSRAssetId(value) {
    this.SetProp("HSRAssetId", 1 /* String */, value);
  }
  get HSRData() {
    return this.GetProp("HSRData", 28 /* SharedString */);
  }
  set HSRData(value) {
    this.SetProp("HSRData", 28 /* SharedString */, value);
  }
  get HSRMeshIdData() {
    return this.GetProp("HSRMeshIdData", 28 /* SharedString */);
  }
  set HSRMeshIdData(value) {
    this.SetProp("HSRMeshIdData", 28 /* SharedString */, value);
  }
  get ImportOrigin() {
    return this.GetProp("ImportOrigin", 16 /* CFrame */);
  }
  set ImportOrigin(value) {
    this.SetProp("ImportOrigin", 16 /* CFrame */, value);
  }
  get TemporaryCageMeshId() {
    return this.GetProp("TemporaryCageMeshId", 1 /* String */);
  }
  set TemporaryCageMeshId(value) {
    this.SetProp("TemporaryCageMeshId", 1 /* String */, value);
  }
};
var WrapLayer = class extends BaseWrap {
  constructor() {
    super();
    this.addClassName("WrapLayer");
    this.Name = "WrapLayer";
    this.AutoSkin = WrapLayerAutoSkin.Disabled;
    this.Enabled = true;
    this.Order = 1;
    this.Puffiness = 1;
    this.ReferenceMeshId = "";
    this.ShrinkFactor = 0;
    this.TemporaryReferenceId = "";
    this.BindOffset = CFrame.Identity;
    this.ReferenceOrigin = CFrame.Identity;
  }
  get AutoSkin() {
    return this.GetProp("AutoSkin", 18 /* Enum */);
  }
  set AutoSkin(value) {
    this.SetProp("AutoSkin", 18 /* Enum */, value);
  }
  get BindOffset() {
    return this.GetProp("BindOffset", 16 /* CFrame */);
  }
  set BindOffset(value) {
    this.SetProp("BindOffset", 16 /* CFrame */, value);
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get Order() {
    return this.GetProp("Order", 3 /* Int32 */);
  }
  set Order(value) {
    this.SetProp("Order", 3 /* Int32 */, value);
  }
  get Puffiness() {
    return this.GetProp("Puffiness", 4 /* Float32 */);
  }
  set Puffiness(value) {
    this.SetProp("Puffiness", 4 /* Float32 */, value);
  }
  get ReferenceMeshId() {
    return this.GetProp("ReferenceMeshId", 1 /* String */);
  }
  set ReferenceMeshId(value) {
    this.SetProp("ReferenceMeshId", 1 /* String */, value);
  }
  get ReferenceOrigin() {
    return this.GetProp("ReferenceOrigin", 16 /* CFrame */);
  }
  set ReferenceOrigin(value) {
    this.SetProp("ReferenceOrigin", 16 /* CFrame */, value);
  }
  get ShrinkFactor() {
    return this.GetProp("ShrinkFactor", 4 /* Float32 */);
  }
  set ShrinkFactor(value) {
    this.SetProp("ShrinkFactor", 4 /* Float32 */, value);
  }
  get TemporaryReferenceId() {
    return this.GetProp("TemporaryReferenceId", 1 /* String */);
  }
  set TemporaryReferenceId(value) {
    this.SetProp("TemporaryReferenceId", 1 /* String */, value);
  }
};
var WrapTarget = class extends BaseWrap {
  constructor() {
    super();
    this.addClassName("WrapTarget");
    this.Name = "WrapTarget";
    this.Stiffness = 0;
  }
  get Stiffness() {
    return this.GetProp("Stiffness", 4 /* Float32 */);
  }
  set Stiffness(value) {
    this.SetProp("Stiffness", 4 /* Float32 */, value);
  }
};
var Beam = class extends Instance {
  constructor() {
    super();
    this.addClassName("Beam");
    this.Name = "Beam";
    this.Brightness = 1;
    this.Color = new ColorSequence(new ColorSequenceKeypoint(0, Color3.FromRGB(255, 255, 255)), new ColorSequenceKeypoint(1, Color3.FromRGB(255, 255, 255)));
    this.CurveSize0 = 0;
    this.CurveSize1 = 0;
    this.Enabled = true;
    this.FaceCamera = false;
    this.LightEmission = 0;
    this.LightInfluence = 0;
    this.Segments = 10;
    this.Texture = "";
    this.TextureLength = 1;
    this.TextureMode = TextureMode.Stretch;
    this.TextureSpeed = 1;
    this.Transparency = new NumberSequence(new NumberSequenceKeypoint(0, 0.5, 0), new NumberSequenceKeypoint(1, 0.5, 0));
    this.Width0 = 1;
    this.Width1 = 1;
    this.ZOffset = 0;
  }
  get Attachment0() {
    return this.GetProp("Attachment0", 19 /* Referent */);
  }
  set Attachment0(value) {
    this.SetProp("Attachment0", 19 /* Referent */, value);
  }
  get Attachment1() {
    return this.GetProp("Attachment1", 19 /* Referent */);
  }
  set Attachment1(value) {
    this.SetProp("Attachment1", 19 /* Referent */, value);
  }
  get Brightness() {
    return this.GetProp("Brightness", 4 /* Float32 */);
  }
  set Brightness(value) {
    this.SetProp("Brightness", 4 /* Float32 */, value);
  }
  get Color() {
    return this.GetProp("Color", 22 /* ColorSequence */);
  }
  set Color(value) {
    this.SetProp("Color", 22 /* ColorSequence */, value);
  }
  get CurveSize0() {
    return this.GetProp("CurveSize0", 4 /* Float32 */);
  }
  set CurveSize0(value) {
    this.SetProp("CurveSize0", 4 /* Float32 */, value);
  }
  get CurveSize1() {
    return this.GetProp("CurveSize1", 4 /* Float32 */);
  }
  set CurveSize1(value) {
    this.SetProp("CurveSize1", 4 /* Float32 */, value);
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get FaceCamera() {
    return this.GetProp("FaceCamera", 2 /* Bool */);
  }
  set FaceCamera(value) {
    this.SetProp("FaceCamera", 2 /* Bool */, value);
  }
  get LightEmission() {
    return this.GetProp("LightEmission", 4 /* Float32 */);
  }
  set LightEmission(value) {
    this.SetProp("LightEmission", 4 /* Float32 */, value);
  }
  get LightInfluence() {
    return this.GetProp("LightInfluence", 4 /* Float32 */);
  }
  set LightInfluence(value) {
    this.SetProp("LightInfluence", 4 /* Float32 */, value);
  }
  get Segments() {
    return this.GetProp("Segments", 3 /* Int32 */);
  }
  set Segments(value) {
    this.SetProp("Segments", 3 /* Int32 */, value);
  }
  get Texture() {
    return this.GetProp("Texture", 1 /* String */);
  }
  set Texture(value) {
    this.SetProp("Texture", 1 /* String */, value);
  }
  get TextureLength() {
    return this.GetProp("TextureLength", 4 /* Float32 */);
  }
  set TextureLength(value) {
    this.SetProp("TextureLength", 4 /* Float32 */, value);
  }
  get TextureMode() {
    return this.GetProp("TextureMode", 18 /* Enum */);
  }
  set TextureMode(value) {
    this.SetProp("TextureMode", 18 /* Enum */, value);
  }
  get TextureSpeed() {
    return this.GetProp("TextureSpeed", 4 /* Float32 */);
  }
  set TextureSpeed(value) {
    this.SetProp("TextureSpeed", 4 /* Float32 */, value);
  }
  get Transparency() {
    return this.GetProp("Transparency", 21 /* NumberSequence */);
  }
  set Transparency(value) {
    this.SetProp("Transparency", 21 /* NumberSequence */, value);
  }
  get Width0() {
    return this.GetProp("Width0", 4 /* Float32 */);
  }
  set Width0(value) {
    this.SetProp("Width0", 4 /* Float32 */, value);
  }
  get Width1() {
    return this.GetProp("Width1", 4 /* Float32 */);
  }
  set Width1(value) {
    this.SetProp("Width1", 4 /* Float32 */, value);
  }
  get ZOffset() {
    return this.GetProp("ZOffset", 4 /* Float32 */);
  }
  set ZOffset(value) {
    this.SetProp("ZOffset", 4 /* Float32 */, value);
  }
};
var BindableEvent = class extends Instance {
  constructor() {
    super();
    this.addClassName("BindableEvent");
    this.Name = "BindableEvent";
  }
};
var BindableFunction = class extends Instance {
  constructor() {
    super();
    this.addClassName("BindableFunction");
    this.Name = "BindableFunction";
  }
};
var BodyMover = class extends Instance {
  constructor() {
    super();
    this.addClassName("BodyMover");
  }
};
var BodyAngularVelocity = class extends BodyMover {
  constructor() {
    super();
    this.addClassName("BodyAngularVelocity");
    this.Name = "BodyAngularVelocity";
    this.AngularVelocity = new Vector3(0, 2, 0);
    this.MaxTorque = new Vector3(4e3, 4e3, 4e3);
    this.P = 1250;
  }
  get AngularVelocity() {
    return this.GetProp("AngularVelocity", 14 /* Vector3 */);
  }
  set AngularVelocity(value) {
    this.SetProp("AngularVelocity", 14 /* Vector3 */, value);
  }
  get MaxTorque() {
    return this.GetProp("MaxTorque", 14 /* Vector3 */);
  }
  set MaxTorque(value) {
    this.SetProp("MaxTorque", 14 /* Vector3 */, value);
  }
  get P() {
    return this.GetProp("P", 4 /* Float32 */);
  }
  set P(value) {
    this.SetProp("P", 4 /* Float32 */, value);
  }
};
var BodyForce = class extends BodyMover {
  constructor() {
    super();
    this.addClassName("BodyForce");
    this.Name = "BodyForce";
    this.Force = new Vector3(0, 1, 0);
  }
  get Force() {
    return this.GetProp("Force", 14 /* Vector3 */);
  }
  set Force(value) {
    this.SetProp("Force", 14 /* Vector3 */, value);
  }
};
var BodyGyro = class extends BodyMover {
  constructor() {
    super();
    this.addClassName("BodyGyro");
    this.Name = "BodyGyro";
    this.D = 500;
    this.MaxTorque = new Vector3(4e5, 0, 4e5);
    this.P = 3e3;
    this.CFrame = CFrame.Identity;
  }
  get CFrame() {
    return this.GetProp("CFrame", 16 /* CFrame */);
  }
  set CFrame(value) {
    this.SetProp("CFrame", 16 /* CFrame */, value);
  }
  get D() {
    return this.GetProp("D", 4 /* Float32 */);
  }
  set D(value) {
    this.SetProp("D", 4 /* Float32 */, value);
  }
  get MaxTorque() {
    return this.GetProp("MaxTorque", 14 /* Vector3 */);
  }
  set MaxTorque(value) {
    this.SetProp("MaxTorque", 14 /* Vector3 */, value);
  }
  get P() {
    return this.GetProp("P", 4 /* Float32 */);
  }
  set P(value) {
    this.SetProp("P", 4 /* Float32 */, value);
  }
};
var BodyPosition = class extends BodyMover {
  constructor() {
    super();
    this.addClassName("BodyPosition");
    this.Name = "BodyPosition";
    this.D = 1250;
    this.MaxForce = new Vector3(4e3, 4e3, 4e3);
    this.P = 1e4;
    this.Position = new Vector3(0, 50, 0);
  }
  get D() {
    return this.GetProp("D", 4 /* Float32 */);
  }
  set D(value) {
    this.SetProp("D", 4 /* Float32 */, value);
  }
  get MaxForce() {
    return this.GetProp("MaxForce", 14 /* Vector3 */);
  }
  set MaxForce(value) {
    this.SetProp("MaxForce", 14 /* Vector3 */, value);
  }
  get P() {
    return this.GetProp("P", 4 /* Float32 */);
  }
  set P(value) {
    this.SetProp("P", 4 /* Float32 */, value);
  }
  get Position() {
    return this.GetProp("Position", 14 /* Vector3 */);
  }
  set Position(value) {
    this.SetProp("Position", 14 /* Vector3 */, value);
  }
};
var BodyThrust = class extends BodyMover {
  constructor() {
    super();
    this.addClassName("BodyThrust");
    this.Name = "BodyThrust";
    this.Force = new Vector3(0, 1, 0);
    this.Location = new Vector3(0, 0, 0);
  }
  get Force() {
    return this.GetProp("Force", 14 /* Vector3 */);
  }
  set Force(value) {
    this.SetProp("Force", 14 /* Vector3 */, value);
  }
  get Location() {
    return this.GetProp("Location", 14 /* Vector3 */);
  }
  set Location(value) {
    this.SetProp("Location", 14 /* Vector3 */, value);
  }
};
var BodyVelocity = class extends BodyMover {
  constructor() {
    super();
    this.addClassName("BodyVelocity");
    this.Name = "BodyVelocity";
    this.MaxForce = new Vector3(4e3, 4e3, 4e3);
    this.P = 1250;
    this.Velocity = new Vector3(0, 2, 0);
  }
  get MaxForce() {
    return this.GetProp("MaxForce", 14 /* Vector3 */);
  }
  set MaxForce(value) {
    this.SetProp("MaxForce", 14 /* Vector3 */, value);
  }
  get P() {
    return this.GetProp("P", 4 /* Float32 */);
  }
  set P(value) {
    this.SetProp("P", 4 /* Float32 */, value);
  }
  get Velocity() {
    return this.GetProp("Velocity", 14 /* Vector3 */);
  }
  set Velocity(value) {
    this.SetProp("Velocity", 14 /* Vector3 */, value);
  }
};
var RocketPropulsion = class extends BodyMover {
  constructor() {
    super();
    this.addClassName("RocketPropulsion");
    this.Name = "RocketPropulsion";
    this.CartoonFactor = 0.7;
    this.MaxSpeed = 30;
    this.MaxThrust = 4e3;
    this.MaxTorque = new Vector3(4e5, 4e5, 0);
    this.TargetOffset = new Vector3(0, 0, 0);
    this.TargetRadius = 4;
    this.ThrustD = 1e-3;
    this.ThrustP = 5;
    this.TurnD = 500;
    this.TurnP = 3e3;
  }
  get CartoonFactor() {
    return this.GetProp("CartoonFactor", 4 /* Float32 */);
  }
  set CartoonFactor(value) {
    this.SetProp("CartoonFactor", 4 /* Float32 */, value);
  }
  get MaxSpeed() {
    return this.GetProp("MaxSpeed", 4 /* Float32 */);
  }
  set MaxSpeed(value) {
    this.SetProp("MaxSpeed", 4 /* Float32 */, value);
  }
  get MaxThrust() {
    return this.GetProp("MaxThrust", 4 /* Float32 */);
  }
  set MaxThrust(value) {
    this.SetProp("MaxThrust", 4 /* Float32 */, value);
  }
  get MaxTorque() {
    return this.GetProp("MaxTorque", 14 /* Vector3 */);
  }
  set MaxTorque(value) {
    this.SetProp("MaxTorque", 14 /* Vector3 */, value);
  }
  get Target() {
    return this.GetProp("Target", 19 /* Referent */);
  }
  set Target(value) {
    this.SetProp("Target", 19 /* Referent */, value);
  }
  get TargetOffset() {
    return this.GetProp("TargetOffset", 14 /* Vector3 */);
  }
  set TargetOffset(value) {
    this.SetProp("TargetOffset", 14 /* Vector3 */, value);
  }
  get TargetRadius() {
    return this.GetProp("TargetRadius", 4 /* Float32 */);
  }
  set TargetRadius(value) {
    this.SetProp("TargetRadius", 4 /* Float32 */, value);
  }
  get ThrustD() {
    return this.GetProp("ThrustD", 4 /* Float32 */);
  }
  set ThrustD(value) {
    this.SetProp("ThrustD", 4 /* Float32 */, value);
  }
  get ThrustP() {
    return this.GetProp("ThrustP", 4 /* Float32 */);
  }
  set ThrustP(value) {
    this.SetProp("ThrustP", 4 /* Float32 */, value);
  }
  get TurnD() {
    return this.GetProp("TurnD", 4 /* Float32 */);
  }
  set TurnD(value) {
    this.SetProp("TurnD", 4 /* Float32 */, value);
  }
  get TurnP() {
    return this.GetProp("TurnP", 4 /* Float32 */);
  }
  set TurnP(value) {
    this.SetProp("TurnP", 4 /* Float32 */, value);
  }
};
var BodyPartDescription = class extends Instance {
  constructor() {
    super();
    this.addClassName("BodyPartDescription");
    this.Name = "BodyPartDescription";
    this.AssetId = BigInt(0);
    this.BodyPart = BodyPart.Head;
    this.Color = Color3.FromRGB(0, 0, 0);
  }
  get AssetId() {
    return this.GetProp("AssetId", 27 /* Int64 */);
  }
  set AssetId(value) {
    this.SetProp("AssetId", 27 /* Int64 */, value);
  }
  get BodyPart() {
    return this.GetProp("BodyPart", 18 /* Enum */);
  }
  set BodyPart(value) {
    this.SetProp("BodyPart", 18 /* Enum */, value);
  }
  get Color() {
    return this.GetProp("Color", 12 /* Color3 */);
  }
  set Color(value) {
    this.SetProp("Color", 12 /* Color3 */, value);
  }
  get Instance() {
    return this.GetProp("Instance", 19 /* Referent */);
  }
  set Instance(value) {
    this.SetProp("Instance", 19 /* Referent */, value);
  }
};
var Breakpoint = class extends Instance {
  constructor() {
    super();
    this.addClassName("Breakpoint");
    this.Name = "Breakpoint";
  }
};
var BrowserService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("BrowserService");
    this.Name = "BrowserService";
  }
};
var BubbleChatMessageProperties = class extends Instance {
  constructor() {
    super();
    this.addClassName("BubbleChatMessageProperties");
    this.Name = "BubbleChatMessageProperties";
  }
};
var BulkImportService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("BulkImportService");
    this.Name = "BulkImportService";
  }
};
var CacheableContentProvider = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("CacheableContentProvider");
  }
};
var HSRDataContentProvider = class extends CacheableContentProvider {
  constructor() {
    super();
    this.addClassName("HSRDataContentProvider");
    this.Name = "HSRDataContentProvider";
  }
};
var MeshContentProvider = class extends CacheableContentProvider {
  constructor() {
    super();
    this.addClassName("MeshContentProvider");
    this.Name = "MeshContentProvider";
  }
};
var SolidModelContentProvider = class extends CacheableContentProvider {
  constructor() {
    super();
    this.addClassName("SolidModelContentProvider");
    this.Name = "SolidModelContentProvider";
  }
};
var CalloutService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("CalloutService");
    this.Name = "CalloutService";
  }
};
var Camera = class extends Instance {
  constructor() {
    super();
    this.addClassName("Camera");
    this.Name = "Camera";
    this.CameraType = CameraType.Fixed;
    this.FieldOfView = 70;
    this.FieldOfViewMode = FieldOfViewMode.Vertical;
    this.HeadLocked = true;
    this.HeadScale = 1;
    this.VRTiltAndRollEnabled = false;
    this.CFrame = new CFrame(new Vector3(0, 20, 20), [1, 0, -0, -0, 0.707106829, 0.707106829, 0, -0.707106829, 0.707106829]);
    this.CoordinateFrame = new CFrame(new Vector3(0, 20, 20), [1, 0, -0, -0, 0.707106829, 0.707106829, 0, -0.707106829, 0.707106829]);
    this.Focus = new CFrame(new Vector3(0, 0, -5), [1, 0, 0, 0, 1, 0, 0, 0, 1]);
  }
  get CFrame() {
    return this.GetProp("CFrame", 16 /* CFrame */);
  }
  set CFrame(value) {
    this.SetProp("CFrame", 16 /* CFrame */, value);
  }
  get CameraSubject() {
    return this.GetProp("CameraSubject", 19 /* Referent */);
  }
  set CameraSubject(value) {
    this.SetProp("CameraSubject", 19 /* Referent */, value);
  }
  get CameraType() {
    return this.GetProp("CameraType", 18 /* Enum */);
  }
  set CameraType(value) {
    this.SetProp("CameraType", 18 /* Enum */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get CoordinateFrame() {
    return this.GetProp("CoordinateFrame", 16 /* CFrame */);
  }
  /**@deprecated Deprecated by Roblox*/
  set CoordinateFrame(value) {
    this.SetProp("CoordinateFrame", 16 /* CFrame */, value);
  }
  get FieldOfView() {
    return this.GetProp("FieldOfView", 4 /* Float32 */);
  }
  set FieldOfView(value) {
    this.SetProp("FieldOfView", 4 /* Float32 */, value);
  }
  get FieldOfViewMode() {
    return this.GetProp("FieldOfViewMode", 18 /* Enum */);
  }
  set FieldOfViewMode(value) {
    this.SetProp("FieldOfViewMode", 18 /* Enum */, value);
  }
  get Focus() {
    return this.GetProp("Focus", 16 /* CFrame */);
  }
  set Focus(value) {
    this.SetProp("Focus", 16 /* CFrame */, value);
  }
  get HeadLocked() {
    return this.GetProp("HeadLocked", 2 /* Bool */);
  }
  set HeadLocked(value) {
    this.SetProp("HeadLocked", 2 /* Bool */, value);
  }
  get HeadScale() {
    return this.GetProp("HeadScale", 4 /* Float32 */);
  }
  set HeadScale(value) {
    this.SetProp("HeadScale", 4 /* Float32 */, value);
  }
  get VRTiltAndRollEnabled() {
    return this.GetProp("VRTiltAndRollEnabled", 2 /* Bool */);
  }
  set VRTiltAndRollEnabled(value) {
    this.SetProp("VRTiltAndRollEnabled", 2 /* Bool */, value);
  }
};
var CaptureService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("CaptureService");
    this.Name = "CaptureService";
  }
};
var ChangeHistoryService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ChangeHistoryService");
    this.Name = "ChangeHistoryService";
  }
};
var CharacterAppearance = class extends Instance {
  constructor() {
    super();
    this.addClassName("CharacterAppearance");
  }
};
var BodyColors = class extends CharacterAppearance {
  constructor() {
    super();
    this.addClassName("BodyColors");
    this.Name = "BodyColors";
    this.HeadColor3 = Color3.FromRGB(253, 234, 141);
    this.LeftArmColor3 = Color3.FromRGB(253, 234, 141);
    this.LeftLegColor3 = Color3.FromRGB(13, 105, 172);
    this.RightArmColor3 = Color3.FromRGB(253, 234, 141);
    this.RightLegColor3 = Color3.FromRGB(13, 105, 172);
    this.TorsoColor3 = Color3.FromRGB(40, 127, 71);
  }
  get HeadColor3() {
    return this.GetProp("HeadColor3", 12 /* Color3 */);
  }
  set HeadColor3(value) {
    this.SetProp("HeadColor3", 12 /* Color3 */, value);
  }
  get LeftArmColor3() {
    return this.GetProp("LeftArmColor3", 12 /* Color3 */);
  }
  set LeftArmColor3(value) {
    this.SetProp("LeftArmColor3", 12 /* Color3 */, value);
  }
  get LeftLegColor3() {
    return this.GetProp("LeftLegColor3", 12 /* Color3 */);
  }
  set LeftLegColor3(value) {
    this.SetProp("LeftLegColor3", 12 /* Color3 */, value);
  }
  get RightArmColor3() {
    return this.GetProp("RightArmColor3", 12 /* Color3 */);
  }
  set RightArmColor3(value) {
    this.SetProp("RightArmColor3", 12 /* Color3 */, value);
  }
  get RightLegColor3() {
    return this.GetProp("RightLegColor3", 12 /* Color3 */);
  }
  set RightLegColor3(value) {
    this.SetProp("RightLegColor3", 12 /* Color3 */, value);
  }
  get TorsoColor3() {
    return this.GetProp("TorsoColor3", 12 /* Color3 */);
  }
  set TorsoColor3(value) {
    this.SetProp("TorsoColor3", 12 /* Color3 */, value);
  }
};
var CharacterMesh = class extends CharacterAppearance {
  constructor() {
    super();
    this.addClassName("CharacterMesh");
    this.Name = "CharacterMesh";
    this.BaseTextureId = BigInt(0);
    this.BodyPart = BodyPart.Head;
    this.MeshId = BigInt(0);
    this.OverlayTextureId = BigInt(0);
  }
  get BaseTextureId() {
    return this.GetProp("BaseTextureId", 27 /* Int64 */);
  }
  set BaseTextureId(value) {
    this.SetProp("BaseTextureId", 27 /* Int64 */, value);
  }
  get BodyPart() {
    return this.GetProp("BodyPart", 18 /* Enum */);
  }
  set BodyPart(value) {
    this.SetProp("BodyPart", 18 /* Enum */, value);
  }
  get MeshId() {
    return this.GetProp("MeshId", 27 /* Int64 */);
  }
  set MeshId(value) {
    this.SetProp("MeshId", 27 /* Int64 */, value);
  }
  get OverlayTextureId() {
    return this.GetProp("OverlayTextureId", 27 /* Int64 */);
  }
  set OverlayTextureId(value) {
    this.SetProp("OverlayTextureId", 27 /* Int64 */, value);
  }
};
var Clothing = class extends CharacterAppearance {
  constructor() {
    super();
    this.addClassName("Clothing");
    this.Color3 = Color3.FromRGB(255, 255, 255);
  }
  get Color3() {
    return this.GetProp("Color3", 12 /* Color3 */);
  }
  set Color3(value) {
    this.SetProp("Color3", 12 /* Color3 */, value);
  }
};
var Pants = class extends Clothing {
  constructor() {
    super();
    this.addClassName("Pants");
    this.Name = "Pants";
    this.PantsTemplate = "";
  }
  get PantsTemplate() {
    return this.GetProp("PantsTemplate", 1 /* String */);
  }
  set PantsTemplate(value) {
    this.SetProp("PantsTemplate", 1 /* String */, value);
  }
};
var Shirt = class extends Clothing {
  constructor() {
    super();
    this.addClassName("Shirt");
    this.Name = "Shirt";
    this.ShirtTemplate = "";
  }
  get ShirtTemplate() {
    return this.GetProp("ShirtTemplate", 1 /* String */);
  }
  set ShirtTemplate(value) {
    this.SetProp("ShirtTemplate", 1 /* String */, value);
  }
};
var ShirtGraphic = class extends CharacterAppearance {
  constructor() {
    super();
    this.addClassName("ShirtGraphic");
    this.Name = "ShirtGraphic";
    this.Color3 = Color3.FromRGB(255, 255, 255);
    this.Graphic = "";
  }
  get Color3() {
    return this.GetProp("Color3", 12 /* Color3 */);
  }
  set Color3(value) {
    this.SetProp("Color3", 12 /* Color3 */, value);
  }
  get Graphic() {
    return this.GetProp("Graphic", 1 /* String */);
  }
  set Graphic(value) {
    this.SetProp("Graphic", 1 /* String */, value);
  }
};
var Skin = class extends CharacterAppearance {
  constructor() {
    super();
    this.addClassName("Skin");
    this.Name = "Skin";
  }
  get SkinColor() {
    return this.GetProp("SkinColor", 11 /* BrickColor */);
  }
  set SkinColor(value) {
    this.SetProp("SkinColor", 11 /* BrickColor */, value);
  }
};
var Chat = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("Chat");
    this.Name = "Chat";
    this.BubbleChatEnabled = false;
    this.LoadDefaultChat = true;
  }
  get BubbleChatEnabled() {
    return this.GetProp("BubbleChatEnabled", 2 /* Bool */);
  }
  set BubbleChatEnabled(value) {
    this.SetProp("BubbleChatEnabled", 2 /* Bool */, value);
  }
  get LoadDefaultChat() {
    return this.GetProp("LoadDefaultChat", 2 /* Bool */);
  }
  set LoadDefaultChat(value) {
    this.SetProp("LoadDefaultChat", 2 /* Bool */, value);
  }
};
var ChatbotUIService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ChatbotUIService");
    this.Name = "ChatbotUIService";
  }
};
var ClickDetector = class extends Instance {
  constructor() {
    super();
    this.addClassName("ClickDetector");
    this.Name = "ClickDetector";
    this.CursorIcon = "";
    this.MaxActivationDistance = 32;
  }
  get CursorIcon() {
    return this.GetProp("CursorIcon", 1 /* String */);
  }
  set CursorIcon(value) {
    this.SetProp("CursorIcon", 1 /* String */, value);
  }
  get MaxActivationDistance() {
    return this.GetProp("MaxActivationDistance", 4 /* Float32 */);
  }
  set MaxActivationDistance(value) {
    this.SetProp("MaxActivationDistance", 4 /* Float32 */, value);
  }
};
var DragDetector = class extends ClickDetector {
  constructor() {
    super();
    this.addClassName("DragDetector");
    this.Name = "DragDetector";
    this.ActivatedCursorIcon = "";
    this.ApplyAtCenterOfMass = false;
    this.DragStyle = DragDetectorDragStyle.TranslatePlane;
    this.Enabled = true;
    this.GamepadModeSwitchKeyCode = KeyCode.ButtonR1;
    this.KeyboardModeSwitchKeyCode = KeyCode.LeftControl;
    this.MaxDragAngle = 0;
    this.MaxDragTranslation = new Vector3(0, 0, 0);
    this.MaxForce = 1e7;
    this.MaxTorque = 1e4;
    this.MinDragAngle = 0;
    this.MinDragTranslation = new Vector3(0, 0, 0);
    this.Orientation = new Vector3(0, 180, 90);
    this.PermissionPolicy = DragDetectorPermissionPolicy.Everybody;
    this.ResponseStyle = DragDetectorResponseStyle.Physical;
    this.Responsiveness = 10;
    this.RunLocally = false;
    this.TrackballRadialPullFactor = 1;
    this.TrackballRollFactor = 1;
    this.VRSwitchKeyCode = KeyCode.ButtonL2;
    this.DragFrame = CFrame.Identity;
  }
  get ActivatedCursorIcon() {
    return this.GetProp("ActivatedCursorIcon", 1 /* String */);
  }
  set ActivatedCursorIcon(value) {
    this.SetProp("ActivatedCursorIcon", 1 /* String */, value);
  }
  get ApplyAtCenterOfMass() {
    return this.GetProp("ApplyAtCenterOfMass", 2 /* Bool */);
  }
  set ApplyAtCenterOfMass(value) {
    this.SetProp("ApplyAtCenterOfMass", 2 /* Bool */, value);
  }
  get DragFrame() {
    return this.GetProp("DragFrame", 16 /* CFrame */);
  }
  set DragFrame(value) {
    this.SetProp("DragFrame", 16 /* CFrame */, value);
  }
  get DragStyle() {
    return this.GetProp("DragStyle", 18 /* Enum */);
  }
  set DragStyle(value) {
    this.SetProp("DragStyle", 18 /* Enum */, value);
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get GamepadModeSwitchKeyCode() {
    return this.GetProp("GamepadModeSwitchKeyCode", 18 /* Enum */);
  }
  set GamepadModeSwitchKeyCode(value) {
    this.SetProp("GamepadModeSwitchKeyCode", 18 /* Enum */, value);
  }
  get KeyboardModeSwitchKeyCode() {
    return this.GetProp("KeyboardModeSwitchKeyCode", 18 /* Enum */);
  }
  set KeyboardModeSwitchKeyCode(value) {
    this.SetProp("KeyboardModeSwitchKeyCode", 18 /* Enum */, value);
  }
  get MaxDragAngle() {
    return this.GetProp("MaxDragAngle", 4 /* Float32 */);
  }
  set MaxDragAngle(value) {
    this.SetProp("MaxDragAngle", 4 /* Float32 */, value);
  }
  get MaxDragTranslation() {
    return this.GetProp("MaxDragTranslation", 14 /* Vector3 */);
  }
  set MaxDragTranslation(value) {
    this.SetProp("MaxDragTranslation", 14 /* Vector3 */, value);
  }
  get MaxForce() {
    return this.GetProp("MaxForce", 4 /* Float32 */);
  }
  set MaxForce(value) {
    this.SetProp("MaxForce", 4 /* Float32 */, value);
  }
  get MaxTorque() {
    return this.GetProp("MaxTorque", 4 /* Float32 */);
  }
  set MaxTorque(value) {
    this.SetProp("MaxTorque", 4 /* Float32 */, value);
  }
  get MinDragAngle() {
    return this.GetProp("MinDragAngle", 4 /* Float32 */);
  }
  set MinDragAngle(value) {
    this.SetProp("MinDragAngle", 4 /* Float32 */, value);
  }
  get MinDragTranslation() {
    return this.GetProp("MinDragTranslation", 14 /* Vector3 */);
  }
  set MinDragTranslation(value) {
    this.SetProp("MinDragTranslation", 14 /* Vector3 */, value);
  }
  get Orientation() {
    return this.GetProp("Orientation", 14 /* Vector3 */);
  }
  set Orientation(value) {
    this.SetProp("Orientation", 14 /* Vector3 */, value);
  }
  get PermissionPolicy() {
    return this.GetProp("PermissionPolicy", 18 /* Enum */);
  }
  set PermissionPolicy(value) {
    this.SetProp("PermissionPolicy", 18 /* Enum */, value);
  }
  get ReferenceInstance() {
    return this.GetProp("ReferenceInstance", 19 /* Referent */);
  }
  set ReferenceInstance(value) {
    this.SetProp("ReferenceInstance", 19 /* Referent */, value);
  }
  get ResponseStyle() {
    return this.GetProp("ResponseStyle", 18 /* Enum */);
  }
  set ResponseStyle(value) {
    this.SetProp("ResponseStyle", 18 /* Enum */, value);
  }
  get Responsiveness() {
    return this.GetProp("Responsiveness", 4 /* Float32 */);
  }
  set Responsiveness(value) {
    this.SetProp("Responsiveness", 4 /* Float32 */, value);
  }
  get RunLocally() {
    return this.GetProp("RunLocally", 2 /* Bool */);
  }
  set RunLocally(value) {
    this.SetProp("RunLocally", 2 /* Bool */, value);
  }
  get TrackballRadialPullFactor() {
    return this.GetProp("TrackballRadialPullFactor", 4 /* Float32 */);
  }
  set TrackballRadialPullFactor(value) {
    this.SetProp("TrackballRadialPullFactor", 4 /* Float32 */, value);
  }
  get TrackballRollFactor() {
    return this.GetProp("TrackballRollFactor", 4 /* Float32 */);
  }
  set TrackballRollFactor(value) {
    this.SetProp("TrackballRollFactor", 4 /* Float32 */, value);
  }
  get VRSwitchKeyCode() {
    return this.GetProp("VRSwitchKeyCode", 18 /* Enum */);
  }
  set VRSwitchKeyCode(value) {
    this.SetProp("VRSwitchKeyCode", 18 /* Enum */, value);
  }
};
var Clouds = class extends Instance {
  constructor() {
    super();
    this.addClassName("Clouds");
    this.Name = "Clouds";
    this.Color = Color3.FromRGB(255, 255, 255);
    this.Cover = 0.5;
    this.Density = 0.7;
    this.Enabled = true;
  }
  get Color() {
    return this.GetProp("Color", 12 /* Color3 */);
  }
  set Color(value) {
    this.SetProp("Color", 12 /* Color3 */, value);
  }
  get Cover() {
    return this.GetProp("Cover", 4 /* Float32 */);
  }
  set Cover(value) {
    this.SetProp("Cover", 4 /* Float32 */, value);
  }
  get Density() {
    return this.GetProp("Density", 4 /* Float32 */);
  }
  set Density(value) {
    this.SetProp("Density", 4 /* Float32 */, value);
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
};
var ClusterPacketCache = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ClusterPacketCache");
    this.Name = "ClusterPacketCache";
  }
};
var CollaboratorsService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("CollaboratorsService");
    this.Name = "CollaboratorsService";
  }
};
var CollectionService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("CollectionService");
    this.Name = "CollectionService";
  }
};
var CommandService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("CommandService");
    this.Name = "CommandService";
  }
};
var CommerceService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("CommerceService");
    this.Name = "CommerceService";
  }
};
var Configuration = class extends Instance {
  constructor() {
    super();
    this.addClassName("Configuration");
    this.Name = "Configuration";
  }
};
var ConfigureServerService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ConfigureServerService");
    this.Name = "ConfigureServerService";
  }
};
var ConnectivityService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ConnectivityService");
    this.Name = "ConnectivityService";
  }
};
var Constraint = class extends Instance {
  constructor() {
    super();
    this.addClassName("Constraint");
    this.Enabled = true;
    this.Visible = false;
  }
  get Attachment0() {
    return this.GetProp("Attachment0", 19 /* Referent */);
  }
  set Attachment0(value) {
    this.SetProp("Attachment0", 19 /* Referent */, value);
  }
  get Attachment1() {
    return this.GetProp("Attachment1", 19 /* Referent */);
  }
  set Attachment1(value) {
    this.SetProp("Attachment1", 19 /* Referent */, value);
  }
  get Color() {
    return this.GetProp("Color", 11 /* BrickColor */);
  }
  set Color(value) {
    this.SetProp("Color", 11 /* BrickColor */, value);
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get Visible() {
    return this.GetProp("Visible", 2 /* Bool */);
  }
  set Visible(value) {
    this.SetProp("Visible", 2 /* Bool */, value);
  }
};
var AlignOrientation = class extends Constraint {
  constructor() {
    super();
    this.addClassName("AlignOrientation");
    this.Name = "AlignOrientation";
    this.AlignType = AlignType.AllAxes;
    this.MaxAngularVelocity = Infinity;
    this.MaxTorque = 1e4;
    this.Mode = OrientationAlignmentMode.TwoAttachment;
    this.PrimaryAxisOnly = false;
    this.ReactionTorqueEnabled = false;
    this.Responsiveness = 10;
    this.RigidityEnabled = false;
    this.CFrame = CFrame.Identity;
  }
  get AlignType() {
    return this.GetProp("AlignType", 18 /* Enum */);
  }
  set AlignType(value) {
    this.SetProp("AlignType", 18 /* Enum */, value);
  }
  get CFrame() {
    return this.GetProp("CFrame", 16 /* CFrame */);
  }
  set CFrame(value) {
    this.SetProp("CFrame", 16 /* CFrame */, value);
  }
  get MaxAngularVelocity() {
    return this.GetProp("MaxAngularVelocity", 4 /* Float32 */);
  }
  set MaxAngularVelocity(value) {
    this.SetProp("MaxAngularVelocity", 4 /* Float32 */, value);
  }
  get MaxTorque() {
    return this.GetProp("MaxTorque", 4 /* Float32 */);
  }
  set MaxTorque(value) {
    this.SetProp("MaxTorque", 4 /* Float32 */, value);
  }
  get Mode() {
    return this.GetProp("Mode", 18 /* Enum */);
  }
  set Mode(value) {
    this.SetProp("Mode", 18 /* Enum */, value);
  }
  get PrimaryAxisOnly() {
    return this.GetProp("PrimaryAxisOnly", 2 /* Bool */);
  }
  set PrimaryAxisOnly(value) {
    this.SetProp("PrimaryAxisOnly", 2 /* Bool */, value);
  }
  get ReactionTorqueEnabled() {
    return this.GetProp("ReactionTorqueEnabled", 2 /* Bool */);
  }
  set ReactionTorqueEnabled(value) {
    this.SetProp("ReactionTorqueEnabled", 2 /* Bool */, value);
  }
  get Responsiveness() {
    return this.GetProp("Responsiveness", 4 /* Float32 */);
  }
  set Responsiveness(value) {
    this.SetProp("Responsiveness", 4 /* Float32 */, value);
  }
  get RigidityEnabled() {
    return this.GetProp("RigidityEnabled", 2 /* Bool */);
  }
  set RigidityEnabled(value) {
    this.SetProp("RigidityEnabled", 2 /* Bool */, value);
  }
};
var AlignPosition = class extends Constraint {
  constructor() {
    super();
    this.addClassName("AlignPosition");
    this.Name = "AlignPosition";
    this.ApplyAtCenterOfMass = false;
    this.ForceLimitMode = ForceLimitMode.Magnitude;
    this.ForceRelativeTo = ActuatorRelativeTo.World;
    this.MaxAxesForce = new Vector3(1e4, 1e4, 1e4);
    this.MaxForce = 1e4;
    this.MaxVelocity = Infinity;
    this.Mode = PositionAlignmentMode.TwoAttachment;
    this.Position = new Vector3(0, 0, 0);
    this.ReactionForceEnabled = false;
    this.Responsiveness = 10;
    this.RigidityEnabled = false;
  }
  get ApplyAtCenterOfMass() {
    return this.GetProp("ApplyAtCenterOfMass", 2 /* Bool */);
  }
  set ApplyAtCenterOfMass(value) {
    this.SetProp("ApplyAtCenterOfMass", 2 /* Bool */, value);
  }
  get ForceLimitMode() {
    return this.GetProp("ForceLimitMode", 18 /* Enum */);
  }
  set ForceLimitMode(value) {
    this.SetProp("ForceLimitMode", 18 /* Enum */, value);
  }
  get ForceRelativeTo() {
    return this.GetProp("ForceRelativeTo", 18 /* Enum */);
  }
  set ForceRelativeTo(value) {
    this.SetProp("ForceRelativeTo", 18 /* Enum */, value);
  }
  get MaxAxesForce() {
    return this.GetProp("MaxAxesForce", 14 /* Vector3 */);
  }
  set MaxAxesForce(value) {
    this.SetProp("MaxAxesForce", 14 /* Vector3 */, value);
  }
  get MaxForce() {
    return this.GetProp("MaxForce", 4 /* Float32 */);
  }
  set MaxForce(value) {
    this.SetProp("MaxForce", 4 /* Float32 */, value);
  }
  get MaxVelocity() {
    return this.GetProp("MaxVelocity", 4 /* Float32 */);
  }
  set MaxVelocity(value) {
    this.SetProp("MaxVelocity", 4 /* Float32 */, value);
  }
  get Mode() {
    return this.GetProp("Mode", 18 /* Enum */);
  }
  set Mode(value) {
    this.SetProp("Mode", 18 /* Enum */, value);
  }
  get Position() {
    return this.GetProp("Position", 14 /* Vector3 */);
  }
  set Position(value) {
    this.SetProp("Position", 14 /* Vector3 */, value);
  }
  get ReactionForceEnabled() {
    return this.GetProp("ReactionForceEnabled", 2 /* Bool */);
  }
  set ReactionForceEnabled(value) {
    this.SetProp("ReactionForceEnabled", 2 /* Bool */, value);
  }
  get Responsiveness() {
    return this.GetProp("Responsiveness", 4 /* Float32 */);
  }
  set Responsiveness(value) {
    this.SetProp("Responsiveness", 4 /* Float32 */, value);
  }
  get RigidityEnabled() {
    return this.GetProp("RigidityEnabled", 2 /* Bool */);
  }
  set RigidityEnabled(value) {
    this.SetProp("RigidityEnabled", 2 /* Bool */, value);
  }
};
var AngularVelocity = class extends Constraint {
  constructor() {
    super();
    this.addClassName("AngularVelocity");
    this.Name = "AngularVelocity";
    this.AngularVelocity = new Vector3(0, 0, 0);
    this.MaxTorque = 0;
    this.ReactionTorqueEnabled = false;
    this.RelativeTo = ActuatorRelativeTo.World;
  }
  get AngularVelocity() {
    return this.GetProp("AngularVelocity", 14 /* Vector3 */);
  }
  set AngularVelocity(value) {
    this.SetProp("AngularVelocity", 14 /* Vector3 */, value);
  }
  get MaxTorque() {
    return this.GetProp("MaxTorque", 4 /* Float32 */);
  }
  set MaxTorque(value) {
    this.SetProp("MaxTorque", 4 /* Float32 */, value);
  }
  get ReactionTorqueEnabled() {
    return this.GetProp("ReactionTorqueEnabled", 2 /* Bool */);
  }
  set ReactionTorqueEnabled(value) {
    this.SetProp("ReactionTorqueEnabled", 2 /* Bool */, value);
  }
  get RelativeTo() {
    return this.GetProp("RelativeTo", 18 /* Enum */);
  }
  set RelativeTo(value) {
    this.SetProp("RelativeTo", 18 /* Enum */, value);
  }
};
var AnimationConstraint = class extends Constraint {
  constructor() {
    super();
    this.addClassName("AnimationConstraint");
    this.Name = "AnimationConstraint";
    this.IsKinematic = false;
    this.MaxForce = 1e4;
    this.MaxTorque = 1e4;
    this.Transform = CFrame.Identity;
  }
  get IsKinematic() {
    return this.GetProp("IsKinematic", 2 /* Bool */);
  }
  set IsKinematic(value) {
    this.SetProp("IsKinematic", 2 /* Bool */, value);
  }
  get MaxForce() {
    return this.GetProp("MaxForce", 4 /* Float32 */);
  }
  set MaxForce(value) {
    this.SetProp("MaxForce", 4 /* Float32 */, value);
  }
  get MaxTorque() {
    return this.GetProp("MaxTorque", 4 /* Float32 */);
  }
  set MaxTorque(value) {
    this.SetProp("MaxTorque", 4 /* Float32 */, value);
  }
  get Transform() {
    return this.GetProp("Transform", 16 /* CFrame */);
  }
  set Transform(value) {
    this.SetProp("Transform", 16 /* CFrame */, value);
  }
};
var BallSocketConstraint = class extends Constraint {
  constructor() {
    super();
    this.addClassName("BallSocketConstraint");
    this.Name = "BallSocketConstraint";
    this.LimitsEnabled = false;
    this.MaxFrictionTorqueXml = 0;
    this.Radius = 0.15;
    this.Restitution = 0;
    this.TwistLimitsEnabled = false;
    this.TwistLowerAngle = -45;
    this.TwistUpperAngle = 45;
    this.UpperAngle = 45;
  }
  get LimitsEnabled() {
    return this.GetProp("LimitsEnabled", 2 /* Bool */);
  }
  set LimitsEnabled(value) {
    this.SetProp("LimitsEnabled", 2 /* Bool */, value);
  }
  get MaxFrictionTorqueXml() {
    return this.GetProp("MaxFrictionTorqueXml", 4 /* Float32 */);
  }
  set MaxFrictionTorqueXml(value) {
    this.SetProp("MaxFrictionTorqueXml", 4 /* Float32 */, value);
  }
  get Radius() {
    return this.GetProp("Radius", 4 /* Float32 */);
  }
  set Radius(value) {
    this.SetProp("Radius", 4 /* Float32 */, value);
  }
  get Restitution() {
    return this.GetProp("Restitution", 4 /* Float32 */);
  }
  set Restitution(value) {
    this.SetProp("Restitution", 4 /* Float32 */, value);
  }
  get TwistLimitsEnabled() {
    return this.GetProp("TwistLimitsEnabled", 2 /* Bool */);
  }
  set TwistLimitsEnabled(value) {
    this.SetProp("TwistLimitsEnabled", 2 /* Bool */, value);
  }
  get TwistLowerAngle() {
    return this.GetProp("TwistLowerAngle", 4 /* Float32 */);
  }
  set TwistLowerAngle(value) {
    this.SetProp("TwistLowerAngle", 4 /* Float32 */, value);
  }
  get TwistUpperAngle() {
    return this.GetProp("TwistUpperAngle", 4 /* Float32 */);
  }
  set TwistUpperAngle(value) {
    this.SetProp("TwistUpperAngle", 4 /* Float32 */, value);
  }
  get UpperAngle() {
    return this.GetProp("UpperAngle", 4 /* Float32 */);
  }
  set UpperAngle(value) {
    this.SetProp("UpperAngle", 4 /* Float32 */, value);
  }
};
var HingeConstraint = class extends Constraint {
  constructor() {
    super();
    this.addClassName("HingeConstraint");
    this.Name = "HingeConstraint";
    this.ActuatorType = ActuatorType.None;
    this.AngularResponsiveness = 45;
    this.AngularSpeed = 0;
    this.AngularVelocity = 0;
    this.LimitsEnabled = false;
    this.LowerAngle = -45;
    this.MotorMaxAcceleration = 5e5;
    this.MotorMaxTorque = 0;
    this.Radius = 0.15;
    this.Restitution = 0;
    this.ServoMaxTorque = 0;
    this.SoftlockServoUponReachingTarget = false;
    this.TargetAngle = 0;
    this.UpperAngle = 45;
  }
  get ActuatorType() {
    return this.GetProp("ActuatorType", 18 /* Enum */);
  }
  set ActuatorType(value) {
    this.SetProp("ActuatorType", 18 /* Enum */, value);
  }
  get AngularResponsiveness() {
    return this.GetProp("AngularResponsiveness", 4 /* Float32 */);
  }
  set AngularResponsiveness(value) {
    this.SetProp("AngularResponsiveness", 4 /* Float32 */, value);
  }
  get AngularSpeed() {
    return this.GetProp("AngularSpeed", 4 /* Float32 */);
  }
  set AngularSpeed(value) {
    this.SetProp("AngularSpeed", 4 /* Float32 */, value);
  }
  get AngularVelocity() {
    return this.GetProp("AngularVelocity", 4 /* Float32 */);
  }
  set AngularVelocity(value) {
    this.SetProp("AngularVelocity", 4 /* Float32 */, value);
  }
  get LimitsEnabled() {
    return this.GetProp("LimitsEnabled", 2 /* Bool */);
  }
  set LimitsEnabled(value) {
    this.SetProp("LimitsEnabled", 2 /* Bool */, value);
  }
  get LowerAngle() {
    return this.GetProp("LowerAngle", 4 /* Float32 */);
  }
  set LowerAngle(value) {
    this.SetProp("LowerAngle", 4 /* Float32 */, value);
  }
  get MotorMaxAcceleration() {
    return this.GetProp("MotorMaxAcceleration", 4 /* Float32 */);
  }
  set MotorMaxAcceleration(value) {
    this.SetProp("MotorMaxAcceleration", 4 /* Float32 */, value);
  }
  get MotorMaxTorque() {
    return this.GetProp("MotorMaxTorque", 4 /* Float32 */);
  }
  set MotorMaxTorque(value) {
    this.SetProp("MotorMaxTorque", 4 /* Float32 */, value);
  }
  get Radius() {
    return this.GetProp("Radius", 4 /* Float32 */);
  }
  set Radius(value) {
    this.SetProp("Radius", 4 /* Float32 */, value);
  }
  get Restitution() {
    return this.GetProp("Restitution", 4 /* Float32 */);
  }
  set Restitution(value) {
    this.SetProp("Restitution", 4 /* Float32 */, value);
  }
  get ServoMaxTorque() {
    return this.GetProp("ServoMaxTorque", 4 /* Float32 */);
  }
  set ServoMaxTorque(value) {
    this.SetProp("ServoMaxTorque", 4 /* Float32 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get SoftlockServoUponReachingTarget() {
    return this.GetProp("SoftlockServoUponReachingTarget", 2 /* Bool */);
  }
  /**@deprecated Deprecated by Roblox*/
  set SoftlockServoUponReachingTarget(value) {
    this.SetProp("SoftlockServoUponReachingTarget", 2 /* Bool */, value);
  }
  get TargetAngle() {
    return this.GetProp("TargetAngle", 4 /* Float32 */);
  }
  set TargetAngle(value) {
    this.SetProp("TargetAngle", 4 /* Float32 */, value);
  }
  get UpperAngle() {
    return this.GetProp("UpperAngle", 4 /* Float32 */);
  }
  set UpperAngle(value) {
    this.SetProp("UpperAngle", 4 /* Float32 */, value);
  }
};
var LineForce = class extends Constraint {
  constructor() {
    super();
    this.addClassName("LineForce");
    this.Name = "LineForce";
    this.ApplyAtCenterOfMass = false;
    this.InverseSquareLaw = false;
    this.Magnitude = 1e3;
    this.MaxForce = Infinity;
    this.ReactionForceEnabled = false;
  }
  get ApplyAtCenterOfMass() {
    return this.GetProp("ApplyAtCenterOfMass", 2 /* Bool */);
  }
  set ApplyAtCenterOfMass(value) {
    this.SetProp("ApplyAtCenterOfMass", 2 /* Bool */, value);
  }
  get InverseSquareLaw() {
    return this.GetProp("InverseSquareLaw", 2 /* Bool */);
  }
  set InverseSquareLaw(value) {
    this.SetProp("InverseSquareLaw", 2 /* Bool */, value);
  }
  get Magnitude() {
    return this.GetProp("Magnitude", 4 /* Float32 */);
  }
  set Magnitude(value) {
    this.SetProp("Magnitude", 4 /* Float32 */, value);
  }
  get MaxForce() {
    return this.GetProp("MaxForce", 4 /* Float32 */);
  }
  set MaxForce(value) {
    this.SetProp("MaxForce", 4 /* Float32 */, value);
  }
  get ReactionForceEnabled() {
    return this.GetProp("ReactionForceEnabled", 2 /* Bool */);
  }
  set ReactionForceEnabled(value) {
    this.SetProp("ReactionForceEnabled", 2 /* Bool */, value);
  }
};
var LinearVelocity = class extends Constraint {
  constructor() {
    super();
    this.addClassName("LinearVelocity");
    this.Name = "LinearVelocity";
    this.ForceLimitMode = ForceLimitMode.Magnitude;
    this.ForceLimitsEnabled = true;
    this.LineDirection = new Vector3(1, 0, 0);
    this.LineVelocity = 0;
    this.MaxAxesForce = new Vector3(1e3, 1e3, 1e3);
    this.MaxForce = 1e3;
    this.MaxPlanarAxesForce = new Vector2(1e3, 1e3);
    this.PlaneVelocity = new Vector2(0, 0);
    this.PrimaryTangentAxis = new Vector3(1, 0, 0);
    this.RelativeTo = ActuatorRelativeTo.World;
    this.SecondaryTangentAxis = new Vector3(0, 1, 0);
    this.VectorVelocity = new Vector3(0, 0, 0);
    this.VelocityConstraintMode = VelocityConstraintMode.Vector;
  }
  get ForceLimitMode() {
    return this.GetProp("ForceLimitMode", 18 /* Enum */);
  }
  set ForceLimitMode(value) {
    this.SetProp("ForceLimitMode", 18 /* Enum */, value);
  }
  get ForceLimitsEnabled() {
    return this.GetProp("ForceLimitsEnabled", 2 /* Bool */);
  }
  set ForceLimitsEnabled(value) {
    this.SetProp("ForceLimitsEnabled", 2 /* Bool */, value);
  }
  get LineDirection() {
    return this.GetProp("LineDirection", 14 /* Vector3 */);
  }
  set LineDirection(value) {
    this.SetProp("LineDirection", 14 /* Vector3 */, value);
  }
  get LineVelocity() {
    return this.GetProp("LineVelocity", 4 /* Float32 */);
  }
  set LineVelocity(value) {
    this.SetProp("LineVelocity", 4 /* Float32 */, value);
  }
  get MaxAxesForce() {
    return this.GetProp("MaxAxesForce", 14 /* Vector3 */);
  }
  set MaxAxesForce(value) {
    this.SetProp("MaxAxesForce", 14 /* Vector3 */, value);
  }
  get MaxForce() {
    return this.GetProp("MaxForce", 4 /* Float32 */);
  }
  set MaxForce(value) {
    this.SetProp("MaxForce", 4 /* Float32 */, value);
  }
  get MaxPlanarAxesForce() {
    return this.GetProp("MaxPlanarAxesForce", 13 /* Vector2 */);
  }
  set MaxPlanarAxesForce(value) {
    this.SetProp("MaxPlanarAxesForce", 13 /* Vector2 */, value);
  }
  get PlaneVelocity() {
    return this.GetProp("PlaneVelocity", 13 /* Vector2 */);
  }
  set PlaneVelocity(value) {
    this.SetProp("PlaneVelocity", 13 /* Vector2 */, value);
  }
  get PrimaryTangentAxis() {
    return this.GetProp("PrimaryTangentAxis", 14 /* Vector3 */);
  }
  set PrimaryTangentAxis(value) {
    this.SetProp("PrimaryTangentAxis", 14 /* Vector3 */, value);
  }
  get RelativeTo() {
    return this.GetProp("RelativeTo", 18 /* Enum */);
  }
  set RelativeTo(value) {
    this.SetProp("RelativeTo", 18 /* Enum */, value);
  }
  get SecondaryTangentAxis() {
    return this.GetProp("SecondaryTangentAxis", 14 /* Vector3 */);
  }
  set SecondaryTangentAxis(value) {
    this.SetProp("SecondaryTangentAxis", 14 /* Vector3 */, value);
  }
  get VectorVelocity() {
    return this.GetProp("VectorVelocity", 14 /* Vector3 */);
  }
  set VectorVelocity(value) {
    this.SetProp("VectorVelocity", 14 /* Vector3 */, value);
  }
  get VelocityConstraintMode() {
    return this.GetProp("VelocityConstraintMode", 18 /* Enum */);
  }
  set VelocityConstraintMode(value) {
    this.SetProp("VelocityConstraintMode", 18 /* Enum */, value);
  }
};
var PlaneConstraint = class extends Constraint {
  constructor() {
    super();
    this.addClassName("PlaneConstraint");
    this.Name = "PlaneConstraint";
  }
};
var Plane = class extends PlaneConstraint {
  constructor() {
    super();
    this.addClassName("Plane");
    this.Name = "Plane";
  }
};
var RigidConstraint = class extends Constraint {
  constructor() {
    super();
    this.addClassName("RigidConstraint");
    this.Name = "RigidConstraint";
  }
};
var RodConstraint = class extends Constraint {
  constructor() {
    super();
    this.addClassName("RodConstraint");
    this.Name = "RodConstraint";
    this.Length = 5;
    this.LimitAngle0 = 90;
    this.LimitAngle1 = 90;
    this.LimitsEnabled = false;
    this.Thickness = 0.1;
  }
  get Length() {
    return this.GetProp("Length", 4 /* Float32 */);
  }
  set Length(value) {
    this.SetProp("Length", 4 /* Float32 */, value);
  }
  get LimitAngle0() {
    return this.GetProp("LimitAngle0", 4 /* Float32 */);
  }
  set LimitAngle0(value) {
    this.SetProp("LimitAngle0", 4 /* Float32 */, value);
  }
  get LimitAngle1() {
    return this.GetProp("LimitAngle1", 4 /* Float32 */);
  }
  set LimitAngle1(value) {
    this.SetProp("LimitAngle1", 4 /* Float32 */, value);
  }
  get LimitsEnabled() {
    return this.GetProp("LimitsEnabled", 2 /* Bool */);
  }
  set LimitsEnabled(value) {
    this.SetProp("LimitsEnabled", 2 /* Bool */, value);
  }
  get Thickness() {
    return this.GetProp("Thickness", 4 /* Float32 */);
  }
  set Thickness(value) {
    this.SetProp("Thickness", 4 /* Float32 */, value);
  }
};
var RopeConstraint = class extends Constraint {
  constructor() {
    super();
    this.addClassName("RopeConstraint");
    this.Name = "RopeConstraint";
    this.Length = 5;
    this.Restitution = 0;
    this.Thickness = 0.1;
    this.WinchEnabled = false;
    this.WinchForce = 1e4;
    this.WinchResponsiveness = 45;
    this.WinchSpeed = 2;
    this.WinchTarget = 5;
  }
  get Length() {
    return this.GetProp("Length", 4 /* Float32 */);
  }
  set Length(value) {
    this.SetProp("Length", 4 /* Float32 */, value);
  }
  get Restitution() {
    return this.GetProp("Restitution", 4 /* Float32 */);
  }
  set Restitution(value) {
    this.SetProp("Restitution", 4 /* Float32 */, value);
  }
  get Thickness() {
    return this.GetProp("Thickness", 4 /* Float32 */);
  }
  set Thickness(value) {
    this.SetProp("Thickness", 4 /* Float32 */, value);
  }
  get WinchEnabled() {
    return this.GetProp("WinchEnabled", 2 /* Bool */);
  }
  set WinchEnabled(value) {
    this.SetProp("WinchEnabled", 2 /* Bool */, value);
  }
  get WinchForce() {
    return this.GetProp("WinchForce", 4 /* Float32 */);
  }
  set WinchForce(value) {
    this.SetProp("WinchForce", 4 /* Float32 */, value);
  }
  get WinchResponsiveness() {
    return this.GetProp("WinchResponsiveness", 4 /* Float32 */);
  }
  set WinchResponsiveness(value) {
    this.SetProp("WinchResponsiveness", 4 /* Float32 */, value);
  }
  get WinchSpeed() {
    return this.GetProp("WinchSpeed", 4 /* Float32 */);
  }
  set WinchSpeed(value) {
    this.SetProp("WinchSpeed", 4 /* Float32 */, value);
  }
  get WinchTarget() {
    return this.GetProp("WinchTarget", 4 /* Float32 */);
  }
  set WinchTarget(value) {
    this.SetProp("WinchTarget", 4 /* Float32 */, value);
  }
};
var SlidingBallConstraint = class extends Constraint {
  constructor() {
    super();
    this.addClassName("SlidingBallConstraint");
    this.ActuatorType = ActuatorType.None;
    this.LimitsEnabled = false;
    this.LinearResponsiveness = 45;
    this.LowerLimit = 0;
    this.MotorMaxAcceleration = Infinity;
    this.MotorMaxForce = 0;
    this.Restitution = 0;
    this.ServoMaxForce = 0;
    this.Size = 0.15;
    this.SoftlockServoUponReachingTarget = false;
    this.Speed = 0;
    this.TargetPosition = 0;
    this.UpperLimit = 5;
    this.Velocity = 0;
  }
  get ActuatorType() {
    return this.GetProp("ActuatorType", 18 /* Enum */);
  }
  set ActuatorType(value) {
    this.SetProp("ActuatorType", 18 /* Enum */, value);
  }
  get LimitsEnabled() {
    return this.GetProp("LimitsEnabled", 2 /* Bool */);
  }
  set LimitsEnabled(value) {
    this.SetProp("LimitsEnabled", 2 /* Bool */, value);
  }
  get LinearResponsiveness() {
    return this.GetProp("LinearResponsiveness", 4 /* Float32 */);
  }
  set LinearResponsiveness(value) {
    this.SetProp("LinearResponsiveness", 4 /* Float32 */, value);
  }
  get LowerLimit() {
    return this.GetProp("LowerLimit", 4 /* Float32 */);
  }
  set LowerLimit(value) {
    this.SetProp("LowerLimit", 4 /* Float32 */, value);
  }
  get MotorMaxAcceleration() {
    return this.GetProp("MotorMaxAcceleration", 4 /* Float32 */);
  }
  set MotorMaxAcceleration(value) {
    this.SetProp("MotorMaxAcceleration", 4 /* Float32 */, value);
  }
  get MotorMaxForce() {
    return this.GetProp("MotorMaxForce", 4 /* Float32 */);
  }
  set MotorMaxForce(value) {
    this.SetProp("MotorMaxForce", 4 /* Float32 */, value);
  }
  get Restitution() {
    return this.GetProp("Restitution", 4 /* Float32 */);
  }
  set Restitution(value) {
    this.SetProp("Restitution", 4 /* Float32 */, value);
  }
  get ServoMaxForce() {
    return this.GetProp("ServoMaxForce", 4 /* Float32 */);
  }
  set ServoMaxForce(value) {
    this.SetProp("ServoMaxForce", 4 /* Float32 */, value);
  }
  get Size() {
    return this.GetProp("Size", 4 /* Float32 */);
  }
  set Size(value) {
    this.SetProp("Size", 4 /* Float32 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get SoftlockServoUponReachingTarget() {
    return this.GetProp("SoftlockServoUponReachingTarget", 2 /* Bool */);
  }
  /**@deprecated Deprecated by Roblox*/
  set SoftlockServoUponReachingTarget(value) {
    this.SetProp("SoftlockServoUponReachingTarget", 2 /* Bool */, value);
  }
  get Speed() {
    return this.GetProp("Speed", 4 /* Float32 */);
  }
  set Speed(value) {
    this.SetProp("Speed", 4 /* Float32 */, value);
  }
  get TargetPosition() {
    return this.GetProp("TargetPosition", 4 /* Float32 */);
  }
  set TargetPosition(value) {
    this.SetProp("TargetPosition", 4 /* Float32 */, value);
  }
  get UpperLimit() {
    return this.GetProp("UpperLimit", 4 /* Float32 */);
  }
  set UpperLimit(value) {
    this.SetProp("UpperLimit", 4 /* Float32 */, value);
  }
  get Velocity() {
    return this.GetProp("Velocity", 4 /* Float32 */);
  }
  set Velocity(value) {
    this.SetProp("Velocity", 4 /* Float32 */, value);
  }
};
var CylindricalConstraint = class extends SlidingBallConstraint {
  constructor() {
    super();
    this.addClassName("CylindricalConstraint");
    this.Name = "CylindricalConstraint";
    this.AngularActuatorType = ActuatorType.None;
    this.AngularLimitsEnabled = false;
    this.AngularResponsiveness = 45;
    this.AngularRestitution = 0;
    this.AngularSpeed = 0;
    this.AngularVelocity = 0;
    this.InclinationAngle = 0;
    this.LowerAngle = -45;
    this.MotorMaxAngularAcceleration = 5e5;
    this.MotorMaxTorque = 0;
    this.RotationAxisVisible = false;
    this.ServoMaxTorque = 0;
    this.SoftlockAngularServoUponReachingTarget = false;
    this.TargetAngle = 0;
    this.UpperAngle = 45;
  }
  get AngularActuatorType() {
    return this.GetProp("AngularActuatorType", 18 /* Enum */);
  }
  set AngularActuatorType(value) {
    this.SetProp("AngularActuatorType", 18 /* Enum */, value);
  }
  get AngularLimitsEnabled() {
    return this.GetProp("AngularLimitsEnabled", 2 /* Bool */);
  }
  set AngularLimitsEnabled(value) {
    this.SetProp("AngularLimitsEnabled", 2 /* Bool */, value);
  }
  get AngularResponsiveness() {
    return this.GetProp("AngularResponsiveness", 4 /* Float32 */);
  }
  set AngularResponsiveness(value) {
    this.SetProp("AngularResponsiveness", 4 /* Float32 */, value);
  }
  get AngularRestitution() {
    return this.GetProp("AngularRestitution", 4 /* Float32 */);
  }
  set AngularRestitution(value) {
    this.SetProp("AngularRestitution", 4 /* Float32 */, value);
  }
  get AngularSpeed() {
    return this.GetProp("AngularSpeed", 4 /* Float32 */);
  }
  set AngularSpeed(value) {
    this.SetProp("AngularSpeed", 4 /* Float32 */, value);
  }
  get AngularVelocity() {
    return this.GetProp("AngularVelocity", 4 /* Float32 */);
  }
  set AngularVelocity(value) {
    this.SetProp("AngularVelocity", 4 /* Float32 */, value);
  }
  get InclinationAngle() {
    return this.GetProp("InclinationAngle", 4 /* Float32 */);
  }
  set InclinationAngle(value) {
    this.SetProp("InclinationAngle", 4 /* Float32 */, value);
  }
  get LowerAngle() {
    return this.GetProp("LowerAngle", 4 /* Float32 */);
  }
  set LowerAngle(value) {
    this.SetProp("LowerAngle", 4 /* Float32 */, value);
  }
  get MotorMaxAngularAcceleration() {
    return this.GetProp("MotorMaxAngularAcceleration", 4 /* Float32 */);
  }
  set MotorMaxAngularAcceleration(value) {
    this.SetProp("MotorMaxAngularAcceleration", 4 /* Float32 */, value);
  }
  get MotorMaxTorque() {
    return this.GetProp("MotorMaxTorque", 4 /* Float32 */);
  }
  set MotorMaxTorque(value) {
    this.SetProp("MotorMaxTorque", 4 /* Float32 */, value);
  }
  get RotationAxisVisible() {
    return this.GetProp("RotationAxisVisible", 2 /* Bool */);
  }
  set RotationAxisVisible(value) {
    this.SetProp("RotationAxisVisible", 2 /* Bool */, value);
  }
  get ServoMaxTorque() {
    return this.GetProp("ServoMaxTorque", 4 /* Float32 */);
  }
  set ServoMaxTorque(value) {
    this.SetProp("ServoMaxTorque", 4 /* Float32 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get SoftlockAngularServoUponReachingTarget() {
    return this.GetProp("SoftlockAngularServoUponReachingTarget", 2 /* Bool */);
  }
  /**@deprecated Deprecated by Roblox*/
  set SoftlockAngularServoUponReachingTarget(value) {
    this.SetProp("SoftlockAngularServoUponReachingTarget", 2 /* Bool */, value);
  }
  get TargetAngle() {
    return this.GetProp("TargetAngle", 4 /* Float32 */);
  }
  set TargetAngle(value) {
    this.SetProp("TargetAngle", 4 /* Float32 */, value);
  }
  get UpperAngle() {
    return this.GetProp("UpperAngle", 4 /* Float32 */);
  }
  set UpperAngle(value) {
    this.SetProp("UpperAngle", 4 /* Float32 */, value);
  }
};
var PrismaticConstraint = class extends SlidingBallConstraint {
  constructor() {
    super();
    this.addClassName("PrismaticConstraint");
    this.Name = "PrismaticConstraint";
  }
};
var SpringConstraint = class extends Constraint {
  constructor() {
    super();
    this.addClassName("SpringConstraint");
    this.Name = "SpringConstraint";
    this.Coils = 3;
    this.Damping = 0;
    this.FreeLength = 1;
    this.LimitsEnabled = false;
    this.MaxForce = Infinity;
    this.MaxLength = 5;
    this.MinLength = 0;
    this.Radius = 0.4;
    this.Stiffness = 0;
    this.Thickness = 0.1;
  }
  get Coils() {
    return this.GetProp("Coils", 4 /* Float32 */);
  }
  set Coils(value) {
    this.SetProp("Coils", 4 /* Float32 */, value);
  }
  get Damping() {
    return this.GetProp("Damping", 4 /* Float32 */);
  }
  set Damping(value) {
    this.SetProp("Damping", 4 /* Float32 */, value);
  }
  get FreeLength() {
    return this.GetProp("FreeLength", 4 /* Float32 */);
  }
  set FreeLength(value) {
    this.SetProp("FreeLength", 4 /* Float32 */, value);
  }
  get LimitsEnabled() {
    return this.GetProp("LimitsEnabled", 2 /* Bool */);
  }
  set LimitsEnabled(value) {
    this.SetProp("LimitsEnabled", 2 /* Bool */, value);
  }
  get MaxForce() {
    return this.GetProp("MaxForce", 4 /* Float32 */);
  }
  set MaxForce(value) {
    this.SetProp("MaxForce", 4 /* Float32 */, value);
  }
  get MaxLength() {
    return this.GetProp("MaxLength", 4 /* Float32 */);
  }
  set MaxLength(value) {
    this.SetProp("MaxLength", 4 /* Float32 */, value);
  }
  get MinLength() {
    return this.GetProp("MinLength", 4 /* Float32 */);
  }
  set MinLength(value) {
    this.SetProp("MinLength", 4 /* Float32 */, value);
  }
  get Radius() {
    return this.GetProp("Radius", 4 /* Float32 */);
  }
  set Radius(value) {
    this.SetProp("Radius", 4 /* Float32 */, value);
  }
  get Stiffness() {
    return this.GetProp("Stiffness", 4 /* Float32 */);
  }
  set Stiffness(value) {
    this.SetProp("Stiffness", 4 /* Float32 */, value);
  }
  get Thickness() {
    return this.GetProp("Thickness", 4 /* Float32 */);
  }
  set Thickness(value) {
    this.SetProp("Thickness", 4 /* Float32 */, value);
  }
};
var Torque = class extends Constraint {
  constructor() {
    super();
    this.addClassName("Torque");
    this.Name = "Torque";
    this.RelativeTo = ActuatorRelativeTo.Attachment0;
    this.Torque = new Vector3(0, 0, 0);
  }
  get RelativeTo() {
    return this.GetProp("RelativeTo", 18 /* Enum */);
  }
  set RelativeTo(value) {
    this.SetProp("RelativeTo", 18 /* Enum */, value);
  }
  get Torque() {
    return this.GetProp("Torque", 14 /* Vector3 */);
  }
  set Torque(value) {
    this.SetProp("Torque", 14 /* Vector3 */, value);
  }
};
var TorsionSpringConstraint = class extends Constraint {
  constructor() {
    super();
    this.addClassName("TorsionSpringConstraint");
    this.Name = "TorsionSpringConstraint";
    this.Coils = 8;
    this.Damping = 0.01;
    this.LimitEnabled = false;
    this.LimitsEnabled = false;
    this.MaxAngle = 45;
    this.MaxTorque = Infinity;
    this.Radius = 0.4;
    this.Restitution = 0;
    this.Stiffness = 100;
  }
  get Coils() {
    return this.GetProp("Coils", 4 /* Float32 */);
  }
  set Coils(value) {
    this.SetProp("Coils", 4 /* Float32 */, value);
  }
  get Damping() {
    return this.GetProp("Damping", 4 /* Float32 */);
  }
  set Damping(value) {
    this.SetProp("Damping", 4 /* Float32 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get LimitEnabled() {
    return this.GetProp("LimitEnabled", 2 /* Bool */);
  }
  /**@deprecated Deprecated by Roblox*/
  set LimitEnabled(value) {
    this.SetProp("LimitEnabled", 2 /* Bool */, value);
  }
  get LimitsEnabled() {
    return this.GetProp("LimitsEnabled", 2 /* Bool */);
  }
  set LimitsEnabled(value) {
    this.SetProp("LimitsEnabled", 2 /* Bool */, value);
  }
  get MaxAngle() {
    return this.GetProp("MaxAngle", 4 /* Float32 */);
  }
  set MaxAngle(value) {
    this.SetProp("MaxAngle", 4 /* Float32 */, value);
  }
  get MaxTorque() {
    return this.GetProp("MaxTorque", 4 /* Float32 */);
  }
  set MaxTorque(value) {
    this.SetProp("MaxTorque", 4 /* Float32 */, value);
  }
  get Radius() {
    return this.GetProp("Radius", 4 /* Float32 */);
  }
  set Radius(value) {
    this.SetProp("Radius", 4 /* Float32 */, value);
  }
  get Restitution() {
    return this.GetProp("Restitution", 4 /* Float32 */);
  }
  set Restitution(value) {
    this.SetProp("Restitution", 4 /* Float32 */, value);
  }
  get Stiffness() {
    return this.GetProp("Stiffness", 4 /* Float32 */);
  }
  set Stiffness(value) {
    this.SetProp("Stiffness", 4 /* Float32 */, value);
  }
};
var UniversalConstraint = class extends Constraint {
  constructor() {
    super();
    this.addClassName("UniversalConstraint");
    this.Name = "UniversalConstraint";
    this.LimitsEnabled = false;
    this.MaxAngle = 45;
    this.Radius = 0.2;
    this.Restitution = 0;
  }
  get LimitsEnabled() {
    return this.GetProp("LimitsEnabled", 2 /* Bool */);
  }
  set LimitsEnabled(value) {
    this.SetProp("LimitsEnabled", 2 /* Bool */, value);
  }
  get MaxAngle() {
    return this.GetProp("MaxAngle", 4 /* Float32 */);
  }
  set MaxAngle(value) {
    this.SetProp("MaxAngle", 4 /* Float32 */, value);
  }
  get Radius() {
    return this.GetProp("Radius", 4 /* Float32 */);
  }
  set Radius(value) {
    this.SetProp("Radius", 4 /* Float32 */, value);
  }
  get Restitution() {
    return this.GetProp("Restitution", 4 /* Float32 */);
  }
  set Restitution(value) {
    this.SetProp("Restitution", 4 /* Float32 */, value);
  }
};
var VectorForce = class extends Constraint {
  constructor() {
    super();
    this.addClassName("VectorForce");
    this.Name = "VectorForce";
    this.ApplyAtCenterOfMass = false;
    this.Force = new Vector3(1e3, 0, 0);
    this.RelativeTo = ActuatorRelativeTo.Attachment0;
  }
  get ApplyAtCenterOfMass() {
    return this.GetProp("ApplyAtCenterOfMass", 2 /* Bool */);
  }
  set ApplyAtCenterOfMass(value) {
    this.SetProp("ApplyAtCenterOfMass", 2 /* Bool */, value);
  }
  get Force() {
    return this.GetProp("Force", 14 /* Vector3 */);
  }
  set Force(value) {
    this.SetProp("Force", 14 /* Vector3 */, value);
  }
  get RelativeTo() {
    return this.GetProp("RelativeTo", 18 /* Enum */);
  }
  set RelativeTo(value) {
    this.SetProp("RelativeTo", 18 /* Enum */, value);
  }
};
var ContentProvider = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ContentProvider");
    this.Name = "ContentProvider";
  }
};
var ContextActionService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ContextActionService");
    this.Name = "ContextActionService";
  }
};
var Controller = class extends Instance {
  constructor() {
    super();
    this.addClassName("Controller");
  }
};
var HumanoidController = class extends Controller {
  constructor() {
    super();
    this.addClassName("HumanoidController");
    this.Name = "HumanoidController";
  }
};
var SkateboardController = class extends Controller {
  constructor() {
    super();
    this.addClassName("SkateboardController");
    this.Name = "SkateboardController";
  }
};
var VehicleController = class extends Controller {
  constructor() {
    super();
    this.addClassName("VehicleController");
    this.Name = "VehicleController";
  }
};
var ControllerBase = class extends Instance {
  constructor() {
    super();
    this.addClassName("ControllerBase");
    this.BalanceRigidityEnabled = false;
    this.MoveSpeedFactor = 1;
  }
  get BalanceRigidityEnabled() {
    return this.GetProp("BalanceRigidityEnabled", 2 /* Bool */);
  }
  set BalanceRigidityEnabled(value) {
    this.SetProp("BalanceRigidityEnabled", 2 /* Bool */, value);
  }
  get MoveSpeedFactor() {
    return this.GetProp("MoveSpeedFactor", 4 /* Float32 */);
  }
  set MoveSpeedFactor(value) {
    this.SetProp("MoveSpeedFactor", 4 /* Float32 */, value);
  }
};
var AirController = class extends ControllerBase {
  constructor() {
    super();
    this.addClassName("AirController");
    this.Name = "AirController";
    this.BalanceMaxTorque = 1e4;
    this.BalanceSpeed = 100;
    this.MaintainAngularMomentum = true;
    this.MaintainLinearMomentum = true;
    this.MoveMaxForce = 1e3;
    this.TurnMaxTorque = 1e4;
    this.TurnSpeedFactor = 1;
  }
  get BalanceMaxTorque() {
    return this.GetProp("BalanceMaxTorque", 4 /* Float32 */);
  }
  set BalanceMaxTorque(value) {
    this.SetProp("BalanceMaxTorque", 4 /* Float32 */, value);
  }
  get BalanceSpeed() {
    return this.GetProp("BalanceSpeed", 4 /* Float32 */);
  }
  set BalanceSpeed(value) {
    this.SetProp("BalanceSpeed", 4 /* Float32 */, value);
  }
  get MaintainAngularMomentum() {
    return this.GetProp("MaintainAngularMomentum", 2 /* Bool */);
  }
  set MaintainAngularMomentum(value) {
    this.SetProp("MaintainAngularMomentum", 2 /* Bool */, value);
  }
  get MaintainLinearMomentum() {
    return this.GetProp("MaintainLinearMomentum", 2 /* Bool */);
  }
  set MaintainLinearMomentum(value) {
    this.SetProp("MaintainLinearMomentum", 2 /* Bool */, value);
  }
  get MoveMaxForce() {
    return this.GetProp("MoveMaxForce", 4 /* Float32 */);
  }
  set MoveMaxForce(value) {
    this.SetProp("MoveMaxForce", 4 /* Float32 */, value);
  }
  get TurnMaxTorque() {
    return this.GetProp("TurnMaxTorque", 4 /* Float32 */);
  }
  set TurnMaxTorque(value) {
    this.SetProp("TurnMaxTorque", 4 /* Float32 */, value);
  }
  get TurnSpeedFactor() {
    return this.GetProp("TurnSpeedFactor", 4 /* Float32 */);
  }
  set TurnSpeedFactor(value) {
    this.SetProp("TurnSpeedFactor", 4 /* Float32 */, value);
  }
};
var ClimbController = class extends ControllerBase {
  constructor() {
    super();
    this.addClassName("ClimbController");
    this.Name = "ClimbController";
    this.AccelerationTime = 0;
    this.BalanceMaxTorque = 1e4;
    this.BalanceSpeed = 100;
    this.MoveMaxForce = 1e4;
  }
  get AccelerationTime() {
    return this.GetProp("AccelerationTime", 4 /* Float32 */);
  }
  set AccelerationTime(value) {
    this.SetProp("AccelerationTime", 4 /* Float32 */, value);
  }
  get BalanceMaxTorque() {
    return this.GetProp("BalanceMaxTorque", 4 /* Float32 */);
  }
  set BalanceMaxTorque(value) {
    this.SetProp("BalanceMaxTorque", 4 /* Float32 */, value);
  }
  get BalanceSpeed() {
    return this.GetProp("BalanceSpeed", 4 /* Float32 */);
  }
  set BalanceSpeed(value) {
    this.SetProp("BalanceSpeed", 4 /* Float32 */, value);
  }
  get MoveMaxForce() {
    return this.GetProp("MoveMaxForce", 4 /* Float32 */);
  }
  set MoveMaxForce(value) {
    this.SetProp("MoveMaxForce", 4 /* Float32 */, value);
  }
};
var GroundController = class extends ControllerBase {
  constructor() {
    super();
    this.addClassName("GroundController");
    this.Name = "GroundController";
    this.AccelerationLean = 1;
    this.AccelerationTime = 0;
    this.BalanceMaxTorque = 1e4;
    this.BalanceSpeed = 100;
    this.DecelerationTime = 0;
    this.Friction = 2;
    this.FrictionWeight = 1;
    this.GroundOffset = 1;
    this.StandForce = 1e4;
    this.StandSpeed = 100;
    this.TurnSpeedFactor = 1;
  }
  get AccelerationLean() {
    return this.GetProp("AccelerationLean", 4 /* Float32 */);
  }
  set AccelerationLean(value) {
    this.SetProp("AccelerationLean", 4 /* Float32 */, value);
  }
  get AccelerationTime() {
    return this.GetProp("AccelerationTime", 4 /* Float32 */);
  }
  set AccelerationTime(value) {
    this.SetProp("AccelerationTime", 4 /* Float32 */, value);
  }
  get BalanceMaxTorque() {
    return this.GetProp("BalanceMaxTorque", 4 /* Float32 */);
  }
  set BalanceMaxTorque(value) {
    this.SetProp("BalanceMaxTorque", 4 /* Float32 */, value);
  }
  get BalanceSpeed() {
    return this.GetProp("BalanceSpeed", 4 /* Float32 */);
  }
  set BalanceSpeed(value) {
    this.SetProp("BalanceSpeed", 4 /* Float32 */, value);
  }
  get DecelerationTime() {
    return this.GetProp("DecelerationTime", 4 /* Float32 */);
  }
  set DecelerationTime(value) {
    this.SetProp("DecelerationTime", 4 /* Float32 */, value);
  }
  get Friction() {
    return this.GetProp("Friction", 4 /* Float32 */);
  }
  set Friction(value) {
    this.SetProp("Friction", 4 /* Float32 */, value);
  }
  get FrictionWeight() {
    return this.GetProp("FrictionWeight", 4 /* Float32 */);
  }
  set FrictionWeight(value) {
    this.SetProp("FrictionWeight", 4 /* Float32 */, value);
  }
  get GroundOffset() {
    return this.GetProp("GroundOffset", 4 /* Float32 */);
  }
  set GroundOffset(value) {
    this.SetProp("GroundOffset", 4 /* Float32 */, value);
  }
  get StandForce() {
    return this.GetProp("StandForce", 4 /* Float32 */);
  }
  set StandForce(value) {
    this.SetProp("StandForce", 4 /* Float32 */, value);
  }
  get StandSpeed() {
    return this.GetProp("StandSpeed", 4 /* Float32 */);
  }
  set StandSpeed(value) {
    this.SetProp("StandSpeed", 4 /* Float32 */, value);
  }
  get TurnSpeedFactor() {
    return this.GetProp("TurnSpeedFactor", 4 /* Float32 */);
  }
  set TurnSpeedFactor(value) {
    this.SetProp("TurnSpeedFactor", 4 /* Float32 */, value);
  }
};
var SwimController = class extends ControllerBase {
  constructor() {
    super();
    this.addClassName("SwimController");
    this.Name = "SwimController";
    this.AccelerationTime = 0;
    this.PitchMaxTorque = 1e4;
    this.PitchSpeedFactor = 1;
    this.RollMaxTorque = 1e4;
    this.RollSpeedFactor = 1;
  }
  get AccelerationTime() {
    return this.GetProp("AccelerationTime", 4 /* Float32 */);
  }
  set AccelerationTime(value) {
    this.SetProp("AccelerationTime", 4 /* Float32 */, value);
  }
  get PitchMaxTorque() {
    return this.GetProp("PitchMaxTorque", 4 /* Float32 */);
  }
  set PitchMaxTorque(value) {
    this.SetProp("PitchMaxTorque", 4 /* Float32 */, value);
  }
  get PitchSpeedFactor() {
    return this.GetProp("PitchSpeedFactor", 4 /* Float32 */);
  }
  set PitchSpeedFactor(value) {
    this.SetProp("PitchSpeedFactor", 4 /* Float32 */, value);
  }
  get RollMaxTorque() {
    return this.GetProp("RollMaxTorque", 4 /* Float32 */);
  }
  set RollMaxTorque(value) {
    this.SetProp("RollMaxTorque", 4 /* Float32 */, value);
  }
  get RollSpeedFactor() {
    return this.GetProp("RollSpeedFactor", 4 /* Float32 */);
  }
  set RollSpeedFactor(value) {
    this.SetProp("RollSpeedFactor", 4 /* Float32 */, value);
  }
};
var ControllerManager = class extends Instance {
  constructor() {
    super();
    this.addClassName("ControllerManager");
    this.Name = "ControllerManager";
    this.BaseMoveSpeed = 16;
    this.BaseTurnSpeed = 8;
    this.FacingDirection = new Vector3(0, 0, 1);
    this.MovingDirection = new Vector3(0, 0, 0);
    this.UpDirection = new Vector3(0, 1, 0);
  }
  get ActiveController() {
    return this.GetProp("ActiveController", 19 /* Referent */);
  }
  set ActiveController(value) {
    this.SetProp("ActiveController", 19 /* Referent */, value);
  }
  get BaseMoveSpeed() {
    return this.GetProp("BaseMoveSpeed", 4 /* Float32 */);
  }
  set BaseMoveSpeed(value) {
    this.SetProp("BaseMoveSpeed", 4 /* Float32 */, value);
  }
  get BaseTurnSpeed() {
    return this.GetProp("BaseTurnSpeed", 4 /* Float32 */);
  }
  set BaseTurnSpeed(value) {
    this.SetProp("BaseTurnSpeed", 4 /* Float32 */, value);
  }
  get ClimbSensor() {
    return this.GetProp("ClimbSensor", 19 /* Referent */);
  }
  set ClimbSensor(value) {
    this.SetProp("ClimbSensor", 19 /* Referent */, value);
  }
  get FacingDirection() {
    return this.GetProp("FacingDirection", 14 /* Vector3 */);
  }
  set FacingDirection(value) {
    this.SetProp("FacingDirection", 14 /* Vector3 */, value);
  }
  get GroundSensor() {
    return this.GetProp("GroundSensor", 19 /* Referent */);
  }
  set GroundSensor(value) {
    this.SetProp("GroundSensor", 19 /* Referent */, value);
  }
  get MovingDirection() {
    return this.GetProp("MovingDirection", 14 /* Vector3 */);
  }
  set MovingDirection(value) {
    this.SetProp("MovingDirection", 14 /* Vector3 */, value);
  }
  get RootPart() {
    return this.GetProp("RootPart", 19 /* Referent */);
  }
  set RootPart(value) {
    this.SetProp("RootPart", 19 /* Referent */, value);
  }
  get UpDirection() {
    return this.GetProp("UpDirection", 14 /* Vector3 */);
  }
  set UpDirection(value) {
    this.SetProp("UpDirection", 14 /* Vector3 */, value);
  }
};
var ControllerService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ControllerService");
    this.Name = "ControllerService";
  }
};
var ConversationalAIAcceptanceService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ConversationalAIAcceptanceService");
    this.Name = "ConversationalAIAcceptanceService";
  }
};
var CookiesService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("CookiesService");
    this.Name = "CookiesService";
  }
};
var CorePackages = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("CorePackages");
    this.Name = "CorePackages";
  }
};
var CoreScriptDebuggingManagerHelper = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("CoreScriptDebuggingManagerHelper");
    this.Name = "CoreScriptDebuggingManagerHelper";
  }
};
var CoreScriptSyncService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("CoreScriptSyncService");
    this.Name = "CoreScriptSyncService";
  }
};
var CreationDBService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("CreationDBService");
    this.Name = "CreationDBService";
  }
};
var CrossDMScriptChangeListener = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("CrossDMScriptChangeListener");
    this.Name = "CrossDMScriptChangeListener";
  }
};
var CustomEvent = class extends Instance {
  constructor() {
    super();
    this.addClassName("CustomEvent");
    this.Name = "CustomEvent";
    this.PersistedCurrentValue = 0;
  }
  get PersistedCurrentValue() {
    return this.GetProp("PersistedCurrentValue", 4 /* Float32 */);
  }
  set PersistedCurrentValue(value) {
    this.SetProp("PersistedCurrentValue", 4 /* Float32 */, value);
  }
};
var CustomEventReceiver = class extends Instance {
  constructor() {
    super();
    this.addClassName("CustomEventReceiver");
    this.Name = "CustomEventReceiver";
  }
  get Source() {
    return this.GetProp("Source", 19 /* Referent */);
  }
  set Source(value) {
    this.SetProp("Source", 19 /* Referent */, value);
  }
};
var DataModelMesh = class extends Instance {
  constructor() {
    super();
    this.addClassName("DataModelMesh");
    this.Offset = new Vector3(0, 0, 0);
    this.Scale = new Vector3(1, 1, 1);
    this.VertexColor = new Vector3(1, 1, 1);
  }
  get Offset() {
    return this.GetProp("Offset", 14 /* Vector3 */);
  }
  set Offset(value) {
    this.SetProp("Offset", 14 /* Vector3 */, value);
  }
  get Scale() {
    return this.GetProp("Scale", 14 /* Vector3 */);
  }
  set Scale(value) {
    this.SetProp("Scale", 14 /* Vector3 */, value);
  }
  get VertexColor() {
    return this.GetProp("VertexColor", 14 /* Vector3 */);
  }
  set VertexColor(value) {
    this.SetProp("VertexColor", 14 /* Vector3 */, value);
  }
};
var BevelMesh = class extends DataModelMesh {
  constructor() {
    super();
    this.addClassName("BevelMesh");
  }
  get Bevel() {
    return this.GetProp("Bevel", 4 /* Float32 */);
  }
  set Bevel(value) {
    this.SetProp("Bevel", 4 /* Float32 */, value);
  }
  get BevelRoundness() {
    return this.GetProp("Bevel Roundness", 4 /* Float32 */);
  }
  set BevelRoundness(value) {
    this.SetProp("Bevel Roundness", 4 /* Float32 */, value);
  }
  get Bulge() {
    return this.GetProp("Bulge", 4 /* Float32 */);
  }
  set Bulge(value) {
    this.SetProp("Bulge", 4 /* Float32 */, value);
  }
};
var BlockMesh = class extends BevelMesh {
  constructor() {
    super();
    this.addClassName("BlockMesh");
    this.Name = "BlockMesh";
  }
};
var CylinderMesh = class extends BevelMesh {
  constructor() {
    super();
    this.addClassName("CylinderMesh");
    this.Name = "CylinderMesh";
  }
};
var EditableMesh = class extends DataModelMesh {
  constructor() {
    super();
    this.addClassName("EditableMesh");
    this.Name = "EditableMesh";
  }
};
var RobloxEditableMesh = class extends EditableMesh {
  constructor() {
    super();
    this.addClassName("RobloxEditableMesh");
    this.Name = "RobloxEditableMesh";
    this.MeshDataSerialize = "";
  }
  get MeshDataSerialize() {
    return this.GetProp("MeshDataSerialize", 1 /* String */);
  }
  set MeshDataSerialize(value) {
    this.SetProp("MeshDataSerialize", 1 /* String */, value);
  }
};
var FileMesh = class extends DataModelMesh {
  constructor() {
    super();
    this.addClassName("FileMesh");
    this.Name = "FileMesh";
    this.MeshId = "";
    this.TextureId = "";
  }
  get MeshId() {
    return this.GetProp("MeshId", 1 /* String */);
  }
  set MeshId(value) {
    this.SetProp("MeshId", 1 /* String */, value);
  }
  get TextureId() {
    return this.GetProp("TextureId", 1 /* String */);
  }
  set TextureId(value) {
    this.SetProp("TextureId", 1 /* String */, value);
  }
};
var SpecialMesh = class extends FileMesh {
  constructor() {
    super();
    this.addClassName("SpecialMesh");
    this.Name = "SpecialMesh";
    this.MeshType = MeshType.Head;
  }
  get MeshType() {
    return this.GetProp("MeshType", 18 /* Enum */);
  }
  set MeshType(value) {
    this.SetProp("MeshType", 18 /* Enum */, value);
  }
};
var DataModelPatchService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("DataModelPatchService");
    this.Name = "DataModelPatchService";
  }
};
var DataStoreGetOptions = class extends Instance {
  constructor() {
    super();
    this.addClassName("DataStoreGetOptions");
    this.Name = "DataStoreGetOptions";
    this.UseCache = true;
  }
  get UseCache() {
    return this.GetProp("UseCache", 2 /* Bool */);
  }
  set UseCache(value) {
    this.SetProp("UseCache", 2 /* Bool */, value);
  }
};
var DataStoreIncrementOptions = class extends Instance {
  constructor() {
    super();
    this.addClassName("DataStoreIncrementOptions");
    this.Name = "DataStoreIncrementOptions";
  }
};
var DataStoreOptions = class extends Instance {
  constructor() {
    super();
    this.addClassName("DataStoreOptions");
    this.Name = "DataStoreOptions";
    this.AllScopes = false;
  }
  get AllScopes() {
    return this.GetProp("AllScopes", 2 /* Bool */);
  }
  set AllScopes(value) {
    this.SetProp("AllScopes", 2 /* Bool */, value);
  }
};
var DataStoreService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("DataStoreService");
    this.Name = "DataStoreService";
    this.AutomaticRetry = true;
    this.LegacyNamingScheme = false;
  }
  get AutomaticRetry() {
    return this.GetProp("AutomaticRetry", 2 /* Bool */);
  }
  set AutomaticRetry(value) {
    this.SetProp("AutomaticRetry", 2 /* Bool */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get LegacyNamingScheme() {
    return this.GetProp("LegacyNamingScheme", 2 /* Bool */);
  }
  /**@deprecated Deprecated by Roblox*/
  set LegacyNamingScheme(value) {
    this.SetProp("LegacyNamingScheme", 2 /* Bool */, value);
  }
};
var DataStoreSetOptions = class extends Instance {
  constructor() {
    super();
    this.addClassName("DataStoreSetOptions");
    this.Name = "DataStoreSetOptions";
  }
};
var Debris = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("Debris");
    this.Name = "Debris";
    this.MaxItems = 1e3;
  }
  /**@deprecated Deprecated by Roblox*/
  get MaxItems() {
    return this.GetProp("MaxItems", 3 /* Int32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set MaxItems(value) {
    this.SetProp("MaxItems", 3 /* Int32 */, value);
  }
};
var DebuggablePluginWatcher = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("DebuggablePluginWatcher");
    this.Name = "DebuggablePluginWatcher";
  }
};
var DebuggerConnectionManager = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("DebuggerConnectionManager");
    this.Name = "DebuggerConnectionManager";
  }
  get Timeout() {
    return this.GetProp("Timeout", 5 /* Float64 */);
  }
  set Timeout(value) {
    this.SetProp("Timeout", 5 /* Float64 */, value);
  }
};
var DebuggerManager = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("DebuggerManager");
    this.Name = "DebuggerManager";
  }
};
var DebuggerUIService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("DebuggerUIService");
    this.Name = "DebuggerUIService";
  }
};
var DebuggerWatch = class extends Instance {
  constructor() {
    super();
    this.addClassName("DebuggerWatch");
    this.Name = "DebuggerWatch";
    this.Expression = "";
  }
  get Expression() {
    return this.GetProp("Expression", 1 /* String */);
  }
  set Expression(value) {
    this.SetProp("Expression", 1 /* String */, value);
  }
};
var DeviceIdService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("DeviceIdService");
    this.Name = "DeviceIdService";
  }
};
var Dialog = class extends Instance {
  constructor() {
    super();
    this.addClassName("Dialog");
    this.Name = "Dialog";
    this.BehaviorType = DialogBehaviorType.SinglePlayer;
    this.ConversationDistance = 25;
    this.GoodbyeChoiceActive = true;
    this.GoodbyeDialog = "";
    this.InitialPrompt = "";
    this.Purpose = DialogPurpose.Help;
    this.Tone = DialogTone.Neutral;
    this.TriggerDistance = 0;
    this.TriggerOffset = new Vector3(0, 0, 0);
  }
  get BehaviorType() {
    return this.GetProp("BehaviorType", 18 /* Enum */);
  }
  set BehaviorType(value) {
    this.SetProp("BehaviorType", 18 /* Enum */, value);
  }
  get ConversationDistance() {
    return this.GetProp("ConversationDistance", 4 /* Float32 */);
  }
  set ConversationDistance(value) {
    this.SetProp("ConversationDistance", 4 /* Float32 */, value);
  }
  get GoodbyeChoiceActive() {
    return this.GetProp("GoodbyeChoiceActive", 2 /* Bool */);
  }
  set GoodbyeChoiceActive(value) {
    this.SetProp("GoodbyeChoiceActive", 2 /* Bool */, value);
  }
  get GoodbyeDialog() {
    return this.GetProp("GoodbyeDialog", 1 /* String */);
  }
  set GoodbyeDialog(value) {
    this.SetProp("GoodbyeDialog", 1 /* String */, value);
  }
  get InitialPrompt() {
    return this.GetProp("InitialPrompt", 1 /* String */);
  }
  set InitialPrompt(value) {
    this.SetProp("InitialPrompt", 1 /* String */, value);
  }
  get Purpose() {
    return this.GetProp("Purpose", 18 /* Enum */);
  }
  set Purpose(value) {
    this.SetProp("Purpose", 18 /* Enum */, value);
  }
  get Tone() {
    return this.GetProp("Tone", 18 /* Enum */);
  }
  set Tone(value) {
    this.SetProp("Tone", 18 /* Enum */, value);
  }
  get TriggerDistance() {
    return this.GetProp("TriggerDistance", 4 /* Float32 */);
  }
  set TriggerDistance(value) {
    this.SetProp("TriggerDistance", 4 /* Float32 */, value);
  }
  get TriggerOffset() {
    return this.GetProp("TriggerOffset", 14 /* Vector3 */);
  }
  set TriggerOffset(value) {
    this.SetProp("TriggerOffset", 14 /* Vector3 */, value);
  }
};
var DialogChoice = class extends Instance {
  constructor() {
    super();
    this.addClassName("DialogChoice");
    this.Name = "DialogChoice";
    this.GoodbyeChoiceActive = true;
    this.GoodbyeDialog = "";
    this.ResponseDialog = "";
    this.UserDialog = "";
  }
  get GoodbyeChoiceActive() {
    return this.GetProp("GoodbyeChoiceActive", 2 /* Bool */);
  }
  set GoodbyeChoiceActive(value) {
    this.SetProp("GoodbyeChoiceActive", 2 /* Bool */, value);
  }
  get GoodbyeDialog() {
    return this.GetProp("GoodbyeDialog", 1 /* String */);
  }
  set GoodbyeDialog(value) {
    this.SetProp("GoodbyeDialog", 1 /* String */, value);
  }
  get ResponseDialog() {
    return this.GetProp("ResponseDialog", 1 /* String */);
  }
  set ResponseDialog(value) {
    this.SetProp("ResponseDialog", 1 /* String */, value);
  }
  get UserDialog() {
    return this.GetProp("UserDialog", 1 /* String */);
  }
  set UserDialog(value) {
    this.SetProp("UserDialog", 1 /* String */, value);
  }
};
var DraftsService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("DraftsService");
    this.Name = "DraftsService";
  }
};
var Dragger = class extends Instance {
  constructor() {
    super();
    this.addClassName("Dragger");
    this.Name = "Dragger";
  }
};
var DraggerService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("DraggerService");
    this.Name = "DraggerService";
  }
};
var EditableImage = class extends Instance {
  constructor() {
    super();
    this.addClassName("EditableImage");
    this.Name = "EditableImage";
    this.Size = new Vector2(512, 512);
  }
  get Size() {
    return this.GetProp("Size", 13 /* Vector2 */);
  }
  set Size(value) {
    this.SetProp("Size", 13 /* Vector2 */, value);
  }
};
var RobloxEditableImage = class extends EditableImage {
  constructor() {
    super();
    this.addClassName("RobloxEditableImage");
    this.Name = "RobloxEditableImage";
    this.ImageDataSerialize = "";
  }
  get ImageDataSerialize() {
    return this.GetProp("ImageDataSerialize", 1 /* String */);
  }
  set ImageDataSerialize(value) {
    this.SetProp("ImageDataSerialize", 1 /* String */, value);
  }
};
var EngineAPICloudProcessingService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("EngineAPICloudProcessingService");
    this.Name = "EngineAPICloudProcessingService";
  }
};
var EulerRotationCurve = class extends Instance {
  constructor() {
    super();
    this.addClassName("EulerRotationCurve");
    this.Name = "EulerRotationCurve";
    this.RotationOrder = RotationOrder.XYZ;
  }
  get RotationOrder() {
    return this.GetProp("RotationOrder", 18 /* Enum */);
  }
  set RotationOrder(value) {
    this.SetProp("RotationOrder", 18 /* Enum */, value);
  }
};
var EventIngestService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("EventIngestService");
    this.Name = "EventIngestService";
  }
};
var ExampleService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ExampleService");
    this.Name = "ExampleService";
  }
};
var ExperienceAuthService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ExperienceAuthService");
    this.Name = "ExperienceAuthService";
  }
};
var ExperienceInviteOptions = class extends Instance {
  constructor() {
    super();
    this.addClassName("ExperienceInviteOptions");
    this.Name = "ExperienceInviteOptions";
    this.InviteMessageId = "";
    this.InviteUser = BigInt(0);
    this.LaunchData = "";
    this.PromptMessage = "";
  }
  get InviteMessageId() {
    return this.GetProp("InviteMessageId", 1 /* String */);
  }
  set InviteMessageId(value) {
    this.SetProp("InviteMessageId", 1 /* String */, value);
  }
  get InviteUser() {
    return this.GetProp("InviteUser", 27 /* Int64 */);
  }
  set InviteUser(value) {
    this.SetProp("InviteUser", 27 /* Int64 */, value);
  }
  get LaunchData() {
    return this.GetProp("LaunchData", 1 /* String */);
  }
  set LaunchData(value) {
    this.SetProp("LaunchData", 1 /* String */, value);
  }
  get PromptMessage() {
    return this.GetProp("PromptMessage", 1 /* String */);
  }
  set PromptMessage(value) {
    this.SetProp("PromptMessage", 1 /* String */, value);
  }
};
var ExperienceNotificationService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ExperienceNotificationService");
    this.Name = "ExperienceNotificationService";
  }
};
var ExperienceService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ExperienceService");
    this.Name = "ExperienceService";
  }
};
var ExperienceStateCaptureService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ExperienceStateCaptureService");
    this.Name = "ExperienceStateCaptureService";
  }
};
var Explosion = class extends Instance {
  constructor() {
    super();
    this.addClassName("Explosion");
    this.Name = "Explosion";
    this.BlastPressure = 5e5;
    this.BlastRadius = 4;
    this.DestroyJointRadiusPercent = 1;
    this.ExplosionType = ExplosionType.Craters;
    this.Position = new Vector3(0, 0, 0);
    this.TimeScale = 1;
    this.Visible = true;
  }
  get BlastPressure() {
    return this.GetProp("BlastPressure", 4 /* Float32 */);
  }
  set BlastPressure(value) {
    this.SetProp("BlastPressure", 4 /* Float32 */, value);
  }
  get BlastRadius() {
    return this.GetProp("BlastRadius", 4 /* Float32 */);
  }
  set BlastRadius(value) {
    this.SetProp("BlastRadius", 4 /* Float32 */, value);
  }
  get DestroyJointRadiusPercent() {
    return this.GetProp("DestroyJointRadiusPercent", 4 /* Float32 */);
  }
  set DestroyJointRadiusPercent(value) {
    this.SetProp("DestroyJointRadiusPercent", 4 /* Float32 */, value);
  }
  get ExplosionType() {
    return this.GetProp("ExplosionType", 18 /* Enum */);
  }
  set ExplosionType(value) {
    this.SetProp("ExplosionType", 18 /* Enum */, value);
  }
  get Position() {
    return this.GetProp("Position", 14 /* Vector3 */);
  }
  set Position(value) {
    this.SetProp("Position", 14 /* Vector3 */, value);
  }
  get TimeScale() {
    return this.GetProp("TimeScale", 4 /* Float32 */);
  }
  set TimeScale(value) {
    this.SetProp("TimeScale", 4 /* Float32 */, value);
  }
  get Visible() {
    return this.GetProp("Visible", 2 /* Bool */);
  }
  set Visible(value) {
    this.SetProp("Visible", 2 /* Bool */, value);
  }
};
var FaceAnimatorService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("FaceAnimatorService");
    this.Name = "FaceAnimatorService";
  }
};
var FaceControls = class extends Instance {
  constructor() {
    super();
    this.addClassName("FaceControls");
    this.Name = "FaceControls";
  }
};
var FaceInstance = class extends Instance {
  constructor() {
    super();
    this.addClassName("FaceInstance");
    this.Face = NormalId.Front;
  }
  get Face() {
    return this.GetProp("Face", 18 /* Enum */);
  }
  set Face(value) {
    this.SetProp("Face", 18 /* Enum */, value);
  }
};
var Decal = class extends FaceInstance {
  constructor() {
    super();
    this.addClassName("Decal");
    this.Name = "Decal";
    this.Color3 = Color3.FromRGB(255, 255, 255);
    this.Shiny = 20;
    this.Specular = 0;
    this.Texture = "";
    this.Transparency = 0;
    this.ZIndex = 1;
  }
  get Color3() {
    return this.GetProp("Color3", 12 /* Color3 */);
  }
  set Color3(value) {
    this.SetProp("Color3", 12 /* Color3 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get Shiny() {
    return this.GetProp("Shiny", 4 /* Float32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set Shiny(value) {
    this.SetProp("Shiny", 4 /* Float32 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get Specular() {
    return this.GetProp("Specular", 4 /* Float32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set Specular(value) {
    this.SetProp("Specular", 4 /* Float32 */, value);
  }
  get Texture() {
    return this.GetProp("Texture", 1 /* String */);
  }
  set Texture(value) {
    this.SetProp("Texture", 1 /* String */, value);
  }
  get Transparency() {
    return this.GetProp("Transparency", 4 /* Float32 */);
  }
  set Transparency(value) {
    this.SetProp("Transparency", 4 /* Float32 */, value);
  }
  get ZIndex() {
    return this.GetProp("ZIndex", 3 /* Int32 */);
  }
  set ZIndex(value) {
    this.SetProp("ZIndex", 3 /* Int32 */, value);
  }
};
var Texture = class extends Decal {
  constructor() {
    super();
    this.addClassName("Texture");
    this.Name = "Texture";
    this.OffsetStudsU = 0;
    this.OffsetStudsV = 0;
    this.StudsPerTileU = 2;
    this.StudsPerTileV = 2;
  }
  get OffsetStudsU() {
    return this.GetProp("OffsetStudsU", 4 /* Float32 */);
  }
  set OffsetStudsU(value) {
    this.SetProp("OffsetStudsU", 4 /* Float32 */, value);
  }
  get OffsetStudsV() {
    return this.GetProp("OffsetStudsV", 4 /* Float32 */);
  }
  set OffsetStudsV(value) {
    this.SetProp("OffsetStudsV", 4 /* Float32 */, value);
  }
  get StudsPerTileU() {
    return this.GetProp("StudsPerTileU", 4 /* Float32 */);
  }
  set StudsPerTileU(value) {
    this.SetProp("StudsPerTileU", 4 /* Float32 */, value);
  }
  get StudsPerTileV() {
    return this.GetProp("StudsPerTileV", 4 /* Float32 */);
  }
  set StudsPerTileV(value) {
    this.SetProp("StudsPerTileV", 4 /* Float32 */, value);
  }
};
var FacialAnimationRecordingService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("FacialAnimationRecordingService");
    this.Name = "FacialAnimationRecordingService";
  }
};
var FacialAnimationStreamingServiceV2 = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("FacialAnimationStreamingServiceV2");
    this.Name = "FacialAnimationStreamingServiceV2";
    this.ServiceState = 0;
  }
  get ServiceState() {
    return this.GetProp("ServiceState", 3 /* Int32 */);
  }
  set ServiceState(value) {
    this.SetProp("ServiceState", 3 /* Int32 */, value);
  }
};
var Feature = class extends Instance {
  constructor() {
    super();
    this.addClassName("Feature");
    this.FaceId = NormalId.Right;
    this.InOut = InOut.Center;
    this.LeftRight = LeftRight.Center;
    this.TopBottom = TopBottom.Center;
  }
  get FaceId() {
    return this.GetProp("FaceId", 18 /* Enum */);
  }
  set FaceId(value) {
    this.SetProp("FaceId", 18 /* Enum */, value);
  }
  get InOut() {
    return this.GetProp("InOut", 18 /* Enum */);
  }
  set InOut(value) {
    this.SetProp("InOut", 18 /* Enum */, value);
  }
  get LeftRight() {
    return this.GetProp("LeftRight", 18 /* Enum */);
  }
  set LeftRight(value) {
    this.SetProp("LeftRight", 18 /* Enum */, value);
  }
  get TopBottom() {
    return this.GetProp("TopBottom", 18 /* Enum */);
  }
  set TopBottom(value) {
    this.SetProp("TopBottom", 18 /* Enum */, value);
  }
};
var Hole = class extends Feature {
  constructor() {
    super();
    this.addClassName("Hole");
    this.Name = "Hole";
  }
};
var MotorFeature = class extends Feature {
  constructor() {
    super();
    this.addClassName("MotorFeature");
    this.Name = "MotorFeature";
  }
};
var Fire = class extends Instance {
  constructor() {
    super();
    this.addClassName("Fire");
    this.Name = "Fire";
    this.Color = Color3.FromRGB(236, 139, 70);
    this.Enabled = true;
    this.SecondaryColor = Color3.FromRGB(139, 80, 55);
    this.TimeScale = 1;
    this.Heatxml = 9;
    this.Size = 5;
    this.Sizexml = 5;
  }
  get Color() {
    return this.GetProp("Color", 12 /* Color3 */);
  }
  set Color(value) {
    this.SetProp("Color", 12 /* Color3 */, value);
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get SecondaryColor() {
    return this.GetProp("SecondaryColor", 12 /* Color3 */);
  }
  set SecondaryColor(value) {
    this.SetProp("SecondaryColor", 12 /* Color3 */, value);
  }
  get TimeScale() {
    return this.GetProp("TimeScale", 4 /* Float32 */);
  }
  set TimeScale(value) {
    this.SetProp("TimeScale", 4 /* Float32 */, value);
  }
  get Heatxml() {
    return this.GetProp("heat_xml", 4 /* Float32 */);
  }
  set Heatxml(value) {
    this.SetProp("heat_xml", 4 /* Float32 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get Size() {
    return this.GetProp("size", 4 /* Float32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set Size(value) {
    this.SetProp("size", 4 /* Float32 */, value);
  }
  get Sizexml() {
    return this.GetProp("size_xml", 4 /* Float32 */);
  }
  set Sizexml(value) {
    this.SetProp("size_xml", 4 /* Float32 */, value);
  }
};
var FlagStandService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("FlagStandService");
    this.Name = "FlagStandService";
  }
};
var FloatCurve = class extends Instance {
  constructor() {
    super();
    this.addClassName("FloatCurve");
    this.Name = "FloatCurve";
    this.ValuesAndTimes = "";
  }
  get ValuesAndTimes() {
    return this.GetProp("ValuesAndTimes", 1 /* String */);
  }
  set ValuesAndTimes(value) {
    this.SetProp("ValuesAndTimes", 1 /* String */, value);
  }
};
var FlyweightService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("FlyweightService");
    this.Name = "FlyweightService";
  }
};
var CSGDictionaryService = class extends FlyweightService {
  constructor() {
    super();
    this.addClassName("CSGDictionaryService");
    this.Name = "CSGDictionaryService";
  }
};
var NonReplicatedCSGDictionaryService = class extends FlyweightService {
  constructor() {
    super();
    this.addClassName("NonReplicatedCSGDictionaryService");
    this.Name = "NonReplicatedCSGDictionaryService";
  }
};
var Folder = class extends Instance {
  constructor() {
    super();
    this.addClassName("Folder");
    this.Name = "Folder";
  }
};
var ForceField = class extends Instance {
  constructor() {
    super();
    this.addClassName("ForceField");
    this.Name = "ForceField";
    this.Visible = true;
  }
  get Visible() {
    return this.GetProp("Visible", 2 /* Bool */);
  }
  set Visible(value) {
    this.SetProp("Visible", 2 /* Bool */, value);
  }
};
var FriendService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("FriendService");
    this.Name = "FriendService";
  }
};
var FunctionalTest = class extends Instance {
  constructor() {
    super();
    this.addClassName("FunctionalTest");
    this.Name = "FunctionalTest";
    this.Description = "?";
    this.HasMigratedSettingsToTestService = false;
  }
  get Description() {
    return this.GetProp("Description", 1 /* String */);
  }
  set Description(value) {
    this.SetProp("Description", 1 /* String */, value);
  }
  get HasMigratedSettingsToTestService() {
    return this.GetProp("HasMigratedSettingsToTestService", 2 /* Bool */);
  }
  set HasMigratedSettingsToTestService(value) {
    this.SetProp("HasMigratedSettingsToTestService", 2 /* Bool */, value);
  }
};
var GamePassService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("GamePassService");
    this.Name = "GamePassService";
  }
};
var GamepadService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("GamepadService");
    this.Name = "GamepadService";
    this.GamepadCursorEnabled = false;
  }
  get GamepadCursorEnabled() {
    return this.GetProp("GamepadCursorEnabled", 2 /* Bool */);
  }
  set GamepadCursorEnabled(value) {
    this.SetProp("GamepadCursorEnabled", 2 /* Bool */, value);
  }
};
var GenericChallengeService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("GenericChallengeService");
    this.Name = "GenericChallengeService";
  }
};
var Geometry = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("Geometry");
    this.Name = "Geometry";
  }
};
var GeometryService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("GeometryService");
    this.Name = "GeometryService";
  }
};
var GetTextBoundsParams = class extends Instance {
  constructor() {
    super();
    this.addClassName("GetTextBoundsParams");
    this.Name = "GetTextBoundsParams";
    this.Size = 20;
    this.Text = "";
    this.Width = 0;
    this.Font = new RBXMFont("rbxasset://fonts/families/SourceSansPro.json", 400 /* Regular */, 0 /* Normal */);
  }
  get Font() {
    return this.GetProp("Font", 32 /* Font */);
  }
  set Font(value) {
    this.SetProp("Font", 32 /* Font */, value);
  }
  get Size() {
    return this.GetProp("Size", 4 /* Float32 */);
  }
  set Size(value) {
    this.SetProp("Size", 4 /* Float32 */, value);
  }
  get Text() {
    return this.GetProp("Text", 1 /* String */);
  }
  set Text(value) {
    this.SetProp("Text", 1 /* String */, value);
  }
  get Width() {
    return this.GetProp("Width", 4 /* Float32 */);
  }
  set Width(value) {
    this.SetProp("Width", 4 /* Float32 */, value);
  }
};
var GoogleAnalyticsConfiguration = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("GoogleAnalyticsConfiguration");
    this.Name = "GoogleAnalyticsConfiguration";
  }
  get GaID() {
    return this.GetProp("gaID", 1 /* String */);
  }
  set GaID(value) {
    this.SetProp("gaID", 1 /* String */, value);
  }
};
var GroupService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("GroupService");
    this.Name = "GroupService";
  }
};
var GuiBase = class extends Instance {
  constructor() {
    super();
    this.addClassName("GuiBase");
  }
};
var GuiBase2d = class extends GuiBase {
  constructor() {
    super();
    this.addClassName("GuiBase2d");
    this.AutoLocalize = true;
    this.Localize = true;
    this.SelectionBehaviorDown = SelectionBehavior.Escape;
    this.SelectionBehaviorLeft = SelectionBehavior.Escape;
    this.SelectionBehaviorRight = SelectionBehavior.Escape;
    this.SelectionBehaviorUp = SelectionBehavior.Escape;
  }
  get AutoLocalize() {
    return this.GetProp("AutoLocalize", 2 /* Bool */);
  }
  set AutoLocalize(value) {
    this.SetProp("AutoLocalize", 2 /* Bool */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get Localize() {
    return this.GetProp("Localize", 2 /* Bool */);
  }
  /**@deprecated Deprecated by Roblox*/
  set Localize(value) {
    this.SetProp("Localize", 2 /* Bool */, value);
  }
  get RootLocalizationTable() {
    return this.GetProp("RootLocalizationTable", 19 /* Referent */);
  }
  set RootLocalizationTable(value) {
    this.SetProp("RootLocalizationTable", 19 /* Referent */, value);
  }
  get SelectionBehaviorDown() {
    return this.GetProp("SelectionBehaviorDown", 18 /* Enum */);
  }
  set SelectionBehaviorDown(value) {
    this.SetProp("SelectionBehaviorDown", 18 /* Enum */, value);
  }
  get SelectionBehaviorLeft() {
    return this.GetProp("SelectionBehaviorLeft", 18 /* Enum */);
  }
  set SelectionBehaviorLeft(value) {
    this.SetProp("SelectionBehaviorLeft", 18 /* Enum */, value);
  }
  get SelectionBehaviorRight() {
    return this.GetProp("SelectionBehaviorRight", 18 /* Enum */);
  }
  set SelectionBehaviorRight(value) {
    this.SetProp("SelectionBehaviorRight", 18 /* Enum */, value);
  }
  get SelectionBehaviorUp() {
    return this.GetProp("SelectionBehaviorUp", 18 /* Enum */);
  }
  set SelectionBehaviorUp(value) {
    this.SetProp("SelectionBehaviorUp", 18 /* Enum */, value);
  }
  get SelectionGroup() {
    return this.GetProp("SelectionGroup", 2 /* Bool */);
  }
  set SelectionGroup(value) {
    this.SetProp("SelectionGroup", 2 /* Bool */, value);
  }
};
var GuiObject = class extends GuiBase2d {
  constructor() {
    super();
    this.addClassName("GuiObject");
    this.AnchorPoint = new Vector2(0, 0);
    this.AutomaticSize = AutomaticSize.None;
    this.BackgroundColor3 = Color3.FromRGB(163, 162, 165);
    this.BackgroundTransparency = 0;
    this.BorderColor3 = Color3.FromRGB(27, 42, 53);
    this.BorderMode = BorderMode.Outline;
    this.BorderSizePixel = 1;
    this.Draggable = false;
    this.Interactable = true;
    this.LayoutOrder = 0;
    this.Position = new UDim2(new UDim(0, 0), new UDim(0, 0));
    this.Rotation = 0;
    this.SelectionOrder = 0;
    this.Size = new UDim2(new UDim(0, 0), new UDim(0, 0));
    this.SizeConstraint = SizeConstraint.RelativeXY;
    this.Visible = true;
    this.ZIndex = 1;
  }
  get Active() {
    return this.GetProp("Active", 2 /* Bool */);
  }
  set Active(value) {
    this.SetProp("Active", 2 /* Bool */, value);
  }
  get AnchorPoint() {
    return this.GetProp("AnchorPoint", 13 /* Vector2 */);
  }
  set AnchorPoint(value) {
    this.SetProp("AnchorPoint", 13 /* Vector2 */, value);
  }
  get AutomaticSize() {
    return this.GetProp("AutomaticSize", 18 /* Enum */);
  }
  set AutomaticSize(value) {
    this.SetProp("AutomaticSize", 18 /* Enum */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get BackgroundColor() {
    return this.GetProp("BackgroundColor", 11 /* BrickColor */);
  }
  /**@deprecated Deprecated by Roblox*/
  set BackgroundColor(value) {
    this.SetProp("BackgroundColor", 11 /* BrickColor */, value);
  }
  get BackgroundColor3() {
    return this.GetProp("BackgroundColor3", 12 /* Color3 */);
  }
  set BackgroundColor3(value) {
    this.SetProp("BackgroundColor3", 12 /* Color3 */, value);
  }
  get BackgroundTransparency() {
    return this.GetProp("BackgroundTransparency", 4 /* Float32 */);
  }
  set BackgroundTransparency(value) {
    this.SetProp("BackgroundTransparency", 4 /* Float32 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get BorderColor() {
    return this.GetProp("BorderColor", 11 /* BrickColor */);
  }
  /**@deprecated Deprecated by Roblox*/
  set BorderColor(value) {
    this.SetProp("BorderColor", 11 /* BrickColor */, value);
  }
  get BorderColor3() {
    return this.GetProp("BorderColor3", 12 /* Color3 */);
  }
  set BorderColor3(value) {
    this.SetProp("BorderColor3", 12 /* Color3 */, value);
  }
  get BorderMode() {
    return this.GetProp("BorderMode", 18 /* Enum */);
  }
  set BorderMode(value) {
    this.SetProp("BorderMode", 18 /* Enum */, value);
  }
  get BorderSizePixel() {
    return this.GetProp("BorderSizePixel", 3 /* Int32 */);
  }
  set BorderSizePixel(value) {
    this.SetProp("BorderSizePixel", 3 /* Int32 */, value);
  }
  get ClipsDescendants() {
    return this.GetProp("ClipsDescendants", 2 /* Bool */);
  }
  set ClipsDescendants(value) {
    this.SetProp("ClipsDescendants", 2 /* Bool */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get Draggable() {
    return this.GetProp("Draggable", 2 /* Bool */);
  }
  /**@deprecated Deprecated by Roblox*/
  set Draggable(value) {
    this.SetProp("Draggable", 2 /* Bool */, value);
  }
  get Interactable() {
    return this.GetProp("Interactable", 2 /* Bool */);
  }
  set Interactable(value) {
    this.SetProp("Interactable", 2 /* Bool */, value);
  }
  get LayoutOrder() {
    return this.GetProp("LayoutOrder", 3 /* Int32 */);
  }
  set LayoutOrder(value) {
    this.SetProp("LayoutOrder", 3 /* Int32 */, value);
  }
  get NextSelectionDown() {
    return this.GetProp("NextSelectionDown", 19 /* Referent */);
  }
  set NextSelectionDown(value) {
    this.SetProp("NextSelectionDown", 19 /* Referent */, value);
  }
  get NextSelectionLeft() {
    return this.GetProp("NextSelectionLeft", 19 /* Referent */);
  }
  set NextSelectionLeft(value) {
    this.SetProp("NextSelectionLeft", 19 /* Referent */, value);
  }
  get NextSelectionRight() {
    return this.GetProp("NextSelectionRight", 19 /* Referent */);
  }
  set NextSelectionRight(value) {
    this.SetProp("NextSelectionRight", 19 /* Referent */, value);
  }
  get NextSelectionUp() {
    return this.GetProp("NextSelectionUp", 19 /* Referent */);
  }
  set NextSelectionUp(value) {
    this.SetProp("NextSelectionUp", 19 /* Referent */, value);
  }
  get Position() {
    return this.GetProp("Position", 7 /* UDim2 */);
  }
  set Position(value) {
    this.SetProp("Position", 7 /* UDim2 */, value);
  }
  get Rotation() {
    return this.GetProp("Rotation", 4 /* Float32 */);
  }
  set Rotation(value) {
    this.SetProp("Rotation", 4 /* Float32 */, value);
  }
  get Selectable() {
    return this.GetProp("Selectable", 2 /* Bool */);
  }
  set Selectable(value) {
    this.SetProp("Selectable", 2 /* Bool */, value);
  }
  get SelectionImageObject() {
    return this.GetProp("SelectionImageObject", 19 /* Referent */);
  }
  set SelectionImageObject(value) {
    this.SetProp("SelectionImageObject", 19 /* Referent */, value);
  }
  get SelectionOrder() {
    return this.GetProp("SelectionOrder", 3 /* Int32 */);
  }
  set SelectionOrder(value) {
    this.SetProp("SelectionOrder", 3 /* Int32 */, value);
  }
  get Size() {
    return this.GetProp("Size", 7 /* UDim2 */);
  }
  set Size(value) {
    this.SetProp("Size", 7 /* UDim2 */, value);
  }
  get SizeConstraint() {
    return this.GetProp("SizeConstraint", 18 /* Enum */);
  }
  set SizeConstraint(value) {
    this.SetProp("SizeConstraint", 18 /* Enum */, value);
  }
  get Visible() {
    return this.GetProp("Visible", 2 /* Bool */);
  }
  set Visible(value) {
    this.SetProp("Visible", 2 /* Bool */, value);
  }
  get ZIndex() {
    return this.GetProp("ZIndex", 3 /* Int32 */);
  }
  set ZIndex(value) {
    this.SetProp("ZIndex", 3 /* Int32 */, value);
  }
};
var CanvasGroup = class extends GuiObject {
  constructor() {
    super();
    this.addClassName("CanvasGroup");
    this.Name = "CanvasGroup";
    this.GroupColor3 = Color3.FromRGB(255, 255, 255);
    this.GroupTransparency = 0;
    this.Active = false;
    this.ClipsDescendants = true;
    this.Selectable = false;
    this.SelectionGroup = false;
  }
  get GroupColor3() {
    return this.GetProp("GroupColor3", 12 /* Color3 */);
  }
  set GroupColor3(value) {
    this.SetProp("GroupColor3", 12 /* Color3 */, value);
  }
  get GroupTransparency() {
    return this.GetProp("GroupTransparency", 4 /* Float32 */);
  }
  set GroupTransparency(value) {
    this.SetProp("GroupTransparency", 4 /* Float32 */, value);
  }
};
var Frame = class extends GuiObject {
  constructor() {
    super();
    this.addClassName("Frame");
    this.Name = "Frame";
    this.Style = FrameStyle.Custom;
    this.Active = false;
    this.ClipsDescendants = false;
    this.Selectable = false;
    this.SelectionGroup = false;
  }
  get Style() {
    return this.GetProp("Style", 18 /* Enum */);
  }
  set Style(value) {
    this.SetProp("Style", 18 /* Enum */, value);
  }
};
var GuiButton = class extends GuiObject {
  constructor() {
    super();
    this.addClassName("GuiButton");
    this.AutoButtonColor = true;
    this.Modal = false;
    this.Selected = false;
    this.Style = ButtonStyle.Custom;
    this.Active = true;
    this.ClipsDescendants = false;
    this.Selectable = true;
    this.SelectionGroup = false;
  }
  get AutoButtonColor() {
    return this.GetProp("AutoButtonColor", 2 /* Bool */);
  }
  set AutoButtonColor(value) {
    this.SetProp("AutoButtonColor", 2 /* Bool */, value);
  }
  get Modal() {
    return this.GetProp("Modal", 2 /* Bool */);
  }
  set Modal(value) {
    this.SetProp("Modal", 2 /* Bool */, value);
  }
  get Selected() {
    return this.GetProp("Selected", 2 /* Bool */);
  }
  set Selected(value) {
    this.SetProp("Selected", 2 /* Bool */, value);
  }
  get Style() {
    return this.GetProp("Style", 18 /* Enum */);
  }
  set Style(value) {
    this.SetProp("Style", 18 /* Enum */, value);
  }
};
var ImageButton = class extends GuiButton {
  constructor() {
    super();
    this.addClassName("ImageButton");
    this.Name = "ImageButton";
    this.HoverImage = "";
    this.Image = "";
    this.ImageColor3 = Color3.FromRGB(255, 255, 255);
    this.ImageRectOffset = new Vector2(0, 0);
    this.ImageRectSize = new Vector2(0, 0);
    this.ImageTransparency = 0;
    this.PressedImage = "";
    this.ResampleMode = ResamplerMode.Default;
    this.ScaleType = ScaleType.Stretch;
    this.SliceCenter = new Rect(new Vector2(0, 0), new Vector2(0, 0));
    this.SliceScale = 1;
    this.TileSize = new UDim2(new UDim(1, 0), new UDim(1, 0));
  }
  get HoverImage() {
    return this.GetProp("HoverImage", 1 /* String */);
  }
  set HoverImage(value) {
    this.SetProp("HoverImage", 1 /* String */, value);
  }
  get Image() {
    return this.GetProp("Image", 1 /* String */);
  }
  set Image(value) {
    this.SetProp("Image", 1 /* String */, value);
  }
  get ImageColor3() {
    return this.GetProp("ImageColor3", 12 /* Color3 */);
  }
  set ImageColor3(value) {
    this.SetProp("ImageColor3", 12 /* Color3 */, value);
  }
  get ImageRectOffset() {
    return this.GetProp("ImageRectOffset", 13 /* Vector2 */);
  }
  set ImageRectOffset(value) {
    this.SetProp("ImageRectOffset", 13 /* Vector2 */, value);
  }
  get ImageRectSize() {
    return this.GetProp("ImageRectSize", 13 /* Vector2 */);
  }
  set ImageRectSize(value) {
    this.SetProp("ImageRectSize", 13 /* Vector2 */, value);
  }
  get ImageTransparency() {
    return this.GetProp("ImageTransparency", 4 /* Float32 */);
  }
  set ImageTransparency(value) {
    this.SetProp("ImageTransparency", 4 /* Float32 */, value);
  }
  get PressedImage() {
    return this.GetProp("PressedImage", 1 /* String */);
  }
  set PressedImage(value) {
    this.SetProp("PressedImage", 1 /* String */, value);
  }
  get ResampleMode() {
    return this.GetProp("ResampleMode", 18 /* Enum */);
  }
  set ResampleMode(value) {
    this.SetProp("ResampleMode", 18 /* Enum */, value);
  }
  get ScaleType() {
    return this.GetProp("ScaleType", 18 /* Enum */);
  }
  set ScaleType(value) {
    this.SetProp("ScaleType", 18 /* Enum */, value);
  }
  get SliceCenter() {
    return this.GetProp("SliceCenter", 24 /* Rect */);
  }
  set SliceCenter(value) {
    this.SetProp("SliceCenter", 24 /* Rect */, value);
  }
  get SliceScale() {
    return this.GetProp("SliceScale", 4 /* Float32 */);
  }
  set SliceScale(value) {
    this.SetProp("SliceScale", 4 /* Float32 */, value);
  }
  get TileSize() {
    return this.GetProp("TileSize", 7 /* UDim2 */);
  }
  set TileSize(value) {
    this.SetProp("TileSize", 7 /* UDim2 */, value);
  }
};
var TextButton = class extends GuiButton {
  constructor() {
    super();
    this.addClassName("TextButton");
    this.Name = "TextButton";
    this.FontSize = FontSize.Size8;
    this.LineHeight = 1;
    this.LocalizationMatchIdentifier = "";
    this.LocalizationMatchedSourceText = "";
    this.MaxVisibleGraphemes = -1;
    this.RichText = false;
    this.Text = "Button";
    this.TextColor3 = Color3.FromRGB(27, 42, 53);
    this.TextDirection = TextDirection.Auto;
    this.TextScaled = false;
    this.TextSize = 8;
    this.TextStrokeColor3 = Color3.FromRGB(0, 0, 0);
    this.TextStrokeTransparency = 1;
    this.TextTransparency = 0;
    this.TextTruncate = TextTruncate.None;
    this.TextWrap = false;
    this.TextWrapped = false;
    this.TextXAlignment = TextXAlignment.Center;
    this.TextYAlignment = TextYAlignment.Center;
    this.FontFace = new RBXMFont("rbxasset://fonts/families/LegacyArial.json", 400 /* Regular */, 0 /* Normal */);
  }
  get FontFace() {
    return this.GetProp("FontFace", 32 /* Font */);
  }
  set FontFace(value) {
    this.SetProp("FontFace", 32 /* Font */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get FontSize() {
    return this.GetProp("FontSize", 18 /* Enum */);
  }
  /**@deprecated Deprecated by Roblox*/
  set FontSize(value) {
    this.SetProp("FontSize", 18 /* Enum */, value);
  }
  get LineHeight() {
    return this.GetProp("LineHeight", 4 /* Float32 */);
  }
  set LineHeight(value) {
    this.SetProp("LineHeight", 4 /* Float32 */, value);
  }
  get LocalizationMatchIdentifier() {
    return this.GetProp("LocalizationMatchIdentifier", 1 /* String */);
  }
  set LocalizationMatchIdentifier(value) {
    this.SetProp("LocalizationMatchIdentifier", 1 /* String */, value);
  }
  get LocalizationMatchedSourceText() {
    return this.GetProp("LocalizationMatchedSourceText", 1 /* String */);
  }
  set LocalizationMatchedSourceText(value) {
    this.SetProp("LocalizationMatchedSourceText", 1 /* String */, value);
  }
  get MaxVisibleGraphemes() {
    return this.GetProp("MaxVisibleGraphemes", 3 /* Int32 */);
  }
  set MaxVisibleGraphemes(value) {
    this.SetProp("MaxVisibleGraphemes", 3 /* Int32 */, value);
  }
  get RichText() {
    return this.GetProp("RichText", 2 /* Bool */);
  }
  set RichText(value) {
    this.SetProp("RichText", 2 /* Bool */, value);
  }
  get Text() {
    return this.GetProp("Text", 1 /* String */);
  }
  set Text(value) {
    this.SetProp("Text", 1 /* String */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get TextColor() {
    return this.GetProp("TextColor", 11 /* BrickColor */);
  }
  /**@deprecated Deprecated by Roblox*/
  set TextColor(value) {
    this.SetProp("TextColor", 11 /* BrickColor */, value);
  }
  get TextColor3() {
    return this.GetProp("TextColor3", 12 /* Color3 */);
  }
  set TextColor3(value) {
    this.SetProp("TextColor3", 12 /* Color3 */, value);
  }
  get TextDirection() {
    return this.GetProp("TextDirection", 18 /* Enum */);
  }
  set TextDirection(value) {
    this.SetProp("TextDirection", 18 /* Enum */, value);
  }
  get TextScaled() {
    return this.GetProp("TextScaled", 2 /* Bool */);
  }
  set TextScaled(value) {
    this.SetProp("TextScaled", 2 /* Bool */, value);
  }
  get TextSize() {
    return this.GetProp("TextSize", 4 /* Float32 */);
  }
  set TextSize(value) {
    this.SetProp("TextSize", 4 /* Float32 */, value);
  }
  get TextStrokeColor3() {
    return this.GetProp("TextStrokeColor3", 12 /* Color3 */);
  }
  set TextStrokeColor3(value) {
    this.SetProp("TextStrokeColor3", 12 /* Color3 */, value);
  }
  get TextStrokeTransparency() {
    return this.GetProp("TextStrokeTransparency", 4 /* Float32 */);
  }
  set TextStrokeTransparency(value) {
    this.SetProp("TextStrokeTransparency", 4 /* Float32 */, value);
  }
  get TextTransparency() {
    return this.GetProp("TextTransparency", 4 /* Float32 */);
  }
  set TextTransparency(value) {
    this.SetProp("TextTransparency", 4 /* Float32 */, value);
  }
  get TextTruncate() {
    return this.GetProp("TextTruncate", 18 /* Enum */);
  }
  set TextTruncate(value) {
    this.SetProp("TextTruncate", 18 /* Enum */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get TextWrap() {
    return this.GetProp("TextWrap", 2 /* Bool */);
  }
  /**@deprecated Deprecated by Roblox*/
  set TextWrap(value) {
    this.SetProp("TextWrap", 2 /* Bool */, value);
  }
  get TextWrapped() {
    return this.GetProp("TextWrapped", 2 /* Bool */);
  }
  set TextWrapped(value) {
    this.SetProp("TextWrapped", 2 /* Bool */, value);
  }
  get TextXAlignment() {
    return this.GetProp("TextXAlignment", 18 /* Enum */);
  }
  set TextXAlignment(value) {
    this.SetProp("TextXAlignment", 18 /* Enum */, value);
  }
  get TextYAlignment() {
    return this.GetProp("TextYAlignment", 18 /* Enum */);
  }
  set TextYAlignment(value) {
    this.SetProp("TextYAlignment", 18 /* Enum */, value);
  }
};
var GuiLabel = class extends GuiObject {
  constructor() {
    super();
    this.addClassName("GuiLabel");
    this.Active = false;
    this.ClipsDescendants = false;
    this.Selectable = false;
    this.SelectionGroup = false;
  }
};
var ImageLabel = class extends GuiLabel {
  constructor() {
    super();
    this.addClassName("ImageLabel");
    this.Name = "ImageLabel";
    this.Image = "";
    this.ImageColor3 = Color3.FromRGB(255, 255, 255);
    this.ImageRectOffset = new Vector2(0, 0);
    this.ImageRectSize = new Vector2(0, 0);
    this.ImageTransparency = 0;
    this.ResampleMode = ResamplerMode.Default;
    this.ScaleType = ScaleType.Stretch;
    this.SliceCenter = new Rect(new Vector2(0, 0), new Vector2(0, 0));
    this.SliceScale = 1;
    this.TileSize = new UDim2(new UDim(1, 0), new UDim(1, 0));
  }
  get Image() {
    return this.GetProp("Image", 1 /* String */);
  }
  set Image(value) {
    this.SetProp("Image", 1 /* String */, value);
  }
  get ImageColor3() {
    return this.GetProp("ImageColor3", 12 /* Color3 */);
  }
  set ImageColor3(value) {
    this.SetProp("ImageColor3", 12 /* Color3 */, value);
  }
  get ImageRectOffset() {
    return this.GetProp("ImageRectOffset", 13 /* Vector2 */);
  }
  set ImageRectOffset(value) {
    this.SetProp("ImageRectOffset", 13 /* Vector2 */, value);
  }
  get ImageRectSize() {
    return this.GetProp("ImageRectSize", 13 /* Vector2 */);
  }
  set ImageRectSize(value) {
    this.SetProp("ImageRectSize", 13 /* Vector2 */, value);
  }
  get ImageTransparency() {
    return this.GetProp("ImageTransparency", 4 /* Float32 */);
  }
  set ImageTransparency(value) {
    this.SetProp("ImageTransparency", 4 /* Float32 */, value);
  }
  get ResampleMode() {
    return this.GetProp("ResampleMode", 18 /* Enum */);
  }
  set ResampleMode(value) {
    this.SetProp("ResampleMode", 18 /* Enum */, value);
  }
  get ScaleType() {
    return this.GetProp("ScaleType", 18 /* Enum */);
  }
  set ScaleType(value) {
    this.SetProp("ScaleType", 18 /* Enum */, value);
  }
  get SliceCenter() {
    return this.GetProp("SliceCenter", 24 /* Rect */);
  }
  set SliceCenter(value) {
    this.SetProp("SliceCenter", 24 /* Rect */, value);
  }
  get SliceScale() {
    return this.GetProp("SliceScale", 4 /* Float32 */);
  }
  set SliceScale(value) {
    this.SetProp("SliceScale", 4 /* Float32 */, value);
  }
  get TileSize() {
    return this.GetProp("TileSize", 7 /* UDim2 */);
  }
  set TileSize(value) {
    this.SetProp("TileSize", 7 /* UDim2 */, value);
  }
};
var TextLabel = class extends GuiLabel {
  constructor() {
    super();
    this.addClassName("TextLabel");
    this.Name = "TextLabel";
    this.FontSize = FontSize.Size8;
    this.LineHeight = 1;
    this.LocalizationMatchIdentifier = "";
    this.LocalizationMatchedSourceText = "";
    this.MaxVisibleGraphemes = -1;
    this.RichText = false;
    this.Text = "Label";
    this.TextColor3 = Color3.FromRGB(27, 42, 53);
    this.TextDirection = TextDirection.Auto;
    this.TextScaled = false;
    this.TextSize = 8;
    this.TextStrokeColor3 = Color3.FromRGB(0, 0, 0);
    this.TextStrokeTransparency = 1;
    this.TextTransparency = 0;
    this.TextTruncate = TextTruncate.None;
    this.TextWrap = false;
    this.TextWrapped = false;
    this.TextXAlignment = TextXAlignment.Center;
    this.TextYAlignment = TextYAlignment.Center;
    this.FontFace = new RBXMFont("rbxasset://fonts/families/LegacyArial.json", 400 /* Regular */, 0 /* Normal */);
  }
  get FontFace() {
    return this.GetProp("FontFace", 32 /* Font */);
  }
  set FontFace(value) {
    this.SetProp("FontFace", 32 /* Font */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get FontSize() {
    return this.GetProp("FontSize", 18 /* Enum */);
  }
  /**@deprecated Deprecated by Roblox*/
  set FontSize(value) {
    this.SetProp("FontSize", 18 /* Enum */, value);
  }
  get LineHeight() {
    return this.GetProp("LineHeight", 4 /* Float32 */);
  }
  set LineHeight(value) {
    this.SetProp("LineHeight", 4 /* Float32 */, value);
  }
  get LocalizationMatchIdentifier() {
    return this.GetProp("LocalizationMatchIdentifier", 1 /* String */);
  }
  set LocalizationMatchIdentifier(value) {
    this.SetProp("LocalizationMatchIdentifier", 1 /* String */, value);
  }
  get LocalizationMatchedSourceText() {
    return this.GetProp("LocalizationMatchedSourceText", 1 /* String */);
  }
  set LocalizationMatchedSourceText(value) {
    this.SetProp("LocalizationMatchedSourceText", 1 /* String */, value);
  }
  get MaxVisibleGraphemes() {
    return this.GetProp("MaxVisibleGraphemes", 3 /* Int32 */);
  }
  set MaxVisibleGraphemes(value) {
    this.SetProp("MaxVisibleGraphemes", 3 /* Int32 */, value);
  }
  get RichText() {
    return this.GetProp("RichText", 2 /* Bool */);
  }
  set RichText(value) {
    this.SetProp("RichText", 2 /* Bool */, value);
  }
  get Text() {
    return this.GetProp("Text", 1 /* String */);
  }
  set Text(value) {
    this.SetProp("Text", 1 /* String */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get TextColor() {
    return this.GetProp("TextColor", 11 /* BrickColor */);
  }
  /**@deprecated Deprecated by Roblox*/
  set TextColor(value) {
    this.SetProp("TextColor", 11 /* BrickColor */, value);
  }
  get TextColor3() {
    return this.GetProp("TextColor3", 12 /* Color3 */);
  }
  set TextColor3(value) {
    this.SetProp("TextColor3", 12 /* Color3 */, value);
  }
  get TextDirection() {
    return this.GetProp("TextDirection", 18 /* Enum */);
  }
  set TextDirection(value) {
    this.SetProp("TextDirection", 18 /* Enum */, value);
  }
  get TextScaled() {
    return this.GetProp("TextScaled", 2 /* Bool */);
  }
  set TextScaled(value) {
    this.SetProp("TextScaled", 2 /* Bool */, value);
  }
  get TextSize() {
    return this.GetProp("TextSize", 4 /* Float32 */);
  }
  set TextSize(value) {
    this.SetProp("TextSize", 4 /* Float32 */, value);
  }
  get TextStrokeColor3() {
    return this.GetProp("TextStrokeColor3", 12 /* Color3 */);
  }
  set TextStrokeColor3(value) {
    this.SetProp("TextStrokeColor3", 12 /* Color3 */, value);
  }
  get TextStrokeTransparency() {
    return this.GetProp("TextStrokeTransparency", 4 /* Float32 */);
  }
  set TextStrokeTransparency(value) {
    this.SetProp("TextStrokeTransparency", 4 /* Float32 */, value);
  }
  get TextTransparency() {
    return this.GetProp("TextTransparency", 4 /* Float32 */);
  }
  set TextTransparency(value) {
    this.SetProp("TextTransparency", 4 /* Float32 */, value);
  }
  get TextTruncate() {
    return this.GetProp("TextTruncate", 18 /* Enum */);
  }
  set TextTruncate(value) {
    this.SetProp("TextTruncate", 18 /* Enum */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get TextWrap() {
    return this.GetProp("TextWrap", 2 /* Bool */);
  }
  /**@deprecated Deprecated by Roblox*/
  set TextWrap(value) {
    this.SetProp("TextWrap", 2 /* Bool */, value);
  }
  get TextWrapped() {
    return this.GetProp("TextWrapped", 2 /* Bool */);
  }
  set TextWrapped(value) {
    this.SetProp("TextWrapped", 2 /* Bool */, value);
  }
  get TextXAlignment() {
    return this.GetProp("TextXAlignment", 18 /* Enum */);
  }
  set TextXAlignment(value) {
    this.SetProp("TextXAlignment", 18 /* Enum */, value);
  }
  get TextYAlignment() {
    return this.GetProp("TextYAlignment", 18 /* Enum */);
  }
  set TextYAlignment(value) {
    this.SetProp("TextYAlignment", 18 /* Enum */, value);
  }
};
var ScrollingFrame = class extends GuiObject {
  constructor() {
    super();
    this.addClassName("ScrollingFrame");
    this.Name = "ScrollingFrame";
    this.AutomaticCanvasSize = AutomaticSize.None;
    this.BottomImage = "rbxasset://textures/ui/Scroll/scroll-bottom.png";
    this.CanvasPosition = new Vector2(0, 0);
    this.CanvasSize = new UDim2(new UDim(0, 0), new UDim(2, 0));
    this.ElasticBehavior = ElasticBehavior.WhenScrollable;
    this.HorizontalScrollBarInset = ScrollBarInset.None;
    this.MidImage = "rbxasset://textures/ui/Scroll/scroll-middle.png";
    this.ScrollBarImageColor3 = Color3.FromRGB(255, 255, 255);
    this.ScrollBarImageTransparency = 0;
    this.ScrollBarThickness = 12;
    this.ScrollingDirection = ScrollingDirection.XY;
    this.ScrollingEnabled = true;
    this.TopImage = "rbxasset://textures/ui/Scroll/scroll-top.png";
    this.VerticalScrollBarInset = ScrollBarInset.None;
    this.VerticalScrollBarPosition = VerticalScrollBarPosition.Right;
    this.Active = false;
    this.ClipsDescendants = true;
    this.Selectable = true;
    this.SelectionGroup = true;
  }
  get AutomaticCanvasSize() {
    return this.GetProp("AutomaticCanvasSize", 18 /* Enum */);
  }
  set AutomaticCanvasSize(value) {
    this.SetProp("AutomaticCanvasSize", 18 /* Enum */, value);
  }
  get BottomImage() {
    return this.GetProp("BottomImage", 1 /* String */);
  }
  set BottomImage(value) {
    this.SetProp("BottomImage", 1 /* String */, value);
  }
  get CanvasPosition() {
    return this.GetProp("CanvasPosition", 13 /* Vector2 */);
  }
  set CanvasPosition(value) {
    this.SetProp("CanvasPosition", 13 /* Vector2 */, value);
  }
  get CanvasSize() {
    return this.GetProp("CanvasSize", 7 /* UDim2 */);
  }
  set CanvasSize(value) {
    this.SetProp("CanvasSize", 7 /* UDim2 */, value);
  }
  get ElasticBehavior() {
    return this.GetProp("ElasticBehavior", 18 /* Enum */);
  }
  set ElasticBehavior(value) {
    this.SetProp("ElasticBehavior", 18 /* Enum */, value);
  }
  get HorizontalScrollBarInset() {
    return this.GetProp("HorizontalScrollBarInset", 18 /* Enum */);
  }
  set HorizontalScrollBarInset(value) {
    this.SetProp("HorizontalScrollBarInset", 18 /* Enum */, value);
  }
  get MidImage() {
    return this.GetProp("MidImage", 1 /* String */);
  }
  set MidImage(value) {
    this.SetProp("MidImage", 1 /* String */, value);
  }
  get ScrollBarImageColor3() {
    return this.GetProp("ScrollBarImageColor3", 12 /* Color3 */);
  }
  set ScrollBarImageColor3(value) {
    this.SetProp("ScrollBarImageColor3", 12 /* Color3 */, value);
  }
  get ScrollBarImageTransparency() {
    return this.GetProp("ScrollBarImageTransparency", 4 /* Float32 */);
  }
  set ScrollBarImageTransparency(value) {
    this.SetProp("ScrollBarImageTransparency", 4 /* Float32 */, value);
  }
  get ScrollBarThickness() {
    return this.GetProp("ScrollBarThickness", 3 /* Int32 */);
  }
  set ScrollBarThickness(value) {
    this.SetProp("ScrollBarThickness", 3 /* Int32 */, value);
  }
  get ScrollingDirection() {
    return this.GetProp("ScrollingDirection", 18 /* Enum */);
  }
  set ScrollingDirection(value) {
    this.SetProp("ScrollingDirection", 18 /* Enum */, value);
  }
  get ScrollingEnabled() {
    return this.GetProp("ScrollingEnabled", 2 /* Bool */);
  }
  set ScrollingEnabled(value) {
    this.SetProp("ScrollingEnabled", 2 /* Bool */, value);
  }
  get TopImage() {
    return this.GetProp("TopImage", 1 /* String */);
  }
  set TopImage(value) {
    this.SetProp("TopImage", 1 /* String */, value);
  }
  get VerticalScrollBarInset() {
    return this.GetProp("VerticalScrollBarInset", 18 /* Enum */);
  }
  set VerticalScrollBarInset(value) {
    this.SetProp("VerticalScrollBarInset", 18 /* Enum */, value);
  }
  get VerticalScrollBarPosition() {
    return this.GetProp("VerticalScrollBarPosition", 18 /* Enum */);
  }
  set VerticalScrollBarPosition(value) {
    this.SetProp("VerticalScrollBarPosition", 18 /* Enum */, value);
  }
};
var TextBox = class extends GuiObject {
  constructor() {
    super();
    this.addClassName("TextBox");
    this.Name = "TextBox";
    this.ClearTextOnFocus = true;
    this.FontSize = FontSize.Size8;
    this.LineHeight = 1;
    this.LocalizationMatchIdentifier = "";
    this.LocalizationMatchedSourceText = "";
    this.MaxVisibleGraphemes = -1;
    this.MultiLine = false;
    this.PlaceholderColor3 = Color3.FromRGB(179, 179, 179);
    this.PlaceholderText = "";
    this.RichText = false;
    this.ShowNativeInput = true;
    this.Text = "TextBox";
    this.TextColor3 = Color3.FromRGB(27, 42, 53);
    this.TextDirection = TextDirection.Auto;
    this.TextEditable = true;
    this.TextScaled = false;
    this.TextSize = 8;
    this.TextStrokeColor3 = Color3.FromRGB(0, 0, 0);
    this.TextStrokeTransparency = 1;
    this.TextTransparency = 0;
    this.TextTruncate = TextTruncate.None;
    this.TextWrap = false;
    this.TextWrapped = false;
    this.TextXAlignment = TextXAlignment.Center;
    this.TextYAlignment = TextYAlignment.Center;
    this.FontFace = new RBXMFont("rbxasset://fonts/families/LegacyArial.json", 400 /* Regular */, 0 /* Normal */);
    this.Active = true;
    this.ClipsDescendants = false;
    this.Selectable = true;
    this.SelectionGroup = false;
  }
  get ClearTextOnFocus() {
    return this.GetProp("ClearTextOnFocus", 2 /* Bool */);
  }
  set ClearTextOnFocus(value) {
    this.SetProp("ClearTextOnFocus", 2 /* Bool */, value);
  }
  get FontFace() {
    return this.GetProp("FontFace", 32 /* Font */);
  }
  set FontFace(value) {
    this.SetProp("FontFace", 32 /* Font */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get FontSize() {
    return this.GetProp("FontSize", 18 /* Enum */);
  }
  /**@deprecated Deprecated by Roblox*/
  set FontSize(value) {
    this.SetProp("FontSize", 18 /* Enum */, value);
  }
  get LineHeight() {
    return this.GetProp("LineHeight", 4 /* Float32 */);
  }
  set LineHeight(value) {
    this.SetProp("LineHeight", 4 /* Float32 */, value);
  }
  get LocalizationMatchIdentifier() {
    return this.GetProp("LocalizationMatchIdentifier", 1 /* String */);
  }
  set LocalizationMatchIdentifier(value) {
    this.SetProp("LocalizationMatchIdentifier", 1 /* String */, value);
  }
  get LocalizationMatchedSourceText() {
    return this.GetProp("LocalizationMatchedSourceText", 1 /* String */);
  }
  set LocalizationMatchedSourceText(value) {
    this.SetProp("LocalizationMatchedSourceText", 1 /* String */, value);
  }
  get MaxVisibleGraphemes() {
    return this.GetProp("MaxVisibleGraphemes", 3 /* Int32 */);
  }
  set MaxVisibleGraphemes(value) {
    this.SetProp("MaxVisibleGraphemes", 3 /* Int32 */, value);
  }
  get MultiLine() {
    return this.GetProp("MultiLine", 2 /* Bool */);
  }
  set MultiLine(value) {
    this.SetProp("MultiLine", 2 /* Bool */, value);
  }
  get PlaceholderColor3() {
    return this.GetProp("PlaceholderColor3", 12 /* Color3 */);
  }
  set PlaceholderColor3(value) {
    this.SetProp("PlaceholderColor3", 12 /* Color3 */, value);
  }
  get PlaceholderText() {
    return this.GetProp("PlaceholderText", 1 /* String */);
  }
  set PlaceholderText(value) {
    this.SetProp("PlaceholderText", 1 /* String */, value);
  }
  get RichText() {
    return this.GetProp("RichText", 2 /* Bool */);
  }
  set RichText(value) {
    this.SetProp("RichText", 2 /* Bool */, value);
  }
  get ShowNativeInput() {
    return this.GetProp("ShowNativeInput", 2 /* Bool */);
  }
  set ShowNativeInput(value) {
    this.SetProp("ShowNativeInput", 2 /* Bool */, value);
  }
  get Text() {
    return this.GetProp("Text", 1 /* String */);
  }
  set Text(value) {
    this.SetProp("Text", 1 /* String */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get TextColor() {
    return this.GetProp("TextColor", 11 /* BrickColor */);
  }
  /**@deprecated Deprecated by Roblox*/
  set TextColor(value) {
    this.SetProp("TextColor", 11 /* BrickColor */, value);
  }
  get TextColor3() {
    return this.GetProp("TextColor3", 12 /* Color3 */);
  }
  set TextColor3(value) {
    this.SetProp("TextColor3", 12 /* Color3 */, value);
  }
  get TextDirection() {
    return this.GetProp("TextDirection", 18 /* Enum */);
  }
  set TextDirection(value) {
    this.SetProp("TextDirection", 18 /* Enum */, value);
  }
  get TextEditable() {
    return this.GetProp("TextEditable", 2 /* Bool */);
  }
  set TextEditable(value) {
    this.SetProp("TextEditable", 2 /* Bool */, value);
  }
  get TextScaled() {
    return this.GetProp("TextScaled", 2 /* Bool */);
  }
  set TextScaled(value) {
    this.SetProp("TextScaled", 2 /* Bool */, value);
  }
  get TextSize() {
    return this.GetProp("TextSize", 4 /* Float32 */);
  }
  set TextSize(value) {
    this.SetProp("TextSize", 4 /* Float32 */, value);
  }
  get TextStrokeColor3() {
    return this.GetProp("TextStrokeColor3", 12 /* Color3 */);
  }
  set TextStrokeColor3(value) {
    this.SetProp("TextStrokeColor3", 12 /* Color3 */, value);
  }
  get TextStrokeTransparency() {
    return this.GetProp("TextStrokeTransparency", 4 /* Float32 */);
  }
  set TextStrokeTransparency(value) {
    this.SetProp("TextStrokeTransparency", 4 /* Float32 */, value);
  }
  get TextTransparency() {
    return this.GetProp("TextTransparency", 4 /* Float32 */);
  }
  set TextTransparency(value) {
    this.SetProp("TextTransparency", 4 /* Float32 */, value);
  }
  get TextTruncate() {
    return this.GetProp("TextTruncate", 18 /* Enum */);
  }
  set TextTruncate(value) {
    this.SetProp("TextTruncate", 18 /* Enum */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get TextWrap() {
    return this.GetProp("TextWrap", 2 /* Bool */);
  }
  /**@deprecated Deprecated by Roblox*/
  set TextWrap(value) {
    this.SetProp("TextWrap", 2 /* Bool */, value);
  }
  get TextWrapped() {
    return this.GetProp("TextWrapped", 2 /* Bool */);
  }
  set TextWrapped(value) {
    this.SetProp("TextWrapped", 2 /* Bool */, value);
  }
  get TextXAlignment() {
    return this.GetProp("TextXAlignment", 18 /* Enum */);
  }
  set TextXAlignment(value) {
    this.SetProp("TextXAlignment", 18 /* Enum */, value);
  }
  get TextYAlignment() {
    return this.GetProp("TextYAlignment", 18 /* Enum */);
  }
  set TextYAlignment(value) {
    this.SetProp("TextYAlignment", 18 /* Enum */, value);
  }
};
var VideoFrame = class extends GuiObject {
  constructor() {
    super();
    this.addClassName("VideoFrame");
    this.Name = "VideoFrame";
    this.Looped = false;
    this.Playing = false;
    this.TimePosition = 0;
    this.Video = "";
    this.Volume = 1;
    this.Active = false;
    this.ClipsDescendants = false;
    this.Selectable = false;
    this.SelectionGroup = false;
  }
  get Looped() {
    return this.GetProp("Looped", 2 /* Bool */);
  }
  set Looped(value) {
    this.SetProp("Looped", 2 /* Bool */, value);
  }
  get Playing() {
    return this.GetProp("Playing", 2 /* Bool */);
  }
  set Playing(value) {
    this.SetProp("Playing", 2 /* Bool */, value);
  }
  get TimePosition() {
    return this.GetProp("TimePosition", 5 /* Float64 */);
  }
  set TimePosition(value) {
    this.SetProp("TimePosition", 5 /* Float64 */, value);
  }
  get Video() {
    return this.GetProp("Video", 1 /* String */);
  }
  set Video(value) {
    this.SetProp("Video", 1 /* String */, value);
  }
  get Volume() {
    return this.GetProp("Volume", 4 /* Float32 */);
  }
  set Volume(value) {
    this.SetProp("Volume", 4 /* Float32 */, value);
  }
};
var ViewportFrame = class extends GuiObject {
  constructor() {
    super();
    this.addClassName("ViewportFrame");
    this.Name = "ViewportFrame";
    this.Ambient = Color3.FromRGB(200, 200, 200);
    this.CameraFieldOfView = 1.22173;
    this.ImageColor3 = Color3.FromRGB(255, 255, 255);
    this.ImageTransparency = 0;
    this.LightColor = Color3.FromRGB(140, 140, 140);
    this.LightDirection = new Vector3(-1, -1, -1);
    this.Active = false;
    this.ClipsDescendants = false;
    this.Selectable = false;
    this.SelectionGroup = false;
  }
  get Ambient() {
    return this.GetProp("Ambient", 12 /* Color3 */);
  }
  set Ambient(value) {
    this.SetProp("Ambient", 12 /* Color3 */, value);
  }
  get CameraCFrame() {
    return this.GetProp("CameraCFrame", 16 /* CFrame */);
  }
  set CameraCFrame(value) {
    this.SetProp("CameraCFrame", 16 /* CFrame */, value);
  }
  get CameraFieldOfView() {
    return this.GetProp("CameraFieldOfView", 4 /* Float32 */);
  }
  set CameraFieldOfView(value) {
    this.SetProp("CameraFieldOfView", 4 /* Float32 */, value);
  }
  get ImageColor3() {
    return this.GetProp("ImageColor3", 12 /* Color3 */);
  }
  set ImageColor3(value) {
    this.SetProp("ImageColor3", 12 /* Color3 */, value);
  }
  get ImageTransparency() {
    return this.GetProp("ImageTransparency", 4 /* Float32 */);
  }
  set ImageTransparency(value) {
    this.SetProp("ImageTransparency", 4 /* Float32 */, value);
  }
  get LightColor() {
    return this.GetProp("LightColor", 12 /* Color3 */);
  }
  set LightColor(value) {
    this.SetProp("LightColor", 12 /* Color3 */, value);
  }
  get LightDirection() {
    return this.GetProp("LightDirection", 14 /* Vector3 */);
  }
  set LightDirection(value) {
    this.SetProp("LightDirection", 14 /* Vector3 */, value);
  }
};
var LayerCollector = class extends GuiBase2d {
  constructor() {
    super();
    this.addClassName("LayerCollector");
    this.Enabled = true;
    this.ResetOnSpawn = true;
    this.ZIndexBehavior = ZIndexBehavior.Global;
    this.SelectionGroup = false;
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get ResetOnSpawn() {
    return this.GetProp("ResetOnSpawn", 2 /* Bool */);
  }
  set ResetOnSpawn(value) {
    this.SetProp("ResetOnSpawn", 2 /* Bool */, value);
  }
  get ZIndexBehavior() {
    return this.GetProp("ZIndexBehavior", 18 /* Enum */);
  }
  set ZIndexBehavior(value) {
    this.SetProp("ZIndexBehavior", 18 /* Enum */, value);
  }
};
var BillboardGui = class extends LayerCollector {
  constructor() {
    super();
    this.addClassName("BillboardGui");
    this.Name = "BillboardGui";
    this.Active = false;
    this.AlwaysOnTop = false;
    this.Brightness = 1;
    this.ClipsDescendants = false;
    this.DistanceLowerLimit = 0;
    this.DistanceStep = 0;
    this.DistanceUpperLimit = -1;
    this.ExtentsOffset = new Vector3(0, 0, 0);
    this.ExtentsOffsetWorldSpace = new Vector3(0, 0, 0);
    this.LightInfluence = 0;
    this.MaxDistance = Infinity;
    this.Size = new UDim2(new UDim(0, 0), new UDim(0, 0));
    this.SizeOffset = new Vector2(0, 0);
    this.StudsOffset = new Vector3(0, 0, 0);
    this.StudsOffsetWorldSpace = new Vector3(0, 0, 0);
  }
  get Active() {
    return this.GetProp("Active", 2 /* Bool */);
  }
  set Active(value) {
    this.SetProp("Active", 2 /* Bool */, value);
  }
  get Adornee() {
    return this.GetProp("Adornee", 19 /* Referent */);
  }
  set Adornee(value) {
    this.SetProp("Adornee", 19 /* Referent */, value);
  }
  get AlwaysOnTop() {
    return this.GetProp("AlwaysOnTop", 2 /* Bool */);
  }
  set AlwaysOnTop(value) {
    this.SetProp("AlwaysOnTop", 2 /* Bool */, value);
  }
  get Brightness() {
    return this.GetProp("Brightness", 4 /* Float32 */);
  }
  set Brightness(value) {
    this.SetProp("Brightness", 4 /* Float32 */, value);
  }
  get ClipsDescendants() {
    return this.GetProp("ClipsDescendants", 2 /* Bool */);
  }
  set ClipsDescendants(value) {
    this.SetProp("ClipsDescendants", 2 /* Bool */, value);
  }
  get DistanceLowerLimit() {
    return this.GetProp("DistanceLowerLimit", 4 /* Float32 */);
  }
  set DistanceLowerLimit(value) {
    this.SetProp("DistanceLowerLimit", 4 /* Float32 */, value);
  }
  get DistanceStep() {
    return this.GetProp("DistanceStep", 4 /* Float32 */);
  }
  set DistanceStep(value) {
    this.SetProp("DistanceStep", 4 /* Float32 */, value);
  }
  get DistanceUpperLimit() {
    return this.GetProp("DistanceUpperLimit", 4 /* Float32 */);
  }
  set DistanceUpperLimit(value) {
    this.SetProp("DistanceUpperLimit", 4 /* Float32 */, value);
  }
  get ExtentsOffset() {
    return this.GetProp("ExtentsOffset", 14 /* Vector3 */);
  }
  set ExtentsOffset(value) {
    this.SetProp("ExtentsOffset", 14 /* Vector3 */, value);
  }
  get ExtentsOffsetWorldSpace() {
    return this.GetProp("ExtentsOffsetWorldSpace", 14 /* Vector3 */);
  }
  set ExtentsOffsetWorldSpace(value) {
    this.SetProp("ExtentsOffsetWorldSpace", 14 /* Vector3 */, value);
  }
  get LightInfluence() {
    return this.GetProp("LightInfluence", 4 /* Float32 */);
  }
  set LightInfluence(value) {
    this.SetProp("LightInfluence", 4 /* Float32 */, value);
  }
  get MaxDistance() {
    return this.GetProp("MaxDistance", 4 /* Float32 */);
  }
  set MaxDistance(value) {
    this.SetProp("MaxDistance", 4 /* Float32 */, value);
  }
  get PlayerToHideFrom() {
    return this.GetProp("PlayerToHideFrom", 19 /* Referent */);
  }
  set PlayerToHideFrom(value) {
    this.SetProp("PlayerToHideFrom", 19 /* Referent */, value);
  }
  get Size() {
    return this.GetProp("Size", 7 /* UDim2 */);
  }
  set Size(value) {
    this.SetProp("Size", 7 /* UDim2 */, value);
  }
  get SizeOffset() {
    return this.GetProp("SizeOffset", 13 /* Vector2 */);
  }
  set SizeOffset(value) {
    this.SetProp("SizeOffset", 13 /* Vector2 */, value);
  }
  get StudsOffset() {
    return this.GetProp("StudsOffset", 14 /* Vector3 */);
  }
  set StudsOffset(value) {
    this.SetProp("StudsOffset", 14 /* Vector3 */, value);
  }
  get StudsOffsetWorldSpace() {
    return this.GetProp("StudsOffsetWorldSpace", 14 /* Vector3 */);
  }
  set StudsOffsetWorldSpace(value) {
    this.SetProp("StudsOffsetWorldSpace", 14 /* Vector3 */, value);
  }
};
var ScreenGui = class extends LayerCollector {
  constructor() {
    super();
    this.addClassName("ScreenGui");
    this.Name = "ScreenGui";
    this.ClipToDeviceSafeArea = true;
    this.DisplayOrder = 0;
    this.SafeAreaCompatibility = SafeAreaCompatibility.FullscreenExtension;
    this.ScreenInsets = ScreenInsets.CoreUISafeInsets;
  }
  get ClipToDeviceSafeArea() {
    return this.GetProp("ClipToDeviceSafeArea", 2 /* Bool */);
  }
  set ClipToDeviceSafeArea(value) {
    this.SetProp("ClipToDeviceSafeArea", 2 /* Bool */, value);
  }
  get DisplayOrder() {
    return this.GetProp("DisplayOrder", 3 /* Int32 */);
  }
  set DisplayOrder(value) {
    this.SetProp("DisplayOrder", 3 /* Int32 */, value);
  }
  get SafeAreaCompatibility() {
    return this.GetProp("SafeAreaCompatibility", 18 /* Enum */);
  }
  set SafeAreaCompatibility(value) {
    this.SetProp("SafeAreaCompatibility", 18 /* Enum */, value);
  }
  get ScreenInsets() {
    return this.GetProp("ScreenInsets", 18 /* Enum */);
  }
  set ScreenInsets(value) {
    this.SetProp("ScreenInsets", 18 /* Enum */, value);
  }
};
var GuiMain = class extends ScreenGui {
  constructor() {
    super();
    this.addClassName("GuiMain");
    this.Name = "GuiMain";
  }
};
var SurfaceGuiBase = class extends LayerCollector {
  constructor() {
    super();
    this.addClassName("SurfaceGuiBase");
    this.Active = true;
    this.Face = NormalId.Front;
  }
  get Active() {
    return this.GetProp("Active", 2 /* Bool */);
  }
  set Active(value) {
    this.SetProp("Active", 2 /* Bool */, value);
  }
  get Adornee() {
    return this.GetProp("Adornee", 19 /* Referent */);
  }
  set Adornee(value) {
    this.SetProp("Adornee", 19 /* Referent */, value);
  }
  get Face() {
    return this.GetProp("Face", 18 /* Enum */);
  }
  set Face(value) {
    this.SetProp("Face", 18 /* Enum */, value);
  }
};
var AdGui = class extends SurfaceGuiBase {
  constructor() {
    super();
    this.addClassName("AdGui");
    this.Name = "AdGui";
    this.AdShape = AdShape.HorizontalRectangle;
    this.EnableVideoAds = true;
    this.FallbackImage = "";
  }
  get AdShape() {
    return this.GetProp("AdShape", 18 /* Enum */);
  }
  set AdShape(value) {
    this.SetProp("AdShape", 18 /* Enum */, value);
  }
  get EnableVideoAds() {
    return this.GetProp("EnableVideoAds", 2 /* Bool */);
  }
  set EnableVideoAds(value) {
    this.SetProp("EnableVideoAds", 2 /* Bool */, value);
  }
  get FallbackImage() {
    return this.GetProp("FallbackImage", 1 /* String */);
  }
  set FallbackImage(value) {
    this.SetProp("FallbackImage", 1 /* String */, value);
  }
};
var SurfaceGui = class extends SurfaceGuiBase {
  constructor() {
    super();
    this.addClassName("SurfaceGui");
    this.Name = "SurfaceGui";
    this.AlwaysOnTop = false;
    this.Brightness = 1;
    this.CanvasSize = new Vector2(800, 600);
    this.ClipsDescendants = false;
    this.LightInfluence = 0;
    this.MaxDistance = 0;
    this.PixelsPerStud = 50;
    this.SizingMode = SurfaceGuiSizingMode.FixedSize;
    this.ToolPunchThroughDistance = 0;
    this.ZOffset = 0;
  }
  get AlwaysOnTop() {
    return this.GetProp("AlwaysOnTop", 2 /* Bool */);
  }
  set AlwaysOnTop(value) {
    this.SetProp("AlwaysOnTop", 2 /* Bool */, value);
  }
  get Brightness() {
    return this.GetProp("Brightness", 4 /* Float32 */);
  }
  set Brightness(value) {
    this.SetProp("Brightness", 4 /* Float32 */, value);
  }
  get CanvasSize() {
    return this.GetProp("CanvasSize", 13 /* Vector2 */);
  }
  set CanvasSize(value) {
    this.SetProp("CanvasSize", 13 /* Vector2 */, value);
  }
  get ClipsDescendants() {
    return this.GetProp("ClipsDescendants", 2 /* Bool */);
  }
  set ClipsDescendants(value) {
    this.SetProp("ClipsDescendants", 2 /* Bool */, value);
  }
  get LightInfluence() {
    return this.GetProp("LightInfluence", 4 /* Float32 */);
  }
  set LightInfluence(value) {
    this.SetProp("LightInfluence", 4 /* Float32 */, value);
  }
  get MaxDistance() {
    return this.GetProp("MaxDistance", 4 /* Float32 */);
  }
  set MaxDistance(value) {
    this.SetProp("MaxDistance", 4 /* Float32 */, value);
  }
  get PixelsPerStud() {
    return this.GetProp("PixelsPerStud", 4 /* Float32 */);
  }
  set PixelsPerStud(value) {
    this.SetProp("PixelsPerStud", 4 /* Float32 */, value);
  }
  get SizingMode() {
    return this.GetProp("SizingMode", 18 /* Enum */);
  }
  set SizingMode(value) {
    this.SetProp("SizingMode", 18 /* Enum */, value);
  }
  get ToolPunchThroughDistance() {
    return this.GetProp("ToolPunchThroughDistance", 4 /* Float32 */);
  }
  set ToolPunchThroughDistance(value) {
    this.SetProp("ToolPunchThroughDistance", 4 /* Float32 */, value);
  }
  get ZOffset() {
    return this.GetProp("ZOffset", 4 /* Float32 */);
  }
  set ZOffset(value) {
    this.SetProp("ZOffset", 4 /* Float32 */, value);
  }
};
var GuiBase3d = class extends GuiBase {
  constructor() {
    super();
    this.addClassName("GuiBase3d");
    this.Transparency = 0;
    this.Visible = true;
  }
  /**@deprecated Deprecated by Roblox*/
  get Color() {
    return this.GetProp("Color", 11 /* BrickColor */);
  }
  /**@deprecated Deprecated by Roblox*/
  set Color(value) {
    this.SetProp("Color", 11 /* BrickColor */, value);
  }
  get Color3() {
    return this.GetProp("Color3", 12 /* Color3 */);
  }
  set Color3(value) {
    this.SetProp("Color3", 12 /* Color3 */, value);
  }
  get Transparency() {
    return this.GetProp("Transparency", 4 /* Float32 */);
  }
  set Transparency(value) {
    this.SetProp("Transparency", 4 /* Float32 */, value);
  }
  get Visible() {
    return this.GetProp("Visible", 2 /* Bool */);
  }
  set Visible(value) {
    this.SetProp("Visible", 2 /* Bool */, value);
  }
};
var FloorWire = class extends GuiBase3d {
  constructor() {
    super();
    this.addClassName("FloorWire");
    this.Name = "FloorWire";
    this.CycleOffset = 0;
    this.StudsBetweenTextures = 4;
    this.Texture = "";
    this.TextureSize = new Vector2(1, 1);
    this.Velocity = 2;
    this.WireRadius = 0.0625;
    this.Color3 = Color3.FromRGB(13, 105, 172);
  }
  get CycleOffset() {
    return this.GetProp("CycleOffset", 4 /* Float32 */);
  }
  set CycleOffset(value) {
    this.SetProp("CycleOffset", 4 /* Float32 */, value);
  }
  get From() {
    return this.GetProp("From", 19 /* Referent */);
  }
  set From(value) {
    this.SetProp("From", 19 /* Referent */, value);
  }
  get StudsBetweenTextures() {
    return this.GetProp("StudsBetweenTextures", 4 /* Float32 */);
  }
  set StudsBetweenTextures(value) {
    this.SetProp("StudsBetweenTextures", 4 /* Float32 */, value);
  }
  get Texture() {
    return this.GetProp("Texture", 1 /* String */);
  }
  set Texture(value) {
    this.SetProp("Texture", 1 /* String */, value);
  }
  get TextureSize() {
    return this.GetProp("TextureSize", 13 /* Vector2 */);
  }
  set TextureSize(value) {
    this.SetProp("TextureSize", 13 /* Vector2 */, value);
  }
  get To() {
    return this.GetProp("To", 19 /* Referent */);
  }
  set To(value) {
    this.SetProp("To", 19 /* Referent */, value);
  }
  get Velocity() {
    return this.GetProp("Velocity", 4 /* Float32 */);
  }
  set Velocity(value) {
    this.SetProp("Velocity", 4 /* Float32 */, value);
  }
  get WireRadius() {
    return this.GetProp("WireRadius", 4 /* Float32 */);
  }
  set WireRadius(value) {
    this.SetProp("WireRadius", 4 /* Float32 */, value);
  }
};
var InstanceAdornment = class extends GuiBase3d {
  constructor() {
    super();
    this.addClassName("InstanceAdornment");
    this.Color3 = Color3.FromRGB(13, 105, 172);
  }
  get Adornee() {
    return this.GetProp("Adornee", 19 /* Referent */);
  }
  set Adornee(value) {
    this.SetProp("Adornee", 19 /* Referent */, value);
  }
};
var SelectionBox = class extends InstanceAdornment {
  constructor() {
    super();
    this.addClassName("SelectionBox");
    this.Name = "SelectionBox";
    this.LineThickness = 0.15;
    this.StudioSelectionBox = false;
    this.SurfaceColor3 = Color3.FromRGB(13, 105, 172);
    this.SurfaceTransparency = 1;
  }
  get LineThickness() {
    return this.GetProp("LineThickness", 4 /* Float32 */);
  }
  set LineThickness(value) {
    this.SetProp("LineThickness", 4 /* Float32 */, value);
  }
  get StudioSelectionBox() {
    return this.GetProp("StudioSelectionBox", 2 /* Bool */);
  }
  set StudioSelectionBox(value) {
    this.SetProp("StudioSelectionBox", 2 /* Bool */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get SurfaceColor() {
    return this.GetProp("SurfaceColor", 11 /* BrickColor */);
  }
  /**@deprecated Deprecated by Roblox*/
  set SurfaceColor(value) {
    this.SetProp("SurfaceColor", 11 /* BrickColor */, value);
  }
  get SurfaceColor3() {
    return this.GetProp("SurfaceColor3", 12 /* Color3 */);
  }
  set SurfaceColor3(value) {
    this.SetProp("SurfaceColor3", 12 /* Color3 */, value);
  }
  get SurfaceTransparency() {
    return this.GetProp("SurfaceTransparency", 4 /* Float32 */);
  }
  set SurfaceTransparency(value) {
    this.SetProp("SurfaceTransparency", 4 /* Float32 */, value);
  }
};
var PVAdornment = class extends GuiBase3d {
  constructor() {
    super();
    this.addClassName("PVAdornment");
  }
  get Adornee() {
    return this.GetProp("Adornee", 19 /* Referent */);
  }
  set Adornee(value) {
    this.SetProp("Adornee", 19 /* Referent */, value);
  }
};
var HandleAdornment = class extends PVAdornment {
  constructor() {
    super();
    this.addClassName("HandleAdornment");
    this.AdornCullingMode = AdornCullingMode.Automatic;
    this.AlwaysOnTop = false;
    this.CFrame = CFrame.Identity;
    this.SizeRelativeOffset = new Vector3(0, 0, 0);
    this.ZIndex = -1;
  }
  get AdornCullingMode() {
    return this.GetProp("AdornCullingMode", 18 /* Enum */);
  }
  set AdornCullingMode(value) {
    this.SetProp("AdornCullingMode", 18 /* Enum */, value);
  }
  get AlwaysOnTop() {
    return this.GetProp("AlwaysOnTop", 2 /* Bool */);
  }
  set AlwaysOnTop(value) {
    this.SetProp("AlwaysOnTop", 2 /* Bool */, value);
  }
  get CFrame() {
    return this.GetProp("CFrame", 16 /* CFrame */);
  }
  set CFrame(value) {
    this.SetProp("CFrame", 16 /* CFrame */, value);
  }
  get SizeRelativeOffset() {
    return this.GetProp("SizeRelativeOffset", 14 /* Vector3 */);
  }
  set SizeRelativeOffset(value) {
    this.SetProp("SizeRelativeOffset", 14 /* Vector3 */, value);
  }
  get ZIndex() {
    return this.GetProp("ZIndex", 3 /* Int32 */);
  }
  set ZIndex(value) {
    this.SetProp("ZIndex", 3 /* Int32 */, value);
  }
};
var BoxHandleAdornment = class extends HandleAdornment {
  constructor() {
    super();
    this.addClassName("BoxHandleAdornment");
    this.Name = "BoxHandleAdornment";
    this.Size = new Vector3(1, 1, 1);
    this.Color3 = Color3.FromRGB(13, 105, 172);
  }
  get Size() {
    return this.GetProp("Size", 14 /* Vector3 */);
  }
  set Size(value) {
    this.SetProp("Size", 14 /* Vector3 */, value);
  }
};
var ConeHandleAdornment = class extends HandleAdornment {
  constructor() {
    super();
    this.addClassName("ConeHandleAdornment");
    this.Name = "ConeHandleAdornment";
    this.Height = 2;
    this.Radius = 0.5;
    this.Color3 = Color3.FromRGB(13, 105, 172);
  }
  get Height() {
    return this.GetProp("Height", 4 /* Float32 */);
  }
  set Height(value) {
    this.SetProp("Height", 4 /* Float32 */, value);
  }
  get Radius() {
    return this.GetProp("Radius", 4 /* Float32 */);
  }
  set Radius(value) {
    this.SetProp("Radius", 4 /* Float32 */, value);
  }
};
var CylinderHandleAdornment = class extends HandleAdornment {
  constructor() {
    super();
    this.addClassName("CylinderHandleAdornment");
    this.Name = "CylinderHandleAdornment";
    this.Angle = 360;
    this.Height = 1;
    this.InnerRadius = 0;
    this.Radius = 1;
    this.Color3 = Color3.FromRGB(13, 105, 172);
  }
  get Angle() {
    return this.GetProp("Angle", 4 /* Float32 */);
  }
  set Angle(value) {
    this.SetProp("Angle", 4 /* Float32 */, value);
  }
  get Height() {
    return this.GetProp("Height", 4 /* Float32 */);
  }
  set Height(value) {
    this.SetProp("Height", 4 /* Float32 */, value);
  }
  get InnerRadius() {
    return this.GetProp("InnerRadius", 4 /* Float32 */);
  }
  set InnerRadius(value) {
    this.SetProp("InnerRadius", 4 /* Float32 */, value);
  }
  get Radius() {
    return this.GetProp("Radius", 4 /* Float32 */);
  }
  set Radius(value) {
    this.SetProp("Radius", 4 /* Float32 */, value);
  }
};
var ImageHandleAdornment = class extends HandleAdornment {
  constructor() {
    super();
    this.addClassName("ImageHandleAdornment");
    this.Name = "ImageHandleAdornment";
    this.Image = "rbxasset://textures/SurfacesDefault.png";
    this.Size = new Vector2(1, 1);
    this.Color3 = Color3.FromRGB(242, 243, 243);
  }
  get Image() {
    return this.GetProp("Image", 1 /* String */);
  }
  set Image(value) {
    this.SetProp("Image", 1 /* String */, value);
  }
  get Size() {
    return this.GetProp("Size", 13 /* Vector2 */);
  }
  set Size(value) {
    this.SetProp("Size", 13 /* Vector2 */, value);
  }
};
var LineHandleAdornment = class extends HandleAdornment {
  constructor() {
    super();
    this.addClassName("LineHandleAdornment");
    this.Name = "LineHandleAdornment";
    this.Length = 5;
    this.Thickness = 1;
    this.Color3 = Color3.FromRGB(13, 105, 172);
  }
  get Length() {
    return this.GetProp("Length", 4 /* Float32 */);
  }
  set Length(value) {
    this.SetProp("Length", 4 /* Float32 */, value);
  }
  get Thickness() {
    return this.GetProp("Thickness", 4 /* Float32 */);
  }
  set Thickness(value) {
    this.SetProp("Thickness", 4 /* Float32 */, value);
  }
};
var SphereHandleAdornment = class extends HandleAdornment {
  constructor() {
    super();
    this.addClassName("SphereHandleAdornment");
    this.Name = "SphereHandleAdornment";
    this.Radius = 1;
    this.Color3 = Color3.FromRGB(13, 105, 172);
  }
  get Radius() {
    return this.GetProp("Radius", 4 /* Float32 */);
  }
  set Radius(value) {
    this.SetProp("Radius", 4 /* Float32 */, value);
  }
};
var WireframeHandleAdornment = class extends HandleAdornment {
  constructor() {
    super();
    this.addClassName("WireframeHandleAdornment");
    this.Name = "WireframeHandleAdornment";
    this.Scale = new Vector3(1, 1, 1);
    this.Color3 = Color3.FromRGB(13, 105, 172);
  }
  get Scale() {
    return this.GetProp("Scale", 14 /* Vector3 */);
  }
  set Scale(value) {
    this.SetProp("Scale", 14 /* Vector3 */, value);
  }
};
var ParabolaAdornment = class extends PVAdornment {
  constructor() {
    super();
    this.addClassName("ParabolaAdornment");
    this.Name = "ParabolaAdornment";
  }
};
var SelectionSphere = class extends PVAdornment {
  constructor() {
    super();
    this.addClassName("SelectionSphere");
    this.Name = "SelectionSphere";
    this.SurfaceColor3 = Color3.FromRGB(13, 105, 172);
    this.SurfaceTransparency = 1;
    this.Color3 = Color3.FromRGB(13, 105, 172);
  }
  /**@deprecated Deprecated by Roblox*/
  get SurfaceColor() {
    return this.GetProp("SurfaceColor", 11 /* BrickColor */);
  }
  /**@deprecated Deprecated by Roblox*/
  set SurfaceColor(value) {
    this.SetProp("SurfaceColor", 11 /* BrickColor */, value);
  }
  get SurfaceColor3() {
    return this.GetProp("SurfaceColor3", 12 /* Color3 */);
  }
  set SurfaceColor3(value) {
    this.SetProp("SurfaceColor3", 12 /* Color3 */, value);
  }
  get SurfaceTransparency() {
    return this.GetProp("SurfaceTransparency", 4 /* Float32 */);
  }
  set SurfaceTransparency(value) {
    this.SetProp("SurfaceTransparency", 4 /* Float32 */, value);
  }
};
var PartAdornment = class extends GuiBase3d {
  constructor() {
    super();
    this.addClassName("PartAdornment");
    this.Color3 = Color3.FromRGB(13, 105, 172);
  }
  get Adornee() {
    return this.GetProp("Adornee", 19 /* Referent */);
  }
  set Adornee(value) {
    this.SetProp("Adornee", 19 /* Referent */, value);
  }
};
var HandlesBase = class extends PartAdornment {
  constructor() {
    super();
    this.addClassName("HandlesBase");
  }
};
var ArcHandles = class extends HandlesBase {
  constructor() {
    super();
    this.addClassName("ArcHandles");
    this.Name = "ArcHandles";
    this.Axes = new Axes(1 /* X */, 2 /* Y */, 4 /* Z */);
  }
  get Axes() {
    return this.GetProp("Axes", 10 /* Axes */);
  }
  set Axes(value) {
    this.SetProp("Axes", 10 /* Axes */, value);
  }
};
var Handles = class extends HandlesBase {
  constructor() {
    super();
    this.addClassName("Handles");
    this.Name = "Handles";
    this.Faces = new Faces(32 /* Right */, 16 /* Top */, 8 /* Back */, 4 /* Left */, 2 /* Bottom */, 1 /* Front */);
    this.Style = HandlesStyle.Resize;
  }
  get Faces() {
    return this.GetProp("Faces", 9 /* Faces */);
  }
  set Faces(value) {
    this.SetProp("Faces", 9 /* Faces */, value);
  }
  get Style() {
    return this.GetProp("Style", 18 /* Enum */);
  }
  set Style(value) {
    this.SetProp("Style", 18 /* Enum */, value);
  }
};
var SurfaceSelection = class extends PartAdornment {
  constructor() {
    super();
    this.addClassName("SurfaceSelection");
    this.Name = "SurfaceSelection";
    this.TargetSurface = NormalId.Right;
  }
  get TargetSurface() {
    return this.GetProp("TargetSurface", 18 /* Enum */);
  }
  set TargetSurface(value) {
    this.SetProp("TargetSurface", 18 /* Enum */, value);
  }
};
var SelectionLasso = class extends GuiBase3d {
  constructor() {
    super();
    this.addClassName("SelectionLasso");
    this.Color3 = Color3.FromRGB(13, 105, 172);
  }
  get Humanoid() {
    return this.GetProp("Humanoid", 19 /* Referent */);
  }
  set Humanoid(value) {
    this.SetProp("Humanoid", 19 /* Referent */, value);
  }
};
var SelectionPartLasso = class extends SelectionLasso {
  constructor() {
    super();
    this.addClassName("SelectionPartLasso");
    this.Name = "SelectionPartLasso";
  }
  get Part() {
    return this.GetProp("Part", 19 /* Referent */);
  }
  set Part(value) {
    this.SetProp("Part", 19 /* Referent */, value);
  }
};
var SelectionPointLasso = class extends SelectionLasso {
  constructor() {
    super();
    this.addClassName("SelectionPointLasso");
    this.Name = "SelectionPointLasso";
    this.Point = new Vector3(0, 0, 0);
  }
  get Point() {
    return this.GetProp("Point", 14 /* Vector3 */);
  }
  set Point(value) {
    this.SetProp("Point", 14 /* Vector3 */, value);
  }
};
var Path2D = class extends GuiBase {
  constructor() {
    super();
    this.addClassName("Path2D");
    this.Name = "Path2D";
    this.Color3 = Color3.FromRGB(0, 0, 0);
    this.PropertiesSerialize = "";
    this.Thickness = 1;
    this.Transparency = 0;
    this.Visible = true;
    this.ZIndex = 1;
  }
  get Color3() {
    return this.GetProp("Color3", 12 /* Color3 */);
  }
  set Color3(value) {
    this.SetProp("Color3", 12 /* Color3 */, value);
  }
  get PropertiesSerialize() {
    return this.GetProp("PropertiesSerialize", 1 /* String */);
  }
  set PropertiesSerialize(value) {
    this.SetProp("PropertiesSerialize", 1 /* String */, value);
  }
  get Thickness() {
    return this.GetProp("Thickness", 4 /* Float32 */);
  }
  set Thickness(value) {
    this.SetProp("Thickness", 4 /* Float32 */, value);
  }
  get Transparency() {
    return this.GetProp("Transparency", 4 /* Float32 */);
  }
  set Transparency(value) {
    this.SetProp("Transparency", 4 /* Float32 */, value);
  }
  get Visible() {
    return this.GetProp("Visible", 2 /* Bool */);
  }
  set Visible(value) {
    this.SetProp("Visible", 2 /* Bool */, value);
  }
  get ZIndex() {
    return this.GetProp("ZIndex", 3 /* Int32 */);
  }
  set ZIndex(value) {
    this.SetProp("ZIndex", 3 /* Int32 */, value);
  }
};
var GuiService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("GuiService");
    this.Name = "GuiService";
    this.AutoSelectGuiEnabled = true;
    this.GuiNavigationEnabled = true;
  }
  get AutoSelectGuiEnabled() {
    return this.GetProp("AutoSelectGuiEnabled", 2 /* Bool */);
  }
  set AutoSelectGuiEnabled(value) {
    this.SetProp("AutoSelectGuiEnabled", 2 /* Bool */, value);
  }
  get GuiNavigationEnabled() {
    return this.GetProp("GuiNavigationEnabled", 2 /* Bool */);
  }
  set GuiNavigationEnabled(value) {
    this.SetProp("GuiNavigationEnabled", 2 /* Bool */, value);
  }
  get SelectedObject() {
    return this.GetProp("SelectedObject", 19 /* Referent */);
  }
  set SelectedObject(value) {
    this.SetProp("SelectedObject", 19 /* Referent */, value);
  }
};
var GuidRegistryService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("GuidRegistryService");
    this.Name = "GuidRegistryService";
  }
};
var HapticService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("HapticService");
    this.Name = "HapticService";
  }
};
var HeightmapImporterService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("HeightmapImporterService");
    this.Name = "HeightmapImporterService";
  }
};
var HiddenSurfaceRemovalAsset = class extends Instance {
  constructor() {
    super();
    this.addClassName("HiddenSurfaceRemovalAsset");
    this.Name = "HiddenSurfaceRemovalAsset";
    this.HSRData = "";
    this.HSRMeshIdData = "";
  }
  get HSRData() {
    return this.GetProp("HSRData", 1 /* String */);
  }
  set HSRData(value) {
    this.SetProp("HSRData", 1 /* String */, value);
  }
  get HSRMeshIdData() {
    return this.GetProp("HSRMeshIdData", 1 /* String */);
  }
  set HSRMeshIdData(value) {
    this.SetProp("HSRMeshIdData", 1 /* String */, value);
  }
};
var Highlight = class extends Instance {
  constructor() {
    super();
    this.addClassName("Highlight");
    this.Name = "Highlight";
    this.DepthMode = HighlightDepthMode.AlwaysOnTop;
    this.Enabled = true;
    this.FillColor = Color3.FromRGB(255, 0, 0);
    this.FillTransparency = 0.5;
    this.OutlineColor = Color3.FromRGB(255, 255, 255);
    this.OutlineTransparency = 0;
  }
  get Adornee() {
    return this.GetProp("Adornee", 19 /* Referent */);
  }
  set Adornee(value) {
    this.SetProp("Adornee", 19 /* Referent */, value);
  }
  get DepthMode() {
    return this.GetProp("DepthMode", 18 /* Enum */);
  }
  set DepthMode(value) {
    this.SetProp("DepthMode", 18 /* Enum */, value);
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get FillColor() {
    return this.GetProp("FillColor", 12 /* Color3 */);
  }
  set FillColor(value) {
    this.SetProp("FillColor", 12 /* Color3 */, value);
  }
  get FillTransparency() {
    return this.GetProp("FillTransparency", 4 /* Float32 */);
  }
  set FillTransparency(value) {
    this.SetProp("FillTransparency", 4 /* Float32 */, value);
  }
  get OutlineColor() {
    return this.GetProp("OutlineColor", 12 /* Color3 */);
  }
  set OutlineColor(value) {
    this.SetProp("OutlineColor", 12 /* Color3 */, value);
  }
  get OutlineTransparency() {
    return this.GetProp("OutlineTransparency", 4 /* Float32 */);
  }
  set OutlineTransparency(value) {
    this.SetProp("OutlineTransparency", 4 /* Float32 */, value);
  }
};
var Hopper = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("Hopper");
    this.Name = "Hopper";
  }
};
var HttpRbxApiService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("HttpRbxApiService");
    this.Name = "HttpRbxApiService";
  }
};
var HttpService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("HttpService");
    this.Name = "HttpService";
    this.HttpEnabled = false;
  }
  get HttpEnabled() {
    return this.GetProp("HttpEnabled", 2 /* Bool */);
  }
  set HttpEnabled(value) {
    this.SetProp("HttpEnabled", 2 /* Bool */, value);
  }
};
var Humanoid = class extends Instance {
  constructor() {
    super();
    this.addClassName("Humanoid");
    this.Name = "Humanoid";
    this.AutoJumpEnabled = true;
    this.AutoRotate = true;
    this.AutomaticScalingEnabled = true;
    this.BreakJointsOnDeath = true;
    this.CollisionType = HumanoidCollisionType.OuterBox;
    this.DisplayDistanceType = HumanoidDisplayDistanceType.Viewer;
    this.DisplayName = "";
    this.EvaluateStateMachine = true;
    this.HealthDisplayDistance = 100;
    this.HealthDisplayType = HumanoidHealthDisplayType.DisplayWhenDamaged;
    this.HealthXML = 100;
    this.HipHeight = 0;
    this.InternalBodyScale = new Vector3(1, 1, 1);
    this.InternalHeadScale = 1;
    this.JumpHeight = 7.2;
    this.JumpPower = 50;
    this.MaxHealth = 100;
    this.MaxSlopeAngle = 89;
    this.NameDisplayDistance = 100;
    this.NameOcclusion = NameOcclusion.OccludeAll;
    this.RequiresNeck = true;
    this.RigType = HumanoidRigType.R6;
    this.UseJumpPower = true;
    this.WalkSpeed = 16;
  }
  get AutoJumpEnabled() {
    return this.GetProp("AutoJumpEnabled", 2 /* Bool */);
  }
  set AutoJumpEnabled(value) {
    this.SetProp("AutoJumpEnabled", 2 /* Bool */, value);
  }
  get AutoRotate() {
    return this.GetProp("AutoRotate", 2 /* Bool */);
  }
  set AutoRotate(value) {
    this.SetProp("AutoRotate", 2 /* Bool */, value);
  }
  get AutomaticScalingEnabled() {
    return this.GetProp("AutomaticScalingEnabled", 2 /* Bool */);
  }
  set AutomaticScalingEnabled(value) {
    this.SetProp("AutomaticScalingEnabled", 2 /* Bool */, value);
  }
  get BreakJointsOnDeath() {
    return this.GetProp("BreakJointsOnDeath", 2 /* Bool */);
  }
  set BreakJointsOnDeath(value) {
    this.SetProp("BreakJointsOnDeath", 2 /* Bool */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get CollisionType() {
    return this.GetProp("CollisionType", 18 /* Enum */);
  }
  /**@deprecated Deprecated by Roblox*/
  set CollisionType(value) {
    this.SetProp("CollisionType", 18 /* Enum */, value);
  }
  get DisplayDistanceType() {
    return this.GetProp("DisplayDistanceType", 18 /* Enum */);
  }
  set DisplayDistanceType(value) {
    this.SetProp("DisplayDistanceType", 18 /* Enum */, value);
  }
  get DisplayName() {
    return this.GetProp("DisplayName", 1 /* String */);
  }
  set DisplayName(value) {
    this.SetProp("DisplayName", 1 /* String */, value);
  }
  get EvaluateStateMachine() {
    return this.GetProp("EvaluateStateMachine", 2 /* Bool */);
  }
  set EvaluateStateMachine(value) {
    this.SetProp("EvaluateStateMachine", 2 /* Bool */, value);
  }
  get HealthDisplayDistance() {
    return this.GetProp("HealthDisplayDistance", 4 /* Float32 */);
  }
  set HealthDisplayDistance(value) {
    this.SetProp("HealthDisplayDistance", 4 /* Float32 */, value);
  }
  get HealthDisplayType() {
    return this.GetProp("HealthDisplayType", 18 /* Enum */);
  }
  set HealthDisplayType(value) {
    this.SetProp("HealthDisplayType", 18 /* Enum */, value);
  }
  get HealthXML() {
    return this.GetProp("Health_XML", 4 /* Float32 */);
  }
  set HealthXML(value) {
    this.SetProp("Health_XML", 4 /* Float32 */, value);
  }
  get HipHeight() {
    return this.GetProp("HipHeight", 4 /* Float32 */);
  }
  set HipHeight(value) {
    this.SetProp("HipHeight", 4 /* Float32 */, value);
  }
  get InternalBodyScale() {
    return this.GetProp("InternalBodyScale", 14 /* Vector3 */);
  }
  set InternalBodyScale(value) {
    this.SetProp("InternalBodyScale", 14 /* Vector3 */, value);
  }
  get InternalHeadScale() {
    return this.GetProp("InternalHeadScale", 4 /* Float32 */);
  }
  set InternalHeadScale(value) {
    this.SetProp("InternalHeadScale", 4 /* Float32 */, value);
  }
  get JumpHeight() {
    return this.GetProp("JumpHeight", 4 /* Float32 */);
  }
  set JumpHeight(value) {
    this.SetProp("JumpHeight", 4 /* Float32 */, value);
  }
  get JumpPower() {
    return this.GetProp("JumpPower", 4 /* Float32 */);
  }
  set JumpPower(value) {
    this.SetProp("JumpPower", 4 /* Float32 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get LeftLeg() {
    return this.GetProp("LeftLeg", 19 /* Referent */);
  }
  /**@deprecated Deprecated by Roblox*/
  set LeftLeg(value) {
    this.SetProp("LeftLeg", 19 /* Referent */, value);
  }
  get MaxHealth() {
    return this.GetProp("MaxHealth", 4 /* Float32 */);
  }
  set MaxHealth(value) {
    this.SetProp("MaxHealth", 4 /* Float32 */, value);
  }
  get MaxSlopeAngle() {
    return this.GetProp("MaxSlopeAngle", 4 /* Float32 */);
  }
  set MaxSlopeAngle(value) {
    this.SetProp("MaxSlopeAngle", 4 /* Float32 */, value);
  }
  get NameDisplayDistance() {
    return this.GetProp("NameDisplayDistance", 4 /* Float32 */);
  }
  set NameDisplayDistance(value) {
    this.SetProp("NameDisplayDistance", 4 /* Float32 */, value);
  }
  get NameOcclusion() {
    return this.GetProp("NameOcclusion", 18 /* Enum */);
  }
  set NameOcclusion(value) {
    this.SetProp("NameOcclusion", 18 /* Enum */, value);
  }
  get RequiresNeck() {
    return this.GetProp("RequiresNeck", 2 /* Bool */);
  }
  set RequiresNeck(value) {
    this.SetProp("RequiresNeck", 2 /* Bool */, value);
  }
  get RigType() {
    return this.GetProp("RigType", 18 /* Enum */);
  }
  set RigType(value) {
    this.SetProp("RigType", 18 /* Enum */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get RightLeg() {
    return this.GetProp("RightLeg", 19 /* Referent */);
  }
  /**@deprecated Deprecated by Roblox*/
  set RightLeg(value) {
    this.SetProp("RightLeg", 19 /* Referent */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get Torso() {
    return this.GetProp("Torso", 19 /* Referent */);
  }
  /**@deprecated Deprecated by Roblox*/
  set Torso(value) {
    this.SetProp("Torso", 19 /* Referent */, value);
  }
  get UseJumpPower() {
    return this.GetProp("UseJumpPower", 2 /* Bool */);
  }
  set UseJumpPower(value) {
    this.SetProp("UseJumpPower", 2 /* Bool */, value);
  }
  get WalkSpeed() {
    return this.GetProp("WalkSpeed", 4 /* Float32 */);
  }
  set WalkSpeed(value) {
    this.SetProp("WalkSpeed", 4 /* Float32 */, value);
  }
};
var HumanoidDescription = class extends Instance {
  constructor() {
    super();
    this.addClassName("HumanoidDescription");
    this.Name = "HumanoidDescription";
    this.AccessoryBlob = "[]";
    this.AccessoryRigidAndLayeredBlob = "[]";
    this.BackAccessory = "";
    this.BodyTypeScale = 0.3;
    this.ClimbAnimation = BigInt(0);
    this.DepthScale = 1;
    this.EmotesDataInternal = "";
    this.EquippedEmotesDataInternal = "";
    this.Face = BigInt(0);
    this.FaceAccessory = "";
    this.FallAnimation = BigInt(0);
    this.FrontAccessory = "";
    this.GraphicTShirt = BigInt(0);
    this.HairAccessory = "";
    this.HatAccessory = "";
    this.Head = BigInt(0);
    this.HeadColor = Color3.FromRGB(0, 0, 0);
    this.HeadScale = 1;
    this.HeightScale = 1;
    this.IdleAnimation = BigInt(0);
    this.JumpAnimation = BigInt(0);
    this.LeftArm = BigInt(0);
    this.LeftArmColor = Color3.FromRGB(0, 0, 0);
    this.LeftLeg = BigInt(0);
    this.LeftLegColor = Color3.FromRGB(0, 0, 0);
    this.MoodAnimation = BigInt(0);
    this.NeckAccessory = "";
    this.Pants = BigInt(0);
    this.ProportionScale = 1;
    this.RightArm = BigInt(0);
    this.RightArmColor = Color3.FromRGB(0, 0, 0);
    this.RightLeg = BigInt(0);
    this.RightLegColor = Color3.FromRGB(0, 0, 0);
    this.RunAnimation = BigInt(0);
    this.Shirt = BigInt(0);
    this.ShouldersAccessory = "";
    this.SwimAnimation = BigInt(0);
    this.Torso = BigInt(0);
    this.TorsoColor = Color3.FromRGB(0, 0, 0);
    this.WaistAccessory = "";
    this.WalkAnimation = BigInt(0);
    this.WidthScale = 1;
  }
  get AccessoryBlob() {
    return this.GetProp("AccessoryBlob", 1 /* String */);
  }
  set AccessoryBlob(value) {
    this.SetProp("AccessoryBlob", 1 /* String */, value);
  }
  get AccessoryRigidAndLayeredBlob() {
    return this.GetProp("AccessoryRigidAndLayeredBlob", 1 /* String */);
  }
  set AccessoryRigidAndLayeredBlob(value) {
    this.SetProp("AccessoryRigidAndLayeredBlob", 1 /* String */, value);
  }
  get BackAccessory() {
    return this.GetProp("BackAccessory", 1 /* String */);
  }
  set BackAccessory(value) {
    this.SetProp("BackAccessory", 1 /* String */, value);
  }
  get BodyTypeScale() {
    return this.GetProp("BodyTypeScale", 4 /* Float32 */);
  }
  set BodyTypeScale(value) {
    this.SetProp("BodyTypeScale", 4 /* Float32 */, value);
  }
  get ClimbAnimation() {
    return this.GetProp("ClimbAnimation", 27 /* Int64 */);
  }
  set ClimbAnimation(value) {
    this.SetProp("ClimbAnimation", 27 /* Int64 */, value);
  }
  get DepthScale() {
    return this.GetProp("DepthScale", 4 /* Float32 */);
  }
  set DepthScale(value) {
    this.SetProp("DepthScale", 4 /* Float32 */, value);
  }
  get EmotesDataInternal() {
    return this.GetProp("EmotesDataInternal", 1 /* String */);
  }
  set EmotesDataInternal(value) {
    this.SetProp("EmotesDataInternal", 1 /* String */, value);
  }
  get EquippedEmotesDataInternal() {
    return this.GetProp("EquippedEmotesDataInternal", 1 /* String */);
  }
  set EquippedEmotesDataInternal(value) {
    this.SetProp("EquippedEmotesDataInternal", 1 /* String */, value);
  }
  get Face() {
    return this.GetProp("Face", 27 /* Int64 */);
  }
  set Face(value) {
    this.SetProp("Face", 27 /* Int64 */, value);
  }
  get FaceAccessory() {
    return this.GetProp("FaceAccessory", 1 /* String */);
  }
  set FaceAccessory(value) {
    this.SetProp("FaceAccessory", 1 /* String */, value);
  }
  get FallAnimation() {
    return this.GetProp("FallAnimation", 27 /* Int64 */);
  }
  set FallAnimation(value) {
    this.SetProp("FallAnimation", 27 /* Int64 */, value);
  }
  get FrontAccessory() {
    return this.GetProp("FrontAccessory", 1 /* String */);
  }
  set FrontAccessory(value) {
    this.SetProp("FrontAccessory", 1 /* String */, value);
  }
  get GraphicTShirt() {
    return this.GetProp("GraphicTShirt", 27 /* Int64 */);
  }
  set GraphicTShirt(value) {
    this.SetProp("GraphicTShirt", 27 /* Int64 */, value);
  }
  get HairAccessory() {
    return this.GetProp("HairAccessory", 1 /* String */);
  }
  set HairAccessory(value) {
    this.SetProp("HairAccessory", 1 /* String */, value);
  }
  get HatAccessory() {
    return this.GetProp("HatAccessory", 1 /* String */);
  }
  set HatAccessory(value) {
    this.SetProp("HatAccessory", 1 /* String */, value);
  }
  get Head() {
    return this.GetProp("Head", 27 /* Int64 */);
  }
  set Head(value) {
    this.SetProp("Head", 27 /* Int64 */, value);
  }
  get HeadColor() {
    return this.GetProp("HeadColor", 12 /* Color3 */);
  }
  set HeadColor(value) {
    this.SetProp("HeadColor", 12 /* Color3 */, value);
  }
  get HeadScale() {
    return this.GetProp("HeadScale", 4 /* Float32 */);
  }
  set HeadScale(value) {
    this.SetProp("HeadScale", 4 /* Float32 */, value);
  }
  get HeightScale() {
    return this.GetProp("HeightScale", 4 /* Float32 */);
  }
  set HeightScale(value) {
    this.SetProp("HeightScale", 4 /* Float32 */, value);
  }
  get IdleAnimation() {
    return this.GetProp("IdleAnimation", 27 /* Int64 */);
  }
  set IdleAnimation(value) {
    this.SetProp("IdleAnimation", 27 /* Int64 */, value);
  }
  get JumpAnimation() {
    return this.GetProp("JumpAnimation", 27 /* Int64 */);
  }
  set JumpAnimation(value) {
    this.SetProp("JumpAnimation", 27 /* Int64 */, value);
  }
  get LeftArm() {
    return this.GetProp("LeftArm", 27 /* Int64 */);
  }
  set LeftArm(value) {
    this.SetProp("LeftArm", 27 /* Int64 */, value);
  }
  get LeftArmColor() {
    return this.GetProp("LeftArmColor", 12 /* Color3 */);
  }
  set LeftArmColor(value) {
    this.SetProp("LeftArmColor", 12 /* Color3 */, value);
  }
  get LeftLeg() {
    return this.GetProp("LeftLeg", 27 /* Int64 */);
  }
  set LeftLeg(value) {
    this.SetProp("LeftLeg", 27 /* Int64 */, value);
  }
  get LeftLegColor() {
    return this.GetProp("LeftLegColor", 12 /* Color3 */);
  }
  set LeftLegColor(value) {
    this.SetProp("LeftLegColor", 12 /* Color3 */, value);
  }
  get MoodAnimation() {
    return this.GetProp("MoodAnimation", 27 /* Int64 */);
  }
  set MoodAnimation(value) {
    this.SetProp("MoodAnimation", 27 /* Int64 */, value);
  }
  get NeckAccessory() {
    return this.GetProp("NeckAccessory", 1 /* String */);
  }
  set NeckAccessory(value) {
    this.SetProp("NeckAccessory", 1 /* String */, value);
  }
  get Pants() {
    return this.GetProp("Pants", 27 /* Int64 */);
  }
  set Pants(value) {
    this.SetProp("Pants", 27 /* Int64 */, value);
  }
  get ProportionScale() {
    return this.GetProp("ProportionScale", 4 /* Float32 */);
  }
  set ProportionScale(value) {
    this.SetProp("ProportionScale", 4 /* Float32 */, value);
  }
  get RightArm() {
    return this.GetProp("RightArm", 27 /* Int64 */);
  }
  set RightArm(value) {
    this.SetProp("RightArm", 27 /* Int64 */, value);
  }
  get RightArmColor() {
    return this.GetProp("RightArmColor", 12 /* Color3 */);
  }
  set RightArmColor(value) {
    this.SetProp("RightArmColor", 12 /* Color3 */, value);
  }
  get RightLeg() {
    return this.GetProp("RightLeg", 27 /* Int64 */);
  }
  set RightLeg(value) {
    this.SetProp("RightLeg", 27 /* Int64 */, value);
  }
  get RightLegColor() {
    return this.GetProp("RightLegColor", 12 /* Color3 */);
  }
  set RightLegColor(value) {
    this.SetProp("RightLegColor", 12 /* Color3 */, value);
  }
  get RunAnimation() {
    return this.GetProp("RunAnimation", 27 /* Int64 */);
  }
  set RunAnimation(value) {
    this.SetProp("RunAnimation", 27 /* Int64 */, value);
  }
  get Shirt() {
    return this.GetProp("Shirt", 27 /* Int64 */);
  }
  set Shirt(value) {
    this.SetProp("Shirt", 27 /* Int64 */, value);
  }
  get ShouldersAccessory() {
    return this.GetProp("ShouldersAccessory", 1 /* String */);
  }
  set ShouldersAccessory(value) {
    this.SetProp("ShouldersAccessory", 1 /* String */, value);
  }
  get SwimAnimation() {
    return this.GetProp("SwimAnimation", 27 /* Int64 */);
  }
  set SwimAnimation(value) {
    this.SetProp("SwimAnimation", 27 /* Int64 */, value);
  }
  get Torso() {
    return this.GetProp("Torso", 27 /* Int64 */);
  }
  set Torso(value) {
    this.SetProp("Torso", 27 /* Int64 */, value);
  }
  get TorsoColor() {
    return this.GetProp("TorsoColor", 12 /* Color3 */);
  }
  set TorsoColor(value) {
    this.SetProp("TorsoColor", 12 /* Color3 */, value);
  }
  get WaistAccessory() {
    return this.GetProp("WaistAccessory", 1 /* String */);
  }
  set WaistAccessory(value) {
    this.SetProp("WaistAccessory", 1 /* String */, value);
  }
  get WalkAnimation() {
    return this.GetProp("WalkAnimation", 27 /* Int64 */);
  }
  set WalkAnimation(value) {
    this.SetProp("WalkAnimation", 27 /* Int64 */, value);
  }
  get WidthScale() {
    return this.GetProp("WidthScale", 4 /* Float32 */);
  }
  set WidthScale(value) {
    this.SetProp("WidthScale", 4 /* Float32 */, value);
  }
};
var IKControl = class extends Instance {
  constructor() {
    super();
    this.addClassName("IKControl");
    this.Name = "IKControl";
    this.Enabled = true;
    this.Priority = 0;
    this.SmoothTime = 0.05;
    this.Type = IKControlType.Transform;
    this.Weight = 1;
    this.EndEffectorOffset = CFrame.Identity;
    this.Offset = CFrame.Identity;
  }
  get ChainRoot() {
    return this.GetProp("ChainRoot", 19 /* Referent */);
  }
  set ChainRoot(value) {
    this.SetProp("ChainRoot", 19 /* Referent */, value);
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get EndEffector() {
    return this.GetProp("EndEffector", 19 /* Referent */);
  }
  set EndEffector(value) {
    this.SetProp("EndEffector", 19 /* Referent */, value);
  }
  get EndEffectorOffset() {
    return this.GetProp("EndEffectorOffset", 16 /* CFrame */);
  }
  set EndEffectorOffset(value) {
    this.SetProp("EndEffectorOffset", 16 /* CFrame */, value);
  }
  get Offset() {
    return this.GetProp("Offset", 16 /* CFrame */);
  }
  set Offset(value) {
    this.SetProp("Offset", 16 /* CFrame */, value);
  }
  get Pole() {
    return this.GetProp("Pole", 19 /* Referent */);
  }
  set Pole(value) {
    this.SetProp("Pole", 19 /* Referent */, value);
  }
  get Priority() {
    return this.GetProp("Priority", 3 /* Int32 */);
  }
  set Priority(value) {
    this.SetProp("Priority", 3 /* Int32 */, value);
  }
  get SmoothTime() {
    return this.GetProp("SmoothTime", 4 /* Float32 */);
  }
  set SmoothTime(value) {
    this.SetProp("SmoothTime", 4 /* Float32 */, value);
  }
  get Target() {
    return this.GetProp("Target", 19 /* Referent */);
  }
  set Target(value) {
    this.SetProp("Target", 19 /* Referent */, value);
  }
  get Type() {
    return this.GetProp("Type", 18 /* Enum */);
  }
  set Type(value) {
    this.SetProp("Type", 18 /* Enum */, value);
  }
  get Weight() {
    return this.GetProp("Weight", 4 /* Float32 */);
  }
  set Weight(value) {
    this.SetProp("Weight", 4 /* Float32 */, value);
  }
};
var ILegacyStudioBridge = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ILegacyStudioBridge");
  }
};
var LegacyStudioBridge = class extends ILegacyStudioBridge {
  constructor() {
    super();
    this.addClassName("LegacyStudioBridge");
    this.Name = "LegacyStudioBridge";
  }
};
var IXPService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("IXPService");
    this.Name = "IXPService";
  }
};
var IncrementalPatchBuilder = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("IncrementalPatchBuilder");
    this.Name = "IncrementalPatchBuilder";
    this.AddPathsToBundle = false;
    this.BuildDebouncePeriod = 0.1;
    this.HighCompression = false;
    this.SerializePatch = true;
    this.ZstdCompression = false;
  }
  get AddPathsToBundle() {
    return this.GetProp("AddPathsToBundle", 2 /* Bool */);
  }
  set AddPathsToBundle(value) {
    this.SetProp("AddPathsToBundle", 2 /* Bool */, value);
  }
  get BuildDebouncePeriod() {
    return this.GetProp("BuildDebouncePeriod", 5 /* Float64 */);
  }
  set BuildDebouncePeriod(value) {
    this.SetProp("BuildDebouncePeriod", 5 /* Float64 */, value);
  }
  get HighCompression() {
    return this.GetProp("HighCompression", 2 /* Bool */);
  }
  set HighCompression(value) {
    this.SetProp("HighCompression", 2 /* Bool */, value);
  }
  get SerializePatch() {
    return this.GetProp("SerializePatch", 2 /* Bool */);
  }
  set SerializePatch(value) {
    this.SetProp("SerializePatch", 2 /* Bool */, value);
  }
  get ZstdCompression() {
    return this.GetProp("ZstdCompression", 2 /* Bool */);
  }
  set ZstdCompression(value) {
    this.SetProp("ZstdCompression", 2 /* Bool */, value);
  }
};
var InsertService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("InsertService");
    this.Name = "InsertService";
    this.AllowClientInsertModels = false;
    this.AllowInsertFreeModels = false;
  }
  get AllowClientInsertModels() {
    return this.GetProp("AllowClientInsertModels", 2 /* Bool */);
  }
  set AllowClientInsertModels(value) {
    this.SetProp("AllowClientInsertModels", 2 /* Bool */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get AllowInsertFreeModels() {
    return this.GetProp("AllowInsertFreeModels", 2 /* Bool */);
  }
  /**@deprecated Deprecated by Roblox*/
  set AllowInsertFreeModels(value) {
    this.SetProp("AllowInsertFreeModels", 2 /* Bool */, value);
  }
};
var InternalSyncItem = class extends Instance {
  constructor() {
    super();
    this.addClassName("InternalSyncItem");
    this.Name = "InternalSyncItem";
    this.AutoSync = true;
    this.Enabled = false;
    this.Path = "";
  }
  get AutoSync() {
    return this.GetProp("AutoSync", 2 /* Bool */);
  }
  set AutoSync(value) {
    this.SetProp("AutoSync", 2 /* Bool */, value);
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get Path() {
    return this.GetProp("Path", 1 /* String */);
  }
  set Path(value) {
    this.SetProp("Path", 1 /* String */, value);
  }
};
var InternalSyncService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("InternalSyncService");
    this.Name = "InternalSyncService";
  }
};
var JointInstance = class extends Instance {
  constructor() {
    super();
    this.addClassName("JointInstance");
    this.C0 = CFrame.Identity;
    this.C1 = CFrame.Identity;
    this.Enabled = true;
  }
  get C0() {
    return this.GetProp("C0", 16 /* CFrame */);
  }
  set C0(value) {
    this.SetProp("C0", 16 /* CFrame */, value);
  }
  get C1() {
    return this.GetProp("C1", 16 /* CFrame */);
  }
  set C1(value) {
    this.SetProp("C1", 16 /* CFrame */, value);
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get Part0() {
    return this.GetProp("Part0", 19 /* Referent */);
  }
  set Part0(value) {
    this.SetProp("Part0", 19 /* Referent */, value);
  }
  get Part1() {
    return this.GetProp("Part1", 19 /* Referent */);
  }
  set Part1(value) {
    this.SetProp("Part1", 19 /* Referent */, value);
  }
};
var DynamicRotate = class extends JointInstance {
  constructor() {
    super();
    this.addClassName("DynamicRotate");
    this.BaseAngle = 0;
  }
  get BaseAngle() {
    return this.GetProp("BaseAngle", 4 /* Float32 */);
  }
  set BaseAngle(value) {
    this.SetProp("BaseAngle", 4 /* Float32 */, value);
  }
};
var RotateP = class extends DynamicRotate {
  constructor() {
    super();
    this.addClassName("RotateP");
    this.Name = "RotateP";
  }
};
var RotateV = class extends DynamicRotate {
  constructor() {
    super();
    this.addClassName("RotateV");
    this.Name = "RotateV";
  }
};
var Glue = class extends JointInstance {
  constructor() {
    super();
    this.addClassName("Glue");
    this.Name = "Glue";
    this.F0 = new Vector3(0, 0, 0);
    this.F1 = new Vector3(0, 0, 0);
    this.F2 = new Vector3(0, 0, 0);
    this.F3 = new Vector3(0, 0, 0);
  }
  get F0() {
    return this.GetProp("F0", 14 /* Vector3 */);
  }
  set F0(value) {
    this.SetProp("F0", 14 /* Vector3 */, value);
  }
  get F1() {
    return this.GetProp("F1", 14 /* Vector3 */);
  }
  set F1(value) {
    this.SetProp("F1", 14 /* Vector3 */, value);
  }
  get F2() {
    return this.GetProp("F2", 14 /* Vector3 */);
  }
  set F2(value) {
    this.SetProp("F2", 14 /* Vector3 */, value);
  }
  get F3() {
    return this.GetProp("F3", 14 /* Vector3 */);
  }
  set F3(value) {
    this.SetProp("F3", 14 /* Vector3 */, value);
  }
};
var ManualSurfaceJointInstance = class extends JointInstance {
  constructor() {
    super();
    this.addClassName("ManualSurfaceJointInstance");
  }
};
var ManualGlue = class extends ManualSurfaceJointInstance {
  constructor() {
    super();
    this.addClassName("ManualGlue");
    this.Name = "ManualGlue";
  }
};
var ManualWeld = class extends ManualSurfaceJointInstance {
  constructor() {
    super();
    this.addClassName("ManualWeld");
    this.Name = "ManualWeld";
  }
};
var Motor = class extends JointInstance {
  constructor() {
    super();
    this.addClassName("Motor");
    this.Name = "Motor";
    this.DesiredAngle = 0;
    this.MaxVelocity = 0;
  }
  get DesiredAngle() {
    return this.GetProp("DesiredAngle", 4 /* Float32 */);
  }
  set DesiredAngle(value) {
    this.SetProp("DesiredAngle", 4 /* Float32 */, value);
  }
  get MaxVelocity() {
    return this.GetProp("MaxVelocity", 4 /* Float32 */);
  }
  set MaxVelocity(value) {
    this.SetProp("MaxVelocity", 4 /* Float32 */, value);
  }
};
var Motor6D = class extends Motor {
  constructor() {
    super();
    this.addClassName("Motor6D");
    this.Name = "Motor6D";
  }
};
var Rotate = class extends JointInstance {
  constructor() {
    super();
    this.addClassName("Rotate");
    this.Name = "Rotate";
  }
};
var Snap = class extends JointInstance {
  constructor() {
    super();
    this.addClassName("Snap");
    this.Name = "Snap";
  }
};
var VelocityMotor = class extends JointInstance {
  constructor() {
    super();
    this.addClassName("VelocityMotor");
    this.Name = "VelocityMotor";
    this.CurrentAngle = 0;
    this.DesiredAngle = 0;
    this.MaxVelocity = 0;
  }
  get CurrentAngle() {
    return this.GetProp("CurrentAngle", 4 /* Float32 */);
  }
  set CurrentAngle(value) {
    this.SetProp("CurrentAngle", 4 /* Float32 */, value);
  }
  get DesiredAngle() {
    return this.GetProp("DesiredAngle", 4 /* Float32 */);
  }
  set DesiredAngle(value) {
    this.SetProp("DesiredAngle", 4 /* Float32 */, value);
  }
  get Hole() {
    return this.GetProp("Hole", 19 /* Referent */);
  }
  set Hole(value) {
    this.SetProp("Hole", 19 /* Referent */, value);
  }
  get MaxVelocity() {
    return this.GetProp("MaxVelocity", 4 /* Float32 */);
  }
  set MaxVelocity(value) {
    this.SetProp("MaxVelocity", 4 /* Float32 */, value);
  }
};
var Weld = class extends JointInstance {
  constructor() {
    super();
    this.addClassName("Weld");
    this.Name = "Weld";
  }
};
var JointsService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("JointsService");
    this.Name = "JointsService";
  }
};
var KeyboardService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("KeyboardService");
    this.Name = "KeyboardService";
  }
};
var Keyframe = class extends Instance {
  constructor() {
    super();
    this.addClassName("Keyframe");
    this.Name = "Keyframe";
    this.Time = 0;
  }
  get Time() {
    return this.GetProp("Time", 4 /* Float32 */);
  }
  set Time(value) {
    this.SetProp("Time", 4 /* Float32 */, value);
  }
};
var KeyframeMarker = class extends Instance {
  constructor() {
    super();
    this.addClassName("KeyframeMarker");
    this.Name = "KeyframeMarker";
    this.Value = "";
  }
  get Value() {
    return this.GetProp("Value", 1 /* String */);
  }
  set Value(value) {
    this.SetProp("Value", 1 /* String */, value);
  }
};
var KeyframeSequenceProvider = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("KeyframeSequenceProvider");
    this.Name = "KeyframeSequenceProvider";
  }
};
var LSPFileSyncService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("LSPFileSyncService");
    this.Name = "LSPFileSyncService";
  }
};
var LanguageService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("LanguageService");
    this.Name = "LanguageService";
  }
};
var Light = class extends Instance {
  constructor() {
    super();
    this.addClassName("Light");
    this.Brightness = 1;
    this.Color = Color3.FromRGB(255, 255, 255);
    this.Enabled = true;
    this.Shadows = false;
  }
  get Brightness() {
    return this.GetProp("Brightness", 4 /* Float32 */);
  }
  set Brightness(value) {
    this.SetProp("Brightness", 4 /* Float32 */, value);
  }
  get Color() {
    return this.GetProp("Color", 12 /* Color3 */);
  }
  set Color(value) {
    this.SetProp("Color", 12 /* Color3 */, value);
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get Shadows() {
    return this.GetProp("Shadows", 2 /* Bool */);
  }
  set Shadows(value) {
    this.SetProp("Shadows", 2 /* Bool */, value);
  }
};
var PointLight = class extends Light {
  constructor() {
    super();
    this.addClassName("PointLight");
    this.Name = "PointLight";
    this.Range = 8;
  }
  get Range() {
    return this.GetProp("Range", 4 /* Float32 */);
  }
  set Range(value) {
    this.SetProp("Range", 4 /* Float32 */, value);
  }
};
var SpotLight = class extends Light {
  constructor() {
    super();
    this.addClassName("SpotLight");
    this.Name = "SpotLight";
    this.Angle = 90;
    this.Face = NormalId.Front;
    this.Range = 16;
  }
  get Angle() {
    return this.GetProp("Angle", 4 /* Float32 */);
  }
  set Angle(value) {
    this.SetProp("Angle", 4 /* Float32 */, value);
  }
  get Face() {
    return this.GetProp("Face", 18 /* Enum */);
  }
  set Face(value) {
    this.SetProp("Face", 18 /* Enum */, value);
  }
  get Range() {
    return this.GetProp("Range", 4 /* Float32 */);
  }
  set Range(value) {
    this.SetProp("Range", 4 /* Float32 */, value);
  }
};
var SurfaceLight = class extends Light {
  constructor() {
    super();
    this.addClassName("SurfaceLight");
    this.Name = "SurfaceLight";
    this.Angle = 90;
    this.Face = NormalId.Front;
    this.Range = 16;
  }
  get Angle() {
    return this.GetProp("Angle", 4 /* Float32 */);
  }
  set Angle(value) {
    this.SetProp("Angle", 4 /* Float32 */, value);
  }
  get Face() {
    return this.GetProp("Face", 18 /* Enum */);
  }
  set Face(value) {
    this.SetProp("Face", 18 /* Enum */, value);
  }
  get Range() {
    return this.GetProp("Range", 4 /* Float32 */);
  }
  set Range(value) {
    this.SetProp("Range", 4 /* Float32 */, value);
  }
};
var Lighting = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("Lighting");
    this.Name = "Lighting";
    this.Ambient = Color3.FromRGB(128, 128, 128);
    this.Brightness = 1;
    this.ColorShiftBottom = Color3.FromRGB(0, 0, 0);
    this.ColorShiftTop = Color3.FromRGB(0, 0, 0);
    this.EnvironmentDiffuseScale = 0;
    this.EnvironmentSpecularScale = 0;
    this.ExposureCompensation = 0;
    this.FogColor = Color3.FromRGB(191, 191, 191);
    this.FogEnd = 1e5;
    this.FogStart = 0;
    this.GeographicLatitude = 41.7333;
    this.GlobalShadows = false;
    this.OutdoorAmbient = Color3.FromRGB(128, 128, 128);
    this.Outlines = true;
    this.ShadowColor = Color3.FromRGB(179, 179, 184);
    this.ShadowSoftness = 0.5;
    this.Technology = Technology.Compatibility;
    this.TimeOfDay = "14:00:00";
  }
  get Ambient() {
    return this.GetProp("Ambient", 12 /* Color3 */);
  }
  set Ambient(value) {
    this.SetProp("Ambient", 12 /* Color3 */, value);
  }
  get Brightness() {
    return this.GetProp("Brightness", 4 /* Float32 */);
  }
  set Brightness(value) {
    this.SetProp("Brightness", 4 /* Float32 */, value);
  }
  get ColorShiftBottom() {
    return this.GetProp("ColorShift_Bottom", 12 /* Color3 */);
  }
  set ColorShiftBottom(value) {
    this.SetProp("ColorShift_Bottom", 12 /* Color3 */, value);
  }
  get ColorShiftTop() {
    return this.GetProp("ColorShift_Top", 12 /* Color3 */);
  }
  set ColorShiftTop(value) {
    this.SetProp("ColorShift_Top", 12 /* Color3 */, value);
  }
  get EnvironmentDiffuseScale() {
    return this.GetProp("EnvironmentDiffuseScale", 4 /* Float32 */);
  }
  set EnvironmentDiffuseScale(value) {
    this.SetProp("EnvironmentDiffuseScale", 4 /* Float32 */, value);
  }
  get EnvironmentSpecularScale() {
    return this.GetProp("EnvironmentSpecularScale", 4 /* Float32 */);
  }
  set EnvironmentSpecularScale(value) {
    this.SetProp("EnvironmentSpecularScale", 4 /* Float32 */, value);
  }
  get ExposureCompensation() {
    return this.GetProp("ExposureCompensation", 4 /* Float32 */);
  }
  set ExposureCompensation(value) {
    this.SetProp("ExposureCompensation", 4 /* Float32 */, value);
  }
  get FogColor() {
    return this.GetProp("FogColor", 12 /* Color3 */);
  }
  set FogColor(value) {
    this.SetProp("FogColor", 12 /* Color3 */, value);
  }
  get FogEnd() {
    return this.GetProp("FogEnd", 4 /* Float32 */);
  }
  set FogEnd(value) {
    this.SetProp("FogEnd", 4 /* Float32 */, value);
  }
  get FogStart() {
    return this.GetProp("FogStart", 4 /* Float32 */);
  }
  set FogStart(value) {
    this.SetProp("FogStart", 4 /* Float32 */, value);
  }
  get GeographicLatitude() {
    return this.GetProp("GeographicLatitude", 4 /* Float32 */);
  }
  set GeographicLatitude(value) {
    this.SetProp("GeographicLatitude", 4 /* Float32 */, value);
  }
  get GlobalShadows() {
    return this.GetProp("GlobalShadows", 2 /* Bool */);
  }
  set GlobalShadows(value) {
    this.SetProp("GlobalShadows", 2 /* Bool */, value);
  }
  get OutdoorAmbient() {
    return this.GetProp("OutdoorAmbient", 12 /* Color3 */);
  }
  set OutdoorAmbient(value) {
    this.SetProp("OutdoorAmbient", 12 /* Color3 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get Outlines() {
    return this.GetProp("Outlines", 2 /* Bool */);
  }
  /**@deprecated Deprecated by Roblox*/
  set Outlines(value) {
    this.SetProp("Outlines", 2 /* Bool */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get ShadowColor() {
    return this.GetProp("ShadowColor", 12 /* Color3 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set ShadowColor(value) {
    this.SetProp("ShadowColor", 12 /* Color3 */, value);
  }
  get ShadowSoftness() {
    return this.GetProp("ShadowSoftness", 4 /* Float32 */);
  }
  set ShadowSoftness(value) {
    this.SetProp("ShadowSoftness", 4 /* Float32 */, value);
  }
  get Technology() {
    return this.GetProp("Technology", 18 /* Enum */);
  }
  set Technology(value) {
    this.SetProp("Technology", 18 /* Enum */, value);
  }
  get TimeOfDay() {
    return this.GetProp("TimeOfDay", 1 /* String */);
  }
  set TimeOfDay(value) {
    this.SetProp("TimeOfDay", 1 /* String */, value);
  }
};
var LiveScriptingService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("LiveScriptingService");
    this.Name = "LiveScriptingService";
  }
};
var LocalStorageService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("LocalStorageService");
  }
};
var AppStorageService = class extends LocalStorageService {
  constructor() {
    super();
    this.addClassName("AppStorageService");
    this.Name = "AppStorageService";
  }
};
var UserStorageService = class extends LocalStorageService {
  constructor() {
    super();
    this.addClassName("UserStorageService");
    this.Name = "UserStorageService";
  }
};
var LocalizationService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("LocalizationService");
    this.Name = "LocalizationService";
  }
};
var LocalizationTable = class extends Instance {
  constructor() {
    super();
    this.addClassName("LocalizationTable");
    this.Name = "LocalizationTable";
    this.Contents = "[]";
    this.DevelopmentLanguage = "en-us";
    this.SourceLocaleId = "en-us";
  }
  get Contents() {
    return this.GetProp("Contents", 1 /* String */);
  }
  set Contents(value) {
    this.SetProp("Contents", 1 /* String */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get DevelopmentLanguage() {
    return this.GetProp("DevelopmentLanguage", 1 /* String */);
  }
  /**@deprecated Deprecated by Roblox*/
  set DevelopmentLanguage(value) {
    this.SetProp("DevelopmentLanguage", 1 /* String */, value);
  }
  get SourceLocaleId() {
    return this.GetProp("SourceLocaleId", 1 /* String */);
  }
  set SourceLocaleId(value) {
    this.SetProp("SourceLocaleId", 1 /* String */, value);
  }
};
var LodDataService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("LodDataService");
    this.Name = "LodDataService";
  }
};
var LogReporterService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("LogReporterService");
    this.Name = "LogReporterService";
  }
};
var LogService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("LogService");
    this.Name = "LogService";
  }
};
var LoginService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("LoginService");
    this.Name = "LoginService";
  }
};
var LuaSourceContainer = class extends Instance {
  constructor() {
    super();
    this.addClassName("LuaSourceContainer");
  }
  get ScriptGuid() {
    return this.GetProp("ScriptGuid", 1 /* String */);
  }
  set ScriptGuid(value) {
    this.SetProp("ScriptGuid", 1 /* String */, value);
  }
};
var BaseScript = class extends LuaSourceContainer {
  constructor() {
    super();
    this.addClassName("BaseScript");
    this.Disabled = false;
    this.LinkedSource = "";
    this.RunContext = RunContext.Legacy;
  }
  get Disabled() {
    return this.GetProp("Disabled", 2 /* Bool */);
  }
  set Disabled(value) {
    this.SetProp("Disabled", 2 /* Bool */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get LinkedSource() {
    return this.GetProp("LinkedSource", 1 /* String */);
  }
  /**@deprecated Deprecated by Roblox*/
  set LinkedSource(value) {
    this.SetProp("LinkedSource", 1 /* String */, value);
  }
  get RunContext() {
    return this.GetProp("RunContext", 18 /* Enum */);
  }
  set RunContext(value) {
    this.SetProp("RunContext", 18 /* Enum */, value);
  }
};
var Script = class extends BaseScript {
  constructor() {
    super();
    this.addClassName("Script");
    this.Name = "Script";
    this.Source = "";
  }
  get Source() {
    return this.GetProp("Source", 1 /* String */);
  }
  set Source(value) {
    this.SetProp("Source", 1 /* String */, value);
  }
};
var LocalScript = class extends Script {
  constructor() {
    super();
    this.addClassName("LocalScript");
    this.Name = "LocalScript";
  }
};
var ModuleScript = class extends LuaSourceContainer {
  constructor() {
    super();
    this.addClassName("ModuleScript");
    this.Name = "ModuleScript";
    this.LinkedSource = "";
    this.Source = "";
  }
  /**@deprecated Deprecated by Roblox*/
  get LinkedSource() {
    return this.GetProp("LinkedSource", 1 /* String */);
  }
  /**@deprecated Deprecated by Roblox*/
  set LinkedSource(value) {
    this.SetProp("LinkedSource", 1 /* String */, value);
  }
  get Source() {
    return this.GetProp("Source", 1 /* String */);
  }
  set Source(value) {
    this.SetProp("Source", 1 /* String */, value);
  }
};
var LuaWebService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("LuaWebService");
    this.Name = "LuaWebService";
  }
};
var LuauScriptAnalyzerService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("LuauScriptAnalyzerService");
    this.Name = "LuauScriptAnalyzerService";
  }
};
var MarkerCurve = class extends Instance {
  constructor() {
    super();
    this.addClassName("MarkerCurve");
    this.Name = "MarkerCurve";
    this.ValuesAndTimes = "";
  }
  get ValuesAndTimes() {
    return this.GetProp("ValuesAndTimes", 1 /* String */);
  }
  set ValuesAndTimes(value) {
    this.SetProp("ValuesAndTimes", 1 /* String */, value);
  }
};
var MarketplaceService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("MarketplaceService");
    this.Name = "MarketplaceService";
  }
};
var MaterialGenerationService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("MaterialGenerationService");
    this.Name = "MaterialGenerationService";
  }
};
var MaterialService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("MaterialService");
    this.Name = "MaterialService";
    this.AsphaltName = "Asphalt";
    this.BasaltName = "Basalt";
    this.BrickName = "Brick";
    this.CardboardName = "Cardboard";
    this.CarpetName = "Carpet";
    this.CeramicTilesName = "CeramicTiles";
    this.ClayRoofTilesName = "ClayRoofTiles";
    this.CobblestoneName = "Cobblestone";
    this.ConcreteName = "Concrete";
    this.CorrodedMetalName = "CorrodedMetal";
    this.CrackedLavaName = "CrackedLava";
    this.DiamondPlateName = "DiamondPlate";
    this.FabricName = "Fabric";
    this.FoilName = "Foil";
    this.GlacierName = "Glacier";
    this.GraniteName = "Granite";
    this.GrassName = "Grass";
    this.GroundName = "Ground";
    this.IceName = "Ice";
    this.LeafyGrassName = "LeafyGrass";
    this.LeatherName = "Leather";
    this.LimestoneName = "Limestone";
    this.MarbleName = "Marble";
    this.MetalName = "Metal";
    this.MudName = "Mud";
    this.PavementName = "Pavement";
    this.PebbleName = "Pebble";
    this.PlasterName = "Plaster";
    this.PlasticName = "Plastic";
    this.RockName = "Rock";
    this.RoofShinglesName = "RoofShingles";
    this.RubberName = "Rubber";
    this.SaltName = "Salt";
    this.SandName = "Sand";
    this.SandstoneName = "Sandstone";
    this.SlateName = "Slate";
    this.SmoothPlasticName = "SmoothPlastic";
    this.SnowName = "Snow";
    this.Use2022MaterialsXml = false;
    this.WoodName = "Wood";
    this.WoodPlanksName = "WoodPlanks";
  }
  get AsphaltName() {
    return this.GetProp("AsphaltName", 1 /* String */);
  }
  set AsphaltName(value) {
    this.SetProp("AsphaltName", 1 /* String */, value);
  }
  get BasaltName() {
    return this.GetProp("BasaltName", 1 /* String */);
  }
  set BasaltName(value) {
    this.SetProp("BasaltName", 1 /* String */, value);
  }
  get BrickName() {
    return this.GetProp("BrickName", 1 /* String */);
  }
  set BrickName(value) {
    this.SetProp("BrickName", 1 /* String */, value);
  }
  get CardboardName() {
    return this.GetProp("CardboardName", 1 /* String */);
  }
  set CardboardName(value) {
    this.SetProp("CardboardName", 1 /* String */, value);
  }
  get CarpetName() {
    return this.GetProp("CarpetName", 1 /* String */);
  }
  set CarpetName(value) {
    this.SetProp("CarpetName", 1 /* String */, value);
  }
  get CeramicTilesName() {
    return this.GetProp("CeramicTilesName", 1 /* String */);
  }
  set CeramicTilesName(value) {
    this.SetProp("CeramicTilesName", 1 /* String */, value);
  }
  get ClayRoofTilesName() {
    return this.GetProp("ClayRoofTilesName", 1 /* String */);
  }
  set ClayRoofTilesName(value) {
    this.SetProp("ClayRoofTilesName", 1 /* String */, value);
  }
  get CobblestoneName() {
    return this.GetProp("CobblestoneName", 1 /* String */);
  }
  set CobblestoneName(value) {
    this.SetProp("CobblestoneName", 1 /* String */, value);
  }
  get ConcreteName() {
    return this.GetProp("ConcreteName", 1 /* String */);
  }
  set ConcreteName(value) {
    this.SetProp("ConcreteName", 1 /* String */, value);
  }
  get CorrodedMetalName() {
    return this.GetProp("CorrodedMetalName", 1 /* String */);
  }
  set CorrodedMetalName(value) {
    this.SetProp("CorrodedMetalName", 1 /* String */, value);
  }
  get CrackedLavaName() {
    return this.GetProp("CrackedLavaName", 1 /* String */);
  }
  set CrackedLavaName(value) {
    this.SetProp("CrackedLavaName", 1 /* String */, value);
  }
  get DiamondPlateName() {
    return this.GetProp("DiamondPlateName", 1 /* String */);
  }
  set DiamondPlateName(value) {
    this.SetProp("DiamondPlateName", 1 /* String */, value);
  }
  get FabricName() {
    return this.GetProp("FabricName", 1 /* String */);
  }
  set FabricName(value) {
    this.SetProp("FabricName", 1 /* String */, value);
  }
  get FoilName() {
    return this.GetProp("FoilName", 1 /* String */);
  }
  set FoilName(value) {
    this.SetProp("FoilName", 1 /* String */, value);
  }
  get GlacierName() {
    return this.GetProp("GlacierName", 1 /* String */);
  }
  set GlacierName(value) {
    this.SetProp("GlacierName", 1 /* String */, value);
  }
  get GraniteName() {
    return this.GetProp("GraniteName", 1 /* String */);
  }
  set GraniteName(value) {
    this.SetProp("GraniteName", 1 /* String */, value);
  }
  get GrassName() {
    return this.GetProp("GrassName", 1 /* String */);
  }
  set GrassName(value) {
    this.SetProp("GrassName", 1 /* String */, value);
  }
  get GroundName() {
    return this.GetProp("GroundName", 1 /* String */);
  }
  set GroundName(value) {
    this.SetProp("GroundName", 1 /* String */, value);
  }
  get IceName() {
    return this.GetProp("IceName", 1 /* String */);
  }
  set IceName(value) {
    this.SetProp("IceName", 1 /* String */, value);
  }
  get LeafyGrassName() {
    return this.GetProp("LeafyGrassName", 1 /* String */);
  }
  set LeafyGrassName(value) {
    this.SetProp("LeafyGrassName", 1 /* String */, value);
  }
  get LeatherName() {
    return this.GetProp("LeatherName", 1 /* String */);
  }
  set LeatherName(value) {
    this.SetProp("LeatherName", 1 /* String */, value);
  }
  get LimestoneName() {
    return this.GetProp("LimestoneName", 1 /* String */);
  }
  set LimestoneName(value) {
    this.SetProp("LimestoneName", 1 /* String */, value);
  }
  get MarbleName() {
    return this.GetProp("MarbleName", 1 /* String */);
  }
  set MarbleName(value) {
    this.SetProp("MarbleName", 1 /* String */, value);
  }
  get MetalName() {
    return this.GetProp("MetalName", 1 /* String */);
  }
  set MetalName(value) {
    this.SetProp("MetalName", 1 /* String */, value);
  }
  get MudName() {
    return this.GetProp("MudName", 1 /* String */);
  }
  set MudName(value) {
    this.SetProp("MudName", 1 /* String */, value);
  }
  get PavementName() {
    return this.GetProp("PavementName", 1 /* String */);
  }
  set PavementName(value) {
    this.SetProp("PavementName", 1 /* String */, value);
  }
  get PebbleName() {
    return this.GetProp("PebbleName", 1 /* String */);
  }
  set PebbleName(value) {
    this.SetProp("PebbleName", 1 /* String */, value);
  }
  get PlasterName() {
    return this.GetProp("PlasterName", 1 /* String */);
  }
  set PlasterName(value) {
    this.SetProp("PlasterName", 1 /* String */, value);
  }
  get PlasticName() {
    return this.GetProp("PlasticName", 1 /* String */);
  }
  set PlasticName(value) {
    this.SetProp("PlasticName", 1 /* String */, value);
  }
  get RockName() {
    return this.GetProp("RockName", 1 /* String */);
  }
  set RockName(value) {
    this.SetProp("RockName", 1 /* String */, value);
  }
  get RoofShinglesName() {
    return this.GetProp("RoofShinglesName", 1 /* String */);
  }
  set RoofShinglesName(value) {
    this.SetProp("RoofShinglesName", 1 /* String */, value);
  }
  get RubberName() {
    return this.GetProp("RubberName", 1 /* String */);
  }
  set RubberName(value) {
    this.SetProp("RubberName", 1 /* String */, value);
  }
  get SaltName() {
    return this.GetProp("SaltName", 1 /* String */);
  }
  set SaltName(value) {
    this.SetProp("SaltName", 1 /* String */, value);
  }
  get SandName() {
    return this.GetProp("SandName", 1 /* String */);
  }
  set SandName(value) {
    this.SetProp("SandName", 1 /* String */, value);
  }
  get SandstoneName() {
    return this.GetProp("SandstoneName", 1 /* String */);
  }
  set SandstoneName(value) {
    this.SetProp("SandstoneName", 1 /* String */, value);
  }
  get SlateName() {
    return this.GetProp("SlateName", 1 /* String */);
  }
  set SlateName(value) {
    this.SetProp("SlateName", 1 /* String */, value);
  }
  get SmoothPlasticName() {
    return this.GetProp("SmoothPlasticName", 1 /* String */);
  }
  set SmoothPlasticName(value) {
    this.SetProp("SmoothPlasticName", 1 /* String */, value);
  }
  get SnowName() {
    return this.GetProp("SnowName", 1 /* String */);
  }
  set SnowName(value) {
    this.SetProp("SnowName", 1 /* String */, value);
  }
  get Use2022MaterialsXml() {
    return this.GetProp("Use2022MaterialsXml", 2 /* Bool */);
  }
  set Use2022MaterialsXml(value) {
    this.SetProp("Use2022MaterialsXml", 2 /* Bool */, value);
  }
  get WoodName() {
    return this.GetProp("WoodName", 1 /* String */);
  }
  set WoodName(value) {
    this.SetProp("WoodName", 1 /* String */, value);
  }
  get WoodPlanksName() {
    return this.GetProp("WoodPlanksName", 1 /* String */);
  }
  set WoodPlanksName(value) {
    this.SetProp("WoodPlanksName", 1 /* String */, value);
  }
};
var MaterialVariant = class extends Instance {
  constructor() {
    super();
    this.addClassName("MaterialVariant");
    this.Name = "MaterialVariant";
    this.BaseMaterial = Material.Plastic;
    this.ColorMap = "";
    this.MaterialPattern = MaterialPattern.Regular;
    this.MetalnessMap = "";
    this.NormalMap = "";
    this.RoughnessMap = "";
    this.StudsPerTile = 10;
    this.TexturePack = "";
  }
  get BaseMaterial() {
    return this.GetProp("BaseMaterial", 18 /* Enum */);
  }
  set BaseMaterial(value) {
    this.SetProp("BaseMaterial", 18 /* Enum */, value);
  }
  get ColorMap() {
    return this.GetProp("ColorMap", 1 /* String */);
  }
  set ColorMap(value) {
    this.SetProp("ColorMap", 1 /* String */, value);
  }
  get CustomPhysicalProperties() {
    return this.GetProp("CustomPhysicalProperties", 25 /* PhysicalProperties */);
  }
  set CustomPhysicalProperties(value) {
    this.SetProp("CustomPhysicalProperties", 25 /* PhysicalProperties */, value);
  }
  get MaterialPattern() {
    return this.GetProp("MaterialPattern", 18 /* Enum */);
  }
  set MaterialPattern(value) {
    this.SetProp("MaterialPattern", 18 /* Enum */, value);
  }
  get MetalnessMap() {
    return this.GetProp("MetalnessMap", 1 /* String */);
  }
  set MetalnessMap(value) {
    this.SetProp("MetalnessMap", 1 /* String */, value);
  }
  get NormalMap() {
    return this.GetProp("NormalMap", 1 /* String */);
  }
  set NormalMap(value) {
    this.SetProp("NormalMap", 1 /* String */, value);
  }
  get RoughnessMap() {
    return this.GetProp("RoughnessMap", 1 /* String */);
  }
  set RoughnessMap(value) {
    this.SetProp("RoughnessMap", 1 /* String */, value);
  }
  get StudsPerTile() {
    return this.GetProp("StudsPerTile", 4 /* Float32 */);
  }
  set StudsPerTile(value) {
    this.SetProp("StudsPerTile", 4 /* Float32 */, value);
  }
  get TexturePack() {
    return this.GetProp("TexturePack", 1 /* String */);
  }
  set TexturePack(value) {
    this.SetProp("TexturePack", 1 /* String */, value);
  }
};
var MemStorageService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("MemStorageService");
    this.Name = "MemStorageService";
  }
};
var MemoryStoreService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("MemoryStoreService");
    this.Name = "MemoryStoreService";
  }
};
var Message = class extends Instance {
  constructor() {
    super();
    this.addClassName("Message");
    this.Name = "Message";
    this.Text = "";
  }
  get Text() {
    return this.GetProp("Text", 1 /* String */);
  }
  set Text(value) {
    this.SetProp("Text", 1 /* String */, value);
  }
};
var Hint = class extends Message {
  constructor() {
    super();
    this.addClassName("Hint");
    this.Name = "Hint";
  }
};
var MessageBusService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("MessageBusService");
    this.Name = "MessageBusService";
  }
};
var MessagingService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("MessagingService");
    this.Name = "MessagingService";
  }
};
var MetaBreakpointManager = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("MetaBreakpointManager");
    this.Name = "MetaBreakpointManager";
  }
};
var MouseService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("MouseService");
    this.Name = "MouseService";
  }
};
var NetworkPeer = class extends Instance {
  constructor() {
    super();
    this.addClassName("NetworkPeer");
  }
};
var NetworkClient = class extends NetworkPeer {
  constructor() {
    super();
    this.addClassName("NetworkClient");
    this.Name = "NetworkClient";
  }
};
var NetworkServer = class extends NetworkPeer {
  constructor() {
    super();
    this.addClassName("NetworkServer");
    this.Name = "NetworkServer";
  }
};
var NetworkSettings = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("NetworkSettings");
    this.Name = "NetworkSettings";
  }
  get HttpProxyEnabled() {
    return this.GetProp("HttpProxyEnabled", 2 /* Bool */);
  }
  set HttpProxyEnabled(value) {
    this.SetProp("HttpProxyEnabled", 2 /* Bool */, value);
  }
  get HttpProxyURL() {
    return this.GetProp("HttpProxyURL", 1 /* String */);
  }
  set HttpProxyURL(value) {
    this.SetProp("HttpProxyURL", 1 /* String */, value);
  }
  get IncomingReplicationLag() {
    return this.GetProp("IncomingReplicationLag", 5 /* Float64 */);
  }
  set IncomingReplicationLag(value) {
    this.SetProp("IncomingReplicationLag", 5 /* Float64 */, value);
  }
  get PrintJoinSizeBreakdown() {
    return this.GetProp("PrintJoinSizeBreakdown", 2 /* Bool */);
  }
  set PrintJoinSizeBreakdown(value) {
    this.SetProp("PrintJoinSizeBreakdown", 2 /* Bool */, value);
  }
  get PrintPhysicsErrors() {
    return this.GetProp("PrintPhysicsErrors", 2 /* Bool */);
  }
  set PrintPhysicsErrors(value) {
    this.SetProp("PrintPhysicsErrors", 2 /* Bool */, value);
  }
  get PrintStreamInstanceQuota() {
    return this.GetProp("PrintStreamInstanceQuota", 2 /* Bool */);
  }
  set PrintStreamInstanceQuota(value) {
    this.SetProp("PrintStreamInstanceQuota", 2 /* Bool */, value);
  }
  get RandomizeJoinInstanceOrder() {
    return this.GetProp("RandomizeJoinInstanceOrder", 2 /* Bool */);
  }
  set RandomizeJoinInstanceOrder(value) {
    this.SetProp("RandomizeJoinInstanceOrder", 2 /* Bool */, value);
  }
  get RenderStreamedRegions() {
    return this.GetProp("RenderStreamedRegions", 2 /* Bool */);
  }
  set RenderStreamedRegions(value) {
    this.SetProp("RenderStreamedRegions", 2 /* Bool */, value);
  }
  get ShowActiveAnimationAsset() {
    return this.GetProp("ShowActiveAnimationAsset", 2 /* Bool */);
  }
  set ShowActiveAnimationAsset(value) {
    this.SetProp("ShowActiveAnimationAsset", 2 /* Bool */, value);
  }
};
var NoCollisionConstraint = class extends Instance {
  constructor() {
    super();
    this.addClassName("NoCollisionConstraint");
    this.Name = "NoCollisionConstraint";
    this.Enabled = true;
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get Part0() {
    return this.GetProp("Part0", 19 /* Referent */);
  }
  set Part0(value) {
    this.SetProp("Part0", 19 /* Referent */, value);
  }
  get Part1() {
    return this.GetProp("Part1", 19 /* Referent */);
  }
  set Part1(value) {
    this.SetProp("Part1", 19 /* Referent */, value);
  }
};
var Noise = class extends Instance {
  constructor() {
    super();
    this.addClassName("Noise");
    this.Name = "Noise";
    this.NoiseType = NoiseType.SimplexGabor;
    this.Seed = 1234;
  }
  get NoiseType() {
    return this.GetProp("NoiseType", 18 /* Enum */);
  }
  set NoiseType(value) {
    this.SetProp("NoiseType", 18 /* Enum */, value);
  }
  get Seed() {
    return this.GetProp("Seed", 3 /* Int32 */);
  }
  set Seed(value) {
    this.SetProp("Seed", 3 /* Int32 */, value);
  }
};
var NotificationService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("NotificationService");
    this.Name = "NotificationService";
  }
};
var OmniRecommendationsService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("OmniRecommendationsService");
    this.Name = "OmniRecommendationsService";
  }
};
var OpenCloudService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("OpenCloudService");
    this.Name = "OpenCloudService";
  }
};
var OperationGraph = class extends Instance {
  constructor() {
    super();
    this.addClassName("OperationGraph");
    this.Name = "OperationGraph";
  }
};
var PVInstance = class extends Instance {
  constructor() {
    super();
    this.addClassName("PVInstance");
  }
};
var BasePart = class extends PVInstance {
  constructor() {
    super();
    this.addClassName("BasePart");
    this.BackParamA = -0.5;
    this.BackParamB = 0.5;
    this.BackSurfaceInput = InputType.NoInput;
    this.BottomParamA = -0.5;
    this.BottomParamB = 0.5;
    this.BottomSurfaceInput = InputType.NoInput;
    this.CFrame = CFrame.Identity;
    this.CanQuery = true;
    this.CanTouch = true;
    this.CastShadow = true;
    this.CollisionGroup = "Default";
    this.CollisionGroupId = 0;
    this.EnableFluidForces = true;
    this.FrontParamA = -0.5;
    this.FrontParamB = 0.5;
    this.FrontSurfaceInput = InputType.NoInput;
    this.LeftParamA = -0.5;
    this.LeftParamB = 0.5;
    this.LeftSurfaceInput = InputType.NoInput;
    this.Massless = false;
    this.Material = Material.Plastic;
    this.PivotOffset = CFrame.Identity;
    this.Reflectance = 0;
    this.RightParamA = -0.5;
    this.RightParamB = 0.5;
    this.RightSurfaceInput = InputType.NoInput;
    this.RootPriority = 0;
    this.RotVelocity = new Vector3(0, 0, 0);
    this.TopParamA = -0.5;
    this.TopParamB = 0.5;
    this.TopSurfaceInput = InputType.NoInput;
    this.Velocity = new Vector3(0, 0, 0);
  }
  get Anchored() {
    return this.GetProp("Anchored", 2 /* Bool */);
  }
  set Anchored(value) {
    this.SetProp("Anchored", 2 /* Bool */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get BackParamA() {
    return this.GetProp("BackParamA", 4 /* Float32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set BackParamA(value) {
    this.SetProp("BackParamA", 4 /* Float32 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get BackParamB() {
    return this.GetProp("BackParamB", 4 /* Float32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set BackParamB(value) {
    this.SetProp("BackParamB", 4 /* Float32 */, value);
  }
  get BackSurface() {
    return this.GetProp("BackSurface", 18 /* Enum */);
  }
  set BackSurface(value) {
    this.SetProp("BackSurface", 18 /* Enum */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get BackSurfaceInput() {
    return this.GetProp("BackSurfaceInput", 18 /* Enum */);
  }
  /**@deprecated Deprecated by Roblox*/
  set BackSurfaceInput(value) {
    this.SetProp("BackSurfaceInput", 18 /* Enum */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get BottomParamA() {
    return this.GetProp("BottomParamA", 4 /* Float32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set BottomParamA(value) {
    this.SetProp("BottomParamA", 4 /* Float32 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get BottomParamB() {
    return this.GetProp("BottomParamB", 4 /* Float32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set BottomParamB(value) {
    this.SetProp("BottomParamB", 4 /* Float32 */, value);
  }
  get BottomSurface() {
    return this.GetProp("BottomSurface", 18 /* Enum */);
  }
  set BottomSurface(value) {
    this.SetProp("BottomSurface", 18 /* Enum */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get BottomSurfaceInput() {
    return this.GetProp("BottomSurfaceInput", 18 /* Enum */);
  }
  /**@deprecated Deprecated by Roblox*/
  set BottomSurfaceInput(value) {
    this.SetProp("BottomSurfaceInput", 18 /* Enum */, value);
  }
  get CFrame() {
    return this.GetProp("CFrame", 16 /* CFrame */);
  }
  set CFrame(value) {
    this.SetProp("CFrame", 16 /* CFrame */, value);
  }
  get CanCollide() {
    return this.GetProp("CanCollide", 2 /* Bool */);
  }
  set CanCollide(value) {
    this.SetProp("CanCollide", 2 /* Bool */, value);
  }
  get CanQuery() {
    return this.GetProp("CanQuery", 2 /* Bool */);
  }
  set CanQuery(value) {
    this.SetProp("CanQuery", 2 /* Bool */, value);
  }
  get CanTouch() {
    return this.GetProp("CanTouch", 2 /* Bool */);
  }
  set CanTouch(value) {
    this.SetProp("CanTouch", 2 /* Bool */, value);
  }
  get CastShadow() {
    return this.GetProp("CastShadow", 2 /* Bool */);
  }
  set CastShadow(value) {
    this.SetProp("CastShadow", 2 /* Bool */, value);
  }
  get CollisionGroup() {
    return this.GetProp("CollisionGroup", 1 /* String */);
  }
  set CollisionGroup(value) {
    this.SetProp("CollisionGroup", 1 /* String */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get CollisionGroupId() {
    return this.GetProp("CollisionGroupId", 3 /* Int32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set CollisionGroupId(value) {
    this.SetProp("CollisionGroupId", 3 /* Int32 */, value);
  }
  get Color3uint8() {
    return this.GetProp("Color3uint8", 26 /* Color3uint8 */);
  }
  set Color3uint8(value) {
    this.SetProp("Color3uint8", 26 /* Color3uint8 */, value);
  }
  get CustomPhysicalProperties() {
    return this.GetProp("CustomPhysicalProperties", 25 /* PhysicalProperties */);
  }
  set CustomPhysicalProperties(value) {
    this.SetProp("CustomPhysicalProperties", 25 /* PhysicalProperties */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get Elasticity() {
    return this.GetProp("Elasticity", 4 /* Float32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set Elasticity(value) {
    this.SetProp("Elasticity", 4 /* Float32 */, value);
  }
  get EnableFluidForces() {
    return this.GetProp("EnableFluidForces", 2 /* Bool */);
  }
  set EnableFluidForces(value) {
    this.SetProp("EnableFluidForces", 2 /* Bool */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get Friction() {
    return this.GetProp("Friction", 4 /* Float32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set Friction(value) {
    this.SetProp("Friction", 4 /* Float32 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get FrontParamA() {
    return this.GetProp("FrontParamA", 4 /* Float32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set FrontParamA(value) {
    this.SetProp("FrontParamA", 4 /* Float32 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get FrontParamB() {
    return this.GetProp("FrontParamB", 4 /* Float32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set FrontParamB(value) {
    this.SetProp("FrontParamB", 4 /* Float32 */, value);
  }
  get FrontSurface() {
    return this.GetProp("FrontSurface", 18 /* Enum */);
  }
  set FrontSurface(value) {
    this.SetProp("FrontSurface", 18 /* Enum */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get FrontSurfaceInput() {
    return this.GetProp("FrontSurfaceInput", 18 /* Enum */);
  }
  /**@deprecated Deprecated by Roblox*/
  set FrontSurfaceInput(value) {
    this.SetProp("FrontSurfaceInput", 18 /* Enum */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get LeftParamA() {
    return this.GetProp("LeftParamA", 4 /* Float32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set LeftParamA(value) {
    this.SetProp("LeftParamA", 4 /* Float32 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get LeftParamB() {
    return this.GetProp("LeftParamB", 4 /* Float32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set LeftParamB(value) {
    this.SetProp("LeftParamB", 4 /* Float32 */, value);
  }
  get LeftSurface() {
    return this.GetProp("LeftSurface", 18 /* Enum */);
  }
  set LeftSurface(value) {
    this.SetProp("LeftSurface", 18 /* Enum */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get LeftSurfaceInput() {
    return this.GetProp("LeftSurfaceInput", 18 /* Enum */);
  }
  /**@deprecated Deprecated by Roblox*/
  set LeftSurfaceInput(value) {
    this.SetProp("LeftSurfaceInput", 18 /* Enum */, value);
  }
  get Locked() {
    return this.GetProp("Locked", 2 /* Bool */);
  }
  set Locked(value) {
    this.SetProp("Locked", 2 /* Bool */, value);
  }
  get Massless() {
    return this.GetProp("Massless", 2 /* Bool */);
  }
  set Massless(value) {
    this.SetProp("Massless", 2 /* Bool */, value);
  }
  get Material() {
    return this.GetProp("Material", 18 /* Enum */);
  }
  set Material(value) {
    this.SetProp("Material", 18 /* Enum */, value);
  }
  get MaterialVariantSerialized() {
    return this.GetProp("MaterialVariantSerialized", 1 /* String */);
  }
  set MaterialVariantSerialized(value) {
    this.SetProp("MaterialVariantSerialized", 1 /* String */, value);
  }
  get PivotOffset() {
    return this.GetProp("PivotOffset", 16 /* CFrame */);
  }
  set PivotOffset(value) {
    this.SetProp("PivotOffset", 16 /* CFrame */, value);
  }
  get Reflectance() {
    return this.GetProp("Reflectance", 4 /* Float32 */);
  }
  set Reflectance(value) {
    this.SetProp("Reflectance", 4 /* Float32 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get RightParamA() {
    return this.GetProp("RightParamA", 4 /* Float32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set RightParamA(value) {
    this.SetProp("RightParamA", 4 /* Float32 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get RightParamB() {
    return this.GetProp("RightParamB", 4 /* Float32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set RightParamB(value) {
    this.SetProp("RightParamB", 4 /* Float32 */, value);
  }
  get RightSurface() {
    return this.GetProp("RightSurface", 18 /* Enum */);
  }
  set RightSurface(value) {
    this.SetProp("RightSurface", 18 /* Enum */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get RightSurfaceInput() {
    return this.GetProp("RightSurfaceInput", 18 /* Enum */);
  }
  /**@deprecated Deprecated by Roblox*/
  set RightSurfaceInput(value) {
    this.SetProp("RightSurfaceInput", 18 /* Enum */, value);
  }
  get RootPriority() {
    return this.GetProp("RootPriority", 3 /* Int32 */);
  }
  set RootPriority(value) {
    this.SetProp("RootPriority", 3 /* Int32 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get RotVelocity() {
    return this.GetProp("RotVelocity", 14 /* Vector3 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set RotVelocity(value) {
    this.SetProp("RotVelocity", 14 /* Vector3 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get TopParamA() {
    return this.GetProp("TopParamA", 4 /* Float32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set TopParamA(value) {
    this.SetProp("TopParamA", 4 /* Float32 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get TopParamB() {
    return this.GetProp("TopParamB", 4 /* Float32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set TopParamB(value) {
    this.SetProp("TopParamB", 4 /* Float32 */, value);
  }
  get TopSurface() {
    return this.GetProp("TopSurface", 18 /* Enum */);
  }
  set TopSurface(value) {
    this.SetProp("TopSurface", 18 /* Enum */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get TopSurfaceInput() {
    return this.GetProp("TopSurfaceInput", 18 /* Enum */);
  }
  /**@deprecated Deprecated by Roblox*/
  set TopSurfaceInput(value) {
    this.SetProp("TopSurfaceInput", 18 /* Enum */, value);
  }
  get Transparency() {
    return this.GetProp("Transparency", 4 /* Float32 */);
  }
  set Transparency(value) {
    this.SetProp("Transparency", 4 /* Float32 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get Velocity() {
    return this.GetProp("Velocity", 14 /* Vector3 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set Velocity(value) {
    this.SetProp("Velocity", 14 /* Vector3 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get BrickColor() {
    return this.GetProp("brickColor", 11 /* BrickColor */);
  }
  /**@deprecated Deprecated by Roblox*/
  set BrickColor(value) {
    this.SetProp("brickColor", 11 /* BrickColor */, value);
  }
  get Size() {
    return this.GetProp("size", 14 /* Vector3 */);
  }
  set Size(value) {
    this.SetProp("size", 14 /* Vector3 */, value);
  }
};
var CornerWedgePart = class extends BasePart {
  constructor() {
    super();
    this.addClassName("CornerWedgePart");
    this.Name = "CornerWedgePart";
    this.Anchored = false;
    this.BackSurface = SurfaceType.Smooth;
    this.BottomSurface = SurfaceType.Smooth;
    this.CanCollide = true;
    this.Color3uint8 = Color3.FromRGB(163, 162, 165);
    this.Elasticity = 0.5;
    this.Friction = 0.3;
    this.FrontSurface = SurfaceType.Smooth;
    this.LeftSurface = SurfaceType.Smooth;
    this.Locked = false;
    this.RightSurface = SurfaceType.Smooth;
    this.TopSurface = SurfaceType.Smooth;
    this.Transparency = 0;
    this.Size = new Vector3(2, 2, 2);
  }
};
var FormFactorPart = class extends BasePart {
  constructor() {
    super();
    this.addClassName("FormFactorPart");
    this.FormFactor = FormFactor.Brick;
    this.Anchored = false;
    this.BackSurface = SurfaceType.Smooth;
    this.BottomSurface = SurfaceType.Inlet;
    this.CanCollide = true;
    this.Color3uint8 = Color3.FromRGB(163, 162, 165);
    this.Elasticity = 0.5;
    this.Friction = 0.3;
    this.FrontSurface = SurfaceType.Smooth;
    this.LeftSurface = SurfaceType.Smooth;
    this.Locked = false;
    this.RightSurface = SurfaceType.Smooth;
    this.Transparency = 0;
    this.Size = new Vector3(4, 1.2, 2);
  }
  /**@deprecated Deprecated by Roblox*/
  get FormFactor() {
    return this.GetProp("FormFactor", 18 /* Enum */);
  }
  /**@deprecated Deprecated by Roblox*/
  set FormFactor(value) {
    this.SetProp("FormFactor", 18 /* Enum */, value);
  }
  get FormFactorRaw() {
    return this.GetProp("formFactorRaw", 18 /* Enum */);
  }
  set FormFactorRaw(value) {
    this.SetProp("formFactorRaw", 18 /* Enum */, value);
  }
};
var Part = class extends FormFactorPart {
  constructor() {
    super();
    this.addClassName("Part");
    this.Name = "Part";
    this.Shape = PartType.Block;
    this.TopSurface = SurfaceType.Studs;
  }
  get Shape() {
    return this.GetProp("shape", 18 /* Enum */);
  }
  set Shape(value) {
    this.SetProp("shape", 18 /* Enum */, value);
  }
};
var FlagStand = class extends Part {
  constructor() {
    super();
    this.addClassName("FlagStand");
    this.Name = "FlagStand";
  }
  get TeamColor() {
    return this.GetProp("TeamColor", 11 /* BrickColor */);
  }
  set TeamColor(value) {
    this.SetProp("TeamColor", 11 /* BrickColor */, value);
  }
};
var Seat = class extends Part {
  constructor() {
    super();
    this.addClassName("Seat");
    this.Name = "Seat";
    this.Disabled = false;
  }
  get Disabled() {
    return this.GetProp("Disabled", 2 /* Bool */);
  }
  set Disabled(value) {
    this.SetProp("Disabled", 2 /* Bool */, value);
  }
};
var SkateboardPlatform = class extends Part {
  constructor() {
    super();
    this.addClassName("SkateboardPlatform");
    this.Name = "SkateboardPlatform";
    this.Steer = 0;
    this.StickyWheels = true;
    this.Throttle = 0;
  }
  get Steer() {
    return this.GetProp("Steer", 3 /* Int32 */);
  }
  set Steer(value) {
    this.SetProp("Steer", 3 /* Int32 */, value);
  }
  get StickyWheels() {
    return this.GetProp("StickyWheels", 2 /* Bool */);
  }
  set StickyWheels(value) {
    this.SetProp("StickyWheels", 2 /* Bool */, value);
  }
  get Throttle() {
    return this.GetProp("Throttle", 3 /* Int32 */);
  }
  set Throttle(value) {
    this.SetProp("Throttle", 3 /* Int32 */, value);
  }
};
var SpawnLocation = class extends Part {
  constructor() {
    super();
    this.addClassName("SpawnLocation");
    this.Name = "SpawnLocation";
    this.AllowTeamChangeOnTouch = false;
    this.Duration = 10;
    this.Enabled = true;
    this.Neutral = true;
  }
  get AllowTeamChangeOnTouch() {
    return this.GetProp("AllowTeamChangeOnTouch", 2 /* Bool */);
  }
  set AllowTeamChangeOnTouch(value) {
    this.SetProp("AllowTeamChangeOnTouch", 2 /* Bool */, value);
  }
  get Duration() {
    return this.GetProp("Duration", 3 /* Int32 */);
  }
  set Duration(value) {
    this.SetProp("Duration", 3 /* Int32 */, value);
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get Neutral() {
    return this.GetProp("Neutral", 2 /* Bool */);
  }
  set Neutral(value) {
    this.SetProp("Neutral", 2 /* Bool */, value);
  }
  get TeamColor() {
    return this.GetProp("TeamColor", 11 /* BrickColor */);
  }
  set TeamColor(value) {
    this.SetProp("TeamColor", 11 /* BrickColor */, value);
  }
};
var WedgePart = class extends FormFactorPart {
  constructor() {
    super();
    this.addClassName("WedgePart");
    this.Name = "WedgePart";
    this.TopSurface = SurfaceType.Smooth;
  }
};
var Terrain = class extends BasePart {
  constructor() {
    super();
    this.addClassName("Terrain");
    this.Name = "Terrain";
    this.AcquisitionMethod = TerrainAcquisitionMethod.None;
    this.Decoration = false;
    this.GrassLength = 0.7;
    this.MaterialColors = "";
    this.PhysicsGrid = "";
    this.ShorelinesUpgraded = false;
    this.SmoothGrid = "";
    this.SmoothVoxelsUpgraded = false;
    this.WaterColor = Color3.FromRGB(13, 84, 92);
    this.WaterReflectance = 1;
    this.WaterTransparency = 0.3;
    this.WaterWaveSize = 0.15;
    this.WaterWaveSpeed = 10;
    this.Anchored = true;
    this.BackSurface = SurfaceType.Smooth;
    this.BottomSurface = SurfaceType.Inlet;
    this.CanCollide = true;
    this.Color3uint8 = Color3.FromRGB(163, 162, 165);
    this.Elasticity = 0.3;
    this.Friction = 0.5;
    this.FrontSurface = SurfaceType.Smooth;
    this.LeftSurface = SurfaceType.Smooth;
    this.Locked = true;
    this.RightSurface = SurfaceType.Smooth;
    this.TopSurface = SurfaceType.Studs;
    this.Transparency = 0;
    this.Size = new Vector3(2044, 252, 2044);
  }
  get AcquisitionMethod() {
    return this.GetProp("AcquisitionMethod", 18 /* Enum */);
  }
  set AcquisitionMethod(value) {
    this.SetProp("AcquisitionMethod", 18 /* Enum */, value);
  }
  get Decoration() {
    return this.GetProp("Decoration", 2 /* Bool */);
  }
  set Decoration(value) {
    this.SetProp("Decoration", 2 /* Bool */, value);
  }
  get GrassLength() {
    return this.GetProp("GrassLength", 4 /* Float32 */);
  }
  set GrassLength(value) {
    this.SetProp("GrassLength", 4 /* Float32 */, value);
  }
  get MaterialColors() {
    return this.GetProp("MaterialColors", 1 /* String */);
  }
  set MaterialColors(value) {
    this.SetProp("MaterialColors", 1 /* String */, value);
  }
  get PhysicsGrid() {
    return this.GetProp("PhysicsGrid", 1 /* String */);
  }
  set PhysicsGrid(value) {
    this.SetProp("PhysicsGrid", 1 /* String */, value);
  }
  get ShorelinesUpgraded() {
    return this.GetProp("ShorelinesUpgraded", 2 /* Bool */);
  }
  set ShorelinesUpgraded(value) {
    this.SetProp("ShorelinesUpgraded", 2 /* Bool */, value);
  }
  get SmoothGrid() {
    return this.GetProp("SmoothGrid", 1 /* String */);
  }
  set SmoothGrid(value) {
    this.SetProp("SmoothGrid", 1 /* String */, value);
  }
  get SmoothVoxelsUpgraded() {
    return this.GetProp("SmoothVoxelsUpgraded", 2 /* Bool */);
  }
  set SmoothVoxelsUpgraded(value) {
    this.SetProp("SmoothVoxelsUpgraded", 2 /* Bool */, value);
  }
  get WaterColor() {
    return this.GetProp("WaterColor", 12 /* Color3 */);
  }
  set WaterColor(value) {
    this.SetProp("WaterColor", 12 /* Color3 */, value);
  }
  get WaterReflectance() {
    return this.GetProp("WaterReflectance", 4 /* Float32 */);
  }
  set WaterReflectance(value) {
    this.SetProp("WaterReflectance", 4 /* Float32 */, value);
  }
  get WaterTransparency() {
    return this.GetProp("WaterTransparency", 4 /* Float32 */);
  }
  set WaterTransparency(value) {
    this.SetProp("WaterTransparency", 4 /* Float32 */, value);
  }
  get WaterWaveSize() {
    return this.GetProp("WaterWaveSize", 4 /* Float32 */);
  }
  set WaterWaveSize(value) {
    this.SetProp("WaterWaveSize", 4 /* Float32 */, value);
  }
  get WaterWaveSpeed() {
    return this.GetProp("WaterWaveSpeed", 4 /* Float32 */);
  }
  set WaterWaveSpeed(value) {
    this.SetProp("WaterWaveSpeed", 4 /* Float32 */, value);
  }
};
var TriangleMeshPart = class extends BasePart {
  constructor() {
    super();
    this.addClassName("TriangleMeshPart");
    this.BackSurface = SurfaceType.Smooth;
    this.BottomSurface = SurfaceType.Smooth;
    this.Elasticity = 0.5;
    this.Friction = 0.3;
    this.FrontSurface = SurfaceType.Smooth;
    this.LeftSurface = SurfaceType.Smooth;
    this.Locked = false;
    this.RightSurface = SurfaceType.Smooth;
    this.TopSurface = SurfaceType.Smooth;
    this.Size = new Vector3(4, 1.2, 2);
  }
  get AeroMeshData() {
    return this.GetProp("AeroMeshData", 28 /* SharedString */);
  }
  set AeroMeshData(value) {
    this.SetProp("AeroMeshData", 28 /* SharedString */, value);
  }
  get FluidFidelityInternal() {
    return this.GetProp("FluidFidelityInternal", 18 /* Enum */);
  }
  set FluidFidelityInternal(value) {
    this.SetProp("FluidFidelityInternal", 18 /* Enum */, value);
  }
  get PhysicalConfigData() {
    return this.GetProp("PhysicalConfigData", 28 /* SharedString */);
  }
  set PhysicalConfigData(value) {
    this.SetProp("PhysicalConfigData", 28 /* SharedString */, value);
  }
};
var MeshPart = class extends TriangleMeshPart {
  constructor() {
    super();
    this.addClassName("MeshPart");
    this.Name = "MeshPart";
    this.DoubleSided = false;
    this.HasJointOffset = false;
    this.HasSkinnedMesh = false;
    this.InitialSize = new Vector3(0, 0, 0);
    this.JointOffset = new Vector3(0, 0, 0);
    this.MeshID = "";
    this.MeshId = "";
    this.PhysicsData = "";
    this.RenderFidelity = RenderFidelity.Precise;
    this.TextureID = "";
    this.VertexCount = 0;
    this.Anchored = false;
    this.CanCollide = true;
    this.Color3uint8 = Color3.FromRGB(163, 162, 165);
    this.Transparency = 0;
  }
  get DoubleSided() {
    return this.GetProp("DoubleSided", 2 /* Bool */);
  }
  set DoubleSided(value) {
    this.SetProp("DoubleSided", 2 /* Bool */, value);
  }
  get HasJointOffset() {
    return this.GetProp("HasJointOffset", 2 /* Bool */);
  }
  set HasJointOffset(value) {
    this.SetProp("HasJointOffset", 2 /* Bool */, value);
  }
  get HasSkinnedMesh() {
    return this.GetProp("HasSkinnedMesh", 2 /* Bool */);
  }
  set HasSkinnedMesh(value) {
    this.SetProp("HasSkinnedMesh", 2 /* Bool */, value);
  }
  get InitialSize() {
    return this.GetProp("InitialSize", 14 /* Vector3 */);
  }
  set InitialSize(value) {
    this.SetProp("InitialSize", 14 /* Vector3 */, value);
  }
  get JointOffset() {
    return this.GetProp("JointOffset", 14 /* Vector3 */);
  }
  set JointOffset(value) {
    this.SetProp("JointOffset", 14 /* Vector3 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get MeshID() {
    return this.GetProp("MeshID", 1 /* String */);
  }
  /**@deprecated Deprecated by Roblox*/
  set MeshID(value) {
    this.SetProp("MeshID", 1 /* String */, value);
  }
  get MeshId() {
    return this.GetProp("MeshId", 1 /* String */);
  }
  set MeshId(value) {
    this.SetProp("MeshId", 1 /* String */, value);
  }
  get PhysicsData() {
    return this.GetProp("PhysicsData", 1 /* String */);
  }
  set PhysicsData(value) {
    this.SetProp("PhysicsData", 1 /* String */, value);
  }
  get RenderFidelity() {
    return this.GetProp("RenderFidelity", 18 /* Enum */);
  }
  set RenderFidelity(value) {
    this.SetProp("RenderFidelity", 18 /* Enum */, value);
  }
  get TextureID() {
    return this.GetProp("TextureID", 1 /* String */);
  }
  set TextureID(value) {
    this.SetProp("TextureID", 1 /* String */, value);
  }
  get VertexCount() {
    return this.GetProp("VertexCount", 3 /* Int32 */);
  }
  set VertexCount(value) {
    this.SetProp("VertexCount", 3 /* Int32 */, value);
  }
};
var PartOperation = class extends TriangleMeshPart {
  constructor() {
    super();
    this.addClassName("PartOperation");
    this.Name = "PartOperation";
    this.AssetId = "";
    this.ChildData = "";
    this.FormFactor = FormFactor.Custom;
    this.InitialSize = new Vector3(1, 1, 1);
    this.MeshData = "";
    this.PhysicsData = "";
    this.RenderFidelity = RenderFidelity.Precise;
    this.SmoothingAngle = 0;
    this.UsePartColor = false;
    this.Color3uint8 = Color3.FromRGB(255, 255, 255);
  }
  get AssetId() {
    return this.GetProp("AssetId", 1 /* String */);
  }
  set AssetId(value) {
    this.SetProp("AssetId", 1 /* String */, value);
  }
  get ChildData() {
    return this.GetProp("ChildData", 1 /* String */);
  }
  set ChildData(value) {
    this.SetProp("ChildData", 1 /* String */, value);
  }
  get ChildData2() {
    return this.GetProp("ChildData2", 28 /* SharedString */);
  }
  set ChildData2(value) {
    this.SetProp("ChildData2", 28 /* SharedString */, value);
  }
  get FormFactor() {
    return this.GetProp("FormFactor", 18 /* Enum */);
  }
  set FormFactor(value) {
    this.SetProp("FormFactor", 18 /* Enum */, value);
  }
  get InitialSize() {
    return this.GetProp("InitialSize", 14 /* Vector3 */);
  }
  set InitialSize(value) {
    this.SetProp("InitialSize", 14 /* Vector3 */, value);
  }
  get MeshData() {
    return this.GetProp("MeshData", 1 /* String */);
  }
  set MeshData(value) {
    this.SetProp("MeshData", 1 /* String */, value);
  }
  get MeshData2() {
    return this.GetProp("MeshData2", 28 /* SharedString */);
  }
  set MeshData2(value) {
    this.SetProp("MeshData2", 28 /* SharedString */, value);
  }
  get PhysicsData() {
    return this.GetProp("PhysicsData", 1 /* String */);
  }
  set PhysicsData(value) {
    this.SetProp("PhysicsData", 1 /* String */, value);
  }
  get RenderFidelity() {
    return this.GetProp("RenderFidelity", 18 /* Enum */);
  }
  set RenderFidelity(value) {
    this.SetProp("RenderFidelity", 18 /* Enum */, value);
  }
  get SmoothingAngle() {
    return this.GetProp("SmoothingAngle", 4 /* Float32 */);
  }
  set SmoothingAngle(value) {
    this.SetProp("SmoothingAngle", 4 /* Float32 */, value);
  }
  get UsePartColor() {
    return this.GetProp("UsePartColor", 2 /* Bool */);
  }
  set UsePartColor(value) {
    this.SetProp("UsePartColor", 2 /* Bool */, value);
  }
};
var IntersectOperation = class extends PartOperation {
  constructor() {
    super();
    this.addClassName("IntersectOperation");
    this.Name = "IntersectOperation";
    this.Anchored = false;
    this.CanCollide = true;
    this.Transparency = 0;
  }
};
var NegateOperation = class extends PartOperation {
  constructor() {
    super();
    this.addClassName("NegateOperation");
    this.Name = "NegateOperation";
    this.Anchored = true;
    this.CanCollide = false;
    this.Transparency = 0.1;
  }
};
var UnionOperation = class extends PartOperation {
  constructor() {
    super();
    this.addClassName("UnionOperation");
    this.Name = "UnionOperation";
    this.Anchored = false;
    this.CanCollide = true;
    this.Transparency = 0;
  }
};
var TrussPart = class extends BasePart {
  constructor() {
    super();
    this.addClassName("TrussPart");
    this.Name = "TrussPart";
    this.Style = Style.AlternatingSupports;
    this.Anchored = false;
    this.BackSurface = SurfaceType.Universal;
    this.BottomSurface = SurfaceType.Universal;
    this.CanCollide = true;
    this.Color3uint8 = Color3.FromRGB(163, 162, 165);
    this.Elasticity = 0.5;
    this.Friction = 0.3;
    this.FrontSurface = SurfaceType.Universal;
    this.LeftSurface = SurfaceType.Universal;
    this.Locked = false;
    this.RightSurface = SurfaceType.Universal;
    this.TopSurface = SurfaceType.Universal;
    this.Transparency = 0;
    this.Size = new Vector3(2, 2, 2);
  }
  get Style() {
    return this.GetProp("style", 18 /* Enum */);
  }
  set Style(value) {
    this.SetProp("style", 18 /* Enum */, value);
  }
};
var VehicleSeat = class extends BasePart {
  constructor() {
    super();
    this.addClassName("VehicleSeat");
    this.Name = "VehicleSeat";
    this.Disabled = false;
    this.HeadsUpDisplay = true;
    this.MaxSpeed = 25;
    this.Steer = 0;
    this.SteerFloat = 0;
    this.Throttle = 0;
    this.ThrottleFloat = 0;
    this.Torque = 10;
    this.TurnSpeed = 1;
    this.Anchored = false;
    this.BackSurface = SurfaceType.Smooth;
    this.BottomSurface = SurfaceType.Inlet;
    this.CanCollide = true;
    this.Color3uint8 = Color3.FromRGB(163, 162, 165);
    this.Elasticity = 0.5;
    this.Friction = 0.3;
    this.FrontSurface = SurfaceType.Smooth;
    this.LeftSurface = SurfaceType.Smooth;
    this.Locked = false;
    this.RightSurface = SurfaceType.Smooth;
    this.TopSurface = SurfaceType.Studs;
    this.Transparency = 0;
    this.Size = new Vector3(4, 1.2, 2);
  }
  get Disabled() {
    return this.GetProp("Disabled", 2 /* Bool */);
  }
  set Disabled(value) {
    this.SetProp("Disabled", 2 /* Bool */, value);
  }
  get HeadsUpDisplay() {
    return this.GetProp("HeadsUpDisplay", 2 /* Bool */);
  }
  set HeadsUpDisplay(value) {
    this.SetProp("HeadsUpDisplay", 2 /* Bool */, value);
  }
  get MaxSpeed() {
    return this.GetProp("MaxSpeed", 4 /* Float32 */);
  }
  set MaxSpeed(value) {
    this.SetProp("MaxSpeed", 4 /* Float32 */, value);
  }
  get Steer() {
    return this.GetProp("Steer", 3 /* Int32 */);
  }
  set Steer(value) {
    this.SetProp("Steer", 3 /* Int32 */, value);
  }
  get SteerFloat() {
    return this.GetProp("SteerFloat", 4 /* Float32 */);
  }
  set SteerFloat(value) {
    this.SetProp("SteerFloat", 4 /* Float32 */, value);
  }
  get Throttle() {
    return this.GetProp("Throttle", 3 /* Int32 */);
  }
  set Throttle(value) {
    this.SetProp("Throttle", 3 /* Int32 */, value);
  }
  get ThrottleFloat() {
    return this.GetProp("ThrottleFloat", 4 /* Float32 */);
  }
  set ThrottleFloat(value) {
    this.SetProp("ThrottleFloat", 4 /* Float32 */, value);
  }
  get Torque() {
    return this.GetProp("Torque", 4 /* Float32 */);
  }
  set Torque(value) {
    this.SetProp("Torque", 4 /* Float32 */, value);
  }
  get TurnSpeed() {
    return this.GetProp("TurnSpeed", 4 /* Float32 */);
  }
  set TurnSpeed(value) {
    this.SetProp("TurnSpeed", 4 /* Float32 */, value);
  }
};
var Model = class extends PVInstance {
  constructor() {
    super();
    this.addClassName("Model");
    this.Name = "Model";
    this.LevelOfDetail = ModelLevelOfDetail.Automatic;
    this.ModelMeshSize = new Vector3(0, 0, 0);
    this.ModelStreamingMode = ModelStreamingMode.Default;
    this.NeedsPivotMigration = false;
    this.ScaleFactor = 1;
  }
  get LevelOfDetail() {
    return this.GetProp("LevelOfDetail", 18 /* Enum */);
  }
  set LevelOfDetail(value) {
    this.SetProp("LevelOfDetail", 18 /* Enum */, value);
  }
  get ModelMeshCFrame() {
    return this.GetProp("ModelMeshCFrame", 16 /* CFrame */);
  }
  set ModelMeshCFrame(value) {
    this.SetProp("ModelMeshCFrame", 16 /* CFrame */, value);
  }
  get ModelMeshData() {
    return this.GetProp("ModelMeshData", 28 /* SharedString */);
  }
  set ModelMeshData(value) {
    this.SetProp("ModelMeshData", 28 /* SharedString */, value);
  }
  get ModelMeshSize() {
    return this.GetProp("ModelMeshSize", 14 /* Vector3 */);
  }
  set ModelMeshSize(value) {
    this.SetProp("ModelMeshSize", 14 /* Vector3 */, value);
  }
  get ModelStreamingMode() {
    return this.GetProp("ModelStreamingMode", 18 /* Enum */);
  }
  set ModelStreamingMode(value) {
    this.SetProp("ModelStreamingMode", 18 /* Enum */, value);
  }
  get NeedsPivotMigration() {
    return this.GetProp("NeedsPivotMigration", 2 /* Bool */);
  }
  set NeedsPivotMigration(value) {
    this.SetProp("NeedsPivotMigration", 2 /* Bool */, value);
  }
  get PrimaryPart() {
    return this.GetProp("PrimaryPart", 19 /* Referent */);
  }
  set PrimaryPart(value) {
    this.SetProp("PrimaryPart", 19 /* Referent */, value);
  }
  get ScaleFactor() {
    return this.GetProp("ScaleFactor", 4 /* Float32 */);
  }
  set ScaleFactor(value) {
    this.SetProp("ScaleFactor", 4 /* Float32 */, value);
  }
  get WorldPivotData() {
    return this.GetProp("WorldPivotData", 30 /* OptionalCFrame */);
  }
  set WorldPivotData(value) {
    this.SetProp("WorldPivotData", 30 /* OptionalCFrame */, value);
  }
};
var Actor = class extends Model {
  constructor() {
    super();
    this.addClassName("Actor");
    this.Name = "Actor";
  }
};
var BackpackItem = class extends Model {
  constructor() {
    super();
    this.addClassName("BackpackItem");
    this.TextureId = "";
  }
  get TextureId() {
    return this.GetProp("TextureId", 1 /* String */);
  }
  set TextureId(value) {
    this.SetProp("TextureId", 1 /* String */, value);
  }
};
var HopperBin = class extends BackpackItem {
  constructor() {
    super();
    this.addClassName("HopperBin");
    this.Name = "HopperBin";
    this.Active = false;
    this.BinType = BinType.Script;
  }
  get Active() {
    return this.GetProp("Active", 2 /* Bool */);
  }
  set Active(value) {
    this.SetProp("Active", 2 /* Bool */, value);
  }
  get BinType() {
    return this.GetProp("BinType", 18 /* Enum */);
  }
  set BinType(value) {
    this.SetProp("BinType", 18 /* Enum */, value);
  }
};
var Tool = class extends BackpackItem {
  constructor() {
    super();
    this.addClassName("Tool");
    this.Name = "Tool";
    this.CanBeDropped = true;
    this.Enabled = true;
    this.ManualActivationOnly = false;
    this.RequiresHandle = true;
    this.ToolTip = "";
    this.Grip = CFrame.Identity;
  }
  get CanBeDropped() {
    return this.GetProp("CanBeDropped", 2 /* Bool */);
  }
  set CanBeDropped(value) {
    this.SetProp("CanBeDropped", 2 /* Bool */, value);
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get Grip() {
    return this.GetProp("Grip", 16 /* CFrame */);
  }
  set Grip(value) {
    this.SetProp("Grip", 16 /* CFrame */, value);
  }
  get ManualActivationOnly() {
    return this.GetProp("ManualActivationOnly", 2 /* Bool */);
  }
  set ManualActivationOnly(value) {
    this.SetProp("ManualActivationOnly", 2 /* Bool */, value);
  }
  get RequiresHandle() {
    return this.GetProp("RequiresHandle", 2 /* Bool */);
  }
  set RequiresHandle(value) {
    this.SetProp("RequiresHandle", 2 /* Bool */, value);
  }
  get ToolTip() {
    return this.GetProp("ToolTip", 1 /* String */);
  }
  set ToolTip(value) {
    this.SetProp("ToolTip", 1 /* String */, value);
  }
};
var Flag = class extends Tool {
  constructor() {
    super();
    this.addClassName("Flag");
    this.Name = "Flag";
  }
  get TeamColor() {
    return this.GetProp("TeamColor", 11 /* BrickColor */);
  }
  set TeamColor(value) {
    this.SetProp("TeamColor", 11 /* BrickColor */, value);
  }
};
var WorldRoot = class extends Model {
  constructor() {
    super();
    this.addClassName("WorldRoot");
  }
};
var Workspace = class extends WorldRoot {
  constructor() {
    super();
    this.addClassName("Workspace");
    this.Name = "Workspace";
    this.AirDensity = 12e-4;
    this.AllowThirdPartySales = false;
    this.ClientAnimatorThrottling = ClientAnimatorThrottlingMode.Default;
    this.DistributedGameTime = 0;
    this.FallenPartsDestroyHeight = -500;
    this.GlobalWind = new Vector3(0, 0, 0);
    this.Gravity = 196.2;
    this.Retargeting = AnimatorRetargetingMode.Default;
    this.StreamingEnabled = true;
  }
  get AirDensity() {
    return this.GetProp("AirDensity", 4 /* Float32 */);
  }
  set AirDensity(value) {
    this.SetProp("AirDensity", 4 /* Float32 */, value);
  }
  get AllowThirdPartySales() {
    return this.GetProp("AllowThirdPartySales", 2 /* Bool */);
  }
  set AllowThirdPartySales(value) {
    this.SetProp("AllowThirdPartySales", 2 /* Bool */, value);
  }
  get AvatarUnificationMode() {
    return this.GetProp("AvatarUnificationMode", 18 /* Enum */);
  }
  set AvatarUnificationMode(value) {
    this.SetProp("AvatarUnificationMode", 18 /* Enum */, value);
  }
  get CSGAsyncDynamicCollision() {
    return this.GetProp("CSGAsyncDynamicCollision", 18 /* Enum */);
  }
  set CSGAsyncDynamicCollision(value) {
    this.SetProp("CSGAsyncDynamicCollision", 18 /* Enum */, value);
  }
  get ClientAnimatorThrottling() {
    return this.GetProp("ClientAnimatorThrottling", 18 /* Enum */);
  }
  set ClientAnimatorThrottling(value) {
    this.SetProp("ClientAnimatorThrottling", 18 /* Enum */, value);
  }
  get CollisionGroupData() {
    return this.GetProp("CollisionGroupData", 1 /* String */);
  }
  set CollisionGroupData(value) {
    this.SetProp("CollisionGroupData", 1 /* String */, value);
  }
  get CurrentCamera() {
    return this.GetProp("CurrentCamera", 19 /* Referent */);
  }
  set CurrentCamera(value) {
    this.SetProp("CurrentCamera", 19 /* Referent */, value);
  }
  get DecreaseMinimumPartDensityMode() {
    return this.GetProp("DecreaseMinimumPartDensityMode", 18 /* Enum */);
  }
  set DecreaseMinimumPartDensityMode(value) {
    this.SetProp("DecreaseMinimumPartDensityMode", 18 /* Enum */, value);
  }
  get DistributedGameTime() {
    return this.GetProp("DistributedGameTime", 5 /* Float64 */);
  }
  set DistributedGameTime(value) {
    this.SetProp("DistributedGameTime", 5 /* Float64 */, value);
  }
  get EditorLiveScripting() {
    return this.GetProp("EditorLiveScripting", 18 /* Enum */);
  }
  set EditorLiveScripting(value) {
    this.SetProp("EditorLiveScripting", 18 /* Enum */, value);
  }
  get ExplicitAutoJoints() {
    return this.GetProp("ExplicitAutoJoints", 2 /* Bool */);
  }
  set ExplicitAutoJoints(value) {
    this.SetProp("ExplicitAutoJoints", 2 /* Bool */, value);
  }
  get FallenPartsDestroyHeight() {
    return this.GetProp("FallenPartsDestroyHeight", 4 /* Float32 */);
  }
  set FallenPartsDestroyHeight(value) {
    this.SetProp("FallenPartsDestroyHeight", 4 /* Float32 */, value);
  }
  get FluidForces() {
    return this.GetProp("FluidForces", 18 /* Enum */);
  }
  set FluidForces(value) {
    this.SetProp("FluidForces", 18 /* Enum */, value);
  }
  get GlobalWind() {
    return this.GetProp("GlobalWind", 14 /* Vector3 */);
  }
  set GlobalWind(value) {
    this.SetProp("GlobalWind", 14 /* Vector3 */, value);
  }
  get Gravity() {
    return this.GetProp("Gravity", 4 /* Float32 */);
  }
  set Gravity(value) {
    this.SetProp("Gravity", 4 /* Float32 */, value);
  }
  get IKControlConstraintSupport() {
    return this.GetProp("IKControlConstraintSupport", 18 /* Enum */);
  }
  set IKControlConstraintSupport(value) {
    this.SetProp("IKControlConstraintSupport", 18 /* Enum */, value);
  }
  get MeshPartHeadsAndAccessories() {
    return this.GetProp("MeshPartHeadsAndAccessories", 18 /* Enum */);
  }
  set MeshPartHeadsAndAccessories(value) {
    this.SetProp("MeshPartHeadsAndAccessories", 18 /* Enum */, value);
  }
  get ModelStreamingBehavior() {
    return this.GetProp("ModelStreamingBehavior", 18 /* Enum */);
  }
  set ModelStreamingBehavior(value) {
    this.SetProp("ModelStreamingBehavior", 18 /* Enum */, value);
  }
  get PhysicsSteppingMethod() {
    return this.GetProp("PhysicsSteppingMethod", 18 /* Enum */);
  }
  set PhysicsSteppingMethod(value) {
    this.SetProp("PhysicsSteppingMethod", 18 /* Enum */, value);
  }
  get PlayerCharacterDestroyBehavior() {
    return this.GetProp("PlayerCharacterDestroyBehavior", 18 /* Enum */);
  }
  set PlayerCharacterDestroyBehavior(value) {
    this.SetProp("PlayerCharacterDestroyBehavior", 18 /* Enum */, value);
  }
  get PrimalPhysicsSolver() {
    return this.GetProp("PrimalPhysicsSolver", 18 /* Enum */);
  }
  set PrimalPhysicsSolver(value) {
    this.SetProp("PrimalPhysicsSolver", 18 /* Enum */, value);
  }
  get RejectCharacterDeletions() {
    return this.GetProp("RejectCharacterDeletions", 18 /* Enum */);
  }
  set RejectCharacterDeletions(value) {
    this.SetProp("RejectCharacterDeletions", 18 /* Enum */, value);
  }
  get ReplicateInstanceDestroySetting() {
    return this.GetProp("ReplicateInstanceDestroySetting", 18 /* Enum */);
  }
  set ReplicateInstanceDestroySetting(value) {
    this.SetProp("ReplicateInstanceDestroySetting", 18 /* Enum */, value);
  }
  get Retargeting() {
    return this.GetProp("Retargeting", 18 /* Enum */);
  }
  set Retargeting(value) {
    this.SetProp("Retargeting", 18 /* Enum */, value);
  }
  get SignalBehavior2() {
    return this.GetProp("SignalBehavior2", 18 /* Enum */);
  }
  set SignalBehavior2(value) {
    this.SetProp("SignalBehavior2", 18 /* Enum */, value);
  }
  get StreamOutBehavior() {
    return this.GetProp("StreamOutBehavior", 18 /* Enum */);
  }
  set StreamOutBehavior(value) {
    this.SetProp("StreamOutBehavior", 18 /* Enum */, value);
  }
  get StreamingEnabled() {
    return this.GetProp("StreamingEnabled", 2 /* Bool */);
  }
  set StreamingEnabled(value) {
    this.SetProp("StreamingEnabled", 2 /* Bool */, value);
  }
  get StreamingIntegrityMode() {
    return this.GetProp("StreamingIntegrityMode", 18 /* Enum */);
  }
  set StreamingIntegrityMode(value) {
    this.SetProp("StreamingIntegrityMode", 18 /* Enum */, value);
  }
  get StreamingMinRadius() {
    return this.GetProp("StreamingMinRadius", 3 /* Int32 */);
  }
  set StreamingMinRadius(value) {
    this.SetProp("StreamingMinRadius", 3 /* Int32 */, value);
  }
  get StreamingTargetRadius() {
    return this.GetProp("StreamingTargetRadius", 3 /* Int32 */);
  }
  set StreamingTargetRadius(value) {
    this.SetProp("StreamingTargetRadius", 3 /* Int32 */, value);
  }
  get TerrainWeldsFixed() {
    return this.GetProp("TerrainWeldsFixed", 2 /* Bool */);
  }
  set TerrainWeldsFixed(value) {
    this.SetProp("TerrainWeldsFixed", 2 /* Bool */, value);
  }
  get TouchesUseCollisionGroups() {
    return this.GetProp("TouchesUseCollisionGroups", 2 /* Bool */);
  }
  set TouchesUseCollisionGroups(value) {
    this.SetProp("TouchesUseCollisionGroups", 2 /* Bool */, value);
  }
};
var WorldModel = class extends WorldRoot {
  constructor() {
    super();
    this.addClassName("WorldModel");
    this.Name = "WorldModel";
  }
};
var PackageService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("PackageService");
    this.Name = "PackageService";
  }
};
var PackageUIService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("PackageUIService");
    this.Name = "PackageUIService";
  }
};
var PartOperationAsset = class extends Instance {
  constructor() {
    super();
    this.addClassName("PartOperationAsset");
    this.Name = "PartOperationAsset";
    this.ChildData = "";
    this.MeshData = "";
  }
  get ChildData() {
    return this.GetProp("ChildData", 1 /* String */);
  }
  set ChildData(value) {
    this.SetProp("ChildData", 1 /* String */, value);
  }
  get MeshData() {
    return this.GetProp("MeshData", 1 /* String */);
  }
  set MeshData(value) {
    this.SetProp("MeshData", 1 /* String */, value);
  }
};
var ParticleEmitter = class extends Instance {
  constructor() {
    super();
    this.addClassName("ParticleEmitter");
    this.Name = "ParticleEmitter";
    this.Acceleration = new Vector3(0, 0, 0);
    this.Brightness = 1;
    this.Color = new ColorSequence(new ColorSequenceKeypoint(0, Color3.FromRGB(255, 255, 255)), new ColorSequenceKeypoint(1, Color3.FromRGB(255, 255, 255)));
    this.Drag = 0;
    this.EmissionDirection = NormalId.Top;
    this.Enabled = true;
    this.FlipbookFramerate = new NumberRange(1, 1);
    this.FlipbookIncompatible = "Particle texture must be 1024 by 1024 to use flipbooks.";
    this.FlipbookLayout = ParticleFlipbookLayout.None;
    this.FlipbookMode = ParticleFlipbookMode.Loop;
    this.FlipbookStartRandom = false;
    this.Lifetime = new NumberRange(5, 10);
    this.LightEmission = 0;
    this.LightInfluence = 0;
    this.LockedToPart = false;
    this.Orientation = ParticleOrientation.FacingCamera;
    this.Rate = 20;
    this.RotSpeed = new NumberRange(0, 0);
    this.Rotation = new NumberRange(0, 0);
    this.Shape = ParticleEmitterShape.Box;
    this.ShapeInOut = ParticleEmitterShapeInOut.Outward;
    this.ShapePartial = 1;
    this.ShapeStyle = ParticleEmitterShapeStyle.Volume;
    this.Size = new NumberSequence(new NumberSequenceKeypoint(0, 1, 0), new NumberSequenceKeypoint(1, 1, 0));
    this.Speed = new NumberRange(5, 5);
    this.SpreadAngle = new Vector2(0, 0);
    this.Squash = new NumberSequence(new NumberSequenceKeypoint(0, 0, 0), new NumberSequenceKeypoint(1, 0, 0));
    this.Texture = "rbxasset://textures/particles/sparkles_main.dds";
    this.TimeScale = 1;
    this.Transparency = new NumberSequence(new NumberSequenceKeypoint(0, 0, 0), new NumberSequenceKeypoint(1, 0, 0));
    this.VelocityInheritance = 0;
    this.VelocitySpread = 0;
    this.WindAffectsDrag = false;
    this.ZOffset = 0;
  }
  get Acceleration() {
    return this.GetProp("Acceleration", 14 /* Vector3 */);
  }
  set Acceleration(value) {
    this.SetProp("Acceleration", 14 /* Vector3 */, value);
  }
  get Brightness() {
    return this.GetProp("Brightness", 4 /* Float32 */);
  }
  set Brightness(value) {
    this.SetProp("Brightness", 4 /* Float32 */, value);
  }
  get Color() {
    return this.GetProp("Color", 22 /* ColorSequence */);
  }
  set Color(value) {
    this.SetProp("Color", 22 /* ColorSequence */, value);
  }
  get Drag() {
    return this.GetProp("Drag", 4 /* Float32 */);
  }
  set Drag(value) {
    this.SetProp("Drag", 4 /* Float32 */, value);
  }
  get EmissionDirection() {
    return this.GetProp("EmissionDirection", 18 /* Enum */);
  }
  set EmissionDirection(value) {
    this.SetProp("EmissionDirection", 18 /* Enum */, value);
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get FlipbookFramerate() {
    return this.GetProp("FlipbookFramerate", 23 /* NumberRange */);
  }
  set FlipbookFramerate(value) {
    this.SetProp("FlipbookFramerate", 23 /* NumberRange */, value);
  }
  get FlipbookIncompatible() {
    return this.GetProp("FlipbookIncompatible", 1 /* String */);
  }
  set FlipbookIncompatible(value) {
    this.SetProp("FlipbookIncompatible", 1 /* String */, value);
  }
  get FlipbookLayout() {
    return this.GetProp("FlipbookLayout", 18 /* Enum */);
  }
  set FlipbookLayout(value) {
    this.SetProp("FlipbookLayout", 18 /* Enum */, value);
  }
  get FlipbookMode() {
    return this.GetProp("FlipbookMode", 18 /* Enum */);
  }
  set FlipbookMode(value) {
    this.SetProp("FlipbookMode", 18 /* Enum */, value);
  }
  get FlipbookStartRandom() {
    return this.GetProp("FlipbookStartRandom", 2 /* Bool */);
  }
  set FlipbookStartRandom(value) {
    this.SetProp("FlipbookStartRandom", 2 /* Bool */, value);
  }
  get Lifetime() {
    return this.GetProp("Lifetime", 23 /* NumberRange */);
  }
  set Lifetime(value) {
    this.SetProp("Lifetime", 23 /* NumberRange */, value);
  }
  get LightEmission() {
    return this.GetProp("LightEmission", 4 /* Float32 */);
  }
  set LightEmission(value) {
    this.SetProp("LightEmission", 4 /* Float32 */, value);
  }
  get LightInfluence() {
    return this.GetProp("LightInfluence", 4 /* Float32 */);
  }
  set LightInfluence(value) {
    this.SetProp("LightInfluence", 4 /* Float32 */, value);
  }
  get LockedToPart() {
    return this.GetProp("LockedToPart", 2 /* Bool */);
  }
  set LockedToPart(value) {
    this.SetProp("LockedToPart", 2 /* Bool */, value);
  }
  get Orientation() {
    return this.GetProp("Orientation", 18 /* Enum */);
  }
  set Orientation(value) {
    this.SetProp("Orientation", 18 /* Enum */, value);
  }
  get Rate() {
    return this.GetProp("Rate", 4 /* Float32 */);
  }
  set Rate(value) {
    this.SetProp("Rate", 4 /* Float32 */, value);
  }
  get RotSpeed() {
    return this.GetProp("RotSpeed", 23 /* NumberRange */);
  }
  set RotSpeed(value) {
    this.SetProp("RotSpeed", 23 /* NumberRange */, value);
  }
  get Rotation() {
    return this.GetProp("Rotation", 23 /* NumberRange */);
  }
  set Rotation(value) {
    this.SetProp("Rotation", 23 /* NumberRange */, value);
  }
  get Shape() {
    return this.GetProp("Shape", 18 /* Enum */);
  }
  set Shape(value) {
    this.SetProp("Shape", 18 /* Enum */, value);
  }
  get ShapeInOut() {
    return this.GetProp("ShapeInOut", 18 /* Enum */);
  }
  set ShapeInOut(value) {
    this.SetProp("ShapeInOut", 18 /* Enum */, value);
  }
  get ShapePartial() {
    return this.GetProp("ShapePartial", 4 /* Float32 */);
  }
  set ShapePartial(value) {
    this.SetProp("ShapePartial", 4 /* Float32 */, value);
  }
  get ShapeStyle() {
    return this.GetProp("ShapeStyle", 18 /* Enum */);
  }
  set ShapeStyle(value) {
    this.SetProp("ShapeStyle", 18 /* Enum */, value);
  }
  get Size() {
    return this.GetProp("Size", 21 /* NumberSequence */);
  }
  set Size(value) {
    this.SetProp("Size", 21 /* NumberSequence */, value);
  }
  get Speed() {
    return this.GetProp("Speed", 23 /* NumberRange */);
  }
  set Speed(value) {
    this.SetProp("Speed", 23 /* NumberRange */, value);
  }
  get SpreadAngle() {
    return this.GetProp("SpreadAngle", 13 /* Vector2 */);
  }
  set SpreadAngle(value) {
    this.SetProp("SpreadAngle", 13 /* Vector2 */, value);
  }
  get Squash() {
    return this.GetProp("Squash", 21 /* NumberSequence */);
  }
  set Squash(value) {
    this.SetProp("Squash", 21 /* NumberSequence */, value);
  }
  get Texture() {
    return this.GetProp("Texture", 1 /* String */);
  }
  set Texture(value) {
    this.SetProp("Texture", 1 /* String */, value);
  }
  get TimeScale() {
    return this.GetProp("TimeScale", 4 /* Float32 */);
  }
  set TimeScale(value) {
    this.SetProp("TimeScale", 4 /* Float32 */, value);
  }
  get Transparency() {
    return this.GetProp("Transparency", 21 /* NumberSequence */);
  }
  set Transparency(value) {
    this.SetProp("Transparency", 21 /* NumberSequence */, value);
  }
  get VelocityInheritance() {
    return this.GetProp("VelocityInheritance", 4 /* Float32 */);
  }
  set VelocityInheritance(value) {
    this.SetProp("VelocityInheritance", 4 /* Float32 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get VelocitySpread() {
    return this.GetProp("VelocitySpread", 4 /* Float32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set VelocitySpread(value) {
    this.SetProp("VelocitySpread", 4 /* Float32 */, value);
  }
  get WindAffectsDrag() {
    return this.GetProp("WindAffectsDrag", 2 /* Bool */);
  }
  set WindAffectsDrag(value) {
    this.SetProp("WindAffectsDrag", 2 /* Bool */, value);
  }
  get ZOffset() {
    return this.GetProp("ZOffset", 4 /* Float32 */);
  }
  set ZOffset(value) {
    this.SetProp("ZOffset", 4 /* Float32 */, value);
  }
};
var PatchBundlerFileWatch = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("PatchBundlerFileWatch");
    this.Name = "PatchBundlerFileWatch";
  }
};
var PathfindingLink = class extends Instance {
  constructor() {
    super();
    this.addClassName("PathfindingLink");
    this.Name = "PathfindingLink";
    this.IsBidirectional = true;
    this.Label = "";
  }
  get Attachment0() {
    return this.GetProp("Attachment0", 19 /* Referent */);
  }
  set Attachment0(value) {
    this.SetProp("Attachment0", 19 /* Referent */, value);
  }
  get Attachment1() {
    return this.GetProp("Attachment1", 19 /* Referent */);
  }
  set Attachment1(value) {
    this.SetProp("Attachment1", 19 /* Referent */, value);
  }
  get IsBidirectional() {
    return this.GetProp("IsBidirectional", 2 /* Bool */);
  }
  set IsBidirectional(value) {
    this.SetProp("IsBidirectional", 2 /* Bool */, value);
  }
  get Label() {
    return this.GetProp("Label", 1 /* String */);
  }
  set Label(value) {
    this.SetProp("Label", 1 /* String */, value);
  }
};
var PathfindingModifier = class extends Instance {
  constructor() {
    super();
    this.addClassName("PathfindingModifier");
    this.Name = "PathfindingModifier";
    this.Label = "";
    this.PassThrough = false;
  }
  get Label() {
    return this.GetProp("Label", 1 /* String */);
  }
  set Label(value) {
    this.SetProp("Label", 1 /* String */, value);
  }
  get PassThrough() {
    return this.GetProp("PassThrough", 2 /* Bool */);
  }
  set PassThrough(value) {
    this.SetProp("PassThrough", 2 /* Bool */, value);
  }
};
var PathfindingService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("PathfindingService");
    this.Name = "PathfindingService";
    this.EmptyCutoff = 0;
  }
  /**@deprecated Deprecated by Roblox*/
  get EmptyCutoff() {
    return this.GetProp("EmptyCutoff", 4 /* Float32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set EmptyCutoff(value) {
    this.SetProp("EmptyCutoff", 4 /* Float32 */, value);
  }
};
var PermissionsService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("PermissionsService");
    this.Name = "PermissionsService";
  }
};
var PhysicsService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("PhysicsService");
    this.Name = "PhysicsService";
  }
};
var PlaceStatsService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("PlaceStatsService");
    this.Name = "PlaceStatsService";
  }
};
var PlacesService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("PlacesService");
    this.Name = "PlacesService";
  }
};
var PlatformCloudStorageService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("PlatformCloudStorageService");
    this.Name = "PlatformCloudStorageService";
  }
};
var PlatformFriendsService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("PlatformFriendsService");
    this.Name = "PlatformFriendsService";
  }
};
var Player = class extends Instance {
  constructor() {
    super();
    this.addClassName("Player");
    this.Name = "Player";
  }
  get AutoJumpEnabled() {
    return this.GetProp("AutoJumpEnabled", 2 /* Bool */);
  }
  set AutoJumpEnabled(value) {
    this.SetProp("AutoJumpEnabled", 2 /* Bool */, value);
  }
  get CameraMaxZoomDistance() {
    return this.GetProp("CameraMaxZoomDistance", 4 /* Float32 */);
  }
  set CameraMaxZoomDistance(value) {
    this.SetProp("CameraMaxZoomDistance", 4 /* Float32 */, value);
  }
  get CameraMinZoomDistance() {
    return this.GetProp("CameraMinZoomDistance", 4 /* Float32 */);
  }
  set CameraMinZoomDistance(value) {
    this.SetProp("CameraMinZoomDistance", 4 /* Float32 */, value);
  }
  get CameraMode() {
    return this.GetProp("CameraMode", 18 /* Enum */);
  }
  set CameraMode(value) {
    this.SetProp("CameraMode", 18 /* Enum */, value);
  }
  get Character() {
    return this.GetProp("Character", 19 /* Referent */);
  }
  set Character(value) {
    this.SetProp("Character", 19 /* Referent */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get CharacterAppearance() {
    return this.GetProp("CharacterAppearance", 1 /* String */);
  }
  /**@deprecated Deprecated by Roblox*/
  set CharacterAppearance(value) {
    this.SetProp("CharacterAppearance", 1 /* String */, value);
  }
  get CharacterAppearanceId() {
    return this.GetProp("CharacterAppearanceId", 27 /* Int64 */);
  }
  set CharacterAppearanceId(value) {
    this.SetProp("CharacterAppearanceId", 27 /* Int64 */, value);
  }
  get DevCameraOcclusionMode() {
    return this.GetProp("DevCameraOcclusionMode", 18 /* Enum */);
  }
  set DevCameraOcclusionMode(value) {
    this.SetProp("DevCameraOcclusionMode", 18 /* Enum */, value);
  }
  get DevComputerCameraMode() {
    return this.GetProp("DevComputerCameraMode", 18 /* Enum */);
  }
  set DevComputerCameraMode(value) {
    this.SetProp("DevComputerCameraMode", 18 /* Enum */, value);
  }
  get DevComputerMovementMode() {
    return this.GetProp("DevComputerMovementMode", 18 /* Enum */);
  }
  set DevComputerMovementMode(value) {
    this.SetProp("DevComputerMovementMode", 18 /* Enum */, value);
  }
  get DevEnableMouseLock() {
    return this.GetProp("DevEnableMouseLock", 2 /* Bool */);
  }
  set DevEnableMouseLock(value) {
    this.SetProp("DevEnableMouseLock", 2 /* Bool */, value);
  }
  get DevTouchCameraMode() {
    return this.GetProp("DevTouchCameraMode", 18 /* Enum */);
  }
  set DevTouchCameraMode(value) {
    this.SetProp("DevTouchCameraMode", 18 /* Enum */, value);
  }
  get DevTouchMovementMode() {
    return this.GetProp("DevTouchMovementMode", 18 /* Enum */);
  }
  set DevTouchMovementMode(value) {
    this.SetProp("DevTouchMovementMode", 18 /* Enum */, value);
  }
  get GameplayPaused() {
    return this.GetProp("GameplayPaused", 2 /* Bool */);
  }
  set GameplayPaused(value) {
    this.SetProp("GameplayPaused", 2 /* Bool */, value);
  }
  get HealthDisplayDistance() {
    return this.GetProp("HealthDisplayDistance", 4 /* Float32 */);
  }
  set HealthDisplayDistance(value) {
    this.SetProp("HealthDisplayDistance", 4 /* Float32 */, value);
  }
  get NameDisplayDistance() {
    return this.GetProp("NameDisplayDistance", 4 /* Float32 */);
  }
  set NameDisplayDistance(value) {
    this.SetProp("NameDisplayDistance", 4 /* Float32 */, value);
  }
  get Neutral() {
    return this.GetProp("Neutral", 2 /* Bool */);
  }
  set Neutral(value) {
    this.SetProp("Neutral", 2 /* Bool */, value);
  }
  get RawJoinData() {
    return this.GetProp("RawJoinData", 1 /* String */);
  }
  set RawJoinData(value) {
    this.SetProp("RawJoinData", 1 /* String */, value);
  }
  get ReplicationFocus() {
    return this.GetProp("ReplicationFocus", 19 /* Referent */);
  }
  set ReplicationFocus(value) {
    this.SetProp("ReplicationFocus", 19 /* Referent */, value);
  }
  get RespawnLocation() {
    return this.GetProp("RespawnLocation", 19 /* Referent */);
  }
  set RespawnLocation(value) {
    this.SetProp("RespawnLocation", 19 /* Referent */, value);
  }
  get Team() {
    return this.GetProp("Team", 19 /* Referent */);
  }
  set Team(value) {
    this.SetProp("Team", 19 /* Referent */, value);
  }
  get TeamColor() {
    return this.GetProp("TeamColor", 11 /* BrickColor */);
  }
  set TeamColor(value) {
    this.SetProp("TeamColor", 11 /* BrickColor */, value);
  }
  get TeleportedIn() {
    return this.GetProp("TeleportedIn", 2 /* Bool */);
  }
  set TeleportedIn(value) {
    this.SetProp("TeleportedIn", 2 /* Bool */, value);
  }
};
var PlayerEmulatorService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("PlayerEmulatorService");
    this.Name = "PlayerEmulatorService";
    this.CustomPoliciesEnabled = false;
    this.EmulatedCountryCode = "";
    this.EmulatedGameLocale = "";
    this.PlayerEmulationEnabled = false;
    this.PseudolocalizationEnabled = false;
    this.SerializedEmulatedPolicyInfo = "";
  }
  get CustomPoliciesEnabled() {
    return this.GetProp("CustomPoliciesEnabled", 2 /* Bool */);
  }
  set CustomPoliciesEnabled(value) {
    this.SetProp("CustomPoliciesEnabled", 2 /* Bool */, value);
  }
  get EmulatedCountryCode() {
    return this.GetProp("EmulatedCountryCode", 1 /* String */);
  }
  set EmulatedCountryCode(value) {
    this.SetProp("EmulatedCountryCode", 1 /* String */, value);
  }
  get EmulatedGameLocale() {
    return this.GetProp("EmulatedGameLocale", 1 /* String */);
  }
  set EmulatedGameLocale(value) {
    this.SetProp("EmulatedGameLocale", 1 /* String */, value);
  }
  get PlayerEmulationEnabled() {
    return this.GetProp("PlayerEmulationEnabled", 2 /* Bool */);
  }
  set PlayerEmulationEnabled(value) {
    this.SetProp("PlayerEmulationEnabled", 2 /* Bool */, value);
  }
  get PseudolocalizationEnabled() {
    return this.GetProp("PseudolocalizationEnabled", 2 /* Bool */);
  }
  set PseudolocalizationEnabled(value) {
    this.SetProp("PseudolocalizationEnabled", 2 /* Bool */, value);
  }
  get SerializedEmulatedPolicyInfo() {
    return this.GetProp("SerializedEmulatedPolicyInfo", 1 /* String */);
  }
  set SerializedEmulatedPolicyInfo(value) {
    this.SetProp("SerializedEmulatedPolicyInfo", 1 /* String */, value);
  }
};
var PlayerViewService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("PlayerViewService");
    this.Name = "PlayerViewService";
  }
};
var Players = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("Players");
    this.Name = "Players";
    this.CharacterAutoLoads = true;
    this.RespawnTime = 5;
  }
  get CharacterAutoLoads() {
    return this.GetProp("CharacterAutoLoads", 2 /* Bool */);
  }
  set CharacterAutoLoads(value) {
    this.SetProp("CharacterAutoLoads", 2 /* Bool */, value);
  }
  get MaxPlayersInternal() {
    return this.GetProp("MaxPlayersInternal", 3 /* Int32 */);
  }
  set MaxPlayersInternal(value) {
    this.SetProp("MaxPlayersInternal", 3 /* Int32 */, value);
  }
  get PreferredPlayersInternal() {
    return this.GetProp("PreferredPlayersInternal", 3 /* Int32 */);
  }
  set PreferredPlayersInternal(value) {
    this.SetProp("PreferredPlayersInternal", 3 /* Int32 */, value);
  }
  get RespawnTime() {
    return this.GetProp("RespawnTime", 4 /* Float32 */);
  }
  set RespawnTime(value) {
    this.SetProp("RespawnTime", 4 /* Float32 */, value);
  }
  get UseStrafingAnimations() {
    return this.GetProp("UseStrafingAnimations", 2 /* Bool */);
  }
  set UseStrafingAnimations(value) {
    this.SetProp("UseStrafingAnimations", 2 /* Bool */, value);
  }
};
var PluginAction = class extends Instance {
  constructor() {
    super();
    this.addClassName("PluginAction");
    this.Name = "PluginAction";
  }
};
var PluginCapabilities = class extends Instance {
  constructor() {
    super();
    this.addClassName("PluginCapabilities");
    this.Name = "PluginCapabilities";
    this.Manifest = '{"Metadata":{"TargetDataModels": ["Edit", "Server", "Client"]},"Permissions":{}}';
  }
  get Manifest() {
    return this.GetProp("Manifest", 1 /* String */);
  }
  set Manifest(value) {
    this.SetProp("Manifest", 1 /* String */, value);
  }
};
var PluginDebugService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("PluginDebugService");
    this.Name = "PluginDebugService";
  }
};
var PluginGuiService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("PluginGuiService");
    this.Name = "PluginGuiService";
  }
};
var PluginManagementService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("PluginManagementService");
    this.Name = "PluginManagementService";
  }
};
var PluginPolicyService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("PluginPolicyService");
    this.Name = "PluginPolicyService";
  }
};
var PointsService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("PointsService");
    this.Name = "PointsService";
  }
};
var PolicyService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("PolicyService");
    this.Name = "PolicyService";
    this.IsLuobuServer = TriStateBoolean.Unknown;
    this.LuobuWhitelisted = TriStateBoolean.Unknown;
  }
  get IsLuobuServer() {
    return this.GetProp("IsLuobuServer", 18 /* Enum */);
  }
  set IsLuobuServer(value) {
    this.SetProp("IsLuobuServer", 18 /* Enum */, value);
  }
  get LuobuWhitelisted() {
    return this.GetProp("LuobuWhitelisted", 18 /* Enum */);
  }
  set LuobuWhitelisted(value) {
    this.SetProp("LuobuWhitelisted", 18 /* Enum */, value);
  }
};
var PoseBase = class extends Instance {
  constructor() {
    super();
    this.addClassName("PoseBase");
    this.EasingDirection = PoseEasingDirection.In;
    this.EasingStyle = PoseEasingStyle.Linear;
    this.Weight = 1;
  }
  get EasingDirection() {
    return this.GetProp("EasingDirection", 18 /* Enum */);
  }
  set EasingDirection(value) {
    this.SetProp("EasingDirection", 18 /* Enum */, value);
  }
  get EasingStyle() {
    return this.GetProp("EasingStyle", 18 /* Enum */);
  }
  set EasingStyle(value) {
    this.SetProp("EasingStyle", 18 /* Enum */, value);
  }
  get Weight() {
    return this.GetProp("Weight", 4 /* Float32 */);
  }
  set Weight(value) {
    this.SetProp("Weight", 4 /* Float32 */, value);
  }
};
var NumberPose = class extends PoseBase {
  constructor() {
    super();
    this.addClassName("NumberPose");
    this.Name = "NumberPose";
    this.Value = 0;
  }
  get Value() {
    return this.GetProp("Value", 5 /* Float64 */);
  }
  set Value(value) {
    this.SetProp("Value", 5 /* Float64 */, value);
  }
};
var Pose = class extends PoseBase {
  constructor() {
    super();
    this.addClassName("Pose");
    this.Name = "Pose";
    this.MaskWeight = 0;
    this.CFrame = CFrame.Identity;
  }
  get CFrame() {
    return this.GetProp("CFrame", 16 /* CFrame */);
  }
  set CFrame(value) {
    this.SetProp("CFrame", 16 /* CFrame */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get MaskWeight() {
    return this.GetProp("MaskWeight", 4 /* Float32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set MaskWeight(value) {
    this.SetProp("MaskWeight", 4 /* Float32 */, value);
  }
};
var PostEffect = class extends Instance {
  constructor() {
    super();
    this.addClassName("PostEffect");
    this.Enabled = true;
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
};
var BloomEffect = class extends PostEffect {
  constructor() {
    super();
    this.addClassName("BloomEffect");
    this.Name = "BloomEffect";
    this.Intensity = 0.4;
    this.Size = 24;
    this.Threshold = 0.95;
  }
  get Intensity() {
    return this.GetProp("Intensity", 4 /* Float32 */);
  }
  set Intensity(value) {
    this.SetProp("Intensity", 4 /* Float32 */, value);
  }
  get Size() {
    return this.GetProp("Size", 4 /* Float32 */);
  }
  set Size(value) {
    this.SetProp("Size", 4 /* Float32 */, value);
  }
  get Threshold() {
    return this.GetProp("Threshold", 4 /* Float32 */);
  }
  set Threshold(value) {
    this.SetProp("Threshold", 4 /* Float32 */, value);
  }
};
var BlurEffect = class extends PostEffect {
  constructor() {
    super();
    this.addClassName("BlurEffect");
    this.Name = "BlurEffect";
    this.Size = 24;
  }
  get Size() {
    return this.GetProp("Size", 4 /* Float32 */);
  }
  set Size(value) {
    this.SetProp("Size", 4 /* Float32 */, value);
  }
};
var ColorCorrectionEffect = class extends PostEffect {
  constructor() {
    super();
    this.addClassName("ColorCorrectionEffect");
    this.Name = "ColorCorrectionEffect";
    this.Brightness = 0;
    this.Contrast = 0;
    this.Saturation = 0;
    this.TintColor = Color3.FromRGB(255, 255, 255);
  }
  get Brightness() {
    return this.GetProp("Brightness", 4 /* Float32 */);
  }
  set Brightness(value) {
    this.SetProp("Brightness", 4 /* Float32 */, value);
  }
  get Contrast() {
    return this.GetProp("Contrast", 4 /* Float32 */);
  }
  set Contrast(value) {
    this.SetProp("Contrast", 4 /* Float32 */, value);
  }
  get Saturation() {
    return this.GetProp("Saturation", 4 /* Float32 */);
  }
  set Saturation(value) {
    this.SetProp("Saturation", 4 /* Float32 */, value);
  }
  get TintColor() {
    return this.GetProp("TintColor", 12 /* Color3 */);
  }
  set TintColor(value) {
    this.SetProp("TintColor", 12 /* Color3 */, value);
  }
};
var DepthOfFieldEffect = class extends PostEffect {
  constructor() {
    super();
    this.addClassName("DepthOfFieldEffect");
    this.Name = "DepthOfFieldEffect";
    this.FarIntensity = 0.75;
    this.FocusDistance = 0.05;
    this.InFocusRadius = 10;
    this.NearIntensity = 0.75;
  }
  get FarIntensity() {
    return this.GetProp("FarIntensity", 4 /* Float32 */);
  }
  set FarIntensity(value) {
    this.SetProp("FarIntensity", 4 /* Float32 */, value);
  }
  get FocusDistance() {
    return this.GetProp("FocusDistance", 4 /* Float32 */);
  }
  set FocusDistance(value) {
    this.SetProp("FocusDistance", 4 /* Float32 */, value);
  }
  get InFocusRadius() {
    return this.GetProp("InFocusRadius", 4 /* Float32 */);
  }
  set InFocusRadius(value) {
    this.SetProp("InFocusRadius", 4 /* Float32 */, value);
  }
  get NearIntensity() {
    return this.GetProp("NearIntensity", 4 /* Float32 */);
  }
  set NearIntensity(value) {
    this.SetProp("NearIntensity", 4 /* Float32 */, value);
  }
};
var SunRaysEffect = class extends PostEffect {
  constructor() {
    super();
    this.addClassName("SunRaysEffect");
    this.Name = "SunRaysEffect";
    this.Intensity = 0.25;
    this.Spread = 1;
  }
  get Intensity() {
    return this.GetProp("Intensity", 4 /* Float32 */);
  }
  set Intensity(value) {
    this.SetProp("Intensity", 4 /* Float32 */, value);
  }
  get Spread() {
    return this.GetProp("Spread", 4 /* Float32 */);
  }
  set Spread(value) {
    this.SetProp("Spread", 4 /* Float32 */, value);
  }
};
var ProcessInstancePhysicsService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ProcessInstancePhysicsService");
    this.Name = "ProcessInstancePhysicsService";
  }
};
var ProjectFolderService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ProjectFolderService");
    this.Name = "ProjectFolderService";
  }
};
var ProximityPrompt = class extends Instance {
  constructor() {
    super();
    this.addClassName("ProximityPrompt");
    this.Name = "ProximityPrompt";
    this.ActionText = "Interact";
    this.AutoLocalize = true;
    this.ClickablePrompt = true;
    this.Enabled = true;
    this.Exclusivity = ProximityPromptExclusivity.OnePerButton;
    this.GamepadKeyCode = KeyCode.ButtonX;
    this.HoldDuration = 0;
    this.KeyboardKeyCode = KeyCode.E;
    this.MaxActivationDistance = 10;
    this.ObjectText = "";
    this.RequiresLineOfSight = true;
    this.Style = ProximityPromptStyle.Default;
    this.UIOffset = new Vector2(0, 0);
  }
  get ActionText() {
    return this.GetProp("ActionText", 1 /* String */);
  }
  set ActionText(value) {
    this.SetProp("ActionText", 1 /* String */, value);
  }
  get AutoLocalize() {
    return this.GetProp("AutoLocalize", 2 /* Bool */);
  }
  set AutoLocalize(value) {
    this.SetProp("AutoLocalize", 2 /* Bool */, value);
  }
  get ClickablePrompt() {
    return this.GetProp("ClickablePrompt", 2 /* Bool */);
  }
  set ClickablePrompt(value) {
    this.SetProp("ClickablePrompt", 2 /* Bool */, value);
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get Exclusivity() {
    return this.GetProp("Exclusivity", 18 /* Enum */);
  }
  set Exclusivity(value) {
    this.SetProp("Exclusivity", 18 /* Enum */, value);
  }
  get GamepadKeyCode() {
    return this.GetProp("GamepadKeyCode", 18 /* Enum */);
  }
  set GamepadKeyCode(value) {
    this.SetProp("GamepadKeyCode", 18 /* Enum */, value);
  }
  get HoldDuration() {
    return this.GetProp("HoldDuration", 4 /* Float32 */);
  }
  set HoldDuration(value) {
    this.SetProp("HoldDuration", 4 /* Float32 */, value);
  }
  get KeyboardKeyCode() {
    return this.GetProp("KeyboardKeyCode", 18 /* Enum */);
  }
  set KeyboardKeyCode(value) {
    this.SetProp("KeyboardKeyCode", 18 /* Enum */, value);
  }
  get MaxActivationDistance() {
    return this.GetProp("MaxActivationDistance", 4 /* Float32 */);
  }
  set MaxActivationDistance(value) {
    this.SetProp("MaxActivationDistance", 4 /* Float32 */, value);
  }
  get ObjectText() {
    return this.GetProp("ObjectText", 1 /* String */);
  }
  set ObjectText(value) {
    this.SetProp("ObjectText", 1 /* String */, value);
  }
  get RequiresLineOfSight() {
    return this.GetProp("RequiresLineOfSight", 2 /* Bool */);
  }
  set RequiresLineOfSight(value) {
    this.SetProp("RequiresLineOfSight", 2 /* Bool */, value);
  }
  get RootLocalizationTable() {
    return this.GetProp("RootLocalizationTable", 19 /* Referent */);
  }
  set RootLocalizationTable(value) {
    this.SetProp("RootLocalizationTable", 19 /* Referent */, value);
  }
  get Style() {
    return this.GetProp("Style", 18 /* Enum */);
  }
  set Style(value) {
    this.SetProp("Style", 18 /* Enum */, value);
  }
  get UIOffset() {
    return this.GetProp("UIOffset", 13 /* Vector2 */);
  }
  set UIOffset(value) {
    this.SetProp("UIOffset", 13 /* Vector2 */, value);
  }
};
var ProximityPromptService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ProximityPromptService");
    this.Name = "ProximityPromptService";
    this.Enabled = true;
    this.MaxPromptsVisible = 16;
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get MaxPromptsVisible() {
    return this.GetProp("MaxPromptsVisible", 3 /* Int32 */);
  }
  set MaxPromptsVisible(value) {
    this.SetProp("MaxPromptsVisible", 3 /* Int32 */, value);
  }
};
var PublishService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("PublishService");
    this.Name = "PublishService";
  }
};
var RbxAnalyticsService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("RbxAnalyticsService");
    this.Name = "RbxAnalyticsService";
  }
};
var ReflectionMetadata = class extends Instance {
  constructor() {
    super();
    this.addClassName("ReflectionMetadata");
    this.Name = "ReflectionMetadata";
  }
};
var ReflectionMetadataCallbacks = class extends Instance {
  constructor() {
    super();
    this.addClassName("ReflectionMetadataCallbacks");
    this.Name = "ReflectionMetadataCallbacks";
  }
};
var ReflectionMetadataClasses = class extends Instance {
  constructor() {
    super();
    this.addClassName("ReflectionMetadataClasses");
    this.Name = "ReflectionMetadataClasses";
  }
};
var ReflectionMetadataEnums = class extends Instance {
  constructor() {
    super();
    this.addClassName("ReflectionMetadataEnums");
    this.Name = "ReflectionMetadataEnums";
  }
};
var ReflectionMetadataEvents = class extends Instance {
  constructor() {
    super();
    this.addClassName("ReflectionMetadataEvents");
    this.Name = "ReflectionMetadataEvents";
  }
};
var ReflectionMetadataFunctions = class extends Instance {
  constructor() {
    super();
    this.addClassName("ReflectionMetadataFunctions");
    this.Name = "ReflectionMetadataFunctions";
  }
};
var ReflectionMetadataItem = class extends Instance {
  constructor() {
    super();
    this.addClassName("ReflectionMetadataItem");
    this.Browsable = true;
    this.ClassCategory = "";
    this.ClientOnly = false;
    this.Constraint = "";
    this.Deprecated = false;
    this.EditingDisabled = false;
    this.EditorType = "";
    this.FFlag = "";
    this.IsBackend = false;
    this.PropertyOrder = 5e3;
    this.ScriptContext = "";
    this.ServerOnly = false;
    this.SliderScaling = "";
    this.UIMaximum = 0;
    this.UIMinimum = 0;
    this.UINumTicks = 0;
  }
  get Browsable() {
    return this.GetProp("Browsable", 2 /* Bool */);
  }
  set Browsable(value) {
    this.SetProp("Browsable", 2 /* Bool */, value);
  }
  get ClassCategory() {
    return this.GetProp("ClassCategory", 1 /* String */);
  }
  set ClassCategory(value) {
    this.SetProp("ClassCategory", 1 /* String */, value);
  }
  get ClientOnly() {
    return this.GetProp("ClientOnly", 2 /* Bool */);
  }
  set ClientOnly(value) {
    this.SetProp("ClientOnly", 2 /* Bool */, value);
  }
  get Constraint() {
    return this.GetProp("Constraint", 1 /* String */);
  }
  set Constraint(value) {
    this.SetProp("Constraint", 1 /* String */, value);
  }
  get Deprecated() {
    return this.GetProp("Deprecated", 2 /* Bool */);
  }
  set Deprecated(value) {
    this.SetProp("Deprecated", 2 /* Bool */, value);
  }
  get EditingDisabled() {
    return this.GetProp("EditingDisabled", 2 /* Bool */);
  }
  set EditingDisabled(value) {
    this.SetProp("EditingDisabled", 2 /* Bool */, value);
  }
  get EditorType() {
    return this.GetProp("EditorType", 1 /* String */);
  }
  set EditorType(value) {
    this.SetProp("EditorType", 1 /* String */, value);
  }
  get FFlag() {
    return this.GetProp("FFlag", 1 /* String */);
  }
  set FFlag(value) {
    this.SetProp("FFlag", 1 /* String */, value);
  }
  get IsBackend() {
    return this.GetProp("IsBackend", 2 /* Bool */);
  }
  set IsBackend(value) {
    this.SetProp("IsBackend", 2 /* Bool */, value);
  }
  get PropertyOrder() {
    return this.GetProp("PropertyOrder", 3 /* Int32 */);
  }
  set PropertyOrder(value) {
    this.SetProp("PropertyOrder", 3 /* Int32 */, value);
  }
  get ScriptContext() {
    return this.GetProp("ScriptContext", 1 /* String */);
  }
  set ScriptContext(value) {
    this.SetProp("ScriptContext", 1 /* String */, value);
  }
  get ServerOnly() {
    return this.GetProp("ServerOnly", 2 /* Bool */);
  }
  set ServerOnly(value) {
    this.SetProp("ServerOnly", 2 /* Bool */, value);
  }
  get SliderScaling() {
    return this.GetProp("SliderScaling", 1 /* String */);
  }
  set SliderScaling(value) {
    this.SetProp("SliderScaling", 1 /* String */, value);
  }
  get UIMaximum() {
    return this.GetProp("UIMaximum", 5 /* Float64 */);
  }
  set UIMaximum(value) {
    this.SetProp("UIMaximum", 5 /* Float64 */, value);
  }
  get UIMinimum() {
    return this.GetProp("UIMinimum", 5 /* Float64 */);
  }
  set UIMinimum(value) {
    this.SetProp("UIMinimum", 5 /* Float64 */, value);
  }
  get UINumTicks() {
    return this.GetProp("UINumTicks", 5 /* Float64 */);
  }
  set UINumTicks(value) {
    this.SetProp("UINumTicks", 5 /* Float64 */, value);
  }
};
var ReflectionMetadataClass = class extends ReflectionMetadataItem {
  constructor() {
    super();
    this.addClassName("ReflectionMetadataClass");
    this.Name = "ReflectionMetadataClass";
    this.ExplorerImageIndex = 0;
    this.ExplorerOrder = 2147483647;
    this.Insertable = true;
    this.PreferredParent = "";
    this.ServiceVisibility = ServiceVisibility.Always;
  }
  get ExplorerImageIndex() {
    return this.GetProp("ExplorerImageIndex", 3 /* Int32 */);
  }
  set ExplorerImageIndex(value) {
    this.SetProp("ExplorerImageIndex", 3 /* Int32 */, value);
  }
  get ExplorerOrder() {
    return this.GetProp("ExplorerOrder", 3 /* Int32 */);
  }
  set ExplorerOrder(value) {
    this.SetProp("ExplorerOrder", 3 /* Int32 */, value);
  }
  get Insertable() {
    return this.GetProp("Insertable", 2 /* Bool */);
  }
  set Insertable(value) {
    this.SetProp("Insertable", 2 /* Bool */, value);
  }
  get PreferredParent() {
    return this.GetProp("PreferredParent", 1 /* String */);
  }
  set PreferredParent(value) {
    this.SetProp("PreferredParent", 1 /* String */, value);
  }
  get ServiceVisibility() {
    return this.GetProp("ServiceVisibility", 18 /* Enum */);
  }
  set ServiceVisibility(value) {
    this.SetProp("ServiceVisibility", 18 /* Enum */, value);
  }
};
var ReflectionMetadataEnum = class extends ReflectionMetadataItem {
  constructor() {
    super();
    this.addClassName("ReflectionMetadataEnum");
    this.Name = "ReflectionMetadataEnum";
  }
};
var ReflectionMetadataEnumItem = class extends ReflectionMetadataItem {
  constructor() {
    super();
    this.addClassName("ReflectionMetadataEnumItem");
    this.Name = "ReflectionMetadataEnumItem";
  }
};
var ReflectionMetadataMember = class extends ReflectionMetadataItem {
  constructor() {
    super();
    this.addClassName("ReflectionMetadataMember");
    this.Name = "ReflectionMetadataMember";
  }
};
var ReflectionMetadataProperties = class extends Instance {
  constructor() {
    super();
    this.addClassName("ReflectionMetadataProperties");
    this.Name = "ReflectionMetadataProperties";
  }
};
var ReflectionMetadataYieldFunctions = class extends Instance {
  constructor() {
    super();
    this.addClassName("ReflectionMetadataYieldFunctions");
    this.Name = "ReflectionMetadataYieldFunctions";
  }
};
var ReflectionService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ReflectionService");
    this.Name = "ReflectionService";
  }
};
var RemoteCursorService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("RemoteCursorService");
    this.Name = "RemoteCursorService";
  }
};
var RemoteDebuggerServer = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("RemoteDebuggerServer");
    this.Name = "RemoteDebuggerServer";
  }
};
var RemoteFunction = class extends Instance {
  constructor() {
    super();
    this.addClassName("RemoteFunction");
    this.Name = "RemoteFunction";
  }
};
var RenderSettings = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("RenderSettings");
    this.Name = "RenderSettings";
  }
  get AutoFRMLevel() {
    return this.GetProp("AutoFRMLevel", 3 /* Int32 */);
  }
  set AutoFRMLevel(value) {
    this.SetProp("AutoFRMLevel", 3 /* Int32 */, value);
  }
  get EagerBulkExecution() {
    return this.GetProp("EagerBulkExecution", 2 /* Bool */);
  }
  set EagerBulkExecution(value) {
    this.SetProp("EagerBulkExecution", 2 /* Bool */, value);
  }
  get EditQualityLevel() {
    return this.GetProp("EditQualityLevel", 18 /* Enum */);
  }
  set EditQualityLevel(value) {
    this.SetProp("EditQualityLevel", 18 /* Enum */, value);
  }
  get EnableVRMode() {
    return this.GetProp("Enable VR Mode", 2 /* Bool */);
  }
  set EnableVRMode(value) {
    this.SetProp("Enable VR Mode", 2 /* Bool */, value);
  }
  get ExportMergeByMaterial() {
    return this.GetProp("ExportMergeByMaterial", 2 /* Bool */);
  }
  set ExportMergeByMaterial(value) {
    this.SetProp("ExportMergeByMaterial", 2 /* Bool */, value);
  }
  get FrameRateManager() {
    return this.GetProp("FrameRateManager", 18 /* Enum */);
  }
  set FrameRateManager(value) {
    this.SetProp("FrameRateManager", 18 /* Enum */, value);
  }
  get GraphicsMode() {
    return this.GetProp("GraphicsMode", 18 /* Enum */);
  }
  set GraphicsMode(value) {
    this.SetProp("GraphicsMode", 18 /* Enum */, value);
  }
  get MeshCacheSize() {
    return this.GetProp("MeshCacheSize", 3 /* Int32 */);
  }
  set MeshCacheSize(value) {
    this.SetProp("MeshCacheSize", 3 /* Int32 */, value);
  }
  get MeshPartDetailLevel() {
    return this.GetProp("MeshPartDetailLevel", 18 /* Enum */);
  }
  set MeshPartDetailLevel(value) {
    this.SetProp("MeshPartDetailLevel", 18 /* Enum */, value);
  }
  get QualityLevel() {
    return this.GetProp("QualityLevel", 18 /* Enum */);
  }
  set QualityLevel(value) {
    this.SetProp("QualityLevel", 18 /* Enum */, value);
  }
  get ReloadAssets() {
    return this.GetProp("ReloadAssets", 2 /* Bool */);
  }
  set ReloadAssets(value) {
    this.SetProp("ReloadAssets", 2 /* Bool */, value);
  }
  get RenderCSGTrianglesDebug() {
    return this.GetProp("RenderCSGTrianglesDebug", 2 /* Bool */);
  }
  set RenderCSGTrianglesDebug(value) {
    this.SetProp("RenderCSGTrianglesDebug", 2 /* Bool */, value);
  }
  get ShowBoundingBoxes() {
    return this.GetProp("ShowBoundingBoxes", 2 /* Bool */);
  }
  set ShowBoundingBoxes(value) {
    this.SetProp("ShowBoundingBoxes", 2 /* Bool */, value);
  }
  get ViewMode() {
    return this.GetProp("ViewMode", 18 /* Enum */);
  }
  set ViewMode(value) {
    this.SetProp("ViewMode", 18 /* Enum */, value);
  }
};
var RenderingTest = class extends Instance {
  constructor() {
    super();
    this.addClassName("RenderingTest");
    this.Name = "RenderingTest";
    this.ComparisonDiffThreshold = 10;
    this.ComparisonMethod = RenderingTestComparisonMethod.psnr;
    this.ComparisonPsnrThreshold = 50;
    this.Description = "";
    this.FieldOfView = 70;
    this.PerfTest = false;
    this.QualityAuto = false;
    this.QualityLevel = 21;
    this.RenderingTestFrameCount = 120;
    this.ShouldSkip = false;
    this.Ticket = "";
    this.Timeout = 10;
    this.CFrame = CFrame.Identity;
  }
  get CFrame() {
    return this.GetProp("CFrame", 16 /* CFrame */);
  }
  set CFrame(value) {
    this.SetProp("CFrame", 16 /* CFrame */, value);
  }
  get ComparisonDiffThreshold() {
    return this.GetProp("ComparisonDiffThreshold", 3 /* Int32 */);
  }
  set ComparisonDiffThreshold(value) {
    this.SetProp("ComparisonDiffThreshold", 3 /* Int32 */, value);
  }
  get ComparisonMethod() {
    return this.GetProp("ComparisonMethod", 18 /* Enum */);
  }
  set ComparisonMethod(value) {
    this.SetProp("ComparisonMethod", 18 /* Enum */, value);
  }
  get ComparisonPsnrThreshold() {
    return this.GetProp("ComparisonPsnrThreshold", 4 /* Float32 */);
  }
  set ComparisonPsnrThreshold(value) {
    this.SetProp("ComparisonPsnrThreshold", 4 /* Float32 */, value);
  }
  get Description() {
    return this.GetProp("Description", 1 /* String */);
  }
  set Description(value) {
    this.SetProp("Description", 1 /* String */, value);
  }
  get FieldOfView() {
    return this.GetProp("FieldOfView", 4 /* Float32 */);
  }
  set FieldOfView(value) {
    this.SetProp("FieldOfView", 4 /* Float32 */, value);
  }
  get PerfTest() {
    return this.GetProp("PerfTest", 2 /* Bool */);
  }
  set PerfTest(value) {
    this.SetProp("PerfTest", 2 /* Bool */, value);
  }
  get QualityAuto() {
    return this.GetProp("QualityAuto", 2 /* Bool */);
  }
  set QualityAuto(value) {
    this.SetProp("QualityAuto", 2 /* Bool */, value);
  }
  get QualityLevel() {
    return this.GetProp("QualityLevel", 3 /* Int32 */);
  }
  set QualityLevel(value) {
    this.SetProp("QualityLevel", 3 /* Int32 */, value);
  }
  get RenderingTestFrameCount() {
    return this.GetProp("RenderingTestFrameCount", 3 /* Int32 */);
  }
  set RenderingTestFrameCount(value) {
    this.SetProp("RenderingTestFrameCount", 3 /* Int32 */, value);
  }
  get ShouldSkip() {
    return this.GetProp("ShouldSkip", 2 /* Bool */);
  }
  set ShouldSkip(value) {
    this.SetProp("ShouldSkip", 2 /* Bool */, value);
  }
  get Ticket() {
    return this.GetProp("Ticket", 1 /* String */);
  }
  set Ticket(value) {
    this.SetProp("Ticket", 1 /* String */, value);
  }
  get Timeout() {
    return this.GetProp("Timeout", 3 /* Int32 */);
  }
  set Timeout(value) {
    this.SetProp("Timeout", 3 /* Int32 */, value);
  }
};
var ReplicatedFirst = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ReplicatedFirst");
    this.Name = "ReplicatedFirst";
  }
};
var ReplicatedStorage = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ReplicatedStorage");
    this.Name = "ReplicatedStorage";
  }
};
var RibbonNotificationService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("RibbonNotificationService");
    this.Name = "RibbonNotificationService";
  }
};
var RobloxPluginGuiService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("RobloxPluginGuiService");
    this.Name = "RobloxPluginGuiService";
  }
};
var RobloxReplicatedStorage = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("RobloxReplicatedStorage");
    this.Name = "RobloxReplicatedStorage";
  }
};
var RobloxServerStorage = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("RobloxServerStorage");
    this.Name = "RobloxServerStorage";
  }
};
var RomarkService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("RomarkService");
    this.Name = "RomarkService";
  }
};
var RotationCurve = class extends Instance {
  constructor() {
    super();
    this.addClassName("RotationCurve");
    this.Name = "RotationCurve";
    this.ValuesAndTimes = "";
  }
  get ValuesAndTimes() {
    return this.GetProp("ValuesAndTimes", 1 /* String */);
  }
  set ValuesAndTimes(value) {
    this.SetProp("ValuesAndTimes", 1 /* String */, value);
  }
};
var RtMessagingService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("RtMessagingService");
    this.Name = "RtMessagingService";
  }
};
var RunService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("RunService");
    this.Name = "RunService";
  }
};
var RuntimeScriptService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("RuntimeScriptService");
    this.Name = "RuntimeScriptService";
  }
};
var SafetyService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("SafetyService");
    this.Name = "SafetyService";
    this.IsCaptureModeForReport = false;
  }
  get IsCaptureModeForReport() {
    return this.GetProp("IsCaptureModeForReport", 2 /* Bool */);
  }
  set IsCaptureModeForReport(value) {
    this.SetProp("IsCaptureModeForReport", 2 /* Bool */, value);
  }
};
var ScriptChangeService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ScriptChangeService");
    this.Name = "ScriptChangeService";
  }
};
var ScriptCloneWatcher = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ScriptCloneWatcher");
    this.Name = "ScriptCloneWatcher";
  }
};
var ScriptCloneWatcherHelper = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ScriptCloneWatcherHelper");
    this.Name = "ScriptCloneWatcherHelper";
  }
};
var ScriptCommitService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ScriptCommitService");
    this.Name = "ScriptCommitService";
  }
};
var ScriptContext = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ScriptContext");
    this.Name = "ScriptContext";
  }
};
var ScriptEditorService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ScriptEditorService");
    this.Name = "ScriptEditorService";
  }
};
var ScriptProfilerService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ScriptProfilerService");
    this.Name = "ScriptProfilerService";
  }
};
var ScriptRegistrationService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ScriptRegistrationService");
    this.Name = "ScriptRegistrationService";
  }
};
var ScriptService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ScriptService");
    this.Name = "ScriptService";
  }
};
var Selection = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("Selection");
    this.Name = "Selection";
  }
};
var SelectionHighlightManager = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("SelectionHighlightManager");
    this.Name = "SelectionHighlightManager";
  }
};
var SensorBase = class extends Instance {
  constructor() {
    super();
    this.addClassName("SensorBase");
    this.UpdateType = SensorUpdateType.OnRead;
  }
  get UpdateType() {
    return this.GetProp("UpdateType", 18 /* Enum */);
  }
  set UpdateType(value) {
    this.SetProp("UpdateType", 18 /* Enum */, value);
  }
};
var BuoyancySensor = class extends SensorBase {
  constructor() {
    super();
    this.addClassName("BuoyancySensor");
    this.Name = "BuoyancySensor";
    this.FullySubmerged = false;
    this.TouchingSurface = false;
  }
  get FullySubmerged() {
    return this.GetProp("FullySubmerged", 2 /* Bool */);
  }
  set FullySubmerged(value) {
    this.SetProp("FullySubmerged", 2 /* Bool */, value);
  }
  get TouchingSurface() {
    return this.GetProp("TouchingSurface", 2 /* Bool */);
  }
  set TouchingSurface(value) {
    this.SetProp("TouchingSurface", 2 /* Bool */, value);
  }
};
var ControllerSensor = class extends SensorBase {
  constructor() {
    super();
    this.addClassName("ControllerSensor");
  }
};
var ControllerPartSensor = class extends ControllerSensor {
  constructor() {
    super();
    this.addClassName("ControllerPartSensor");
    this.Name = "ControllerPartSensor";
    this.HitNormal = new Vector3(0, 0, 0);
    this.SearchDistance = 0;
    this.SensorMode = SensorMode.Floor;
    this.HitFrame = CFrame.Identity;
  }
  get HitFrame() {
    return this.GetProp("HitFrame", 16 /* CFrame */);
  }
  set HitFrame(value) {
    this.SetProp("HitFrame", 16 /* CFrame */, value);
  }
  get HitNormal() {
    return this.GetProp("HitNormal", 14 /* Vector3 */);
  }
  set HitNormal(value) {
    this.SetProp("HitNormal", 14 /* Vector3 */, value);
  }
  get SearchDistance() {
    return this.GetProp("SearchDistance", 4 /* Float32 */);
  }
  set SearchDistance(value) {
    this.SetProp("SearchDistance", 4 /* Float32 */, value);
  }
  get SensedPart() {
    return this.GetProp("SensedPart", 19 /* Referent */);
  }
  set SensedPart(value) {
    this.SetProp("SensedPart", 19 /* Referent */, value);
  }
  get SensorMode() {
    return this.GetProp("SensorMode", 18 /* Enum */);
  }
  set SensorMode(value) {
    this.SetProp("SensorMode", 18 /* Enum */, value);
  }
};
var ServerScriptService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ServerScriptService");
    this.Name = "ServerScriptService";
    this.LoadStringEnabled = false;
  }
  get LoadStringEnabled() {
    return this.GetProp("LoadStringEnabled", 2 /* Bool */);
  }
  set LoadStringEnabled(value) {
    this.SetProp("LoadStringEnabled", 2 /* Bool */, value);
  }
};
var ServerStorage = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ServerStorage");
    this.Name = "ServerStorage";
  }
};
var ServiceVisibilityService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ServiceVisibilityService");
    this.Name = "ServiceVisibilityService";
    this.HiddenServices = "";
    this.VisibleServices = "";
  }
  get HiddenServices() {
    return this.GetProp("HiddenServices", 1 /* String */);
  }
  set HiddenServices(value) {
    this.SetProp("HiddenServices", 1 /* String */, value);
  }
  get VisibleServices() {
    return this.GetProp("VisibleServices", 1 /* String */);
  }
  set VisibleServices(value) {
    this.SetProp("VisibleServices", 1 /* String */, value);
  }
};
var SessionService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("SessionService");
    this.Name = "SessionService";
  }
};
var SharedTableRegistry = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("SharedTableRegistry");
    this.Name = "SharedTableRegistry";
  }
};
var ShorelineUpgraderService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ShorelineUpgraderService");
    this.Name = "ShorelineUpgraderService";
  }
};
var Sky = class extends Instance {
  constructor() {
    super();
    this.addClassName("Sky");
    this.Name = "Sky";
    this.CelestialBodiesShown = true;
    this.MoonAngularSize = 11;
    this.MoonTextureId = "rbxasset://sky/moon.jpg";
    this.SkyboxBk = "rbxasset://textures/sky/sky512_bk.tex";
    this.SkyboxDn = "rbxasset://textures/sky/sky512_dn.tex";
    this.SkyboxFt = "rbxasset://textures/sky/sky512_ft.tex";
    this.SkyboxLf = "rbxasset://textures/sky/sky512_lf.tex";
    this.SkyboxRt = "rbxasset://textures/sky/sky512_rt.tex";
    this.SkyboxUp = "rbxasset://textures/sky/sky512_up.tex";
    this.StarCount = 3e3;
    this.SunAngularSize = 21;
    this.SunTextureId = "rbxasset://sky/sun.jpg";
  }
  get CelestialBodiesShown() {
    return this.GetProp("CelestialBodiesShown", 2 /* Bool */);
  }
  set CelestialBodiesShown(value) {
    this.SetProp("CelestialBodiesShown", 2 /* Bool */, value);
  }
  get MoonAngularSize() {
    return this.GetProp("MoonAngularSize", 4 /* Float32 */);
  }
  set MoonAngularSize(value) {
    this.SetProp("MoonAngularSize", 4 /* Float32 */, value);
  }
  get MoonTextureId() {
    return this.GetProp("MoonTextureId", 1 /* String */);
  }
  set MoonTextureId(value) {
    this.SetProp("MoonTextureId", 1 /* String */, value);
  }
  get SkyboxBk() {
    return this.GetProp("SkyboxBk", 1 /* String */);
  }
  set SkyboxBk(value) {
    this.SetProp("SkyboxBk", 1 /* String */, value);
  }
  get SkyboxDn() {
    return this.GetProp("SkyboxDn", 1 /* String */);
  }
  set SkyboxDn(value) {
    this.SetProp("SkyboxDn", 1 /* String */, value);
  }
  get SkyboxFt() {
    return this.GetProp("SkyboxFt", 1 /* String */);
  }
  set SkyboxFt(value) {
    this.SetProp("SkyboxFt", 1 /* String */, value);
  }
  get SkyboxLf() {
    return this.GetProp("SkyboxLf", 1 /* String */);
  }
  set SkyboxLf(value) {
    this.SetProp("SkyboxLf", 1 /* String */, value);
  }
  get SkyboxRt() {
    return this.GetProp("SkyboxRt", 1 /* String */);
  }
  set SkyboxRt(value) {
    this.SetProp("SkyboxRt", 1 /* String */, value);
  }
  get SkyboxUp() {
    return this.GetProp("SkyboxUp", 1 /* String */);
  }
  set SkyboxUp(value) {
    this.SetProp("SkyboxUp", 1 /* String */, value);
  }
  get StarCount() {
    return this.GetProp("StarCount", 3 /* Int32 */);
  }
  set StarCount(value) {
    this.SetProp("StarCount", 3 /* Int32 */, value);
  }
  get SunAngularSize() {
    return this.GetProp("SunAngularSize", 4 /* Float32 */);
  }
  set SunAngularSize(value) {
    this.SetProp("SunAngularSize", 4 /* Float32 */, value);
  }
  get SunTextureId() {
    return this.GetProp("SunTextureId", 1 /* String */);
  }
  set SunTextureId(value) {
    this.SetProp("SunTextureId", 1 /* String */, value);
  }
};
var Smoke = class extends Instance {
  constructor() {
    super();
    this.addClassName("Smoke");
    this.Name = "Smoke";
    this.Color = Color3.FromRGB(255, 255, 255);
    this.Enabled = true;
    this.TimeScale = 1;
    this.Opacityxml = 0.5;
    this.RiseVelocityxml = 1;
    this.Sizexml = 1;
  }
  get Color() {
    return this.GetProp("Color", 12 /* Color3 */);
  }
  set Color(value) {
    this.SetProp("Color", 12 /* Color3 */, value);
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get TimeScale() {
    return this.GetProp("TimeScale", 4 /* Float32 */);
  }
  set TimeScale(value) {
    this.SetProp("TimeScale", 4 /* Float32 */, value);
  }
  get Opacityxml() {
    return this.GetProp("opacity_xml", 4 /* Float32 */);
  }
  set Opacityxml(value) {
    this.SetProp("opacity_xml", 4 /* Float32 */, value);
  }
  get RiseVelocityxml() {
    return this.GetProp("riseVelocity_xml", 4 /* Float32 */);
  }
  set RiseVelocityxml(value) {
    this.SetProp("riseVelocity_xml", 4 /* Float32 */, value);
  }
  get Sizexml() {
    return this.GetProp("size_xml", 4 /* Float32 */);
  }
  set Sizexml(value) {
    this.SetProp("size_xml", 4 /* Float32 */, value);
  }
};
var SmoothVoxelsUpgraderService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("SmoothVoxelsUpgraderService");
    this.Name = "SmoothVoxelsUpgraderService";
  }
};
var SnippetService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("SnippetService");
    this.Name = "SnippetService";
  }
};
var SocialService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("SocialService");
    this.Name = "SocialService";
  }
};
var Sound = class extends Instance {
  constructor() {
    super();
    this.addClassName("Sound");
    this.Name = "Sound";
    this.EmitterSize = 10;
    this.LoopRegion = new NumberRange(0, 6e4);
    this.Looped = false;
    this.MinDistance = 10;
    this.Pitch = 1;
    this.PlayOnRemove = false;
    this.PlaybackRegion = new NumberRange(0, 6e4);
    this.PlaybackRegionsEnabled = false;
    this.PlaybackSpeed = 1;
    this.Playing = false;
    this.RollOffMode = RollOffMode.Inverse;
    this.SoundId = "";
    this.TimePosition = 0;
    this.Volume = 0.5;
    this.XmlReadMaxDistance3 = 1e4;
    this.XmlReadMinDistance3 = 10;
  }
  get EmitterSize() {
    return this.GetProp("EmitterSize", 4 /* Float32 */);
  }
  set EmitterSize(value) {
    this.SetProp("EmitterSize", 4 /* Float32 */, value);
  }
  get LoopRegion() {
    return this.GetProp("LoopRegion", 23 /* NumberRange */);
  }
  set LoopRegion(value) {
    this.SetProp("LoopRegion", 23 /* NumberRange */, value);
  }
  get Looped() {
    return this.GetProp("Looped", 2 /* Bool */);
  }
  set Looped(value) {
    this.SetProp("Looped", 2 /* Bool */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get MinDistance() {
    return this.GetProp("MinDistance", 4 /* Float32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set MinDistance(value) {
    this.SetProp("MinDistance", 4 /* Float32 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get Pitch() {
    return this.GetProp("Pitch", 4 /* Float32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set Pitch(value) {
    this.SetProp("Pitch", 4 /* Float32 */, value);
  }
  get PlayOnRemove() {
    return this.GetProp("PlayOnRemove", 2 /* Bool */);
  }
  set PlayOnRemove(value) {
    this.SetProp("PlayOnRemove", 2 /* Bool */, value);
  }
  get PlaybackRegion() {
    return this.GetProp("PlaybackRegion", 23 /* NumberRange */);
  }
  set PlaybackRegion(value) {
    this.SetProp("PlaybackRegion", 23 /* NumberRange */, value);
  }
  get PlaybackRegionsEnabled() {
    return this.GetProp("PlaybackRegionsEnabled", 2 /* Bool */);
  }
  set PlaybackRegionsEnabled(value) {
    this.SetProp("PlaybackRegionsEnabled", 2 /* Bool */, value);
  }
  get PlaybackSpeed() {
    return this.GetProp("PlaybackSpeed", 4 /* Float32 */);
  }
  set PlaybackSpeed(value) {
    this.SetProp("PlaybackSpeed", 4 /* Float32 */, value);
  }
  get Playing() {
    return this.GetProp("Playing", 2 /* Bool */);
  }
  set Playing(value) {
    this.SetProp("Playing", 2 /* Bool */, value);
  }
  get RollOffMode() {
    return this.GetProp("RollOffMode", 18 /* Enum */);
  }
  set RollOffMode(value) {
    this.SetProp("RollOffMode", 18 /* Enum */, value);
  }
  get SoundGroup() {
    return this.GetProp("SoundGroup", 19 /* Referent */);
  }
  set SoundGroup(value) {
    this.SetProp("SoundGroup", 19 /* Referent */, value);
  }
  get SoundId() {
    return this.GetProp("SoundId", 1 /* String */);
  }
  set SoundId(value) {
    this.SetProp("SoundId", 1 /* String */, value);
  }
  get TimePosition() {
    return this.GetProp("TimePosition", 5 /* Float64 */);
  }
  set TimePosition(value) {
    this.SetProp("TimePosition", 5 /* Float64 */, value);
  }
  get Volume() {
    return this.GetProp("Volume", 4 /* Float32 */);
  }
  set Volume(value) {
    this.SetProp("Volume", 4 /* Float32 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get XmlReadMaxDistance3() {
    return this.GetProp("xmlRead_MaxDistance_3", 4 /* Float32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set XmlReadMaxDistance3(value) {
    this.SetProp("xmlRead_MaxDistance_3", 4 /* Float32 */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get XmlReadMinDistance3() {
    return this.GetProp("xmlRead_MinDistance_3", 4 /* Float32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set XmlReadMinDistance3(value) {
    this.SetProp("xmlRead_MinDistance_3", 4 /* Float32 */, value);
  }
};
var SoundEffect = class extends Instance {
  constructor() {
    super();
    this.addClassName("SoundEffect");
    this.Enabled = true;
    this.Priority = 0;
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get Priority() {
    return this.GetProp("Priority", 3 /* Int32 */);
  }
  set Priority(value) {
    this.SetProp("Priority", 3 /* Int32 */, value);
  }
};
var ChorusSoundEffect = class extends SoundEffect {
  constructor() {
    super();
    this.addClassName("ChorusSoundEffect");
    this.Name = "ChorusSoundEffect";
    this.Depth = 0.15;
    this.Mix = 0.5;
    this.Rate = 0.5;
  }
  get Depth() {
    return this.GetProp("Depth", 4 /* Float32 */);
  }
  set Depth(value) {
    this.SetProp("Depth", 4 /* Float32 */, value);
  }
  get Mix() {
    return this.GetProp("Mix", 4 /* Float32 */);
  }
  set Mix(value) {
    this.SetProp("Mix", 4 /* Float32 */, value);
  }
  get Rate() {
    return this.GetProp("Rate", 4 /* Float32 */);
  }
  set Rate(value) {
    this.SetProp("Rate", 4 /* Float32 */, value);
  }
};
var CompressorSoundEffect = class extends SoundEffect {
  constructor() {
    super();
    this.addClassName("CompressorSoundEffect");
    this.Name = "CompressorSoundEffect";
    this.Attack = 0.1;
    this.GainMakeup = 0;
    this.Ratio = 40;
    this.Release = 0.1;
    this.Threshold = -40;
  }
  get Attack() {
    return this.GetProp("Attack", 4 /* Float32 */);
  }
  set Attack(value) {
    this.SetProp("Attack", 4 /* Float32 */, value);
  }
  get GainMakeup() {
    return this.GetProp("GainMakeup", 4 /* Float32 */);
  }
  set GainMakeup(value) {
    this.SetProp("GainMakeup", 4 /* Float32 */, value);
  }
  get Ratio() {
    return this.GetProp("Ratio", 4 /* Float32 */);
  }
  set Ratio(value) {
    this.SetProp("Ratio", 4 /* Float32 */, value);
  }
  get Release() {
    return this.GetProp("Release", 4 /* Float32 */);
  }
  set Release(value) {
    this.SetProp("Release", 4 /* Float32 */, value);
  }
  get SideChain() {
    return this.GetProp("SideChain", 19 /* Referent */);
  }
  set SideChain(value) {
    this.SetProp("SideChain", 19 /* Referent */, value);
  }
  get Threshold() {
    return this.GetProp("Threshold", 4 /* Float32 */);
  }
  set Threshold(value) {
    this.SetProp("Threshold", 4 /* Float32 */, value);
  }
};
var DistortionSoundEffect = class extends SoundEffect {
  constructor() {
    super();
    this.addClassName("DistortionSoundEffect");
    this.Name = "DistortionSoundEffect";
    this.Level = 0.75;
  }
  get Level() {
    return this.GetProp("Level", 4 /* Float32 */);
  }
  set Level(value) {
    this.SetProp("Level", 4 /* Float32 */, value);
  }
};
var EchoSoundEffect = class extends SoundEffect {
  constructor() {
    super();
    this.addClassName("EchoSoundEffect");
    this.Name = "EchoSoundEffect";
    this.Delay = 1;
    this.DryLevel = 0;
    this.Feedback = 0.5;
    this.WetLevel = 0;
  }
  get Delay() {
    return this.GetProp("Delay", 4 /* Float32 */);
  }
  set Delay(value) {
    this.SetProp("Delay", 4 /* Float32 */, value);
  }
  get DryLevel() {
    return this.GetProp("DryLevel", 4 /* Float32 */);
  }
  set DryLevel(value) {
    this.SetProp("DryLevel", 4 /* Float32 */, value);
  }
  get Feedback() {
    return this.GetProp("Feedback", 4 /* Float32 */);
  }
  set Feedback(value) {
    this.SetProp("Feedback", 4 /* Float32 */, value);
  }
  get WetLevel() {
    return this.GetProp("WetLevel", 4 /* Float32 */);
  }
  set WetLevel(value) {
    this.SetProp("WetLevel", 4 /* Float32 */, value);
  }
};
var EqualizerSoundEffect = class extends SoundEffect {
  constructor() {
    super();
    this.addClassName("EqualizerSoundEffect");
    this.Name = "EqualizerSoundEffect";
    this.HighGain = 0;
    this.LowGain = -20;
    this.MidGain = -10;
  }
  get HighGain() {
    return this.GetProp("HighGain", 4 /* Float32 */);
  }
  set HighGain(value) {
    this.SetProp("HighGain", 4 /* Float32 */, value);
  }
  get LowGain() {
    return this.GetProp("LowGain", 4 /* Float32 */);
  }
  set LowGain(value) {
    this.SetProp("LowGain", 4 /* Float32 */, value);
  }
  get MidGain() {
    return this.GetProp("MidGain", 4 /* Float32 */);
  }
  set MidGain(value) {
    this.SetProp("MidGain", 4 /* Float32 */, value);
  }
};
var FlangeSoundEffect = class extends SoundEffect {
  constructor() {
    super();
    this.addClassName("FlangeSoundEffect");
    this.Name = "FlangeSoundEffect";
    this.Depth = 0.45;
    this.Mix = 0.85;
    this.Rate = 5;
  }
  get Depth() {
    return this.GetProp("Depth", 4 /* Float32 */);
  }
  set Depth(value) {
    this.SetProp("Depth", 4 /* Float32 */, value);
  }
  get Mix() {
    return this.GetProp("Mix", 4 /* Float32 */);
  }
  set Mix(value) {
    this.SetProp("Mix", 4 /* Float32 */, value);
  }
  get Rate() {
    return this.GetProp("Rate", 4 /* Float32 */);
  }
  set Rate(value) {
    this.SetProp("Rate", 4 /* Float32 */, value);
  }
};
var PitchShiftSoundEffect = class extends SoundEffect {
  constructor() {
    super();
    this.addClassName("PitchShiftSoundEffect");
    this.Name = "PitchShiftSoundEffect";
    this.Octave = 1.25;
  }
  get Octave() {
    return this.GetProp("Octave", 4 /* Float32 */);
  }
  set Octave(value) {
    this.SetProp("Octave", 4 /* Float32 */, value);
  }
};
var ReverbSoundEffect = class extends SoundEffect {
  constructor() {
    super();
    this.addClassName("ReverbSoundEffect");
    this.Name = "ReverbSoundEffect";
    this.DecayTime = 1.5;
    this.Density = 1;
    this.Diffusion = 1;
    this.DryLevel = -6;
    this.WetLevel = 0;
  }
  get DecayTime() {
    return this.GetProp("DecayTime", 4 /* Float32 */);
  }
  set DecayTime(value) {
    this.SetProp("DecayTime", 4 /* Float32 */, value);
  }
  get Density() {
    return this.GetProp("Density", 4 /* Float32 */);
  }
  set Density(value) {
    this.SetProp("Density", 4 /* Float32 */, value);
  }
  get Diffusion() {
    return this.GetProp("Diffusion", 4 /* Float32 */);
  }
  set Diffusion(value) {
    this.SetProp("Diffusion", 4 /* Float32 */, value);
  }
  get DryLevel() {
    return this.GetProp("DryLevel", 4 /* Float32 */);
  }
  set DryLevel(value) {
    this.SetProp("DryLevel", 4 /* Float32 */, value);
  }
  get WetLevel() {
    return this.GetProp("WetLevel", 4 /* Float32 */);
  }
  set WetLevel(value) {
    this.SetProp("WetLevel", 4 /* Float32 */, value);
  }
};
var TremoloSoundEffect = class extends SoundEffect {
  constructor() {
    super();
    this.addClassName("TremoloSoundEffect");
    this.Name = "TremoloSoundEffect";
    this.Depth = 1;
    this.Duty = 0.5;
    this.Frequency = 5;
  }
  get Depth() {
    return this.GetProp("Depth", 4 /* Float32 */);
  }
  set Depth(value) {
    this.SetProp("Depth", 4 /* Float32 */, value);
  }
  get Duty() {
    return this.GetProp("Duty", 4 /* Float32 */);
  }
  set Duty(value) {
    this.SetProp("Duty", 4 /* Float32 */, value);
  }
  get Frequency() {
    return this.GetProp("Frequency", 4 /* Float32 */);
  }
  set Frequency(value) {
    this.SetProp("Frequency", 4 /* Float32 */, value);
  }
};
var SoundGroup = class extends Instance {
  constructor() {
    super();
    this.addClassName("SoundGroup");
    this.Name = "SoundGroup";
    this.Volume = 0.5;
  }
  get Volume() {
    return this.GetProp("Volume", 4 /* Float32 */);
  }
  set Volume(value) {
    this.SetProp("Volume", 4 /* Float32 */, value);
  }
};
var SoundService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("SoundService");
    this.Name = "SoundService";
    this.AmbientReverb = ReverbType.NoReverb;
    this.DistanceFactor = 3.33;
    this.DopplerScale = 1;
    this.RespectFilteringEnabled = false;
    this.RolloffScale = 1;
    this.VolumetricAudio = VolumetricAudio.Automatic;
  }
  get AmbientReverb() {
    return this.GetProp("AmbientReverb", 18 /* Enum */);
  }
  set AmbientReverb(value) {
    this.SetProp("AmbientReverb", 18 /* Enum */, value);
  }
  get DistanceFactor() {
    return this.GetProp("DistanceFactor", 4 /* Float32 */);
  }
  set DistanceFactor(value) {
    this.SetProp("DistanceFactor", 4 /* Float32 */, value);
  }
  get DopplerScale() {
    return this.GetProp("DopplerScale", 4 /* Float32 */);
  }
  set DopplerScale(value) {
    this.SetProp("DopplerScale", 4 /* Float32 */, value);
  }
  get RespectFilteringEnabled() {
    return this.GetProp("RespectFilteringEnabled", 2 /* Bool */);
  }
  set RespectFilteringEnabled(value) {
    this.SetProp("RespectFilteringEnabled", 2 /* Bool */, value);
  }
  get RolloffScale() {
    return this.GetProp("RolloffScale", 4 /* Float32 */);
  }
  set RolloffScale(value) {
    this.SetProp("RolloffScale", 4 /* Float32 */, value);
  }
  get VolumetricAudio() {
    return this.GetProp("VolumetricAudio", 18 /* Enum */);
  }
  set VolumetricAudio(value) {
    this.SetProp("VolumetricAudio", 18 /* Enum */, value);
  }
};
var Sparkles = class extends Instance {
  constructor() {
    super();
    this.addClassName("Sparkles");
    this.Name = "Sparkles";
    this.Enabled = true;
    this.SparkleColor = Color3.FromRGB(144, 25, 255);
    this.TimeScale = 1;
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get SparkleColor() {
    return this.GetProp("SparkleColor", 12 /* Color3 */);
  }
  set SparkleColor(value) {
    this.SetProp("SparkleColor", 12 /* Color3 */, value);
  }
  get TimeScale() {
    return this.GetProp("TimeScale", 4 /* Float32 */);
  }
  set TimeScale(value) {
    this.SetProp("TimeScale", 4 /* Float32 */, value);
  }
};
var SpawnerService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("SpawnerService");
    this.Name = "SpawnerService";
  }
};
var StandalonePluginScripts = class extends Instance {
  constructor() {
    super();
    this.addClassName("StandalonePluginScripts");
    this.Name = "StandalonePluginScripts";
  }
};
var StarterGear = class extends Instance {
  constructor() {
    super();
    this.addClassName("StarterGear");
    this.Name = "StarterGear";
  }
};
var StarterPack = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("StarterPack");
    this.Name = "StarterPack";
  }
};
var StarterPlayer = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("StarterPlayer");
    this.Name = "StarterPlayer";
    this.AllowCustomAnimations = true;
    this.AutoJumpEnabled = true;
    this.AvatarJointUpgradeSerialized = AvatarJointUpgrade.Default;
    this.CameraMaxZoomDistance = 400;
    this.CameraMinZoomDistance = 0.5;
    this.CameraMode = CameraMode.Classic;
    this.CharacterJumpHeight = 7.2;
    this.CharacterJumpPower = 50;
    this.CharacterMaxSlopeAngle = 89;
    this.CharacterUseJumpPower = true;
    this.CharacterWalkSpeed = 16;
    this.DevCameraOcclusionMode = DevCameraOcclusionMode.Zoom;
    this.DevComputerCameraMovementMode = DevComputerCameraMovementMode.UserChoice;
    this.DevComputerMovementMode = DevComputerMovementMode.UserChoice;
    this.DevTouchCameraMovementMode = DevTouchCameraMovementMode.UserChoice;
    this.DevTouchMovementMode = DevTouchMovementMode.UserChoice;
    this.EnableDynamicHeads = LoadDynamicHeads.Default;
    this.EnableMouseLockOption = true;
    this.GameSettingsAssetIDFace = BigInt(0);
    this.GameSettingsAssetIDHead = BigInt(0);
    this.GameSettingsAssetIDLeftArm = BigInt(0);
    this.GameSettingsAssetIDLeftLeg = BigInt(0);
    this.GameSettingsAssetIDPants = BigInt(0);
    this.GameSettingsAssetIDRightArm = BigInt(0);
    this.GameSettingsAssetIDRightLeg = BigInt(0);
    this.GameSettingsAssetIDShirt = BigInt(0);
    this.GameSettingsAssetIDTeeShirt = BigInt(0);
    this.GameSettingsAssetIDTorso = BigInt(0);
    this.GameSettingsAvatar = GameAvatarType.R15;
    this.GameSettingsR15Collision = R15CollisionType.OuterBox;
    this.GameSettingsScaleRangeBodyType = new NumberRange(0, 1);
    this.GameSettingsScaleRangeHead = new NumberRange(0.95, 1);
    this.GameSettingsScaleRangeHeight = new NumberRange(0.9, 1.05);
    this.GameSettingsScaleRangeProportion = new NumberRange(0, 1);
    this.GameSettingsScaleRangeWidth = new NumberRange(0.7, 1);
    this.HealthDisplayDistance = 100;
    this.LoadCharacterAppearance = true;
    this.LoadCharacterLayeredClothing = LoadCharacterLayeredClothing.Default;
    this.LuaCharacterController = CharacterControlMode.Default;
    this.NameDisplayDistance = 100;
    this.UserEmotesEnabled = true;
  }
  get AllowCustomAnimations() {
    return this.GetProp("AllowCustomAnimations", 2 /* Bool */);
  }
  set AllowCustomAnimations(value) {
    this.SetProp("AllowCustomAnimations", 2 /* Bool */, value);
  }
  get AutoJumpEnabled() {
    return this.GetProp("AutoJumpEnabled", 2 /* Bool */);
  }
  set AutoJumpEnabled(value) {
    this.SetProp("AutoJumpEnabled", 2 /* Bool */, value);
  }
  get AvatarJointUpgradeSerialized() {
    return this.GetProp("AvatarJointUpgrade_Serialized", 18 /* Enum */);
  }
  set AvatarJointUpgradeSerialized(value) {
    this.SetProp("AvatarJointUpgrade_Serialized", 18 /* Enum */, value);
  }
  get CameraMaxZoomDistance() {
    return this.GetProp("CameraMaxZoomDistance", 4 /* Float32 */);
  }
  set CameraMaxZoomDistance(value) {
    this.SetProp("CameraMaxZoomDistance", 4 /* Float32 */, value);
  }
  get CameraMinZoomDistance() {
    return this.GetProp("CameraMinZoomDistance", 4 /* Float32 */);
  }
  set CameraMinZoomDistance(value) {
    this.SetProp("CameraMinZoomDistance", 4 /* Float32 */, value);
  }
  get CameraMode() {
    return this.GetProp("CameraMode", 18 /* Enum */);
  }
  set CameraMode(value) {
    this.SetProp("CameraMode", 18 /* Enum */, value);
  }
  get CharacterJumpHeight() {
    return this.GetProp("CharacterJumpHeight", 4 /* Float32 */);
  }
  set CharacterJumpHeight(value) {
    this.SetProp("CharacterJumpHeight", 4 /* Float32 */, value);
  }
  get CharacterJumpPower() {
    return this.GetProp("CharacterJumpPower", 4 /* Float32 */);
  }
  set CharacterJumpPower(value) {
    this.SetProp("CharacterJumpPower", 4 /* Float32 */, value);
  }
  get CharacterMaxSlopeAngle() {
    return this.GetProp("CharacterMaxSlopeAngle", 4 /* Float32 */);
  }
  set CharacterMaxSlopeAngle(value) {
    this.SetProp("CharacterMaxSlopeAngle", 4 /* Float32 */, value);
  }
  get CharacterUseJumpPower() {
    return this.GetProp("CharacterUseJumpPower", 2 /* Bool */);
  }
  set CharacterUseJumpPower(value) {
    this.SetProp("CharacterUseJumpPower", 2 /* Bool */, value);
  }
  get CharacterWalkSpeed() {
    return this.GetProp("CharacterWalkSpeed", 4 /* Float32 */);
  }
  set CharacterWalkSpeed(value) {
    this.SetProp("CharacterWalkSpeed", 4 /* Float32 */, value);
  }
  get DevCameraOcclusionMode() {
    return this.GetProp("DevCameraOcclusionMode", 18 /* Enum */);
  }
  set DevCameraOcclusionMode(value) {
    this.SetProp("DevCameraOcclusionMode", 18 /* Enum */, value);
  }
  get DevComputerCameraMovementMode() {
    return this.GetProp("DevComputerCameraMovementMode", 18 /* Enum */);
  }
  set DevComputerCameraMovementMode(value) {
    this.SetProp("DevComputerCameraMovementMode", 18 /* Enum */, value);
  }
  get DevComputerMovementMode() {
    return this.GetProp("DevComputerMovementMode", 18 /* Enum */);
  }
  set DevComputerMovementMode(value) {
    this.SetProp("DevComputerMovementMode", 18 /* Enum */, value);
  }
  get DevTouchCameraMovementMode() {
    return this.GetProp("DevTouchCameraMovementMode", 18 /* Enum */);
  }
  set DevTouchCameraMovementMode(value) {
    this.SetProp("DevTouchCameraMovementMode", 18 /* Enum */, value);
  }
  get DevTouchMovementMode() {
    return this.GetProp("DevTouchMovementMode", 18 /* Enum */);
  }
  set DevTouchMovementMode(value) {
    this.SetProp("DevTouchMovementMode", 18 /* Enum */, value);
  }
  get EnableDynamicHeads() {
    return this.GetProp("EnableDynamicHeads", 18 /* Enum */);
  }
  set EnableDynamicHeads(value) {
    this.SetProp("EnableDynamicHeads", 18 /* Enum */, value);
  }
  get EnableMouseLockOption() {
    return this.GetProp("EnableMouseLockOption", 2 /* Bool */);
  }
  set EnableMouseLockOption(value) {
    this.SetProp("EnableMouseLockOption", 2 /* Bool */, value);
  }
  get GameSettingsAssetIDFace() {
    return this.GetProp("GameSettingsAssetIDFace", 27 /* Int64 */);
  }
  set GameSettingsAssetIDFace(value) {
    this.SetProp("GameSettingsAssetIDFace", 27 /* Int64 */, value);
  }
  get GameSettingsAssetIDHead() {
    return this.GetProp("GameSettingsAssetIDHead", 27 /* Int64 */);
  }
  set GameSettingsAssetIDHead(value) {
    this.SetProp("GameSettingsAssetIDHead", 27 /* Int64 */, value);
  }
  get GameSettingsAssetIDLeftArm() {
    return this.GetProp("GameSettingsAssetIDLeftArm", 27 /* Int64 */);
  }
  set GameSettingsAssetIDLeftArm(value) {
    this.SetProp("GameSettingsAssetIDLeftArm", 27 /* Int64 */, value);
  }
  get GameSettingsAssetIDLeftLeg() {
    return this.GetProp("GameSettingsAssetIDLeftLeg", 27 /* Int64 */);
  }
  set GameSettingsAssetIDLeftLeg(value) {
    this.SetProp("GameSettingsAssetIDLeftLeg", 27 /* Int64 */, value);
  }
  get GameSettingsAssetIDPants() {
    return this.GetProp("GameSettingsAssetIDPants", 27 /* Int64 */);
  }
  set GameSettingsAssetIDPants(value) {
    this.SetProp("GameSettingsAssetIDPants", 27 /* Int64 */, value);
  }
  get GameSettingsAssetIDRightArm() {
    return this.GetProp("GameSettingsAssetIDRightArm", 27 /* Int64 */);
  }
  set GameSettingsAssetIDRightArm(value) {
    this.SetProp("GameSettingsAssetIDRightArm", 27 /* Int64 */, value);
  }
  get GameSettingsAssetIDRightLeg() {
    return this.GetProp("GameSettingsAssetIDRightLeg", 27 /* Int64 */);
  }
  set GameSettingsAssetIDRightLeg(value) {
    this.SetProp("GameSettingsAssetIDRightLeg", 27 /* Int64 */, value);
  }
  get GameSettingsAssetIDShirt() {
    return this.GetProp("GameSettingsAssetIDShirt", 27 /* Int64 */);
  }
  set GameSettingsAssetIDShirt(value) {
    this.SetProp("GameSettingsAssetIDShirt", 27 /* Int64 */, value);
  }
  get GameSettingsAssetIDTeeShirt() {
    return this.GetProp("GameSettingsAssetIDTeeShirt", 27 /* Int64 */);
  }
  set GameSettingsAssetIDTeeShirt(value) {
    this.SetProp("GameSettingsAssetIDTeeShirt", 27 /* Int64 */, value);
  }
  get GameSettingsAssetIDTorso() {
    return this.GetProp("GameSettingsAssetIDTorso", 27 /* Int64 */);
  }
  set GameSettingsAssetIDTorso(value) {
    this.SetProp("GameSettingsAssetIDTorso", 27 /* Int64 */, value);
  }
  get GameSettingsAvatar() {
    return this.GetProp("GameSettingsAvatar", 18 /* Enum */);
  }
  set GameSettingsAvatar(value) {
    this.SetProp("GameSettingsAvatar", 18 /* Enum */, value);
  }
  get GameSettingsR15Collision() {
    return this.GetProp("GameSettingsR15Collision", 18 /* Enum */);
  }
  set GameSettingsR15Collision(value) {
    this.SetProp("GameSettingsR15Collision", 18 /* Enum */, value);
  }
  get GameSettingsScaleRangeBodyType() {
    return this.GetProp("GameSettingsScaleRangeBodyType", 23 /* NumberRange */);
  }
  set GameSettingsScaleRangeBodyType(value) {
    this.SetProp("GameSettingsScaleRangeBodyType", 23 /* NumberRange */, value);
  }
  get GameSettingsScaleRangeHead() {
    return this.GetProp("GameSettingsScaleRangeHead", 23 /* NumberRange */);
  }
  set GameSettingsScaleRangeHead(value) {
    this.SetProp("GameSettingsScaleRangeHead", 23 /* NumberRange */, value);
  }
  get GameSettingsScaleRangeHeight() {
    return this.GetProp("GameSettingsScaleRangeHeight", 23 /* NumberRange */);
  }
  set GameSettingsScaleRangeHeight(value) {
    this.SetProp("GameSettingsScaleRangeHeight", 23 /* NumberRange */, value);
  }
  get GameSettingsScaleRangeProportion() {
    return this.GetProp("GameSettingsScaleRangeProportion", 23 /* NumberRange */);
  }
  set GameSettingsScaleRangeProportion(value) {
    this.SetProp("GameSettingsScaleRangeProportion", 23 /* NumberRange */, value);
  }
  get GameSettingsScaleRangeWidth() {
    return this.GetProp("GameSettingsScaleRangeWidth", 23 /* NumberRange */);
  }
  set GameSettingsScaleRangeWidth(value) {
    this.SetProp("GameSettingsScaleRangeWidth", 23 /* NumberRange */, value);
  }
  get HealthDisplayDistance() {
    return this.GetProp("HealthDisplayDistance", 4 /* Float32 */);
  }
  set HealthDisplayDistance(value) {
    this.SetProp("HealthDisplayDistance", 4 /* Float32 */, value);
  }
  get LoadCharacterAppearance() {
    return this.GetProp("LoadCharacterAppearance", 2 /* Bool */);
  }
  set LoadCharacterAppearance(value) {
    this.SetProp("LoadCharacterAppearance", 2 /* Bool */, value);
  }
  get LoadCharacterLayeredClothing() {
    return this.GetProp("LoadCharacterLayeredClothing", 18 /* Enum */);
  }
  set LoadCharacterLayeredClothing(value) {
    this.SetProp("LoadCharacterLayeredClothing", 18 /* Enum */, value);
  }
  get LuaCharacterController() {
    return this.GetProp("LuaCharacterController", 18 /* Enum */);
  }
  set LuaCharacterController(value) {
    this.SetProp("LuaCharacterController", 18 /* Enum */, value);
  }
  get NameDisplayDistance() {
    return this.GetProp("NameDisplayDistance", 4 /* Float32 */);
  }
  set NameDisplayDistance(value) {
    this.SetProp("NameDisplayDistance", 4 /* Float32 */, value);
  }
  get UserEmotesEnabled() {
    return this.GetProp("UserEmotesEnabled", 2 /* Bool */);
  }
  set UserEmotesEnabled(value) {
    this.SetProp("UserEmotesEnabled", 2 /* Bool */, value);
  }
};
var StarterPlayerScripts = class extends Instance {
  constructor() {
    super();
    this.addClassName("StarterPlayerScripts");
    this.Name = "StarterPlayerScripts";
  }
};
var StarterCharacterScripts = class extends StarterPlayerScripts {
  constructor() {
    super();
    this.addClassName("StarterCharacterScripts");
    this.Name = "StarterCharacterScripts";
  }
};
var StartupMessageService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("StartupMessageService");
    this.Name = "StartupMessageService";
  }
};
var Stats = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("Stats");
    this.Name = "Stats";
  }
};
var StopWatchReporter = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("StopWatchReporter");
    this.Name = "StopWatchReporter";
  }
};
var StreamingService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("StreamingService");
    this.Name = "StreamingService";
  }
};
var StudioAssetService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("StudioAssetService");
    this.Name = "StudioAssetService";
  }
};
var StudioAttachment = class extends Instance {
  constructor() {
    super();
    this.addClassName("StudioAttachment");
    this.Name = "StudioAttachment";
    this.AutoHideParent = false;
    this.IsArrowVisible = false;
    this.Offset = new Vector2(0, 0);
    this.SourceAnchorPoint = new Vector2(0, 0);
    this.TargetAnchorPoint = new Vector2(0, 0);
  }
  get AutoHideParent() {
    return this.GetProp("AutoHideParent", 2 /* Bool */);
  }
  set AutoHideParent(value) {
    this.SetProp("AutoHideParent", 2 /* Bool */, value);
  }
  get IsArrowVisible() {
    return this.GetProp("IsArrowVisible", 2 /* Bool */);
  }
  set IsArrowVisible(value) {
    this.SetProp("IsArrowVisible", 2 /* Bool */, value);
  }
  get Offset() {
    return this.GetProp("Offset", 13 /* Vector2 */);
  }
  set Offset(value) {
    this.SetProp("Offset", 13 /* Vector2 */, value);
  }
  get SourceAnchorPoint() {
    return this.GetProp("SourceAnchorPoint", 13 /* Vector2 */);
  }
  set SourceAnchorPoint(value) {
    this.SetProp("SourceAnchorPoint", 13 /* Vector2 */, value);
  }
  get TargetAnchorPoint() {
    return this.GetProp("TargetAnchorPoint", 13 /* Vector2 */);
  }
  set TargetAnchorPoint(value) {
    this.SetProp("TargetAnchorPoint", 13 /* Vector2 */, value);
  }
};
var StudioCallout = class extends Instance {
  constructor() {
    super();
    this.addClassName("StudioCallout");
    this.Name = "StudioCallout";
  }
};
var StudioData = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("StudioData");
    this.Name = "StudioData";
    this.EnableScriptCollabByDefaultOnLoad = false;
  }
  get EnableScriptCollabByDefaultOnLoad() {
    return this.GetProp("EnableScriptCollabByDefaultOnLoad", 2 /* Bool */);
  }
  set EnableScriptCollabByDefaultOnLoad(value) {
    this.SetProp("EnableScriptCollabByDefaultOnLoad", 2 /* Bool */, value);
  }
};
var StudioDeviceEmulatorService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("StudioDeviceEmulatorService");
    this.Name = "StudioDeviceEmulatorService";
  }
};
var StudioPublishService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("StudioPublishService");
    this.Name = "StudioPublishService";
    this.PublishLocked = false;
  }
  get PublishLocked() {
    return this.GetProp("PublishLocked", 2 /* Bool */);
  }
  set PublishLocked(value) {
    this.SetProp("PublishLocked", 2 /* Bool */, value);
  }
};
var StudioScriptDebugEventListener = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("StudioScriptDebugEventListener");
    this.Name = "StudioScriptDebugEventListener";
  }
};
var StudioSdkService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("StudioSdkService");
    this.Name = "StudioSdkService";
  }
};
var StudioService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("StudioService");
    this.Name = "StudioService";
  }
};
var StudioWidgetsService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("StudioWidgetsService");
    this.Name = "StudioWidgetsService";
  }
};
var StyleBase = class extends Instance {
  constructor() {
    super();
    this.addClassName("StyleBase");
  }
};
var StyleRule = class extends StyleBase {
  constructor() {
    super();
    this.addClassName("StyleRule");
    this.Name = "StyleRule";
    this.Index = -1;
    this.PropertiesSerialize = "";
    this.Selector = "";
  }
  get Index() {
    return this.GetProp("Index", 3 /* Int32 */);
  }
  set Index(value) {
    this.SetProp("Index", 3 /* Int32 */, value);
  }
  get PropertiesSerialize() {
    return this.GetProp("PropertiesSerialize", 1 /* String */);
  }
  set PropertiesSerialize(value) {
    this.SetProp("PropertiesSerialize", 1 /* String */, value);
  }
  get Selector() {
    return this.GetProp("Selector", 1 /* String */);
  }
  set Selector(value) {
    this.SetProp("Selector", 1 /* String */, value);
  }
};
var StyleSheet = class extends StyleBase {
  constructor() {
    super();
    this.addClassName("StyleSheet");
    this.Name = "StyleSheet";
  }
};
var StyleDerive = class extends Instance {
  constructor() {
    super();
    this.addClassName("StyleDerive");
    this.Name = "StyleDerive";
    this.Index = -1;
  }
  get Index() {
    return this.GetProp("Index", 3 /* Int32 */);
  }
  set Index(value) {
    this.SetProp("Index", 3 /* Int32 */, value);
  }
  get StyleSheet() {
    return this.GetProp("StyleSheet", 19 /* Referent */);
  }
  set StyleSheet(value) {
    this.SetProp("StyleSheet", 19 /* Referent */, value);
  }
};
var StyleLink = class extends Instance {
  constructor() {
    super();
    this.addClassName("StyleLink");
    this.Name = "StyleLink";
  }
  get StyleSheet() {
    return this.GetProp("StyleSheet", 19 /* Referent */);
  }
  set StyleSheet(value) {
    this.SetProp("StyleSheet", 19 /* Referent */, value);
  }
};
var StylingService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("StylingService");
    this.Name = "StylingService";
  }
};
var SurfaceAppearance = class extends Instance {
  constructor() {
    super();
    this.addClassName("SurfaceAppearance");
    this.Name = "SurfaceAppearance";
    this.AlphaMode = AlphaMode.Overlay;
    this.ColorMap = "";
    this.MetalnessMap = "";
    this.NormalMap = "";
    this.RoughnessMap = "";
    this.TexturePack = "";
  }
  get AlphaMode() {
    return this.GetProp("AlphaMode", 18 /* Enum */);
  }
  set AlphaMode(value) {
    this.SetProp("AlphaMode", 18 /* Enum */, value);
  }
  get ColorMap() {
    return this.GetProp("ColorMap", 1 /* String */);
  }
  set ColorMap(value) {
    this.SetProp("ColorMap", 1 /* String */, value);
  }
  get MetalnessMap() {
    return this.GetProp("MetalnessMap", 1 /* String */);
  }
  set MetalnessMap(value) {
    this.SetProp("MetalnessMap", 1 /* String */, value);
  }
  get NormalMap() {
    return this.GetProp("NormalMap", 1 /* String */);
  }
  set NormalMap(value) {
    this.SetProp("NormalMap", 1 /* String */, value);
  }
  get RoughnessMap() {
    return this.GetProp("RoughnessMap", 1 /* String */);
  }
  set RoughnessMap(value) {
    this.SetProp("RoughnessMap", 1 /* String */, value);
  }
  get TexturePack() {
    return this.GetProp("TexturePack", 1 /* String */);
  }
  set TexturePack(value) {
    this.SetProp("TexturePack", 1 /* String */, value);
  }
};
var TaskScheduler = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("TaskScheduler");
    this.Name = "TaskScheduler";
  }
  get ThreadPoolConfig() {
    return this.GetProp("ThreadPoolConfig", 18 /* Enum */);
  }
  set ThreadPoolConfig(value) {
    this.SetProp("ThreadPoolConfig", 18 /* Enum */, value);
  }
};
var Team = class extends Instance {
  constructor() {
    super();
    this.addClassName("Team");
    this.Name = "Team";
    this.AutoAssignable = true;
    this.AutoColorCharacters = true;
    this.Score = 0;
  }
  get AutoAssignable() {
    return this.GetProp("AutoAssignable", 2 /* Bool */);
  }
  set AutoAssignable(value) {
    this.SetProp("AutoAssignable", 2 /* Bool */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get AutoColorCharacters() {
    return this.GetProp("AutoColorCharacters", 2 /* Bool */);
  }
  /**@deprecated Deprecated by Roblox*/
  set AutoColorCharacters(value) {
    this.SetProp("AutoColorCharacters", 2 /* Bool */, value);
  }
  /**@deprecated Deprecated by Roblox*/
  get Score() {
    return this.GetProp("Score", 3 /* Int32 */);
  }
  /**@deprecated Deprecated by Roblox*/
  set Score(value) {
    this.SetProp("Score", 3 /* Int32 */, value);
  }
  get TeamColor() {
    return this.GetProp("TeamColor", 11 /* BrickColor */);
  }
  set TeamColor(value) {
    this.SetProp("TeamColor", 11 /* BrickColor */, value);
  }
};
var TeamCreateData = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("TeamCreateData");
    this.Name = "TeamCreateData";
  }
};
var TeamCreatePublishService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("TeamCreatePublishService");
    this.Name = "TeamCreatePublishService";
  }
};
var TeamCreateService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("TeamCreateService");
    this.Name = "TeamCreateService";
  }
};
var Teams = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("Teams");
    this.Name = "Teams";
  }
};
var TeleportOptions = class extends Instance {
  constructor() {
    super();
    this.addClassName("TeleportOptions");
    this.Name = "TeleportOptions";
    this.ReservedServerAccessCode = "";
    this.ServerInstanceId = "";
    this.ShouldReserveServer = false;
  }
  get ReservedServerAccessCode() {
    return this.GetProp("ReservedServerAccessCode", 1 /* String */);
  }
  set ReservedServerAccessCode(value) {
    this.SetProp("ReservedServerAccessCode", 1 /* String */, value);
  }
  get ServerInstanceId() {
    return this.GetProp("ServerInstanceId", 1 /* String */);
  }
  set ServerInstanceId(value) {
    this.SetProp("ServerInstanceId", 1 /* String */, value);
  }
  get ShouldReserveServer() {
    return this.GetProp("ShouldReserveServer", 2 /* Bool */);
  }
  set ShouldReserveServer(value) {
    this.SetProp("ShouldReserveServer", 2 /* Bool */, value);
  }
};
var TeleportService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("TeleportService");
    this.Name = "TeleportService";
    this.CustomizedTeleportUI = false;
  }
  /**@deprecated Deprecated by Roblox*/
  get CustomizedTeleportUI() {
    return this.GetProp("CustomizedTeleportUI", 2 /* Bool */);
  }
  /**@deprecated Deprecated by Roblox*/
  set CustomizedTeleportUI(value) {
    this.SetProp("CustomizedTeleportUI", 2 /* Bool */, value);
  }
};
var TemporaryCageMeshProvider = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("TemporaryCageMeshProvider");
    this.Name = "TemporaryCageMeshProvider";
  }
};
var TemporaryScriptService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("TemporaryScriptService");
    this.Name = "TemporaryScriptService";
  }
};
var TerrainDetail = class extends Instance {
  constructor() {
    super();
    this.addClassName("TerrainDetail");
    this.Name = "TerrainDetail";
    this.ColorMap = "";
    this.Face = TerrainFace.Side;
    this.MaterialPattern = MaterialPattern.Regular;
    this.MetalnessMap = "";
    this.NormalMap = "";
    this.RoughnessMap = "";
    this.StudsPerTile = 10;
    this.TexturePack = "";
  }
  get ColorMap() {
    return this.GetProp("ColorMap", 1 /* String */);
  }
  set ColorMap(value) {
    this.SetProp("ColorMap", 1 /* String */, value);
  }
  get Face() {
    return this.GetProp("Face", 18 /* Enum */);
  }
  set Face(value) {
    this.SetProp("Face", 18 /* Enum */, value);
  }
  get MaterialPattern() {
    return this.GetProp("MaterialPattern", 18 /* Enum */);
  }
  set MaterialPattern(value) {
    this.SetProp("MaterialPattern", 18 /* Enum */, value);
  }
  get MetalnessMap() {
    return this.GetProp("MetalnessMap", 1 /* String */);
  }
  set MetalnessMap(value) {
    this.SetProp("MetalnessMap", 1 /* String */, value);
  }
  get NormalMap() {
    return this.GetProp("NormalMap", 1 /* String */);
  }
  set NormalMap(value) {
    this.SetProp("NormalMap", 1 /* String */, value);
  }
  get RoughnessMap() {
    return this.GetProp("RoughnessMap", 1 /* String */);
  }
  set RoughnessMap(value) {
    this.SetProp("RoughnessMap", 1 /* String */, value);
  }
  get StudsPerTile() {
    return this.GetProp("StudsPerTile", 4 /* Float32 */);
  }
  set StudsPerTile(value) {
    this.SetProp("StudsPerTile", 4 /* Float32 */, value);
  }
  get TexturePack() {
    return this.GetProp("TexturePack", 1 /* String */);
  }
  set TexturePack(value) {
    this.SetProp("TexturePack", 1 /* String */, value);
  }
};
var TerrainRegion = class extends Instance {
  constructor() {
    super();
    this.addClassName("TerrainRegion");
    this.Name = "TerrainRegion";
    this.ExtentsMax = new Vector3(0, 0, 0);
    this.ExtentsMin = new Vector3(0, 0, 0);
    this.SmoothGrid = "";
  }
  get ExtentsMax() {
    return this.GetProp("ExtentsMax", 20 /* Vector3int16 */);
  }
  set ExtentsMax(value) {
    this.SetProp("ExtentsMax", 20 /* Vector3int16 */, value);
  }
  get ExtentsMin() {
    return this.GetProp("ExtentsMin", 20 /* Vector3int16 */);
  }
  set ExtentsMin(value) {
    this.SetProp("ExtentsMin", 20 /* Vector3int16 */, value);
  }
  get SmoothGrid() {
    return this.GetProp("SmoothGrid", 1 /* String */);
  }
  set SmoothGrid(value) {
    this.SetProp("SmoothGrid", 1 /* String */, value);
  }
};
var TestService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("TestService");
    this.Name = "TestService";
    this.AutoRuns = true;
    this.Description = "";
    this.ExecuteWithStudioRun = false;
    this.IsSleepAllowed = true;
    this.NumberOfPlayers = 0;
    this.SimulateSecondsLag = 0;
    this.Timeout = 10;
  }
  get AutoRuns() {
    return this.GetProp("AutoRuns", 2 /* Bool */);
  }
  set AutoRuns(value) {
    this.SetProp("AutoRuns", 2 /* Bool */, value);
  }
  get Description() {
    return this.GetProp("Description", 1 /* String */);
  }
  set Description(value) {
    this.SetProp("Description", 1 /* String */, value);
  }
  get ExecuteWithStudioRun() {
    return this.GetProp("ExecuteWithStudioRun", 2 /* Bool */);
  }
  set ExecuteWithStudioRun(value) {
    this.SetProp("ExecuteWithStudioRun", 2 /* Bool */, value);
  }
  get IsSleepAllowed() {
    return this.GetProp("IsSleepAllowed", 2 /* Bool */);
  }
  set IsSleepAllowed(value) {
    this.SetProp("IsSleepAllowed", 2 /* Bool */, value);
  }
  get NumberOfPlayers() {
    return this.GetProp("NumberOfPlayers", 3 /* Int32 */);
  }
  set NumberOfPlayers(value) {
    this.SetProp("NumberOfPlayers", 3 /* Int32 */, value);
  }
  get SimulateSecondsLag() {
    return this.GetProp("SimulateSecondsLag", 5 /* Float64 */);
  }
  set SimulateSecondsLag(value) {
    this.SetProp("SimulateSecondsLag", 5 /* Float64 */, value);
  }
  get Timeout() {
    return this.GetProp("Timeout", 5 /* Float64 */);
  }
  set Timeout(value) {
    this.SetProp("Timeout", 5 /* Float64 */, value);
  }
};
var TextBoxService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("TextBoxService");
    this.Name = "TextBoxService";
  }
};
var TextChannel = class extends Instance {
  constructor() {
    super();
    this.addClassName("TextChannel");
    this.Name = "TextChannel";
  }
};
var TextChatCommand = class extends Instance {
  constructor() {
    super();
    this.addClassName("TextChatCommand");
    this.Name = "TextChatCommand";
    this.AutocompleteVisible = true;
    this.Enabled = true;
    this.PrimaryAlias = "";
    this.SecondaryAlias = "";
  }
  get AutocompleteVisible() {
    return this.GetProp("AutocompleteVisible", 2 /* Bool */);
  }
  set AutocompleteVisible(value) {
    this.SetProp("AutocompleteVisible", 2 /* Bool */, value);
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get PrimaryAlias() {
    return this.GetProp("PrimaryAlias", 1 /* String */);
  }
  set PrimaryAlias(value) {
    this.SetProp("PrimaryAlias", 1 /* String */, value);
  }
  get SecondaryAlias() {
    return this.GetProp("SecondaryAlias", 1 /* String */);
  }
  set SecondaryAlias(value) {
    this.SetProp("SecondaryAlias", 1 /* String */, value);
  }
};
var TextChatConfigurations = class extends Instance {
  constructor() {
    super();
    this.addClassName("TextChatConfigurations");
  }
};
var BubbleChatConfiguration = class extends TextChatConfigurations {
  constructor() {
    super();
    this.addClassName("BubbleChatConfiguration");
    this.Name = "BubbleChatConfiguration";
    this.AdorneeName = "HumanoidRootPart";
    this.BackgroundColor3 = Color3.FromRGB(250, 250, 250);
    this.BackgroundTransparency = 0.1;
    this.BubbleDuration = 15;
    this.BubblesSpacing = 6;
    this.Enabled = true;
    this.Font = Font.GothamMedium;
    this.LocalPlayerStudsOffset = new Vector3(0, 0, 0);
    this.MaxBubbles = 3;
    this.MaxDistance = 100;
    this.MinimizeDistance = 40;
    this.TailVisible = true;
    this.TextColor3 = Color3.FromRGB(57, 59, 61);
    this.TextSize = BigInt(16);
    this.VerticalStudsOffset = 0;
    this.FontFace = new RBXMFont("rbxasset://fonts/families/BuilderSans.json", 500 /* Medium */, 0 /* Normal */);
  }
  get AdorneeName() {
    return this.GetProp("AdorneeName", 1 /* String */);
  }
  set AdorneeName(value) {
    this.SetProp("AdorneeName", 1 /* String */, value);
  }
  get BackgroundColor3() {
    return this.GetProp("BackgroundColor3", 12 /* Color3 */);
  }
  set BackgroundColor3(value) {
    this.SetProp("BackgroundColor3", 12 /* Color3 */, value);
  }
  get BackgroundTransparency() {
    return this.GetProp("BackgroundTransparency", 5 /* Float64 */);
  }
  set BackgroundTransparency(value) {
    this.SetProp("BackgroundTransparency", 5 /* Float64 */, value);
  }
  get BubbleDuration() {
    return this.GetProp("BubbleDuration", 4 /* Float32 */);
  }
  set BubbleDuration(value) {
    this.SetProp("BubbleDuration", 4 /* Float32 */, value);
  }
  get BubblesSpacing() {
    return this.GetProp("BubblesSpacing", 4 /* Float32 */);
  }
  set BubblesSpacing(value) {
    this.SetProp("BubblesSpacing", 4 /* Float32 */, value);
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get Font() {
    return this.GetProp("Font", 18 /* Enum */);
  }
  set Font(value) {
    this.SetProp("Font", 18 /* Enum */, value);
  }
  get FontFace() {
    return this.GetProp("FontFace", 32 /* Font */);
  }
  set FontFace(value) {
    this.SetProp("FontFace", 32 /* Font */, value);
  }
  get LocalPlayerStudsOffset() {
    return this.GetProp("LocalPlayerStudsOffset", 14 /* Vector3 */);
  }
  set LocalPlayerStudsOffset(value) {
    this.SetProp("LocalPlayerStudsOffset", 14 /* Vector3 */, value);
  }
  get MaxBubbles() {
    return this.GetProp("MaxBubbles", 4 /* Float32 */);
  }
  set MaxBubbles(value) {
    this.SetProp("MaxBubbles", 4 /* Float32 */, value);
  }
  get MaxDistance() {
    return this.GetProp("MaxDistance", 4 /* Float32 */);
  }
  set MaxDistance(value) {
    this.SetProp("MaxDistance", 4 /* Float32 */, value);
  }
  get MinimizeDistance() {
    return this.GetProp("MinimizeDistance", 4 /* Float32 */);
  }
  set MinimizeDistance(value) {
    this.SetProp("MinimizeDistance", 4 /* Float32 */, value);
  }
  get TailVisible() {
    return this.GetProp("TailVisible", 2 /* Bool */);
  }
  set TailVisible(value) {
    this.SetProp("TailVisible", 2 /* Bool */, value);
  }
  get TextColor3() {
    return this.GetProp("TextColor3", 12 /* Color3 */);
  }
  set TextColor3(value) {
    this.SetProp("TextColor3", 12 /* Color3 */, value);
  }
  get TextSize() {
    return this.GetProp("TextSize", 27 /* Int64 */);
  }
  set TextSize(value) {
    this.SetProp("TextSize", 27 /* Int64 */, value);
  }
  get VerticalStudsOffset() {
    return this.GetProp("VerticalStudsOffset", 4 /* Float32 */);
  }
  set VerticalStudsOffset(value) {
    this.SetProp("VerticalStudsOffset", 4 /* Float32 */, value);
  }
};
var ChatInputBarConfiguration = class extends TextChatConfigurations {
  constructor() {
    super();
    this.addClassName("ChatInputBarConfiguration");
    this.Name = "ChatInputBarConfiguration";
    this.AutocompleteEnabled = true;
    this.BackgroundColor3 = Color3.FromRGB(25, 27, 29);
    this.BackgroundTransparency = 0.2;
    this.Enabled = true;
    this.KeyboardKeyCode = KeyCode.Slash;
    this.PlaceholderColor3 = Color3.FromRGB(178, 178, 178);
    this.TextColor3 = Color3.FromRGB(255, 255, 255);
    this.TextSize = BigInt(14);
    this.TextStrokeColor3 = Color3.FromRGB(0, 0, 0);
    this.TextStrokeTransparency = 0.5;
    this.FontFace = new RBXMFont("rbxasset://fonts/families/BuilderSans.json", 500 /* Medium */, 0 /* Normal */);
  }
  get AutocompleteEnabled() {
    return this.GetProp("AutocompleteEnabled", 2 /* Bool */);
  }
  set AutocompleteEnabled(value) {
    this.SetProp("AutocompleteEnabled", 2 /* Bool */, value);
  }
  get BackgroundColor3() {
    return this.GetProp("BackgroundColor3", 12 /* Color3 */);
  }
  set BackgroundColor3(value) {
    this.SetProp("BackgroundColor3", 12 /* Color3 */, value);
  }
  get BackgroundTransparency() {
    return this.GetProp("BackgroundTransparency", 5 /* Float64 */);
  }
  set BackgroundTransparency(value) {
    this.SetProp("BackgroundTransparency", 5 /* Float64 */, value);
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get FontFace() {
    return this.GetProp("FontFace", 32 /* Font */);
  }
  set FontFace(value) {
    this.SetProp("FontFace", 32 /* Font */, value);
  }
  get KeyboardKeyCode() {
    return this.GetProp("KeyboardKeyCode", 18 /* Enum */);
  }
  set KeyboardKeyCode(value) {
    this.SetProp("KeyboardKeyCode", 18 /* Enum */, value);
  }
  get PlaceholderColor3() {
    return this.GetProp("PlaceholderColor3", 12 /* Color3 */);
  }
  set PlaceholderColor3(value) {
    this.SetProp("PlaceholderColor3", 12 /* Color3 */, value);
  }
  get TargetTextChannel() {
    return this.GetProp("TargetTextChannel", 19 /* Referent */);
  }
  set TargetTextChannel(value) {
    this.SetProp("TargetTextChannel", 19 /* Referent */, value);
  }
  get TextColor3() {
    return this.GetProp("TextColor3", 12 /* Color3 */);
  }
  set TextColor3(value) {
    this.SetProp("TextColor3", 12 /* Color3 */, value);
  }
  get TextSize() {
    return this.GetProp("TextSize", 27 /* Int64 */);
  }
  set TextSize(value) {
    this.SetProp("TextSize", 27 /* Int64 */, value);
  }
  get TextStrokeColor3() {
    return this.GetProp("TextStrokeColor3", 12 /* Color3 */);
  }
  set TextStrokeColor3(value) {
    this.SetProp("TextStrokeColor3", 12 /* Color3 */, value);
  }
  get TextStrokeTransparency() {
    return this.GetProp("TextStrokeTransparency", 5 /* Float64 */);
  }
  set TextStrokeTransparency(value) {
    this.SetProp("TextStrokeTransparency", 5 /* Float64 */, value);
  }
};
var ChatWindowConfiguration = class extends TextChatConfigurations {
  constructor() {
    super();
    this.addClassName("ChatWindowConfiguration");
    this.Name = "ChatWindowConfiguration";
    this.BackgroundColor3 = Color3.FromRGB(25, 27, 29);
    this.BackgroundTransparency = 0.3;
    this.Enabled = true;
    this.HeightScale = 1;
    this.HorizontalAlignment = HorizontalAlignment.Left;
    this.TextColor3 = Color3.FromRGB(255, 255, 255);
    this.TextSize = BigInt(14);
    this.TextStrokeColor3 = Color3.FromRGB(0, 0, 0);
    this.TextStrokeTransparency = 0.5;
    this.VerticalAlignment = VerticalAlignment.Top;
    this.WidthScale = 1;
    this.FontFace = new RBXMFont("rbxasset://fonts/families/BuilderSans.json", 500 /* Medium */, 0 /* Normal */);
  }
  get BackgroundColor3() {
    return this.GetProp("BackgroundColor3", 12 /* Color3 */);
  }
  set BackgroundColor3(value) {
    this.SetProp("BackgroundColor3", 12 /* Color3 */, value);
  }
  get BackgroundTransparency() {
    return this.GetProp("BackgroundTransparency", 5 /* Float64 */);
  }
  set BackgroundTransparency(value) {
    this.SetProp("BackgroundTransparency", 5 /* Float64 */, value);
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get FontFace() {
    return this.GetProp("FontFace", 32 /* Font */);
  }
  set FontFace(value) {
    this.SetProp("FontFace", 32 /* Font */, value);
  }
  get HeightScale() {
    return this.GetProp("HeightScale", 4 /* Float32 */);
  }
  set HeightScale(value) {
    this.SetProp("HeightScale", 4 /* Float32 */, value);
  }
  get HorizontalAlignment() {
    return this.GetProp("HorizontalAlignment", 18 /* Enum */);
  }
  set HorizontalAlignment(value) {
    this.SetProp("HorizontalAlignment", 18 /* Enum */, value);
  }
  get TextColor3() {
    return this.GetProp("TextColor3", 12 /* Color3 */);
  }
  set TextColor3(value) {
    this.SetProp("TextColor3", 12 /* Color3 */, value);
  }
  get TextSize() {
    return this.GetProp("TextSize", 27 /* Int64 */);
  }
  set TextSize(value) {
    this.SetProp("TextSize", 27 /* Int64 */, value);
  }
  get TextStrokeColor3() {
    return this.GetProp("TextStrokeColor3", 12 /* Color3 */);
  }
  set TextStrokeColor3(value) {
    this.SetProp("TextStrokeColor3", 12 /* Color3 */, value);
  }
  get TextStrokeTransparency() {
    return this.GetProp("TextStrokeTransparency", 5 /* Float64 */);
  }
  set TextStrokeTransparency(value) {
    this.SetProp("TextStrokeTransparency", 5 /* Float64 */, value);
  }
  get VerticalAlignment() {
    return this.GetProp("VerticalAlignment", 18 /* Enum */);
  }
  set VerticalAlignment(value) {
    this.SetProp("VerticalAlignment", 18 /* Enum */, value);
  }
  get WidthScale() {
    return this.GetProp("WidthScale", 4 /* Float32 */);
  }
  set WidthScale(value) {
    this.SetProp("WidthScale", 4 /* Float32 */, value);
  }
};
var TextChatMessageProperties = class extends Instance {
  constructor() {
    super();
    this.addClassName("TextChatMessageProperties");
    this.Name = "TextChatMessageProperties";
  }
};
var TextChatService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("TextChatService");
    this.Name = "TextChatService";
    this.ChatTranslationFTUXShown = false;
    this.ChatTranslationToggleEnabled = false;
    this.ChatVersion = ChatVersion.LegacyChatService;
    this.CreateDefaultCommands = true;
    this.CreateDefaultTextChannels = true;
  }
  get ChatTranslationFTUXShown() {
    return this.GetProp("ChatTranslationFTUXShown", 2 /* Bool */);
  }
  set ChatTranslationFTUXShown(value) {
    this.SetProp("ChatTranslationFTUXShown", 2 /* Bool */, value);
  }
  get ChatTranslationToggleEnabled() {
    return this.GetProp("ChatTranslationToggleEnabled", 2 /* Bool */);
  }
  set ChatTranslationToggleEnabled(value) {
    this.SetProp("ChatTranslationToggleEnabled", 2 /* Bool */, value);
  }
  get ChatVersion() {
    return this.GetProp("ChatVersion", 18 /* Enum */);
  }
  set ChatVersion(value) {
    this.SetProp("ChatVersion", 18 /* Enum */, value);
  }
  get CreateDefaultCommands() {
    return this.GetProp("CreateDefaultCommands", 2 /* Bool */);
  }
  set CreateDefaultCommands(value) {
    this.SetProp("CreateDefaultCommands", 2 /* Bool */, value);
  }
  get CreateDefaultTextChannels() {
    return this.GetProp("CreateDefaultTextChannels", 2 /* Bool */);
  }
  set CreateDefaultTextChannels(value) {
    this.SetProp("CreateDefaultTextChannels", 2 /* Bool */, value);
  }
};
var TextService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("TextService");
    this.Name = "TextService";
  }
};
var TextureGenerationService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("TextureGenerationService");
    this.Name = "TextureGenerationService";
  }
};
var ThirdPartyUserService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ThirdPartyUserService");
    this.Name = "ThirdPartyUserService";
  }
};
var TimerService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("TimerService");
    this.Name = "TimerService";
  }
};
var ToastNotificationService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("ToastNotificationService");
    this.Name = "ToastNotificationService";
  }
};
var TouchInputService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("TouchInputService");
    this.Name = "TouchInputService";
  }
};
var TracerService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("TracerService");
    this.Name = "TracerService";
  }
};
var TrackerStreamAnimation = class extends Instance {
  constructor() {
    super();
    this.addClassName("TrackerStreamAnimation");
    this.Name = "TrackerStreamAnimation";
  }
};
var Trail = class extends Instance {
  constructor() {
    super();
    this.addClassName("Trail");
    this.Name = "Trail";
    this.Brightness = 1;
    this.Color = new ColorSequence(new ColorSequenceKeypoint(0, Color3.FromRGB(255, 255, 255)), new ColorSequenceKeypoint(1, Color3.FromRGB(255, 255, 255)));
    this.Enabled = true;
    this.FaceCamera = false;
    this.Lifetime = 2;
    this.LightEmission = 0;
    this.LightInfluence = 0;
    this.MaxLength = 0;
    this.MinLength = 0.1;
    this.Texture = "";
    this.TextureLength = 1;
    this.TextureMode = TextureMode.Stretch;
    this.Transparency = new NumberSequence(new NumberSequenceKeypoint(0, 0.5, 0), new NumberSequenceKeypoint(1, 0.5, 0));
    this.WidthScale = new NumberSequence(new NumberSequenceKeypoint(0, 1, 0), new NumberSequenceKeypoint(1, 1, 0));
  }
  get Attachment0() {
    return this.GetProp("Attachment0", 19 /* Referent */);
  }
  set Attachment0(value) {
    this.SetProp("Attachment0", 19 /* Referent */, value);
  }
  get Attachment1() {
    return this.GetProp("Attachment1", 19 /* Referent */);
  }
  set Attachment1(value) {
    this.SetProp("Attachment1", 19 /* Referent */, value);
  }
  get Brightness() {
    return this.GetProp("Brightness", 4 /* Float32 */);
  }
  set Brightness(value) {
    this.SetProp("Brightness", 4 /* Float32 */, value);
  }
  get Color() {
    return this.GetProp("Color", 22 /* ColorSequence */);
  }
  set Color(value) {
    this.SetProp("Color", 22 /* ColorSequence */, value);
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get FaceCamera() {
    return this.GetProp("FaceCamera", 2 /* Bool */);
  }
  set FaceCamera(value) {
    this.SetProp("FaceCamera", 2 /* Bool */, value);
  }
  get Lifetime() {
    return this.GetProp("Lifetime", 4 /* Float32 */);
  }
  set Lifetime(value) {
    this.SetProp("Lifetime", 4 /* Float32 */, value);
  }
  get LightEmission() {
    return this.GetProp("LightEmission", 4 /* Float32 */);
  }
  set LightEmission(value) {
    this.SetProp("LightEmission", 4 /* Float32 */, value);
  }
  get LightInfluence() {
    return this.GetProp("LightInfluence", 4 /* Float32 */);
  }
  set LightInfluence(value) {
    this.SetProp("LightInfluence", 4 /* Float32 */, value);
  }
  get MaxLength() {
    return this.GetProp("MaxLength", 4 /* Float32 */);
  }
  set MaxLength(value) {
    this.SetProp("MaxLength", 4 /* Float32 */, value);
  }
  get MinLength() {
    return this.GetProp("MinLength", 4 /* Float32 */);
  }
  set MinLength(value) {
    this.SetProp("MinLength", 4 /* Float32 */, value);
  }
  get Texture() {
    return this.GetProp("Texture", 1 /* String */);
  }
  set Texture(value) {
    this.SetProp("Texture", 1 /* String */, value);
  }
  get TextureLength() {
    return this.GetProp("TextureLength", 4 /* Float32 */);
  }
  set TextureLength(value) {
    this.SetProp("TextureLength", 4 /* Float32 */, value);
  }
  get TextureMode() {
    return this.GetProp("TextureMode", 18 /* Enum */);
  }
  set TextureMode(value) {
    this.SetProp("TextureMode", 18 /* Enum */, value);
  }
  get Transparency() {
    return this.GetProp("Transparency", 21 /* NumberSequence */);
  }
  set Transparency(value) {
    this.SetProp("Transparency", 21 /* NumberSequence */, value);
  }
  get WidthScale() {
    return this.GetProp("WidthScale", 21 /* NumberSequence */);
  }
  set WidthScale(value) {
    this.SetProp("WidthScale", 21 /* NumberSequence */, value);
  }
};
var TutorialService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("TutorialService");
    this.Name = "TutorialService";
  }
};
var TweenBase = class extends Instance {
  constructor() {
    super();
    this.addClassName("TweenBase");
  }
};
var Tween = class extends TweenBase {
  constructor() {
    super();
    this.addClassName("Tween");
    this.Name = "Tween";
  }
};
var TweenService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("TweenService");
    this.Name = "TweenService";
  }
};
var UGCAvatarService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("UGCAvatarService");
    this.Name = "UGCAvatarService";
  }
};
var UGCValidationService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("UGCValidationService");
    this.Name = "UGCValidationService";
  }
};
var UIBase = class extends Instance {
  constructor() {
    super();
    this.addClassName("UIBase");
  }
};
var UIComponent = class extends UIBase {
  constructor() {
    super();
    this.addClassName("UIComponent");
  }
};
var UIConstraint = class extends UIComponent {
  constructor() {
    super();
    this.addClassName("UIConstraint");
  }
};
var UIAspectRatioConstraint = class extends UIConstraint {
  constructor() {
    super();
    this.addClassName("UIAspectRatioConstraint");
    this.Name = "UIAspectRatioConstraint";
    this.AspectRatio = 1;
    this.AspectType = AspectType.FitWithinMaxSize;
    this.DominantAxis = DominantAxis.Width;
  }
  get AspectRatio() {
    return this.GetProp("AspectRatio", 4 /* Float32 */);
  }
  set AspectRatio(value) {
    this.SetProp("AspectRatio", 4 /* Float32 */, value);
  }
  get AspectType() {
    return this.GetProp("AspectType", 18 /* Enum */);
  }
  set AspectType(value) {
    this.SetProp("AspectType", 18 /* Enum */, value);
  }
  get DominantAxis() {
    return this.GetProp("DominantAxis", 18 /* Enum */);
  }
  set DominantAxis(value) {
    this.SetProp("DominantAxis", 18 /* Enum */, value);
  }
};
var UISizeConstraint = class extends UIConstraint {
  constructor() {
    super();
    this.addClassName("UISizeConstraint");
    this.Name = "UISizeConstraint";
    this.MaxSize = new Vector2(Infinity, Infinity);
    this.MinSize = new Vector2(0, 0);
  }
  get MaxSize() {
    return this.GetProp("MaxSize", 13 /* Vector2 */);
  }
  set MaxSize(value) {
    this.SetProp("MaxSize", 13 /* Vector2 */, value);
  }
  get MinSize() {
    return this.GetProp("MinSize", 13 /* Vector2 */);
  }
  set MinSize(value) {
    this.SetProp("MinSize", 13 /* Vector2 */, value);
  }
};
var UITextSizeConstraint = class extends UIConstraint {
  constructor() {
    super();
    this.addClassName("UITextSizeConstraint");
    this.Name = "UITextSizeConstraint";
    this.MaxTextSize = 100;
    this.MinTextSize = 1;
  }
  get MaxTextSize() {
    return this.GetProp("MaxTextSize", 3 /* Int32 */);
  }
  set MaxTextSize(value) {
    this.SetProp("MaxTextSize", 3 /* Int32 */, value);
  }
  get MinTextSize() {
    return this.GetProp("MinTextSize", 3 /* Int32 */);
  }
  set MinTextSize(value) {
    this.SetProp("MinTextSize", 3 /* Int32 */, value);
  }
};
var UICorner = class extends UIComponent {
  constructor() {
    super();
    this.addClassName("UICorner");
    this.Name = "UICorner";
    this.CornerRadius = new UDim(0, 8);
  }
  get CornerRadius() {
    return this.GetProp("CornerRadius", 6 /* UDim */);
  }
  set CornerRadius(value) {
    this.SetProp("CornerRadius", 6 /* UDim */, value);
  }
};
var UIFlexItem = class extends UIComponent {
  constructor() {
    super();
    this.addClassName("UIFlexItem");
    this.Name = "UIFlexItem";
    this.FlexMode = UIFlexMode.None;
    this.GrowRatio = 0;
    this.ItemLineAlignment = ItemLineAlignment.Automatic;
    this.ShrinkRatio = 0;
  }
  get FlexMode() {
    return this.GetProp("FlexMode", 18 /* Enum */);
  }
  set FlexMode(value) {
    this.SetProp("FlexMode", 18 /* Enum */, value);
  }
  get GrowRatio() {
    return this.GetProp("GrowRatio", 4 /* Float32 */);
  }
  set GrowRatio(value) {
    this.SetProp("GrowRatio", 4 /* Float32 */, value);
  }
  get ItemLineAlignment() {
    return this.GetProp("ItemLineAlignment", 18 /* Enum */);
  }
  set ItemLineAlignment(value) {
    this.SetProp("ItemLineAlignment", 18 /* Enum */, value);
  }
  get ShrinkRatio() {
    return this.GetProp("ShrinkRatio", 4 /* Float32 */);
  }
  set ShrinkRatio(value) {
    this.SetProp("ShrinkRatio", 4 /* Float32 */, value);
  }
};
var UIGradient = class extends UIComponent {
  constructor() {
    super();
    this.addClassName("UIGradient");
    this.Name = "UIGradient";
    this.Color = new ColorSequence(new ColorSequenceKeypoint(0, Color3.FromRGB(255, 255, 255)), new ColorSequenceKeypoint(1, Color3.FromRGB(255, 255, 255)));
    this.Enabled = true;
    this.Offset = new Vector2(0, 0);
    this.Rotation = 0;
    this.Transparency = new NumberSequence(new NumberSequenceKeypoint(0, 0, 0), new NumberSequenceKeypoint(1, 0, 0));
  }
  get Color() {
    return this.GetProp("Color", 22 /* ColorSequence */);
  }
  set Color(value) {
    this.SetProp("Color", 22 /* ColorSequence */, value);
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get Offset() {
    return this.GetProp("Offset", 13 /* Vector2 */);
  }
  set Offset(value) {
    this.SetProp("Offset", 13 /* Vector2 */, value);
  }
  get Rotation() {
    return this.GetProp("Rotation", 4 /* Float32 */);
  }
  set Rotation(value) {
    this.SetProp("Rotation", 4 /* Float32 */, value);
  }
  get Transparency() {
    return this.GetProp("Transparency", 21 /* NumberSequence */);
  }
  set Transparency(value) {
    this.SetProp("Transparency", 21 /* NumberSequence */, value);
  }
};
var UILayout = class extends UIComponent {
  constructor() {
    super();
    this.addClassName("UILayout");
  }
};
var UIGridStyleLayout = class extends UILayout {
  constructor() {
    super();
    this.addClassName("UIGridStyleLayout");
    this.HorizontalAlignment = HorizontalAlignment.Left;
    this.SortOrder = SortOrder.Name;
    this.VerticalAlignment = VerticalAlignment.Top;
  }
  get FillDirection() {
    return this.GetProp("FillDirection", 18 /* Enum */);
  }
  set FillDirection(value) {
    this.SetProp("FillDirection", 18 /* Enum */, value);
  }
  get HorizontalAlignment() {
    return this.GetProp("HorizontalAlignment", 18 /* Enum */);
  }
  set HorizontalAlignment(value) {
    this.SetProp("HorizontalAlignment", 18 /* Enum */, value);
  }
  get SortOrder() {
    return this.GetProp("SortOrder", 18 /* Enum */);
  }
  set SortOrder(value) {
    this.SetProp("SortOrder", 18 /* Enum */, value);
  }
  get VerticalAlignment() {
    return this.GetProp("VerticalAlignment", 18 /* Enum */);
  }
  set VerticalAlignment(value) {
    this.SetProp("VerticalAlignment", 18 /* Enum */, value);
  }
};
var UIGridLayout = class extends UIGridStyleLayout {
  constructor() {
    super();
    this.addClassName("UIGridLayout");
    this.Name = "UIGridLayout";
    this.CellPadding = new UDim2(new UDim(0, 5), new UDim(0, 5));
    this.CellSize = new UDim2(new UDim(0, 100), new UDim(0, 100));
    this.FillDirectionMaxCells = 0;
    this.StartCorner = StartCorner.TopLeft;
    this.FillDirection = FillDirection.Horizontal;
  }
  get CellPadding() {
    return this.GetProp("CellPadding", 7 /* UDim2 */);
  }
  set CellPadding(value) {
    this.SetProp("CellPadding", 7 /* UDim2 */, value);
  }
  get CellSize() {
    return this.GetProp("CellSize", 7 /* UDim2 */);
  }
  set CellSize(value) {
    this.SetProp("CellSize", 7 /* UDim2 */, value);
  }
  get FillDirectionMaxCells() {
    return this.GetProp("FillDirectionMaxCells", 3 /* Int32 */);
  }
  set FillDirectionMaxCells(value) {
    this.SetProp("FillDirectionMaxCells", 3 /* Int32 */, value);
  }
  get StartCorner() {
    return this.GetProp("StartCorner", 18 /* Enum */);
  }
  set StartCorner(value) {
    this.SetProp("StartCorner", 18 /* Enum */, value);
  }
};
var UIListLayout = class extends UIGridStyleLayout {
  constructor() {
    super();
    this.addClassName("UIListLayout");
    this.Name = "UIListLayout";
    this.HorizontalFlex = UIFlexAlignment.None;
    this.ItemLineAlignment = ItemLineAlignment.Automatic;
    this.Padding = new UDim(0, 0);
    this.VerticalFlex = UIFlexAlignment.None;
    this.Wraps = false;
    this.FillDirection = FillDirection.Vertical;
  }
  get HorizontalFlex() {
    return this.GetProp("HorizontalFlex", 18 /* Enum */);
  }
  set HorizontalFlex(value) {
    this.SetProp("HorizontalFlex", 18 /* Enum */, value);
  }
  get ItemLineAlignment() {
    return this.GetProp("ItemLineAlignment", 18 /* Enum */);
  }
  set ItemLineAlignment(value) {
    this.SetProp("ItemLineAlignment", 18 /* Enum */, value);
  }
  get Padding() {
    return this.GetProp("Padding", 6 /* UDim */);
  }
  set Padding(value) {
    this.SetProp("Padding", 6 /* UDim */, value);
  }
  get VerticalFlex() {
    return this.GetProp("VerticalFlex", 18 /* Enum */);
  }
  set VerticalFlex(value) {
    this.SetProp("VerticalFlex", 18 /* Enum */, value);
  }
  get Wraps() {
    return this.GetProp("Wraps", 2 /* Bool */);
  }
  set Wraps(value) {
    this.SetProp("Wraps", 2 /* Bool */, value);
  }
};
var UIPageLayout = class extends UIGridStyleLayout {
  constructor() {
    super();
    this.addClassName("UIPageLayout");
    this.Name = "UIPageLayout";
    this.Animated = true;
    this.Circular = false;
    this.EasingDirection = EasingDirection.Out;
    this.EasingStyle = EasingStyle.Back;
    this.GamepadInputEnabled = true;
    this.Padding = new UDim(0, 0);
    this.ScrollWheelInputEnabled = true;
    this.TouchInputEnabled = true;
    this.TweenTime = 1;
    this.FillDirection = FillDirection.Horizontal;
  }
  get Animated() {
    return this.GetProp("Animated", 2 /* Bool */);
  }
  set Animated(value) {
    this.SetProp("Animated", 2 /* Bool */, value);
  }
  get Circular() {
    return this.GetProp("Circular", 2 /* Bool */);
  }
  set Circular(value) {
    this.SetProp("Circular", 2 /* Bool */, value);
  }
  get EasingDirection() {
    return this.GetProp("EasingDirection", 18 /* Enum */);
  }
  set EasingDirection(value) {
    this.SetProp("EasingDirection", 18 /* Enum */, value);
  }
  get EasingStyle() {
    return this.GetProp("EasingStyle", 18 /* Enum */);
  }
  set EasingStyle(value) {
    this.SetProp("EasingStyle", 18 /* Enum */, value);
  }
  get GamepadInputEnabled() {
    return this.GetProp("GamepadInputEnabled", 2 /* Bool */);
  }
  set GamepadInputEnabled(value) {
    this.SetProp("GamepadInputEnabled", 2 /* Bool */, value);
  }
  get Padding() {
    return this.GetProp("Padding", 6 /* UDim */);
  }
  set Padding(value) {
    this.SetProp("Padding", 6 /* UDim */, value);
  }
  get ScrollWheelInputEnabled() {
    return this.GetProp("ScrollWheelInputEnabled", 2 /* Bool */);
  }
  set ScrollWheelInputEnabled(value) {
    this.SetProp("ScrollWheelInputEnabled", 2 /* Bool */, value);
  }
  get TouchInputEnabled() {
    return this.GetProp("TouchInputEnabled", 2 /* Bool */);
  }
  set TouchInputEnabled(value) {
    this.SetProp("TouchInputEnabled", 2 /* Bool */, value);
  }
  get TweenTime() {
    return this.GetProp("TweenTime", 4 /* Float32 */);
  }
  set TweenTime(value) {
    this.SetProp("TweenTime", 4 /* Float32 */, value);
  }
};
var UITableLayout = class extends UIGridStyleLayout {
  constructor() {
    super();
    this.addClassName("UITableLayout");
    this.Name = "UITableLayout";
    this.FillEmptySpaceColumns = false;
    this.FillEmptySpaceRows = false;
    this.MajorAxis = TableMajorAxis.RowMajor;
    this.Padding = new UDim2(new UDim(0, 0), new UDim(0, 0));
    this.FillDirection = FillDirection.Vertical;
  }
  get FillEmptySpaceColumns() {
    return this.GetProp("FillEmptySpaceColumns", 2 /* Bool */);
  }
  set FillEmptySpaceColumns(value) {
    this.SetProp("FillEmptySpaceColumns", 2 /* Bool */, value);
  }
  get FillEmptySpaceRows() {
    return this.GetProp("FillEmptySpaceRows", 2 /* Bool */);
  }
  set FillEmptySpaceRows(value) {
    this.SetProp("FillEmptySpaceRows", 2 /* Bool */, value);
  }
  get MajorAxis() {
    return this.GetProp("MajorAxis", 18 /* Enum */);
  }
  set MajorAxis(value) {
    this.SetProp("MajorAxis", 18 /* Enum */, value);
  }
  get Padding() {
    return this.GetProp("Padding", 7 /* UDim2 */);
  }
  set Padding(value) {
    this.SetProp("Padding", 7 /* UDim2 */, value);
  }
};
var UIPadding = class extends UIComponent {
  constructor() {
    super();
    this.addClassName("UIPadding");
    this.Name = "UIPadding";
    this.PaddingBottom = new UDim(0, 0);
    this.PaddingLeft = new UDim(0, 0);
    this.PaddingRight = new UDim(0, 0);
    this.PaddingTop = new UDim(0, 0);
  }
  get PaddingBottom() {
    return this.GetProp("PaddingBottom", 6 /* UDim */);
  }
  set PaddingBottom(value) {
    this.SetProp("PaddingBottom", 6 /* UDim */, value);
  }
  get PaddingLeft() {
    return this.GetProp("PaddingLeft", 6 /* UDim */);
  }
  set PaddingLeft(value) {
    this.SetProp("PaddingLeft", 6 /* UDim */, value);
  }
  get PaddingRight() {
    return this.GetProp("PaddingRight", 6 /* UDim */);
  }
  set PaddingRight(value) {
    this.SetProp("PaddingRight", 6 /* UDim */, value);
  }
  get PaddingTop() {
    return this.GetProp("PaddingTop", 6 /* UDim */);
  }
  set PaddingTop(value) {
    this.SetProp("PaddingTop", 6 /* UDim */, value);
  }
};
var UIScale = class extends UIComponent {
  constructor() {
    super();
    this.addClassName("UIScale");
    this.Name = "UIScale";
    this.Scale = 1;
  }
  get Scale() {
    return this.GetProp("Scale", 4 /* Float32 */);
  }
  set Scale(value) {
    this.SetProp("Scale", 4 /* Float32 */, value);
  }
};
var UIStroke = class extends UIComponent {
  constructor() {
    super();
    this.addClassName("UIStroke");
    this.Name = "UIStroke";
    this.ApplyStrokeMode = ApplyStrokeMode.Contextual;
    this.Color = Color3.FromRGB(0, 0, 0);
    this.Enabled = true;
    this.LineJoinMode = LineJoinMode.Round;
    this.Thickness = 1;
    this.Transparency = 0;
  }
  get ApplyStrokeMode() {
    return this.GetProp("ApplyStrokeMode", 18 /* Enum */);
  }
  set ApplyStrokeMode(value) {
    this.SetProp("ApplyStrokeMode", 18 /* Enum */, value);
  }
  get Color() {
    return this.GetProp("Color", 12 /* Color3 */);
  }
  set Color(value) {
    this.SetProp("Color", 12 /* Color3 */, value);
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get LineJoinMode() {
    return this.GetProp("LineJoinMode", 18 /* Enum */);
  }
  set LineJoinMode(value) {
    this.SetProp("LineJoinMode", 18 /* Enum */, value);
  }
  get Thickness() {
    return this.GetProp("Thickness", 4 /* Float32 */);
  }
  set Thickness(value) {
    this.SetProp("Thickness", 4 /* Float32 */, value);
  }
  get Transparency() {
    return this.GetProp("Transparency", 4 /* Float32 */);
  }
  set Transparency(value) {
    this.SetProp("Transparency", 4 /* Float32 */, value);
  }
};
var UnvalidatedAssetService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("UnvalidatedAssetService");
    this.Name = "UnvalidatedAssetService";
    this.CachedData = '{"lastSaveTime":0,"lastKnownPublishRequest":0,"users":[]}';
  }
  get CachedData() {
    return this.GetProp("CachedData", 1 /* String */);
  }
  set CachedData(value) {
    this.SetProp("CachedData", 1 /* String */, value);
  }
};
var UserInputService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("UserInputService");
    this.Name = "UserInputService";
    this.MouseBehavior = MouseBehavior.Default;
    this.MouseIcon = "";
    this.MouseIconEnabled = true;
  }
  get LegacyInputEventsEnabled() {
    return this.GetProp("LegacyInputEventsEnabled", 2 /* Bool */);
  }
  set LegacyInputEventsEnabled(value) {
    this.SetProp("LegacyInputEventsEnabled", 2 /* Bool */, value);
  }
  get MouseBehavior() {
    return this.GetProp("MouseBehavior", 18 /* Enum */);
  }
  set MouseBehavior(value) {
    this.SetProp("MouseBehavior", 18 /* Enum */, value);
  }
  get MouseIcon() {
    return this.GetProp("MouseIcon", 1 /* String */);
  }
  set MouseIcon(value) {
    this.SetProp("MouseIcon", 1 /* String */, value);
  }
  get MouseIconEnabled() {
    return this.GetProp("MouseIconEnabled", 2 /* Bool */);
  }
  set MouseIconEnabled(value) {
    this.SetProp("MouseIconEnabled", 2 /* Bool */, value);
  }
};
var UserService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("UserService");
    this.Name = "UserService";
  }
};
var VRService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("VRService");
    this.Name = "VRService";
    this.AutomaticScaling = VRScaling.World;
    this.AvatarGestures = false;
    this.FadeOutViewOnCollision = true;
  }
  get AutomaticScaling() {
    return this.GetProp("AutomaticScaling", 18 /* Enum */);
  }
  set AutomaticScaling(value) {
    this.SetProp("AutomaticScaling", 18 /* Enum */, value);
  }
  get AvatarGestures() {
    return this.GetProp("AvatarGestures", 2 /* Bool */);
  }
  set AvatarGestures(value) {
    this.SetProp("AvatarGestures", 2 /* Bool */, value);
  }
  get FadeOutViewOnCollision() {
    return this.GetProp("FadeOutViewOnCollision", 2 /* Bool */);
  }
  set FadeOutViewOnCollision(value) {
    this.SetProp("FadeOutViewOnCollision", 2 /* Bool */, value);
  }
};
var VRStatusService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("VRStatusService");
    this.Name = "VRStatusService";
  }
};
var ValueBase = class extends Instance {
  constructor() {
    super();
    this.addClassName("ValueBase");
  }
};
var BinaryStringValue = class extends ValueBase {
  constructor() {
    super();
    this.addClassName("BinaryStringValue");
    this.Name = "BinaryStringValue";
    this.Value = "";
  }
  get Value() {
    return this.GetProp("Value", 1 /* String */);
  }
  set Value(value) {
    this.SetProp("Value", 1 /* String */, value);
  }
};
var BoolValue = class extends ValueBase {
  constructor() {
    super();
    this.addClassName("BoolValue");
    this.Name = "BoolValue";
    this.Value = false;
  }
  get Value() {
    return this.GetProp("Value", 2 /* Bool */);
  }
  set Value(value) {
    this.SetProp("Value", 2 /* Bool */, value);
  }
};
var BrickColorValue = class extends ValueBase {
  constructor() {
    super();
    this.addClassName("BrickColorValue");
    this.Name = "BrickColorValue";
  }
  get Value() {
    return this.GetProp("Value", 11 /* BrickColor */);
  }
  set Value(value) {
    this.SetProp("Value", 11 /* BrickColor */, value);
  }
};
var CFrameValue = class extends ValueBase {
  constructor() {
    super();
    this.addClassName("CFrameValue");
    this.Name = "CFrameValue";
    this.Value = CFrame.Identity;
  }
  get Value() {
    return this.GetProp("Value", 16 /* CFrame */);
  }
  set Value(value) {
    this.SetProp("Value", 16 /* CFrame */, value);
  }
};
var Color3Value = class extends ValueBase {
  constructor() {
    super();
    this.addClassName("Color3Value");
    this.Name = "Color3Value";
    this.Value = Color3.FromRGB(0, 0, 0);
  }
  get Value() {
    return this.GetProp("Value", 12 /* Color3 */);
  }
  set Value(value) {
    this.SetProp("Value", 12 /* Color3 */, value);
  }
};
var DoubleConstrainedValue = class extends ValueBase {
  constructor() {
    super();
    this.addClassName("DoubleConstrainedValue");
    this.Name = "DoubleConstrainedValue";
    this.MaxValue = 1;
    this.MinValue = 0;
    this.Value = 0;
  }
  get MaxValue() {
    return this.GetProp("MaxValue", 5 /* Float64 */);
  }
  set MaxValue(value) {
    this.SetProp("MaxValue", 5 /* Float64 */, value);
  }
  get MinValue() {
    return this.GetProp("MinValue", 5 /* Float64 */);
  }
  set MinValue(value) {
    this.SetProp("MinValue", 5 /* Float64 */, value);
  }
  get Value() {
    return this.GetProp("value", 5 /* Float64 */);
  }
  set Value(value) {
    this.SetProp("value", 5 /* Float64 */, value);
  }
};
var IntConstrainedValue = class extends ValueBase {
  constructor() {
    super();
    this.addClassName("IntConstrainedValue");
    this.Name = "IntConstrainedValue";
    this.MaxValue = BigInt(10);
    this.MinValue = BigInt(0);
    this.Value = BigInt(0);
  }
  get MaxValue() {
    return this.GetProp("MaxValue", 27 /* Int64 */);
  }
  set MaxValue(value) {
    this.SetProp("MaxValue", 27 /* Int64 */, value);
  }
  get MinValue() {
    return this.GetProp("MinValue", 27 /* Int64 */);
  }
  set MinValue(value) {
    this.SetProp("MinValue", 27 /* Int64 */, value);
  }
  get Value() {
    return this.GetProp("value", 27 /* Int64 */);
  }
  set Value(value) {
    this.SetProp("value", 27 /* Int64 */, value);
  }
};
var IntValue = class extends ValueBase {
  constructor() {
    super();
    this.addClassName("IntValue");
    this.Name = "IntValue";
    this.Value = BigInt(0);
  }
  get Value() {
    return this.GetProp("Value", 27 /* Int64 */);
  }
  set Value(value) {
    this.SetProp("Value", 27 /* Int64 */, value);
  }
};
var NumberValue = class extends ValueBase {
  constructor() {
    super();
    this.addClassName("NumberValue");
    this.Name = "NumberValue";
    this.Value = 0;
  }
  get Value() {
    return this.GetProp("Value", 5 /* Float64 */);
  }
  set Value(value) {
    this.SetProp("Value", 5 /* Float64 */, value);
  }
};
var ObjectValue = class extends ValueBase {
  constructor() {
    super();
    this.addClassName("ObjectValue");
    this.Name = "ObjectValue";
  }
  get Value() {
    return this.GetProp("Value", 19 /* Referent */);
  }
  set Value(value) {
    this.SetProp("Value", 19 /* Referent */, value);
  }
};
var RayValue = class extends ValueBase {
  constructor() {
    super();
    this.addClassName("RayValue");
    this.Name = "RayValue";
    this.Value = new Ray(new Vector3(0, 0, 0), new Vector3(0, 0, 0));
  }
  get Value() {
    return this.GetProp("Value", 8 /* Ray */);
  }
  set Value(value) {
    this.SetProp("Value", 8 /* Ray */, value);
  }
};
var StringValue = class extends ValueBase {
  constructor() {
    super();
    this.addClassName("StringValue");
    this.Name = "StringValue";
    this.Value = "";
  }
  get Value() {
    return this.GetProp("Value", 1 /* String */);
  }
  set Value(value) {
    this.SetProp("Value", 1 /* String */, value);
  }
};
var Vector3Value = class extends ValueBase {
  constructor() {
    super();
    this.addClassName("Vector3Value");
    this.Name = "Vector3Value";
    this.Value = new Vector3(0, 0, 0);
  }
  get Value() {
    return this.GetProp("Value", 14 /* Vector3 */);
  }
  set Value(value) {
    this.SetProp("Value", 14 /* Vector3 */, value);
  }
};
var Vector3Curve = class extends Instance {
  constructor() {
    super();
    this.addClassName("Vector3Curve");
    this.Name = "Vector3Curve";
  }
};
var VersionControlService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("VersionControlService");
    this.Name = "VersionControlService";
  }
};
var VideoCaptureService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("VideoCaptureService");
    this.Name = "VideoCaptureService";
  }
};
var VideoDeviceInput = class extends Instance {
  constructor() {
    super();
    this.addClassName("VideoDeviceInput");
    this.Name = "VideoDeviceInput";
    this.Active = false;
    this.CameraId = "";
    this.CaptureQuality = VideoDeviceCaptureQuality.Default;
  }
  get Active() {
    return this.GetProp("Active", 2 /* Bool */);
  }
  set Active(value) {
    this.SetProp("Active", 2 /* Bool */, value);
  }
  get CameraId() {
    return this.GetProp("CameraId", 1 /* String */);
  }
  set CameraId(value) {
    this.SetProp("CameraId", 1 /* String */, value);
  }
  get CaptureQuality() {
    return this.GetProp("CaptureQuality", 18 /* Enum */);
  }
  set CaptureQuality(value) {
    this.SetProp("CaptureQuality", 18 /* Enum */, value);
  }
};
var VideoService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("VideoService");
    this.Name = "VideoService";
  }
};
var VirtualInputManager = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("VirtualInputManager");
    this.Name = "VirtualInputManager";
  }
};
var VirtualUser = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("VirtualUser");
    this.Name = "VirtualUser";
  }
};
var VisibilityCheckDispatcher = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("VisibilityCheckDispatcher");
    this.Name = "VisibilityCheckDispatcher";
  }
};
var Visit = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("Visit");
    this.Name = "Visit";
  }
};
var VisualizationMode = class extends Instance {
  constructor() {
    super();
    this.addClassName("VisualizationMode");
    this.Name = "VisualizationMode";
    this.Enabled = false;
    this.Title = "";
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get Title() {
    return this.GetProp("Title", 1 /* String */);
  }
  set Title(value) {
    this.SetProp("Title", 1 /* String */, value);
  }
};
var VisualizationModeCategory = class extends Instance {
  constructor() {
    super();
    this.addClassName("VisualizationModeCategory");
    this.Name = "VisualizationModeCategory";
    this.Enabled = false;
    this.Title = "";
  }
  get Enabled() {
    return this.GetProp("Enabled", 2 /* Bool */);
  }
  set Enabled(value) {
    this.SetProp("Enabled", 2 /* Bool */, value);
  }
  get Title() {
    return this.GetProp("Title", 1 /* String */);
  }
  set Title(value) {
    this.SetProp("Title", 1 /* String */, value);
  }
};
var VisualizationModeService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("VisualizationModeService");
    this.Name = "VisualizationModeService";
  }
};
var VoiceChatInternal = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("VoiceChatInternal");
    this.Name = "VoiceChatInternal";
  }
};
var VoiceChatService = class extends Instance {
  constructor() {
    super(true);
    this.addClassName("VoiceChatService");
    this.Name = "VoiceChatService";
    this.EnableDefaultVoice = true;
    this.UseAudioApi = AudioApiRollout.Automatic;
  }
  get EnableDefaultVoice() {
    return this.GetProp("EnableDefaultVoice", 2 /* Bool */);
  }
  set EnableDefaultVoice(value) {
    this.SetProp("EnableDefaultVoice", 2 /* Bool */, value);
  }
  get UseAudioApi() {
    return this.GetProp("UseAudioApi", 18 /* Enum */);
  }
  set UseAudioApi(value) {
    this.SetProp("UseAudioApi", 18 /* Enum */, value);
  }
};
var WeldConstraint = class extends Instance {
  constructor() {
    super();
    this.addClassName("WeldConstraint");
    this.Name = "WeldConstraint";
    this.State = 3;
  }
  get CFrame0() {
    return this.GetProp("CFrame0", 16 /* CFrame */);
  }
  set CFrame0(value) {
    this.SetProp("CFrame0", 16 /* CFrame */, value);
  }
  get Part0Internal() {
    return this.GetProp("Part0Internal", 19 /* Referent */);
  }
  set Part0Internal(value) {
    this.SetProp("Part0Internal", 19 /* Referent */, value);
  }
  get Part1Internal() {
    return this.GetProp("Part1Internal", 19 /* Referent */);
  }
  set Part1Internal(value) {
    this.SetProp("Part1Internal", 19 /* Referent */, value);
  }
  get State() {
    return this.GetProp("State", 3 /* Int32 */);
  }
  set State(value) {
    this.SetProp("State", 3 /* Int32 */, value);
  }
};
var Wire = class extends Instance {
  constructor() {
    super();
    this.addClassName("Wire");
    this.Name = "Wire";
    this.SourceName = "Output";
    this.TargetName = "Input";
  }
  get SourceInstance() {
    return this.GetProp("SourceInstance", 19 /* Referent */);
  }
  set SourceInstance(value) {
    this.SetProp("SourceInstance", 19 /* Referent */, value);
  }
  get SourceName() {
    return this.GetProp("SourceName", 1 /* String */);
  }
  set SourceName(value) {
    this.SetProp("SourceName", 1 /* String */, value);
  }
  get TargetInstance() {
    return this.GetProp("TargetInstance", 19 /* Referent */);
  }
  set TargetInstance(value) {
    this.SetProp("TargetInstance", 19 /* Referent */, value);
  }
  get TargetName() {
    return this.GetProp("TargetName", 1 /* String */);
  }
  set TargetName(value) {
    this.SetProp("TargetName", 1 /* String */, value);
  }
};
var ClassMap = class {
  _map = getClassMap();
  getFactory(className) {
    return this._map.get(className);
  }
};
function getClassMap() {
  const map = /* @__PURE__ */ new Map();
  map.set("AccessoryDescription", () => new AccessoryDescription());
  map.set("AccountService", () => new AccountService());
  map.set("Accoutrement", () => new Accoutrement());
  map.set("Accessory", () => new Accessory());
  map.set("Hat", () => new Hat());
  map.set("ActivityHistoryService", () => new ActivityHistoryService());
  map.set("AdPortal", () => new AdPortal());
  map.set("AdService", () => new AdService());
  map.set("AdvancedDragger", () => new AdvancedDragger());
  map.set("AnalyticsService", () => new AnalyticsService());
  map.set("Animation", () => new Animation());
  map.set("CurveAnimation", () => new CurveAnimation());
  map.set("KeyframeSequence", () => new KeyframeSequence());
  map.set("AnimationClipProvider", () => new AnimationClipProvider());
  map.set("AnimationController", () => new AnimationController());
  map.set("AnimationFromVideoCreatorService", () => new AnimationFromVideoCreatorService());
  map.set("AnimationFromVideoCreatorStudioService", () => new AnimationFromVideoCreatorStudioService());
  map.set("AnimationRigData", () => new AnimationRigData());
  map.set("Animator", () => new Animator());
  map.set("AppUpdateService", () => new AppUpdateService());
  map.set("AssetCounterService", () => new AssetCounterService());
  map.set("AssetDeliveryProxy", () => new AssetDeliveryProxy());
  map.set("AssetImportService", () => new AssetImportService());
  map.set("AssetManagerService", () => new AssetManagerService());
  map.set("AssetService", () => new AssetService());
  map.set("Atmosphere", () => new Atmosphere());
  map.set("Attachment", () => new Attachment());
  map.set("Bone", () => new Bone());
  map.set("AudioAnalyzer", () => new AudioAnalyzer());
  map.set("AudioChorus", () => new AudioChorus());
  map.set("AudioCompressor", () => new AudioCompressor());
  map.set("AudioDeviceInput", () => new AudioDeviceInput());
  map.set("AudioDeviceOutput", () => new AudioDeviceOutput());
  map.set("AudioDistortion", () => new AudioDistortion());
  map.set("AudioEcho", () => new AudioEcho());
  map.set("AudioEmitter", () => new AudioEmitter());
  map.set("AudioEqualizer", () => new AudioEqualizer());
  map.set("AudioFader", () => new AudioFader());
  map.set("AudioFlanger", () => new AudioFlanger());
  map.set("AudioListener", () => new AudioListener());
  map.set("AudioPitchShifter", () => new AudioPitchShifter());
  map.set("AudioPlayer", () => new AudioPlayer());
  map.set("AudioReverb", () => new AudioReverb());
  map.set("AudioSearchParams", () => new AudioSearchParams());
  map.set("AvatarChatService", () => new AvatarChatService());
  map.set("AvatarCreationService", () => new AvatarCreationService());
  map.set("AvatarEditorService", () => new AvatarEditorService());
  map.set("AvatarImportService", () => new AvatarImportService());
  map.set("Backpack", () => new Backpack());
  map.set("BadgeService", () => new BadgeService());
  map.set("CoreGui", () => new CoreGui());
  map.set("StarterGui", () => new StarterGui());
  map.set("RemoteEvent", () => new RemoteEvent());
  map.set("UnreliableRemoteEvent", () => new UnreliableRemoteEvent());
  map.set("WrapLayer", () => new WrapLayer());
  map.set("WrapTarget", () => new WrapTarget());
  map.set("Beam", () => new Beam());
  map.set("BindableEvent", () => new BindableEvent());
  map.set("BindableFunction", () => new BindableFunction());
  map.set("BodyAngularVelocity", () => new BodyAngularVelocity());
  map.set("BodyForce", () => new BodyForce());
  map.set("BodyGyro", () => new BodyGyro());
  map.set("BodyPosition", () => new BodyPosition());
  map.set("BodyThrust", () => new BodyThrust());
  map.set("BodyVelocity", () => new BodyVelocity());
  map.set("RocketPropulsion", () => new RocketPropulsion());
  map.set("BodyPartDescription", () => new BodyPartDescription());
  map.set("Breakpoint", () => new Breakpoint());
  map.set("BrowserService", () => new BrowserService());
  map.set("BubbleChatMessageProperties", () => new BubbleChatMessageProperties());
  map.set("BulkImportService", () => new BulkImportService());
  map.set("HSRDataContentProvider", () => new HSRDataContentProvider());
  map.set("MeshContentProvider", () => new MeshContentProvider());
  map.set("SolidModelContentProvider", () => new SolidModelContentProvider());
  map.set("CalloutService", () => new CalloutService());
  map.set("Camera", () => new Camera());
  map.set("CaptureService", () => new CaptureService());
  map.set("ChangeHistoryService", () => new ChangeHistoryService());
  map.set("BodyColors", () => new BodyColors());
  map.set("CharacterMesh", () => new CharacterMesh());
  map.set("Pants", () => new Pants());
  map.set("Shirt", () => new Shirt());
  map.set("ShirtGraphic", () => new ShirtGraphic());
  map.set("Skin", () => new Skin());
  map.set("Chat", () => new Chat());
  map.set("ChatbotUIService", () => new ChatbotUIService());
  map.set("ClickDetector", () => new ClickDetector());
  map.set("DragDetector", () => new DragDetector());
  map.set("Clouds", () => new Clouds());
  map.set("ClusterPacketCache", () => new ClusterPacketCache());
  map.set("CollaboratorsService", () => new CollaboratorsService());
  map.set("CollectionService", () => new CollectionService());
  map.set("CommandService", () => new CommandService());
  map.set("CommerceService", () => new CommerceService());
  map.set("Configuration", () => new Configuration());
  map.set("ConfigureServerService", () => new ConfigureServerService());
  map.set("ConnectivityService", () => new ConnectivityService());
  map.set("AlignOrientation", () => new AlignOrientation());
  map.set("AlignPosition", () => new AlignPosition());
  map.set("AngularVelocity", () => new AngularVelocity());
  map.set("AnimationConstraint", () => new AnimationConstraint());
  map.set("BallSocketConstraint", () => new BallSocketConstraint());
  map.set("HingeConstraint", () => new HingeConstraint());
  map.set("LineForce", () => new LineForce());
  map.set("LinearVelocity", () => new LinearVelocity());
  map.set("PlaneConstraint", () => new PlaneConstraint());
  map.set("Plane", () => new Plane());
  map.set("RigidConstraint", () => new RigidConstraint());
  map.set("RodConstraint", () => new RodConstraint());
  map.set("RopeConstraint", () => new RopeConstraint());
  map.set("CylindricalConstraint", () => new CylindricalConstraint());
  map.set("PrismaticConstraint", () => new PrismaticConstraint());
  map.set("SpringConstraint", () => new SpringConstraint());
  map.set("Torque", () => new Torque());
  map.set("TorsionSpringConstraint", () => new TorsionSpringConstraint());
  map.set("UniversalConstraint", () => new UniversalConstraint());
  map.set("VectorForce", () => new VectorForce());
  map.set("ContentProvider", () => new ContentProvider());
  map.set("ContextActionService", () => new ContextActionService());
  map.set("HumanoidController", () => new HumanoidController());
  map.set("SkateboardController", () => new SkateboardController());
  map.set("VehicleController", () => new VehicleController());
  map.set("AirController", () => new AirController());
  map.set("ClimbController", () => new ClimbController());
  map.set("GroundController", () => new GroundController());
  map.set("SwimController", () => new SwimController());
  map.set("ControllerManager", () => new ControllerManager());
  map.set("ControllerService", () => new ControllerService());
  map.set("ConversationalAIAcceptanceService", () => new ConversationalAIAcceptanceService());
  map.set("CookiesService", () => new CookiesService());
  map.set("CorePackages", () => new CorePackages());
  map.set("CoreScriptDebuggingManagerHelper", () => new CoreScriptDebuggingManagerHelper());
  map.set("CoreScriptSyncService", () => new CoreScriptSyncService());
  map.set("CreationDBService", () => new CreationDBService());
  map.set("CrossDMScriptChangeListener", () => new CrossDMScriptChangeListener());
  map.set("CustomEvent", () => new CustomEvent());
  map.set("CustomEventReceiver", () => new CustomEventReceiver());
  map.set("BlockMesh", () => new BlockMesh());
  map.set("CylinderMesh", () => new CylinderMesh());
  map.set("EditableMesh", () => new EditableMesh());
  map.set("RobloxEditableMesh", () => new RobloxEditableMesh());
  map.set("FileMesh", () => new FileMesh());
  map.set("SpecialMesh", () => new SpecialMesh());
  map.set("DataModelPatchService", () => new DataModelPatchService());
  map.set("DataStoreGetOptions", () => new DataStoreGetOptions());
  map.set("DataStoreIncrementOptions", () => new DataStoreIncrementOptions());
  map.set("DataStoreOptions", () => new DataStoreOptions());
  map.set("DataStoreService", () => new DataStoreService());
  map.set("DataStoreSetOptions", () => new DataStoreSetOptions());
  map.set("Debris", () => new Debris());
  map.set("DebuggablePluginWatcher", () => new DebuggablePluginWatcher());
  map.set("DebuggerConnectionManager", () => new DebuggerConnectionManager());
  map.set("DebuggerManager", () => new DebuggerManager());
  map.set("DebuggerUIService", () => new DebuggerUIService());
  map.set("DebuggerWatch", () => new DebuggerWatch());
  map.set("DeviceIdService", () => new DeviceIdService());
  map.set("Dialog", () => new Dialog());
  map.set("DialogChoice", () => new DialogChoice());
  map.set("DraftsService", () => new DraftsService());
  map.set("Dragger", () => new Dragger());
  map.set("DraggerService", () => new DraggerService());
  map.set("EditableImage", () => new EditableImage());
  map.set("RobloxEditableImage", () => new RobloxEditableImage());
  map.set("EngineAPICloudProcessingService", () => new EngineAPICloudProcessingService());
  map.set("EulerRotationCurve", () => new EulerRotationCurve());
  map.set("EventIngestService", () => new EventIngestService());
  map.set("ExampleService", () => new ExampleService());
  map.set("ExperienceAuthService", () => new ExperienceAuthService());
  map.set("ExperienceInviteOptions", () => new ExperienceInviteOptions());
  map.set("ExperienceNotificationService", () => new ExperienceNotificationService());
  map.set("ExperienceService", () => new ExperienceService());
  map.set("ExperienceStateCaptureService", () => new ExperienceStateCaptureService());
  map.set("Explosion", () => new Explosion());
  map.set("FaceAnimatorService", () => new FaceAnimatorService());
  map.set("FaceControls", () => new FaceControls());
  map.set("Decal", () => new Decal());
  map.set("Texture", () => new Texture());
  map.set("FacialAnimationRecordingService", () => new FacialAnimationRecordingService());
  map.set("FacialAnimationStreamingServiceV2", () => new FacialAnimationStreamingServiceV2());
  map.set("Hole", () => new Hole());
  map.set("MotorFeature", () => new MotorFeature());
  map.set("Fire", () => new Fire());
  map.set("FlagStandService", () => new FlagStandService());
  map.set("FloatCurve", () => new FloatCurve());
  map.set("FlyweightService", () => new FlyweightService());
  map.set("CSGDictionaryService", () => new CSGDictionaryService());
  map.set("NonReplicatedCSGDictionaryService", () => new NonReplicatedCSGDictionaryService());
  map.set("Folder", () => new Folder());
  map.set("ForceField", () => new ForceField());
  map.set("FriendService", () => new FriendService());
  map.set("FunctionalTest", () => new FunctionalTest());
  map.set("GamePassService", () => new GamePassService());
  map.set("GamepadService", () => new GamepadService());
  map.set("GenericChallengeService", () => new GenericChallengeService());
  map.set("Geometry", () => new Geometry());
  map.set("GeometryService", () => new GeometryService());
  map.set("GetTextBoundsParams", () => new GetTextBoundsParams());
  map.set("GoogleAnalyticsConfiguration", () => new GoogleAnalyticsConfiguration());
  map.set("GroupService", () => new GroupService());
  map.set("CanvasGroup", () => new CanvasGroup());
  map.set("Frame", () => new Frame());
  map.set("ImageButton", () => new ImageButton());
  map.set("TextButton", () => new TextButton());
  map.set("ImageLabel", () => new ImageLabel());
  map.set("TextLabel", () => new TextLabel());
  map.set("ScrollingFrame", () => new ScrollingFrame());
  map.set("TextBox", () => new TextBox());
  map.set("VideoFrame", () => new VideoFrame());
  map.set("ViewportFrame", () => new ViewportFrame());
  map.set("BillboardGui", () => new BillboardGui());
  map.set("ScreenGui", () => new ScreenGui());
  map.set("GuiMain", () => new GuiMain());
  map.set("AdGui", () => new AdGui());
  map.set("SurfaceGui", () => new SurfaceGui());
  map.set("FloorWire", () => new FloorWire());
  map.set("SelectionBox", () => new SelectionBox());
  map.set("BoxHandleAdornment", () => new BoxHandleAdornment());
  map.set("ConeHandleAdornment", () => new ConeHandleAdornment());
  map.set("CylinderHandleAdornment", () => new CylinderHandleAdornment());
  map.set("ImageHandleAdornment", () => new ImageHandleAdornment());
  map.set("LineHandleAdornment", () => new LineHandleAdornment());
  map.set("SphereHandleAdornment", () => new SphereHandleAdornment());
  map.set("WireframeHandleAdornment", () => new WireframeHandleAdornment());
  map.set("ParabolaAdornment", () => new ParabolaAdornment());
  map.set("SelectionSphere", () => new SelectionSphere());
  map.set("ArcHandles", () => new ArcHandles());
  map.set("Handles", () => new Handles());
  map.set("SurfaceSelection", () => new SurfaceSelection());
  map.set("SelectionPartLasso", () => new SelectionPartLasso());
  map.set("SelectionPointLasso", () => new SelectionPointLasso());
  map.set("Path2D", () => new Path2D());
  map.set("GuiService", () => new GuiService());
  map.set("GuidRegistryService", () => new GuidRegistryService());
  map.set("HapticService", () => new HapticService());
  map.set("HeightmapImporterService", () => new HeightmapImporterService());
  map.set("HiddenSurfaceRemovalAsset", () => new HiddenSurfaceRemovalAsset());
  map.set("Highlight", () => new Highlight());
  map.set("Hopper", () => new Hopper());
  map.set("HttpRbxApiService", () => new HttpRbxApiService());
  map.set("HttpService", () => new HttpService());
  map.set("Humanoid", () => new Humanoid());
  map.set("HumanoidDescription", () => new HumanoidDescription());
  map.set("IKControl", () => new IKControl());
  map.set("LegacyStudioBridge", () => new LegacyStudioBridge());
  map.set("IXPService", () => new IXPService());
  map.set("IncrementalPatchBuilder", () => new IncrementalPatchBuilder());
  map.set("InsertService", () => new InsertService());
  map.set("InternalSyncItem", () => new InternalSyncItem());
  map.set("InternalSyncService", () => new InternalSyncService());
  map.set("RotateP", () => new RotateP());
  map.set("RotateV", () => new RotateV());
  map.set("Glue", () => new Glue());
  map.set("ManualGlue", () => new ManualGlue());
  map.set("ManualWeld", () => new ManualWeld());
  map.set("Motor", () => new Motor());
  map.set("Motor6D", () => new Motor6D());
  map.set("Rotate", () => new Rotate());
  map.set("Snap", () => new Snap());
  map.set("VelocityMotor", () => new VelocityMotor());
  map.set("Weld", () => new Weld());
  map.set("JointsService", () => new JointsService());
  map.set("KeyboardService", () => new KeyboardService());
  map.set("Keyframe", () => new Keyframe());
  map.set("KeyframeMarker", () => new KeyframeMarker());
  map.set("KeyframeSequenceProvider", () => new KeyframeSequenceProvider());
  map.set("LSPFileSyncService", () => new LSPFileSyncService());
  map.set("LanguageService", () => new LanguageService());
  map.set("PointLight", () => new PointLight());
  map.set("SpotLight", () => new SpotLight());
  map.set("SurfaceLight", () => new SurfaceLight());
  map.set("Lighting", () => new Lighting());
  map.set("LiveScriptingService", () => new LiveScriptingService());
  map.set("AppStorageService", () => new AppStorageService());
  map.set("UserStorageService", () => new UserStorageService());
  map.set("LocalizationService", () => new LocalizationService());
  map.set("LocalizationTable", () => new LocalizationTable());
  map.set("LodDataService", () => new LodDataService());
  map.set("LogReporterService", () => new LogReporterService());
  map.set("LogService", () => new LogService());
  map.set("LoginService", () => new LoginService());
  map.set("Script", () => new Script());
  map.set("LocalScript", () => new LocalScript());
  map.set("ModuleScript", () => new ModuleScript());
  map.set("LuaWebService", () => new LuaWebService());
  map.set("LuauScriptAnalyzerService", () => new LuauScriptAnalyzerService());
  map.set("MarkerCurve", () => new MarkerCurve());
  map.set("MarketplaceService", () => new MarketplaceService());
  map.set("MaterialGenerationService", () => new MaterialGenerationService());
  map.set("MaterialService", () => new MaterialService());
  map.set("MaterialVariant", () => new MaterialVariant());
  map.set("MemStorageService", () => new MemStorageService());
  map.set("MemoryStoreService", () => new MemoryStoreService());
  map.set("Message", () => new Message());
  map.set("Hint", () => new Hint());
  map.set("MessageBusService", () => new MessageBusService());
  map.set("MessagingService", () => new MessagingService());
  map.set("MetaBreakpointManager", () => new MetaBreakpointManager());
  map.set("MouseService", () => new MouseService());
  map.set("NetworkClient", () => new NetworkClient());
  map.set("NetworkServer", () => new NetworkServer());
  map.set("NetworkSettings", () => new NetworkSettings());
  map.set("NoCollisionConstraint", () => new NoCollisionConstraint());
  map.set("Noise", () => new Noise());
  map.set("NotificationService", () => new NotificationService());
  map.set("OmniRecommendationsService", () => new OmniRecommendationsService());
  map.set("OpenCloudService", () => new OpenCloudService());
  map.set("OperationGraph", () => new OperationGraph());
  map.set("CornerWedgePart", () => new CornerWedgePart());
  map.set("Part", () => new Part());
  map.set("FlagStand", () => new FlagStand());
  map.set("Seat", () => new Seat());
  map.set("SkateboardPlatform", () => new SkateboardPlatform());
  map.set("SpawnLocation", () => new SpawnLocation());
  map.set("WedgePart", () => new WedgePart());
  map.set("Terrain", () => new Terrain());
  map.set("MeshPart", () => new MeshPart());
  map.set("PartOperation", () => new PartOperation());
  map.set("IntersectOperation", () => new IntersectOperation());
  map.set("NegateOperation", () => new NegateOperation());
  map.set("UnionOperation", () => new UnionOperation());
  map.set("TrussPart", () => new TrussPart());
  map.set("VehicleSeat", () => new VehicleSeat());
  map.set("Model", () => new Model());
  map.set("Actor", () => new Actor());
  map.set("HopperBin", () => new HopperBin());
  map.set("Tool", () => new Tool());
  map.set("Flag", () => new Flag());
  map.set("Workspace", () => new Workspace());
  map.set("WorldModel", () => new WorldModel());
  map.set("PackageService", () => new PackageService());
  map.set("PackageUIService", () => new PackageUIService());
  map.set("PartOperationAsset", () => new PartOperationAsset());
  map.set("ParticleEmitter", () => new ParticleEmitter());
  map.set("PatchBundlerFileWatch", () => new PatchBundlerFileWatch());
  map.set("PathfindingLink", () => new PathfindingLink());
  map.set("PathfindingModifier", () => new PathfindingModifier());
  map.set("PathfindingService", () => new PathfindingService());
  map.set("PermissionsService", () => new PermissionsService());
  map.set("PhysicsService", () => new PhysicsService());
  map.set("PlaceStatsService", () => new PlaceStatsService());
  map.set("PlacesService", () => new PlacesService());
  map.set("PlatformCloudStorageService", () => new PlatformCloudStorageService());
  map.set("PlatformFriendsService", () => new PlatformFriendsService());
  map.set("Player", () => new Player());
  map.set("PlayerEmulatorService", () => new PlayerEmulatorService());
  map.set("PlayerViewService", () => new PlayerViewService());
  map.set("Players", () => new Players());
  map.set("PluginAction", () => new PluginAction());
  map.set("PluginCapabilities", () => new PluginCapabilities());
  map.set("PluginDebugService", () => new PluginDebugService());
  map.set("PluginGuiService", () => new PluginGuiService());
  map.set("PluginManagementService", () => new PluginManagementService());
  map.set("PluginPolicyService", () => new PluginPolicyService());
  map.set("PointsService", () => new PointsService());
  map.set("PolicyService", () => new PolicyService());
  map.set("NumberPose", () => new NumberPose());
  map.set("Pose", () => new Pose());
  map.set("BloomEffect", () => new BloomEffect());
  map.set("BlurEffect", () => new BlurEffect());
  map.set("ColorCorrectionEffect", () => new ColorCorrectionEffect());
  map.set("DepthOfFieldEffect", () => new DepthOfFieldEffect());
  map.set("SunRaysEffect", () => new SunRaysEffect());
  map.set("ProcessInstancePhysicsService", () => new ProcessInstancePhysicsService());
  map.set("ProjectFolderService", () => new ProjectFolderService());
  map.set("ProximityPrompt", () => new ProximityPrompt());
  map.set("ProximityPromptService", () => new ProximityPromptService());
  map.set("PublishService", () => new PublishService());
  map.set("RbxAnalyticsService", () => new RbxAnalyticsService());
  map.set("ReflectionMetadata", () => new ReflectionMetadata());
  map.set("ReflectionMetadataCallbacks", () => new ReflectionMetadataCallbacks());
  map.set("ReflectionMetadataClasses", () => new ReflectionMetadataClasses());
  map.set("ReflectionMetadataEnums", () => new ReflectionMetadataEnums());
  map.set("ReflectionMetadataEvents", () => new ReflectionMetadataEvents());
  map.set("ReflectionMetadataFunctions", () => new ReflectionMetadataFunctions());
  map.set("ReflectionMetadataClass", () => new ReflectionMetadataClass());
  map.set("ReflectionMetadataEnum", () => new ReflectionMetadataEnum());
  map.set("ReflectionMetadataEnumItem", () => new ReflectionMetadataEnumItem());
  map.set("ReflectionMetadataMember", () => new ReflectionMetadataMember());
  map.set("ReflectionMetadataProperties", () => new ReflectionMetadataProperties());
  map.set("ReflectionMetadataYieldFunctions", () => new ReflectionMetadataYieldFunctions());
  map.set("ReflectionService", () => new ReflectionService());
  map.set("RemoteCursorService", () => new RemoteCursorService());
  map.set("RemoteDebuggerServer", () => new RemoteDebuggerServer());
  map.set("RemoteFunction", () => new RemoteFunction());
  map.set("RenderSettings", () => new RenderSettings());
  map.set("RenderingTest", () => new RenderingTest());
  map.set("ReplicatedFirst", () => new ReplicatedFirst());
  map.set("ReplicatedStorage", () => new ReplicatedStorage());
  map.set("RibbonNotificationService", () => new RibbonNotificationService());
  map.set("RobloxPluginGuiService", () => new RobloxPluginGuiService());
  map.set("RobloxReplicatedStorage", () => new RobloxReplicatedStorage());
  map.set("RobloxServerStorage", () => new RobloxServerStorage());
  map.set("RomarkService", () => new RomarkService());
  map.set("RotationCurve", () => new RotationCurve());
  map.set("RtMessagingService", () => new RtMessagingService());
  map.set("RunService", () => new RunService());
  map.set("RuntimeScriptService", () => new RuntimeScriptService());
  map.set("SafetyService", () => new SafetyService());
  map.set("ScriptChangeService", () => new ScriptChangeService());
  map.set("ScriptCloneWatcher", () => new ScriptCloneWatcher());
  map.set("ScriptCloneWatcherHelper", () => new ScriptCloneWatcherHelper());
  map.set("ScriptCommitService", () => new ScriptCommitService());
  map.set("ScriptContext", () => new ScriptContext());
  map.set("ScriptEditorService", () => new ScriptEditorService());
  map.set("ScriptProfilerService", () => new ScriptProfilerService());
  map.set("ScriptRegistrationService", () => new ScriptRegistrationService());
  map.set("ScriptService", () => new ScriptService());
  map.set("Selection", () => new Selection());
  map.set("SelectionHighlightManager", () => new SelectionHighlightManager());
  map.set("BuoyancySensor", () => new BuoyancySensor());
  map.set("ControllerPartSensor", () => new ControllerPartSensor());
  map.set("ServerScriptService", () => new ServerScriptService());
  map.set("ServerStorage", () => new ServerStorage());
  map.set("ServiceVisibilityService", () => new ServiceVisibilityService());
  map.set("SessionService", () => new SessionService());
  map.set("SharedTableRegistry", () => new SharedTableRegistry());
  map.set("ShorelineUpgraderService", () => new ShorelineUpgraderService());
  map.set("Sky", () => new Sky());
  map.set("Smoke", () => new Smoke());
  map.set("SmoothVoxelsUpgraderService", () => new SmoothVoxelsUpgraderService());
  map.set("SnippetService", () => new SnippetService());
  map.set("SocialService", () => new SocialService());
  map.set("Sound", () => new Sound());
  map.set("ChorusSoundEffect", () => new ChorusSoundEffect());
  map.set("CompressorSoundEffect", () => new CompressorSoundEffect());
  map.set("DistortionSoundEffect", () => new DistortionSoundEffect());
  map.set("EchoSoundEffect", () => new EchoSoundEffect());
  map.set("EqualizerSoundEffect", () => new EqualizerSoundEffect());
  map.set("FlangeSoundEffect", () => new FlangeSoundEffect());
  map.set("PitchShiftSoundEffect", () => new PitchShiftSoundEffect());
  map.set("ReverbSoundEffect", () => new ReverbSoundEffect());
  map.set("TremoloSoundEffect", () => new TremoloSoundEffect());
  map.set("SoundGroup", () => new SoundGroup());
  map.set("SoundService", () => new SoundService());
  map.set("Sparkles", () => new Sparkles());
  map.set("SpawnerService", () => new SpawnerService());
  map.set("StandalonePluginScripts", () => new StandalonePluginScripts());
  map.set("StarterGear", () => new StarterGear());
  map.set("StarterPack", () => new StarterPack());
  map.set("StarterPlayer", () => new StarterPlayer());
  map.set("StarterPlayerScripts", () => new StarterPlayerScripts());
  map.set("StarterCharacterScripts", () => new StarterCharacterScripts());
  map.set("StartupMessageService", () => new StartupMessageService());
  map.set("Stats", () => new Stats());
  map.set("StopWatchReporter", () => new StopWatchReporter());
  map.set("StreamingService", () => new StreamingService());
  map.set("StudioAssetService", () => new StudioAssetService());
  map.set("StudioAttachment", () => new StudioAttachment());
  map.set("StudioCallout", () => new StudioCallout());
  map.set("StudioData", () => new StudioData());
  map.set("StudioDeviceEmulatorService", () => new StudioDeviceEmulatorService());
  map.set("StudioPublishService", () => new StudioPublishService());
  map.set("StudioScriptDebugEventListener", () => new StudioScriptDebugEventListener());
  map.set("StudioSdkService", () => new StudioSdkService());
  map.set("StudioService", () => new StudioService());
  map.set("StudioWidgetsService", () => new StudioWidgetsService());
  map.set("StyleRule", () => new StyleRule());
  map.set("StyleSheet", () => new StyleSheet());
  map.set("StyleDerive", () => new StyleDerive());
  map.set("StyleLink", () => new StyleLink());
  map.set("StylingService", () => new StylingService());
  map.set("SurfaceAppearance", () => new SurfaceAppearance());
  map.set("TaskScheduler", () => new TaskScheduler());
  map.set("Team", () => new Team());
  map.set("TeamCreateData", () => new TeamCreateData());
  map.set("TeamCreatePublishService", () => new TeamCreatePublishService());
  map.set("TeamCreateService", () => new TeamCreateService());
  map.set("Teams", () => new Teams());
  map.set("TeleportOptions", () => new TeleportOptions());
  map.set("TeleportService", () => new TeleportService());
  map.set("TemporaryCageMeshProvider", () => new TemporaryCageMeshProvider());
  map.set("TemporaryScriptService", () => new TemporaryScriptService());
  map.set("TerrainDetail", () => new TerrainDetail());
  map.set("TerrainRegion", () => new TerrainRegion());
  map.set("TestService", () => new TestService());
  map.set("TextBoxService", () => new TextBoxService());
  map.set("TextChannel", () => new TextChannel());
  map.set("TextChatCommand", () => new TextChatCommand());
  map.set("BubbleChatConfiguration", () => new BubbleChatConfiguration());
  map.set("ChatInputBarConfiguration", () => new ChatInputBarConfiguration());
  map.set("ChatWindowConfiguration", () => new ChatWindowConfiguration());
  map.set("TextChatMessageProperties", () => new TextChatMessageProperties());
  map.set("TextChatService", () => new TextChatService());
  map.set("TextService", () => new TextService());
  map.set("TextureGenerationService", () => new TextureGenerationService());
  map.set("ThirdPartyUserService", () => new ThirdPartyUserService());
  map.set("TimerService", () => new TimerService());
  map.set("ToastNotificationService", () => new ToastNotificationService());
  map.set("TouchInputService", () => new TouchInputService());
  map.set("TracerService", () => new TracerService());
  map.set("TrackerStreamAnimation", () => new TrackerStreamAnimation());
  map.set("Trail", () => new Trail());
  map.set("TutorialService", () => new TutorialService());
  map.set("Tween", () => new Tween());
  map.set("TweenService", () => new TweenService());
  map.set("UGCAvatarService", () => new UGCAvatarService());
  map.set("UGCValidationService", () => new UGCValidationService());
  map.set("UIAspectRatioConstraint", () => new UIAspectRatioConstraint());
  map.set("UISizeConstraint", () => new UISizeConstraint());
  map.set("UITextSizeConstraint", () => new UITextSizeConstraint());
  map.set("UICorner", () => new UICorner());
  map.set("UIFlexItem", () => new UIFlexItem());
  map.set("UIGradient", () => new UIGradient());
  map.set("UIGridLayout", () => new UIGridLayout());
  map.set("UIListLayout", () => new UIListLayout());
  map.set("UIPageLayout", () => new UIPageLayout());
  map.set("UITableLayout", () => new UITableLayout());
  map.set("UIPadding", () => new UIPadding());
  map.set("UIScale", () => new UIScale());
  map.set("UIStroke", () => new UIStroke());
  map.set("UnvalidatedAssetService", () => new UnvalidatedAssetService());
  map.set("UserInputService", () => new UserInputService());
  map.set("UserService", () => new UserService());
  map.set("VRService", () => new VRService());
  map.set("VRStatusService", () => new VRStatusService());
  map.set("BinaryStringValue", () => new BinaryStringValue());
  map.set("BoolValue", () => new BoolValue());
  map.set("BrickColorValue", () => new BrickColorValue());
  map.set("CFrameValue", () => new CFrameValue());
  map.set("Color3Value", () => new Color3Value());
  map.set("DoubleConstrainedValue", () => new DoubleConstrainedValue());
  map.set("IntConstrainedValue", () => new IntConstrainedValue());
  map.set("IntValue", () => new IntValue());
  map.set("NumberValue", () => new NumberValue());
  map.set("ObjectValue", () => new ObjectValue());
  map.set("RayValue", () => new RayValue());
  map.set("StringValue", () => new StringValue());
  map.set("Vector3Value", () => new Vector3Value());
  map.set("Vector3Curve", () => new Vector3Curve());
  map.set("VersionControlService", () => new VersionControlService());
  map.set("VideoCaptureService", () => new VideoCaptureService());
  map.set("VideoDeviceInput", () => new VideoDeviceInput());
  map.set("VideoService", () => new VideoService());
  map.set("VirtualInputManager", () => new VirtualInputManager());
  map.set("VirtualUser", () => new VirtualUser());
  map.set("VisibilityCheckDispatcher", () => new VisibilityCheckDispatcher());
  map.set("Visit", () => new Visit());
  map.set("VisualizationMode", () => new VisualizationMode());
  map.set("VisualizationModeCategory", () => new VisualizationModeCategory());
  map.set("VisualizationModeService", () => new VisualizationModeService());
  map.set("VoiceChatInternal", () => new VoiceChatInternal());
  map.set("VoiceChatService", () => new VoiceChatService());
  map.set("WeldConstraint", () => new WeldConstraint());
  map.set("Wire", () => new Wire());
  return map;
}
var AccessModifierType = class _AccessModifierType extends EnumItem {
  static Allow = new _AccessModifierType("Allow", 0);
  static Deny = new _AccessModifierType("Deny", 1);
  static get Items() {
    return [_AccessModifierType.Allow, _AccessModifierType.Deny];
  }
  static FromValue(value) {
    return _AccessModifierType.Items.find((item) => item._value === value);
  }
};
var AccessoryType = class _AccessoryType extends EnumItem {
  static Unknown = new _AccessoryType("Unknown", 0);
  static Hat = new _AccessoryType("Hat", 1);
  static Hair = new _AccessoryType("Hair", 2);
  static Face = new _AccessoryType("Face", 3);
  static Neck = new _AccessoryType("Neck", 4);
  static Shoulder = new _AccessoryType("Shoulder", 5);
  static Front = new _AccessoryType("Front", 6);
  static Back = new _AccessoryType("Back", 7);
  static Waist = new _AccessoryType("Waist", 8);
  static TShirt = new _AccessoryType("TShirt", 9);
  static Shirt = new _AccessoryType("Shirt", 10);
  static Pants = new _AccessoryType("Pants", 11);
  static Jacket = new _AccessoryType("Jacket", 12);
  static Sweater = new _AccessoryType("Sweater", 13);
  static Shorts = new _AccessoryType("Shorts", 14);
  static LeftShoe = new _AccessoryType("LeftShoe", 15);
  static RightShoe = new _AccessoryType("RightShoe", 16);
  static DressSkirt = new _AccessoryType("DressSkirt", 17);
  static Eyebrow = new _AccessoryType("Eyebrow", 18);
  static Eyelash = new _AccessoryType("Eyelash", 19);
  static get Items() {
    return [_AccessoryType.Unknown, _AccessoryType.Hat, _AccessoryType.Hair, _AccessoryType.Face, _AccessoryType.Neck, _AccessoryType.Shoulder, _AccessoryType.Front, _AccessoryType.Back, _AccessoryType.Waist, _AccessoryType.TShirt, _AccessoryType.Shirt, _AccessoryType.Pants, _AccessoryType.Jacket, _AccessoryType.Sweater, _AccessoryType.Shorts, _AccessoryType.LeftShoe, _AccessoryType.RightShoe, _AccessoryType.DressSkirt, _AccessoryType.Eyebrow, _AccessoryType.Eyelash];
  }
  static FromValue(value) {
    return _AccessoryType.Items.find((item) => item._value === value);
  }
};
var ActuatorRelativeTo = class _ActuatorRelativeTo extends EnumItem {
  static Attachment0 = new _ActuatorRelativeTo("Attachment0", 0);
  static Attachment1 = new _ActuatorRelativeTo("Attachment1", 1);
  static World = new _ActuatorRelativeTo("World", 2);
  static get Items() {
    return [_ActuatorRelativeTo.Attachment0, _ActuatorRelativeTo.Attachment1, _ActuatorRelativeTo.World];
  }
  static FromValue(value) {
    return _ActuatorRelativeTo.Items.find((item) => item._value === value);
  }
};
var ActuatorType = class _ActuatorType extends EnumItem {
  static None = new _ActuatorType("None", 0);
  static Motor = new _ActuatorType("Motor", 1);
  static Servo = new _ActuatorType("Servo", 2);
  static get Items() {
    return [_ActuatorType.None, _ActuatorType.Motor, _ActuatorType.Servo];
  }
  static FromValue(value) {
    return _ActuatorType.Items.find((item) => item._value === value);
  }
};
var AdShape = class _AdShape extends EnumItem {
  static HorizontalRectangle = new _AdShape("HorizontalRectangle", 1);
  static get Items() {
    return [_AdShape.HorizontalRectangle];
  }
  static FromValue(value) {
    return _AdShape.Items.find((item) => item._value === value);
  }
};
var AdornCullingMode = class _AdornCullingMode extends EnumItem {
  static Automatic = new _AdornCullingMode("Automatic", 0);
  static Never = new _AdornCullingMode("Never", 1);
  static get Items() {
    return [_AdornCullingMode.Automatic, _AdornCullingMode.Never];
  }
  static FromValue(value) {
    return _AdornCullingMode.Items.find((item) => item._value === value);
  }
};
var AlignType = class _AlignType extends EnumItem {
  static PrimaryAxisParallel = new _AlignType("PrimaryAxisParallel", 2);
  static PrimaryAxisPerpendicular = new _AlignType("PrimaryAxisPerpendicular", 3);
  static PrimaryAxisLookAt = new _AlignType("PrimaryAxisLookAt", 4);
  static AllAxes = new _AlignType("AllAxes", 5);
  static Parallel = new _AlignType("Parallel", 0);
  static Perpendicular = new _AlignType("Perpendicular", 1);
  static get Items() {
    return [_AlignType.PrimaryAxisParallel, _AlignType.PrimaryAxisPerpendicular, _AlignType.PrimaryAxisLookAt, _AlignType.AllAxes, _AlignType.Parallel, _AlignType.Perpendicular];
  }
  static FromValue(value) {
    return _AlignType.Items.find((item) => item._value === value);
  }
};
var AlphaMode = class _AlphaMode extends EnumItem {
  static Overlay = new _AlphaMode("Overlay", 0);
  static Transparency = new _AlphaMode("Transparency", 1);
  static get Items() {
    return [_AlphaMode.Overlay, _AlphaMode.Transparency];
  }
  static FromValue(value) {
    return _AlphaMode.Items.find((item) => item._value === value);
  }
};
var AnimationPriority = class _AnimationPriority extends EnumItem {
  static Core = new _AnimationPriority("Core", 1e3);
  static Idle = new _AnimationPriority("Idle", 0);
  static Movement = new _AnimationPriority("Movement", 1);
  static Action = new _AnimationPriority("Action", 2);
  static Action2 = new _AnimationPriority("Action2", 3);
  static Action3 = new _AnimationPriority("Action3", 4);
  static Action4 = new _AnimationPriority("Action4", 5);
  static get Items() {
    return [_AnimationPriority.Core, _AnimationPriority.Idle, _AnimationPriority.Movement, _AnimationPriority.Action, _AnimationPriority.Action2, _AnimationPriority.Action3, _AnimationPriority.Action4];
  }
  static FromValue(value) {
    return _AnimationPriority.Items.find((item) => item._value === value);
  }
};
var AnimatorRetargetingMode = class _AnimatorRetargetingMode extends EnumItem {
  static Default = new _AnimatorRetargetingMode("Default", 0);
  static Disabled = new _AnimatorRetargetingMode("Disabled", 1);
  static Enabled = new _AnimatorRetargetingMode("Enabled", 2);
  static get Items() {
    return [_AnimatorRetargetingMode.Default, _AnimatorRetargetingMode.Disabled, _AnimatorRetargetingMode.Enabled];
  }
  static FromValue(value) {
    return _AnimatorRetargetingMode.Items.find((item) => item._value === value);
  }
};
var ApplyStrokeMode = class _ApplyStrokeMode extends EnumItem {
  static Contextual = new _ApplyStrokeMode("Contextual", 0);
  static Border = new _ApplyStrokeMode("Border", 1);
  static get Items() {
    return [_ApplyStrokeMode.Contextual, _ApplyStrokeMode.Border];
  }
  static FromValue(value) {
    return _ApplyStrokeMode.Items.find((item) => item._value === value);
  }
};
var AspectType = class _AspectType extends EnumItem {
  static FitWithinMaxSize = new _AspectType("FitWithinMaxSize", 0);
  static ScaleWithParentSize = new _AspectType("ScaleWithParentSize", 1);
  static get Items() {
    return [_AspectType.FitWithinMaxSize, _AspectType.ScaleWithParentSize];
  }
  static FromValue(value) {
    return _AspectType.Items.find((item) => item._value === value);
  }
};
var AudioApiRollout = class _AudioApiRollout extends EnumItem {
  static Disabled = new _AudioApiRollout("Disabled", 0);
  static Automatic = new _AudioApiRollout("Automatic", 1);
  static Enabled = new _AudioApiRollout("Enabled", 2);
  static get Items() {
    return [_AudioApiRollout.Disabled, _AudioApiRollout.Automatic, _AudioApiRollout.Enabled];
  }
  static FromValue(value) {
    return _AudioApiRollout.Items.find((item) => item._value === value);
  }
};
var AudioSubType = class _AudioSubType extends EnumItem {
  static Music = new _AudioSubType("Music", 1);
  static SoundEffect = new _AudioSubType("SoundEffect", 2);
  static get Items() {
    return [_AudioSubType.Music, _AudioSubType.SoundEffect];
  }
  static FromValue(value) {
    return _AudioSubType.Items.find((item) => item._value === value);
  }
};
var AutomaticSize = class _AutomaticSize extends EnumItem {
  static None = new _AutomaticSize("None", 0);
  static X = new _AutomaticSize("X", 1);
  static Y = new _AutomaticSize("Y", 2);
  static XY = new _AutomaticSize("XY", 3);
  static get Items() {
    return [_AutomaticSize.None, _AutomaticSize.X, _AutomaticSize.Y, _AutomaticSize.XY];
  }
  static FromValue(value) {
    return _AutomaticSize.Items.find((item) => item._value === value);
  }
};
var AvatarJointUpgrade = class _AvatarJointUpgrade extends EnumItem {
  static Default = new _AvatarJointUpgrade("Default", 0);
  static Enabled = new _AvatarJointUpgrade("Enabled", 1);
  static Disabled = new _AvatarJointUpgrade("Disabled", 2);
  static get Items() {
    return [_AvatarJointUpgrade.Default, _AvatarJointUpgrade.Enabled, _AvatarJointUpgrade.Disabled];
  }
  static FromValue(value) {
    return _AvatarJointUpgrade.Items.find((item) => item._value === value);
  }
};
var AvatarUnificationMode = class _AvatarUnificationMode extends EnumItem {
  static Default = new _AvatarUnificationMode("Default", 0);
  static Disabled = new _AvatarUnificationMode("Disabled", 1);
  static Enabled = new _AvatarUnificationMode("Enabled", 2);
  static get Items() {
    return [_AvatarUnificationMode.Default, _AvatarUnificationMode.Disabled, _AvatarUnificationMode.Enabled];
  }
  static FromValue(value) {
    return _AvatarUnificationMode.Items.find((item) => item._value === value);
  }
};
var BinType = class _BinType extends EnumItem {
  static Script = new _BinType("Script", 0);
  static GameTool = new _BinType("GameTool", 1);
  static Grab = new _BinType("Grab", 2);
  static Clone = new _BinType("Clone", 3);
  static Hammer = new _BinType("Hammer", 4);
  static get Items() {
    return [_BinType.Script, _BinType.GameTool, _BinType.Grab, _BinType.Clone, _BinType.Hammer];
  }
  static FromValue(value) {
    return _BinType.Items.find((item) => item._value === value);
  }
};
var BodyPart = class _BodyPart extends EnumItem {
  static Head = new _BodyPart("Head", 0);
  static Torso = new _BodyPart("Torso", 1);
  static LeftArm = new _BodyPart("LeftArm", 2);
  static RightArm = new _BodyPart("RightArm", 3);
  static LeftLeg = new _BodyPart("LeftLeg", 4);
  static RightLeg = new _BodyPart("RightLeg", 5);
  static get Items() {
    return [_BodyPart.Head, _BodyPart.Torso, _BodyPart.LeftArm, _BodyPart.RightArm, _BodyPart.LeftLeg, _BodyPart.RightLeg];
  }
  static FromValue(value) {
    return _BodyPart.Items.find((item) => item._value === value);
  }
};
var BorderMode = class _BorderMode extends EnumItem {
  static Outline = new _BorderMode("Outline", 0);
  static Middle = new _BorderMode("Middle", 1);
  static Inset = new _BorderMode("Inset", 2);
  static get Items() {
    return [_BorderMode.Outline, _BorderMode.Middle, _BorderMode.Inset];
  }
  static FromValue(value) {
    return _BorderMode.Items.find((item) => item._value === value);
  }
};
var ButtonStyle = class _ButtonStyle extends EnumItem {
  static Custom = new _ButtonStyle("Custom", 0);
  static RobloxButtonDefault = new _ButtonStyle("RobloxButtonDefault", 1);
  static RobloxButton = new _ButtonStyle("RobloxButton", 2);
  static RobloxRoundButton = new _ButtonStyle("RobloxRoundButton", 3);
  static RobloxRoundDefaultButton = new _ButtonStyle("RobloxRoundDefaultButton", 4);
  static RobloxRoundDropdownButton = new _ButtonStyle("RobloxRoundDropdownButton", 5);
  static get Items() {
    return [_ButtonStyle.Custom, _ButtonStyle.RobloxButtonDefault, _ButtonStyle.RobloxButton, _ButtonStyle.RobloxRoundButton, _ButtonStyle.RobloxRoundDefaultButton, _ButtonStyle.RobloxRoundDropdownButton];
  }
  static FromValue(value) {
    return _ButtonStyle.Items.find((item) => item._value === value);
  }
};
var CSGAsyncDynamicCollision = class _CSGAsyncDynamicCollision extends EnumItem {
  static Default = new _CSGAsyncDynamicCollision("Default", 0);
  static Disabled = new _CSGAsyncDynamicCollision("Disabled", 1);
  static Experimental = new _CSGAsyncDynamicCollision("Experimental", 2);
  static get Items() {
    return [_CSGAsyncDynamicCollision.Default, _CSGAsyncDynamicCollision.Disabled, _CSGAsyncDynamicCollision.Experimental];
  }
  static FromValue(value) {
    return _CSGAsyncDynamicCollision.Items.find((item) => item._value === value);
  }
};
var CameraMode = class _CameraMode extends EnumItem {
  static Classic = new _CameraMode("Classic", 0);
  static LockFirstPerson = new _CameraMode("LockFirstPerson", 1);
  static get Items() {
    return [_CameraMode.Classic, _CameraMode.LockFirstPerson];
  }
  static FromValue(value) {
    return _CameraMode.Items.find((item) => item._value === value);
  }
};
var CameraType = class _CameraType extends EnumItem {
  static Fixed = new _CameraType("Fixed", 0);
  static Attach = new _CameraType("Attach", 1);
  static Watch = new _CameraType("Watch", 2);
  static Track = new _CameraType("Track", 3);
  static Follow = new _CameraType("Follow", 4);
  static Custom = new _CameraType("Custom", 5);
  static Scriptable = new _CameraType("Scriptable", 6);
  static Orbital = new _CameraType("Orbital", 7);
  static get Items() {
    return [_CameraType.Fixed, _CameraType.Attach, _CameraType.Watch, _CameraType.Track, _CameraType.Follow, _CameraType.Custom, _CameraType.Scriptable, _CameraType.Orbital];
  }
  static FromValue(value) {
    return _CameraType.Items.find((item) => item._value === value);
  }
};
var CharacterControlMode = class _CharacterControlMode extends EnumItem {
  static Default = new _CharacterControlMode("Default", 0);
  static Legacy = new _CharacterControlMode("Legacy", 1);
  static NoCharacterController = new _CharacterControlMode("NoCharacterController", 2);
  static LuaCharacterController = new _CharacterControlMode("LuaCharacterController", 3);
  static get Items() {
    return [_CharacterControlMode.Default, _CharacterControlMode.Legacy, _CharacterControlMode.NoCharacterController, _CharacterControlMode.LuaCharacterController];
  }
  static FromValue(value) {
    return _CharacterControlMode.Items.find((item) => item._value === value);
  }
};
var ChatVersion = class _ChatVersion extends EnumItem {
  static LegacyChatService = new _ChatVersion("LegacyChatService", 0);
  static TextChatService = new _ChatVersion("TextChatService", 1);
  static get Items() {
    return [_ChatVersion.LegacyChatService, _ChatVersion.TextChatService];
  }
  static FromValue(value) {
    return _ChatVersion.Items.find((item) => item._value === value);
  }
};
var ClientAnimatorThrottlingMode = class _ClientAnimatorThrottlingMode extends EnumItem {
  static Default = new _ClientAnimatorThrottlingMode("Default", 0);
  static Disabled = new _ClientAnimatorThrottlingMode("Disabled", 1);
  static Enabled = new _ClientAnimatorThrottlingMode("Enabled", 2);
  static get Items() {
    return [_ClientAnimatorThrottlingMode.Default, _ClientAnimatorThrottlingMode.Disabled, _ClientAnimatorThrottlingMode.Enabled];
  }
  static FromValue(value) {
    return _ClientAnimatorThrottlingMode.Items.find((item) => item._value === value);
  }
};
var DecreaseMinimumPartDensityMode = class _DecreaseMinimumPartDensityMode extends EnumItem {
  static Default = new _DecreaseMinimumPartDensityMode("Default", 0);
  static Disabled = new _DecreaseMinimumPartDensityMode("Disabled", 1);
  static Enabled = new _DecreaseMinimumPartDensityMode("Enabled", 2);
  static get Items() {
    return [_DecreaseMinimumPartDensityMode.Default, _DecreaseMinimumPartDensityMode.Disabled, _DecreaseMinimumPartDensityMode.Enabled];
  }
  static FromValue(value) {
    return _DecreaseMinimumPartDensityMode.Items.find((item) => item._value === value);
  }
};
var DevCameraOcclusionMode = class _DevCameraOcclusionMode extends EnumItem {
  static Zoom = new _DevCameraOcclusionMode("Zoom", 0);
  static Invisicam = new _DevCameraOcclusionMode("Invisicam", 1);
  static get Items() {
    return [_DevCameraOcclusionMode.Zoom, _DevCameraOcclusionMode.Invisicam];
  }
  static FromValue(value) {
    return _DevCameraOcclusionMode.Items.find((item) => item._value === value);
  }
};
var DevComputerCameraMovementMode = class _DevComputerCameraMovementMode extends EnumItem {
  static UserChoice = new _DevComputerCameraMovementMode("UserChoice", 0);
  static Classic = new _DevComputerCameraMovementMode("Classic", 1);
  static Follow = new _DevComputerCameraMovementMode("Follow", 2);
  static Orbital = new _DevComputerCameraMovementMode("Orbital", 3);
  static CameraToggle = new _DevComputerCameraMovementMode("CameraToggle", 4);
  static get Items() {
    return [_DevComputerCameraMovementMode.UserChoice, _DevComputerCameraMovementMode.Classic, _DevComputerCameraMovementMode.Follow, _DevComputerCameraMovementMode.Orbital, _DevComputerCameraMovementMode.CameraToggle];
  }
  static FromValue(value) {
    return _DevComputerCameraMovementMode.Items.find((item) => item._value === value);
  }
};
var DevComputerMovementMode = class _DevComputerMovementMode extends EnumItem {
  static UserChoice = new _DevComputerMovementMode("UserChoice", 0);
  static KeyboardMouse = new _DevComputerMovementMode("KeyboardMouse", 1);
  static ClickToMove = new _DevComputerMovementMode("ClickToMove", 2);
  static Scriptable = new _DevComputerMovementMode("Scriptable", 3);
  static get Items() {
    return [_DevComputerMovementMode.UserChoice, _DevComputerMovementMode.KeyboardMouse, _DevComputerMovementMode.ClickToMove, _DevComputerMovementMode.Scriptable];
  }
  static FromValue(value) {
    return _DevComputerMovementMode.Items.find((item) => item._value === value);
  }
};
var DevTouchCameraMovementMode = class _DevTouchCameraMovementMode extends EnumItem {
  static UserChoice = new _DevTouchCameraMovementMode("UserChoice", 0);
  static Classic = new _DevTouchCameraMovementMode("Classic", 1);
  static Follow = new _DevTouchCameraMovementMode("Follow", 2);
  static Orbital = new _DevTouchCameraMovementMode("Orbital", 3);
  static get Items() {
    return [_DevTouchCameraMovementMode.UserChoice, _DevTouchCameraMovementMode.Classic, _DevTouchCameraMovementMode.Follow, _DevTouchCameraMovementMode.Orbital];
  }
  static FromValue(value) {
    return _DevTouchCameraMovementMode.Items.find((item) => item._value === value);
  }
};
var DevTouchMovementMode = class _DevTouchMovementMode extends EnumItem {
  static UserChoice = new _DevTouchMovementMode("UserChoice", 0);
  static Thumbstick = new _DevTouchMovementMode("Thumbstick", 1);
  static DPad = new _DevTouchMovementMode("DPad", 2);
  static Thumbpad = new _DevTouchMovementMode("Thumbpad", 3);
  static ClickToMove = new _DevTouchMovementMode("ClickToMove", 4);
  static Scriptable = new _DevTouchMovementMode("Scriptable", 5);
  static DynamicThumbstick = new _DevTouchMovementMode("DynamicThumbstick", 6);
  static get Items() {
    return [_DevTouchMovementMode.UserChoice, _DevTouchMovementMode.Thumbstick, _DevTouchMovementMode.DPad, _DevTouchMovementMode.Thumbpad, _DevTouchMovementMode.ClickToMove, _DevTouchMovementMode.Scriptable, _DevTouchMovementMode.DynamicThumbstick];
  }
  static FromValue(value) {
    return _DevTouchMovementMode.Items.find((item) => item._value === value);
  }
};
var DialogBehaviorType = class _DialogBehaviorType extends EnumItem {
  static SinglePlayer = new _DialogBehaviorType("SinglePlayer", 0);
  static MultiplePlayers = new _DialogBehaviorType("MultiplePlayers", 1);
  static get Items() {
    return [_DialogBehaviorType.SinglePlayer, _DialogBehaviorType.MultiplePlayers];
  }
  static FromValue(value) {
    return _DialogBehaviorType.Items.find((item) => item._value === value);
  }
};
var DialogPurpose = class _DialogPurpose extends EnumItem {
  static Quest = new _DialogPurpose("Quest", 0);
  static Help = new _DialogPurpose("Help", 1);
  static Shop = new _DialogPurpose("Shop", 2);
  static get Items() {
    return [_DialogPurpose.Quest, _DialogPurpose.Help, _DialogPurpose.Shop];
  }
  static FromValue(value) {
    return _DialogPurpose.Items.find((item) => item._value === value);
  }
};
var DialogTone = class _DialogTone extends EnumItem {
  static Neutral = new _DialogTone("Neutral", 0);
  static Friendly = new _DialogTone("Friendly", 1);
  static Enemy = new _DialogTone("Enemy", 2);
  static get Items() {
    return [_DialogTone.Neutral, _DialogTone.Friendly, _DialogTone.Enemy];
  }
  static FromValue(value) {
    return _DialogTone.Items.find((item) => item._value === value);
  }
};
var DominantAxis = class _DominantAxis extends EnumItem {
  static Width = new _DominantAxis("Width", 0);
  static Height = new _DominantAxis("Height", 1);
  static get Items() {
    return [_DominantAxis.Width, _DominantAxis.Height];
  }
  static FromValue(value) {
    return _DominantAxis.Items.find((item) => item._value === value);
  }
};
var DragDetectorDragStyle = class _DragDetectorDragStyle extends EnumItem {
  static TranslateLine = new _DragDetectorDragStyle("TranslateLine", 0);
  static TranslatePlane = new _DragDetectorDragStyle("TranslatePlane", 1);
  static TranslatePlaneOrLine = new _DragDetectorDragStyle("TranslatePlaneOrLine", 2);
  static TranslateLineOrPlane = new _DragDetectorDragStyle("TranslateLineOrPlane", 3);
  static TranslateViewPlane = new _DragDetectorDragStyle("TranslateViewPlane", 4);
  static RotateAxis = new _DragDetectorDragStyle("RotateAxis", 5);
  static RotateTrackball = new _DragDetectorDragStyle("RotateTrackball", 6);
  static Scriptable = new _DragDetectorDragStyle("Scriptable", 7);
  static BestForDevice = new _DragDetectorDragStyle("BestForDevice", 8);
  static get Items() {
    return [_DragDetectorDragStyle.TranslateLine, _DragDetectorDragStyle.TranslatePlane, _DragDetectorDragStyle.TranslatePlaneOrLine, _DragDetectorDragStyle.TranslateLineOrPlane, _DragDetectorDragStyle.TranslateViewPlane, _DragDetectorDragStyle.RotateAxis, _DragDetectorDragStyle.RotateTrackball, _DragDetectorDragStyle.Scriptable, _DragDetectorDragStyle.BestForDevice];
  }
  static FromValue(value) {
    return _DragDetectorDragStyle.Items.find((item) => item._value === value);
  }
};
var DragDetectorPermissionPolicy = class _DragDetectorPermissionPolicy extends EnumItem {
  static Nobody = new _DragDetectorPermissionPolicy("Nobody", 0);
  static Everybody = new _DragDetectorPermissionPolicy("Everybody", 1);
  static Scriptable = new _DragDetectorPermissionPolicy("Scriptable", 2);
  static get Items() {
    return [_DragDetectorPermissionPolicy.Nobody, _DragDetectorPermissionPolicy.Everybody, _DragDetectorPermissionPolicy.Scriptable];
  }
  static FromValue(value) {
    return _DragDetectorPermissionPolicy.Items.find((item) => item._value === value);
  }
};
var DragDetectorResponseStyle = class _DragDetectorResponseStyle extends EnumItem {
  static Geometric = new _DragDetectorResponseStyle("Geometric", 0);
  static Physical = new _DragDetectorResponseStyle("Physical", 1);
  static Custom = new _DragDetectorResponseStyle("Custom", 2);
  static get Items() {
    return [_DragDetectorResponseStyle.Geometric, _DragDetectorResponseStyle.Physical, _DragDetectorResponseStyle.Custom];
  }
  static FromValue(value) {
    return _DragDetectorResponseStyle.Items.find((item) => item._value === value);
  }
};
var EasingDirection = class _EasingDirection extends EnumItem {
  static In = new _EasingDirection("In", 0);
  static Out = new _EasingDirection("Out", 1);
  static InOut = new _EasingDirection("InOut", 2);
  static get Items() {
    return [_EasingDirection.In, _EasingDirection.Out, _EasingDirection.InOut];
  }
  static FromValue(value) {
    return _EasingDirection.Items.find((item) => item._value === value);
  }
};
var EasingStyle = class _EasingStyle extends EnumItem {
  static Linear = new _EasingStyle("Linear", 0);
  static Sine = new _EasingStyle("Sine", 1);
  static Back = new _EasingStyle("Back", 2);
  static Quad = new _EasingStyle("Quad", 3);
  static Quart = new _EasingStyle("Quart", 4);
  static Quint = new _EasingStyle("Quint", 5);
  static Bounce = new _EasingStyle("Bounce", 6);
  static Elastic = new _EasingStyle("Elastic", 7);
  static Exponential = new _EasingStyle("Exponential", 8);
  static Circular = new _EasingStyle("Circular", 9);
  static Cubic = new _EasingStyle("Cubic", 10);
  static get Items() {
    return [_EasingStyle.Linear, _EasingStyle.Sine, _EasingStyle.Back, _EasingStyle.Quad, _EasingStyle.Quart, _EasingStyle.Quint, _EasingStyle.Bounce, _EasingStyle.Elastic, _EasingStyle.Exponential, _EasingStyle.Circular, _EasingStyle.Cubic];
  }
  static FromValue(value) {
    return _EasingStyle.Items.find((item) => item._value === value);
  }
};
var EditorLiveScripting = class _EditorLiveScripting extends EnumItem {
  static Default = new _EditorLiveScripting("Default", 0);
  static Disabled = new _EditorLiveScripting("Disabled", 1);
  static Enabled = new _EditorLiveScripting("Enabled", 2);
  static get Items() {
    return [_EditorLiveScripting.Default, _EditorLiveScripting.Disabled, _EditorLiveScripting.Enabled];
  }
  static FromValue(value) {
    return _EditorLiveScripting.Items.find((item) => item._value === value);
  }
};
var ElasticBehavior = class _ElasticBehavior extends EnumItem {
  static WhenScrollable = new _ElasticBehavior("WhenScrollable", 0);
  static Always = new _ElasticBehavior("Always", 1);
  static Never = new _ElasticBehavior("Never", 2);
  static get Items() {
    return [_ElasticBehavior.WhenScrollable, _ElasticBehavior.Always, _ElasticBehavior.Never];
  }
  static FromValue(value) {
    return _ElasticBehavior.Items.find((item) => item._value === value);
  }
};
var ExplosionType = class _ExplosionType extends EnumItem {
  static NoCraters = new _ExplosionType("NoCraters", 0);
  static Craters = new _ExplosionType("Craters", 1);
  static get Items() {
    return [_ExplosionType.NoCraters, _ExplosionType.Craters];
  }
  static FromValue(value) {
    return _ExplosionType.Items.find((item) => item._value === value);
  }
};
var FieldOfViewMode = class _FieldOfViewMode extends EnumItem {
  static Vertical = new _FieldOfViewMode("Vertical", 0);
  static Diagonal = new _FieldOfViewMode("Diagonal", 1);
  static MaxAxis = new _FieldOfViewMode("MaxAxis", 2);
  static get Items() {
    return [_FieldOfViewMode.Vertical, _FieldOfViewMode.Diagonal, _FieldOfViewMode.MaxAxis];
  }
  static FromValue(value) {
    return _FieldOfViewMode.Items.find((item) => item._value === value);
  }
};
var FillDirection = class _FillDirection extends EnumItem {
  static Horizontal = new _FillDirection("Horizontal", 0);
  static Vertical = new _FillDirection("Vertical", 1);
  static get Items() {
    return [_FillDirection.Horizontal, _FillDirection.Vertical];
  }
  static FromValue(value) {
    return _FillDirection.Items.find((item) => item._value === value);
  }
};
var FluidFidelity = class _FluidFidelity extends EnumItem {
  static Automatic = new _FluidFidelity("Automatic", 0);
  static UseCollisionGeometry = new _FluidFidelity("UseCollisionGeometry", 1);
  static UsePreciseGeometry = new _FluidFidelity("UsePreciseGeometry", 2);
  static get Items() {
    return [_FluidFidelity.Automatic, _FluidFidelity.UseCollisionGeometry, _FluidFidelity.UsePreciseGeometry];
  }
  static FromValue(value) {
    return _FluidFidelity.Items.find((item) => item._value === value);
  }
};
var FluidForces = class _FluidForces extends EnumItem {
  static Default = new _FluidForces("Default", 0);
  static Experimental = new _FluidForces("Experimental", 1);
  static get Items() {
    return [_FluidForces.Default, _FluidForces.Experimental];
  }
  static FromValue(value) {
    return _FluidForces.Items.find((item) => item._value === value);
  }
};
var Font = class _Font extends EnumItem {
  static Legacy = new _Font("Legacy", 0);
  static Arial = new _Font("Arial", 1);
  static ArialBold = new _Font("ArialBold", 2);
  static SourceSans = new _Font("SourceSans", 3);
  static SourceSansBold = new _Font("SourceSansBold", 4);
  static SourceSansLight = new _Font("SourceSansLight", 5);
  static SourceSansItalic = new _Font("SourceSansItalic", 6);
  static Bodoni = new _Font("Bodoni", 7);
  static Garamond = new _Font("Garamond", 8);
  static Cartoon = new _Font("Cartoon", 9);
  static Code = new _Font("Code", 10);
  static Highway = new _Font("Highway", 11);
  static SciFi = new _Font("SciFi", 12);
  static Arcade = new _Font("Arcade", 13);
  static Fantasy = new _Font("Fantasy", 14);
  static Antique = new _Font("Antique", 15);
  static SourceSansSemibold = new _Font("SourceSansSemibold", 16);
  static Gotham = new _Font("Gotham", 17);
  static GothamMedium = new _Font("GothamMedium", 18);
  static GothamBold = new _Font("GothamBold", 19);
  static GothamBlack = new _Font("GothamBlack", 20);
  static AmaticSC = new _Font("AmaticSC", 21);
  static Bangers = new _Font("Bangers", 22);
  static Creepster = new _Font("Creepster", 23);
  static DenkOne = new _Font("DenkOne", 24);
  static Fondamento = new _Font("Fondamento", 25);
  static FredokaOne = new _Font("FredokaOne", 26);
  static GrenzeGotisch = new _Font("GrenzeGotisch", 27);
  static IndieFlower = new _Font("IndieFlower", 28);
  static JosefinSans = new _Font("JosefinSans", 29);
  static Jura = new _Font("Jura", 30);
  static Kalam = new _Font("Kalam", 31);
  static LuckiestGuy = new _Font("LuckiestGuy", 32);
  static Merriweather = new _Font("Merriweather", 33);
  static Michroma = new _Font("Michroma", 34);
  static Nunito = new _Font("Nunito", 35);
  static Oswald = new _Font("Oswald", 36);
  static PatrickHand = new _Font("PatrickHand", 37);
  static PermanentMarker = new _Font("PermanentMarker", 38);
  static Roboto = new _Font("Roboto", 39);
  static RobotoCondensed = new _Font("RobotoCondensed", 40);
  static RobotoMono = new _Font("RobotoMono", 41);
  static Sarpanch = new _Font("Sarpanch", 42);
  static SpecialElite = new _Font("SpecialElite", 43);
  static TitilliumWeb = new _Font("TitilliumWeb", 44);
  static Ubuntu = new _Font("Ubuntu", 45);
  static BuilderSans = new _Font("BuilderSans", 46);
  static BuilderSansMedium = new _Font("BuilderSansMedium", 47);
  static BuilderSansBold = new _Font("BuilderSansBold", 48);
  static BuilderSansExtraBold = new _Font("BuilderSansExtraBold", 49);
  static Arimo = new _Font("Arimo", 50);
  static ArimoBold = new _Font("ArimoBold", 51);
  static Unknown = new _Font("Unknown", 100);
  static get Items() {
    return [_Font.Legacy, _Font.Arial, _Font.ArialBold, _Font.SourceSans, _Font.SourceSansBold, _Font.SourceSansLight, _Font.SourceSansItalic, _Font.Bodoni, _Font.Garamond, _Font.Cartoon, _Font.Code, _Font.Highway, _Font.SciFi, _Font.Arcade, _Font.Fantasy, _Font.Antique, _Font.SourceSansSemibold, _Font.Gotham, _Font.GothamMedium, _Font.GothamBold, _Font.GothamBlack, _Font.AmaticSC, _Font.Bangers, _Font.Creepster, _Font.DenkOne, _Font.Fondamento, _Font.FredokaOne, _Font.GrenzeGotisch, _Font.IndieFlower, _Font.JosefinSans, _Font.Jura, _Font.Kalam, _Font.LuckiestGuy, _Font.Merriweather, _Font.Michroma, _Font.Nunito, _Font.Oswald, _Font.PatrickHand, _Font.PermanentMarker, _Font.Roboto, _Font.RobotoCondensed, _Font.RobotoMono, _Font.Sarpanch, _Font.SpecialElite, _Font.TitilliumWeb, _Font.Ubuntu, _Font.BuilderSans, _Font.BuilderSansMedium, _Font.BuilderSansBold, _Font.BuilderSansExtraBold, _Font.Arimo, _Font.ArimoBold, _Font.Unknown];
  }
  static FromValue(value) {
    return _Font.Items.find((item) => item._value === value);
  }
};
var FontSize = class _FontSize extends EnumItem {
  static Size8 = new _FontSize("Size8", 0);
  static Size9 = new _FontSize("Size9", 1);
  static Size10 = new _FontSize("Size10", 2);
  static Size11 = new _FontSize("Size11", 3);
  static Size12 = new _FontSize("Size12", 4);
  static Size14 = new _FontSize("Size14", 5);
  static Size18 = new _FontSize("Size18", 6);
  static Size24 = new _FontSize("Size24", 7);
  static Size36 = new _FontSize("Size36", 8);
  static Size48 = new _FontSize("Size48", 9);
  static Size28 = new _FontSize("Size28", 10);
  static Size32 = new _FontSize("Size32", 11);
  static Size42 = new _FontSize("Size42", 12);
  static Size60 = new _FontSize("Size60", 13);
  static Size96 = new _FontSize("Size96", 14);
  static get Items() {
    return [_FontSize.Size8, _FontSize.Size9, _FontSize.Size10, _FontSize.Size11, _FontSize.Size12, _FontSize.Size14, _FontSize.Size18, _FontSize.Size24, _FontSize.Size36, _FontSize.Size48, _FontSize.Size28, _FontSize.Size32, _FontSize.Size42, _FontSize.Size60, _FontSize.Size96];
  }
  static FromValue(value) {
    return _FontSize.Items.find((item) => item._value === value);
  }
};
var ForceLimitMode = class _ForceLimitMode extends EnumItem {
  static Magnitude = new _ForceLimitMode("Magnitude", 0);
  static PerAxis = new _ForceLimitMode("PerAxis", 1);
  static get Items() {
    return [_ForceLimitMode.Magnitude, _ForceLimitMode.PerAxis];
  }
  static FromValue(value) {
    return _ForceLimitMode.Items.find((item) => item._value === value);
  }
};
var FormFactor = class _FormFactor extends EnumItem {
  static Symmetric = new _FormFactor("Symmetric", 0);
  static Brick = new _FormFactor("Brick", 1);
  static Plate = new _FormFactor("Plate", 2);
  static Custom = new _FormFactor("Custom", 3);
  static get Items() {
    return [_FormFactor.Symmetric, _FormFactor.Brick, _FormFactor.Plate, _FormFactor.Custom];
  }
  static FromValue(value) {
    return _FormFactor.Items.find((item) => item._value === value);
  }
};
var FrameStyle = class _FrameStyle extends EnumItem {
  static Custom = new _FrameStyle("Custom", 0);
  static ChatBlue = new _FrameStyle("ChatBlue", 1);
  static RobloxSquare = new _FrameStyle("RobloxSquare", 2);
  static RobloxRound = new _FrameStyle("RobloxRound", 3);
  static ChatGreen = new _FrameStyle("ChatGreen", 4);
  static ChatRed = new _FrameStyle("ChatRed", 5);
  static DropShadow = new _FrameStyle("DropShadow", 6);
  static get Items() {
    return [_FrameStyle.Custom, _FrameStyle.ChatBlue, _FrameStyle.RobloxSquare, _FrameStyle.RobloxRound, _FrameStyle.ChatGreen, _FrameStyle.ChatRed, _FrameStyle.DropShadow];
  }
  static FromValue(value) {
    return _FrameStyle.Items.find((item) => item._value === value);
  }
};
var FramerateManagerMode = class _FramerateManagerMode extends EnumItem {
  static Automatic = new _FramerateManagerMode("Automatic", 0);
  static On = new _FramerateManagerMode("On", 1);
  static Off = new _FramerateManagerMode("Off", 2);
  static get Items() {
    return [_FramerateManagerMode.Automatic, _FramerateManagerMode.On, _FramerateManagerMode.Off];
  }
  static FromValue(value) {
    return _FramerateManagerMode.Items.find((item) => item._value === value);
  }
};
var GameAvatarType = class _GameAvatarType extends EnumItem {
  static R6 = new _GameAvatarType("R6", 0);
  static R15 = new _GameAvatarType("R15", 1);
  static PlayerChoice = new _GameAvatarType("PlayerChoice", 2);
  static get Items() {
    return [_GameAvatarType.R6, _GameAvatarType.R15, _GameAvatarType.PlayerChoice];
  }
  static FromValue(value) {
    return _GameAvatarType.Items.find((item) => item._value === value);
  }
};
var GraphicsMode = class _GraphicsMode extends EnumItem {
  static Automatic = new _GraphicsMode("Automatic", 1);
  static Direct3D11 = new _GraphicsMode("Direct3D11", 2);
  static OpenGL = new _GraphicsMode("OpenGL", 4);
  static Metal = new _GraphicsMode("Metal", 5);
  static Vulkan = new _GraphicsMode("Vulkan", 6);
  static NoGraphics = new _GraphicsMode("NoGraphics", 9);
  static get Items() {
    return [_GraphicsMode.Automatic, _GraphicsMode.Direct3D11, _GraphicsMode.OpenGL, _GraphicsMode.Metal, _GraphicsMode.Vulkan, _GraphicsMode.NoGraphics];
  }
  static FromValue(value) {
    return _GraphicsMode.Items.find((item) => item._value === value);
  }
};
var HandlesStyle = class _HandlesStyle extends EnumItem {
  static Resize = new _HandlesStyle("Resize", 0);
  static Movement = new _HandlesStyle("Movement", 1);
  static get Items() {
    return [_HandlesStyle.Resize, _HandlesStyle.Movement];
  }
  static FromValue(value) {
    return _HandlesStyle.Items.find((item) => item._value === value);
  }
};
var HighlightDepthMode = class _HighlightDepthMode extends EnumItem {
  static AlwaysOnTop = new _HighlightDepthMode("AlwaysOnTop", 0);
  static Occluded = new _HighlightDepthMode("Occluded", 1);
  static get Items() {
    return [_HighlightDepthMode.AlwaysOnTop, _HighlightDepthMode.Occluded];
  }
  static FromValue(value) {
    return _HighlightDepthMode.Items.find((item) => item._value === value);
  }
};
var HorizontalAlignment = class _HorizontalAlignment extends EnumItem {
  static Center = new _HorizontalAlignment("Center", 0);
  static Left = new _HorizontalAlignment("Left", 1);
  static Right = new _HorizontalAlignment("Right", 2);
  static get Items() {
    return [_HorizontalAlignment.Center, _HorizontalAlignment.Left, _HorizontalAlignment.Right];
  }
  static FromValue(value) {
    return _HorizontalAlignment.Items.find((item) => item._value === value);
  }
};
var HumanoidCollisionType = class _HumanoidCollisionType extends EnumItem {
  static OuterBox = new _HumanoidCollisionType("OuterBox", 0);
  static InnerBox = new _HumanoidCollisionType("InnerBox", 1);
  static get Items() {
    return [_HumanoidCollisionType.OuterBox, _HumanoidCollisionType.InnerBox];
  }
  static FromValue(value) {
    return _HumanoidCollisionType.Items.find((item) => item._value === value);
  }
};
var HumanoidDisplayDistanceType = class _HumanoidDisplayDistanceType extends EnumItem {
  static Viewer = new _HumanoidDisplayDistanceType("Viewer", 0);
  static Subject = new _HumanoidDisplayDistanceType("Subject", 1);
  static None = new _HumanoidDisplayDistanceType("None", 2);
  static get Items() {
    return [_HumanoidDisplayDistanceType.Viewer, _HumanoidDisplayDistanceType.Subject, _HumanoidDisplayDistanceType.None];
  }
  static FromValue(value) {
    return _HumanoidDisplayDistanceType.Items.find((item) => item._value === value);
  }
};
var HumanoidHealthDisplayType = class _HumanoidHealthDisplayType extends EnumItem {
  static DisplayWhenDamaged = new _HumanoidHealthDisplayType("DisplayWhenDamaged", 0);
  static AlwaysOn = new _HumanoidHealthDisplayType("AlwaysOn", 1);
  static AlwaysOff = new _HumanoidHealthDisplayType("AlwaysOff", 2);
  static get Items() {
    return [_HumanoidHealthDisplayType.DisplayWhenDamaged, _HumanoidHealthDisplayType.AlwaysOn, _HumanoidHealthDisplayType.AlwaysOff];
  }
  static FromValue(value) {
    return _HumanoidHealthDisplayType.Items.find((item) => item._value === value);
  }
};
var HumanoidRigType = class _HumanoidRigType extends EnumItem {
  static R6 = new _HumanoidRigType("R6", 0);
  static R15 = new _HumanoidRigType("R15", 1);
  static get Items() {
    return [_HumanoidRigType.R6, _HumanoidRigType.R15];
  }
  static FromValue(value) {
    return _HumanoidRigType.Items.find((item) => item._value === value);
  }
};
var IKControlConstraintSupport = class _IKControlConstraintSupport extends EnumItem {
  static Default = new _IKControlConstraintSupport("Default", 0);
  static Disabled = new _IKControlConstraintSupport("Disabled", 1);
  static Enabled = new _IKControlConstraintSupport("Enabled", 2);
  static get Items() {
    return [_IKControlConstraintSupport.Default, _IKControlConstraintSupport.Disabled, _IKControlConstraintSupport.Enabled];
  }
  static FromValue(value) {
    return _IKControlConstraintSupport.Items.find((item) => item._value === value);
  }
};
var IKControlType = class _IKControlType extends EnumItem {
  static Transform = new _IKControlType("Transform", 0);
  static Position = new _IKControlType("Position", 1);
  static Rotation = new _IKControlType("Rotation", 2);
  static LookAt = new _IKControlType("LookAt", 3);
  static get Items() {
    return [_IKControlType.Transform, _IKControlType.Position, _IKControlType.Rotation, _IKControlType.LookAt];
  }
  static FromValue(value) {
    return _IKControlType.Items.find((item) => item._value === value);
  }
};
var InOut = class _InOut extends EnumItem {
  static Edge = new _InOut("Edge", 0);
  static Inset = new _InOut("Inset", 1);
  static Center = new _InOut("Center", 2);
  static get Items() {
    return [_InOut.Edge, _InOut.Inset, _InOut.Center];
  }
  static FromValue(value) {
    return _InOut.Items.find((item) => item._value === value);
  }
};
var InputType = class _InputType extends EnumItem {
  static NoInput = new _InputType("NoInput", 0);
  static Constant = new _InputType("Constant", 12);
  static Sin = new _InputType("Sin", 13);
  static get Items() {
    return [_InputType.NoInput, _InputType.Constant, _InputType.Sin];
  }
  static FromValue(value) {
    return _InputType.Items.find((item) => item._value === value);
  }
};
var ItemLineAlignment = class _ItemLineAlignment extends EnumItem {
  static Automatic = new _ItemLineAlignment("Automatic", 0);
  static Start = new _ItemLineAlignment("Start", 1);
  static Center = new _ItemLineAlignment("Center", 2);
  static End = new _ItemLineAlignment("End", 3);
  static Stretch = new _ItemLineAlignment("Stretch", 4);
  static get Items() {
    return [_ItemLineAlignment.Automatic, _ItemLineAlignment.Start, _ItemLineAlignment.Center, _ItemLineAlignment.End, _ItemLineAlignment.Stretch];
  }
  static FromValue(value) {
    return _ItemLineAlignment.Items.find((item) => item._value === value);
  }
};
var KeyCode = class _KeyCode extends EnumItem {
  static Unknown = new _KeyCode("Unknown", 0);
  static Backspace = new _KeyCode("Backspace", 8);
  static Tab = new _KeyCode("Tab", 9);
  static Clear = new _KeyCode("Clear", 12);
  static Return = new _KeyCode("Return", 13);
  static Pause = new _KeyCode("Pause", 19);
  static Escape = new _KeyCode("Escape", 27);
  static Space = new _KeyCode("Space", 32);
  static QuotedDouble = new _KeyCode("QuotedDouble", 34);
  static Hash = new _KeyCode("Hash", 35);
  static Dollar = new _KeyCode("Dollar", 36);
  static Percent = new _KeyCode("Percent", 37);
  static Ampersand = new _KeyCode("Ampersand", 38);
  static Quote = new _KeyCode("Quote", 39);
  static LeftParenthesis = new _KeyCode("LeftParenthesis", 40);
  static RightParenthesis = new _KeyCode("RightParenthesis", 41);
  static Asterisk = new _KeyCode("Asterisk", 42);
  static Plus = new _KeyCode("Plus", 43);
  static Comma = new _KeyCode("Comma", 44);
  static Minus = new _KeyCode("Minus", 45);
  static Period = new _KeyCode("Period", 46);
  static Slash = new _KeyCode("Slash", 47);
  static Zero = new _KeyCode("Zero", 48);
  static One = new _KeyCode("One", 49);
  static Two = new _KeyCode("Two", 50);
  static Three = new _KeyCode("Three", 51);
  static Four = new _KeyCode("Four", 52);
  static Five = new _KeyCode("Five", 53);
  static Six = new _KeyCode("Six", 54);
  static Seven = new _KeyCode("Seven", 55);
  static Eight = new _KeyCode("Eight", 56);
  static Nine = new _KeyCode("Nine", 57);
  static Colon = new _KeyCode("Colon", 58);
  static Semicolon = new _KeyCode("Semicolon", 59);
  static LessThan = new _KeyCode("LessThan", 60);
  static Equals = new _KeyCode("Equals", 61);
  static GreaterThan = new _KeyCode("GreaterThan", 62);
  static Question = new _KeyCode("Question", 63);
  static At = new _KeyCode("At", 64);
  static LeftBracket = new _KeyCode("LeftBracket", 91);
  static BackSlash = new _KeyCode("BackSlash", 92);
  static RightBracket = new _KeyCode("RightBracket", 93);
  static Caret = new _KeyCode("Caret", 94);
  static Underscore = new _KeyCode("Underscore", 95);
  static Backquote = new _KeyCode("Backquote", 96);
  static A = new _KeyCode("A", 97);
  static B = new _KeyCode("B", 98);
  static C = new _KeyCode("C", 99);
  static D = new _KeyCode("D", 100);
  static E = new _KeyCode("E", 101);
  static F = new _KeyCode("F", 102);
  static G = new _KeyCode("G", 103);
  static H = new _KeyCode("H", 104);
  static I = new _KeyCode("I", 105);
  static J = new _KeyCode("J", 106);
  static K = new _KeyCode("K", 107);
  static L = new _KeyCode("L", 108);
  static M = new _KeyCode("M", 109);
  static N = new _KeyCode("N", 110);
  static O = new _KeyCode("O", 111);
  static P = new _KeyCode("P", 112);
  static Q = new _KeyCode("Q", 113);
  static R = new _KeyCode("R", 114);
  static S = new _KeyCode("S", 115);
  static T = new _KeyCode("T", 116);
  static U = new _KeyCode("U", 117);
  static V = new _KeyCode("V", 118);
  static W = new _KeyCode("W", 119);
  static X = new _KeyCode("X", 120);
  static Y = new _KeyCode("Y", 121);
  static Z = new _KeyCode("Z", 122);
  static LeftCurly = new _KeyCode("LeftCurly", 123);
  static Pipe = new _KeyCode("Pipe", 124);
  static RightCurly = new _KeyCode("RightCurly", 125);
  static Tilde = new _KeyCode("Tilde", 126);
  static Delete = new _KeyCode("Delete", 127);
  static World0 = new _KeyCode("World0", 160);
  static World1 = new _KeyCode("World1", 161);
  static World2 = new _KeyCode("World2", 162);
  static World3 = new _KeyCode("World3", 163);
  static World4 = new _KeyCode("World4", 164);
  static World5 = new _KeyCode("World5", 165);
  static World6 = new _KeyCode("World6", 166);
  static World7 = new _KeyCode("World7", 167);
  static World8 = new _KeyCode("World8", 168);
  static World9 = new _KeyCode("World9", 169);
  static World10 = new _KeyCode("World10", 170);
  static World11 = new _KeyCode("World11", 171);
  static World12 = new _KeyCode("World12", 172);
  static World13 = new _KeyCode("World13", 173);
  static World14 = new _KeyCode("World14", 174);
  static World15 = new _KeyCode("World15", 175);
  static World16 = new _KeyCode("World16", 176);
  static World17 = new _KeyCode("World17", 177);
  static World18 = new _KeyCode("World18", 178);
  static World19 = new _KeyCode("World19", 179);
  static World20 = new _KeyCode("World20", 180);
  static World21 = new _KeyCode("World21", 181);
  static World22 = new _KeyCode("World22", 182);
  static World23 = new _KeyCode("World23", 183);
  static World24 = new _KeyCode("World24", 184);
  static World25 = new _KeyCode("World25", 185);
  static World26 = new _KeyCode("World26", 186);
  static World27 = new _KeyCode("World27", 187);
  static World28 = new _KeyCode("World28", 188);
  static World29 = new _KeyCode("World29", 189);
  static World30 = new _KeyCode("World30", 190);
  static World31 = new _KeyCode("World31", 191);
  static World32 = new _KeyCode("World32", 192);
  static World33 = new _KeyCode("World33", 193);
  static World34 = new _KeyCode("World34", 194);
  static World35 = new _KeyCode("World35", 195);
  static World36 = new _KeyCode("World36", 196);
  static World37 = new _KeyCode("World37", 197);
  static World38 = new _KeyCode("World38", 198);
  static World39 = new _KeyCode("World39", 199);
  static World40 = new _KeyCode("World40", 200);
  static World41 = new _KeyCode("World41", 201);
  static World42 = new _KeyCode("World42", 202);
  static World43 = new _KeyCode("World43", 203);
  static World44 = new _KeyCode("World44", 204);
  static World45 = new _KeyCode("World45", 205);
  static World46 = new _KeyCode("World46", 206);
  static World47 = new _KeyCode("World47", 207);
  static World48 = new _KeyCode("World48", 208);
  static World49 = new _KeyCode("World49", 209);
  static World50 = new _KeyCode("World50", 210);
  static World51 = new _KeyCode("World51", 211);
  static World52 = new _KeyCode("World52", 212);
  static World53 = new _KeyCode("World53", 213);
  static World54 = new _KeyCode("World54", 214);
  static World55 = new _KeyCode("World55", 215);
  static World56 = new _KeyCode("World56", 216);
  static World57 = new _KeyCode("World57", 217);
  static World58 = new _KeyCode("World58", 218);
  static World59 = new _KeyCode("World59", 219);
  static World60 = new _KeyCode("World60", 220);
  static World61 = new _KeyCode("World61", 221);
  static World62 = new _KeyCode("World62", 222);
  static World63 = new _KeyCode("World63", 223);
  static World64 = new _KeyCode("World64", 224);
  static World65 = new _KeyCode("World65", 225);
  static World66 = new _KeyCode("World66", 226);
  static World67 = new _KeyCode("World67", 227);
  static World68 = new _KeyCode("World68", 228);
  static World69 = new _KeyCode("World69", 229);
  static World70 = new _KeyCode("World70", 230);
  static World71 = new _KeyCode("World71", 231);
  static World72 = new _KeyCode("World72", 232);
  static World73 = new _KeyCode("World73", 233);
  static World74 = new _KeyCode("World74", 234);
  static World75 = new _KeyCode("World75", 235);
  static World76 = new _KeyCode("World76", 236);
  static World77 = new _KeyCode("World77", 237);
  static World78 = new _KeyCode("World78", 238);
  static World79 = new _KeyCode("World79", 239);
  static World80 = new _KeyCode("World80", 240);
  static World81 = new _KeyCode("World81", 241);
  static World82 = new _KeyCode("World82", 242);
  static World83 = new _KeyCode("World83", 243);
  static World84 = new _KeyCode("World84", 244);
  static World85 = new _KeyCode("World85", 245);
  static World86 = new _KeyCode("World86", 246);
  static World87 = new _KeyCode("World87", 247);
  static World88 = new _KeyCode("World88", 248);
  static World89 = new _KeyCode("World89", 249);
  static World90 = new _KeyCode("World90", 250);
  static World91 = new _KeyCode("World91", 251);
  static World92 = new _KeyCode("World92", 252);
  static World93 = new _KeyCode("World93", 253);
  static World94 = new _KeyCode("World94", 254);
  static World95 = new _KeyCode("World95", 255);
  static KeypadZero = new _KeyCode("KeypadZero", 256);
  static KeypadOne = new _KeyCode("KeypadOne", 257);
  static KeypadTwo = new _KeyCode("KeypadTwo", 258);
  static KeypadThree = new _KeyCode("KeypadThree", 259);
  static KeypadFour = new _KeyCode("KeypadFour", 260);
  static KeypadFive = new _KeyCode("KeypadFive", 261);
  static KeypadSix = new _KeyCode("KeypadSix", 262);
  static KeypadSeven = new _KeyCode("KeypadSeven", 263);
  static KeypadEight = new _KeyCode("KeypadEight", 264);
  static KeypadNine = new _KeyCode("KeypadNine", 265);
  static KeypadPeriod = new _KeyCode("KeypadPeriod", 266);
  static KeypadDivide = new _KeyCode("KeypadDivide", 267);
  static KeypadMultiply = new _KeyCode("KeypadMultiply", 268);
  static KeypadMinus = new _KeyCode("KeypadMinus", 269);
  static KeypadPlus = new _KeyCode("KeypadPlus", 270);
  static KeypadEnter = new _KeyCode("KeypadEnter", 271);
  static KeypadEquals = new _KeyCode("KeypadEquals", 272);
  static Up = new _KeyCode("Up", 273);
  static Down = new _KeyCode("Down", 274);
  static Right = new _KeyCode("Right", 275);
  static Left = new _KeyCode("Left", 276);
  static Insert = new _KeyCode("Insert", 277);
  static Home = new _KeyCode("Home", 278);
  static End = new _KeyCode("End", 279);
  static PageUp = new _KeyCode("PageUp", 280);
  static PageDown = new _KeyCode("PageDown", 281);
  static F1 = new _KeyCode("F1", 282);
  static F2 = new _KeyCode("F2", 283);
  static F3 = new _KeyCode("F3", 284);
  static F4 = new _KeyCode("F4", 285);
  static F5 = new _KeyCode("F5", 286);
  static F6 = new _KeyCode("F6", 287);
  static F7 = new _KeyCode("F7", 288);
  static F8 = new _KeyCode("F8", 289);
  static F9 = new _KeyCode("F9", 290);
  static F10 = new _KeyCode("F10", 291);
  static F11 = new _KeyCode("F11", 292);
  static F12 = new _KeyCode("F12", 293);
  static F13 = new _KeyCode("F13", 294);
  static F14 = new _KeyCode("F14", 295);
  static F15 = new _KeyCode("F15", 296);
  static NumLock = new _KeyCode("NumLock", 300);
  static CapsLock = new _KeyCode("CapsLock", 301);
  static ScrollLock = new _KeyCode("ScrollLock", 302);
  static RightShift = new _KeyCode("RightShift", 303);
  static LeftShift = new _KeyCode("LeftShift", 304);
  static RightControl = new _KeyCode("RightControl", 305);
  static LeftControl = new _KeyCode("LeftControl", 306);
  static RightAlt = new _KeyCode("RightAlt", 307);
  static LeftAlt = new _KeyCode("LeftAlt", 308);
  static RightMeta = new _KeyCode("RightMeta", 309);
  static LeftMeta = new _KeyCode("LeftMeta", 310);
  static LeftSuper = new _KeyCode("LeftSuper", 311);
  static RightSuper = new _KeyCode("RightSuper", 312);
  static Mode = new _KeyCode("Mode", 313);
  static Compose = new _KeyCode("Compose", 314);
  static Help = new _KeyCode("Help", 315);
  static Print = new _KeyCode("Print", 316);
  static SysReq = new _KeyCode("SysReq", 317);
  static Break = new _KeyCode("Break", 318);
  static Menu = new _KeyCode("Menu", 319);
  static Power = new _KeyCode("Power", 320);
  static Euro = new _KeyCode("Euro", 321);
  static Undo = new _KeyCode("Undo", 322);
  static ButtonX = new _KeyCode("ButtonX", 1e3);
  static ButtonY = new _KeyCode("ButtonY", 1001);
  static ButtonA = new _KeyCode("ButtonA", 1002);
  static ButtonB = new _KeyCode("ButtonB", 1003);
  static ButtonR1 = new _KeyCode("ButtonR1", 1004);
  static ButtonL1 = new _KeyCode("ButtonL1", 1005);
  static ButtonR2 = new _KeyCode("ButtonR2", 1006);
  static ButtonL2 = new _KeyCode("ButtonL2", 1007);
  static ButtonR3 = new _KeyCode("ButtonR3", 1008);
  static ButtonL3 = new _KeyCode("ButtonL3", 1009);
  static ButtonStart = new _KeyCode("ButtonStart", 1010);
  static ButtonSelect = new _KeyCode("ButtonSelect", 1011);
  static DPadLeft = new _KeyCode("DPadLeft", 1012);
  static DPadRight = new _KeyCode("DPadRight", 1013);
  static DPadUp = new _KeyCode("DPadUp", 1014);
  static DPadDown = new _KeyCode("DPadDown", 1015);
  static Thumbstick1 = new _KeyCode("Thumbstick1", 1016);
  static Thumbstick2 = new _KeyCode("Thumbstick2", 1017);
  static get Items() {
    return [_KeyCode.Unknown, _KeyCode.Backspace, _KeyCode.Tab, _KeyCode.Clear, _KeyCode.Return, _KeyCode.Pause, _KeyCode.Escape, _KeyCode.Space, _KeyCode.QuotedDouble, _KeyCode.Hash, _KeyCode.Dollar, _KeyCode.Percent, _KeyCode.Ampersand, _KeyCode.Quote, _KeyCode.LeftParenthesis, _KeyCode.RightParenthesis, _KeyCode.Asterisk, _KeyCode.Plus, _KeyCode.Comma, _KeyCode.Minus, _KeyCode.Period, _KeyCode.Slash, _KeyCode.Zero, _KeyCode.One, _KeyCode.Two, _KeyCode.Three, _KeyCode.Four, _KeyCode.Five, _KeyCode.Six, _KeyCode.Seven, _KeyCode.Eight, _KeyCode.Nine, _KeyCode.Colon, _KeyCode.Semicolon, _KeyCode.LessThan, _KeyCode.Equals, _KeyCode.GreaterThan, _KeyCode.Question, _KeyCode.At, _KeyCode.LeftBracket, _KeyCode.BackSlash, _KeyCode.RightBracket, _KeyCode.Caret, _KeyCode.Underscore, _KeyCode.Backquote, _KeyCode.A, _KeyCode.B, _KeyCode.C, _KeyCode.D, _KeyCode.E, _KeyCode.F, _KeyCode.G, _KeyCode.H, _KeyCode.I, _KeyCode.J, _KeyCode.K, _KeyCode.L, _KeyCode.M, _KeyCode.N, _KeyCode.O, _KeyCode.P, _KeyCode.Q, _KeyCode.R, _KeyCode.S, _KeyCode.T, _KeyCode.U, _KeyCode.V, _KeyCode.W, _KeyCode.X, _KeyCode.Y, _KeyCode.Z, _KeyCode.LeftCurly, _KeyCode.Pipe, _KeyCode.RightCurly, _KeyCode.Tilde, _KeyCode.Delete, _KeyCode.World0, _KeyCode.World1, _KeyCode.World2, _KeyCode.World3, _KeyCode.World4, _KeyCode.World5, _KeyCode.World6, _KeyCode.World7, _KeyCode.World8, _KeyCode.World9, _KeyCode.World10, _KeyCode.World11, _KeyCode.World12, _KeyCode.World13, _KeyCode.World14, _KeyCode.World15, _KeyCode.World16, _KeyCode.World17, _KeyCode.World18, _KeyCode.World19, _KeyCode.World20, _KeyCode.World21, _KeyCode.World22, _KeyCode.World23, _KeyCode.World24, _KeyCode.World25, _KeyCode.World26, _KeyCode.World27, _KeyCode.World28, _KeyCode.World29, _KeyCode.World30, _KeyCode.World31, _KeyCode.World32, _KeyCode.World33, _KeyCode.World34, _KeyCode.World35, _KeyCode.World36, _KeyCode.World37, _KeyCode.World38, _KeyCode.World39, _KeyCode.World40, _KeyCode.World41, _KeyCode.World42, _KeyCode.World43, _KeyCode.World44, _KeyCode.World45, _KeyCode.World46, _KeyCode.World47, _KeyCode.World48, _KeyCode.World49, _KeyCode.World50, _KeyCode.World51, _KeyCode.World52, _KeyCode.World53, _KeyCode.World54, _KeyCode.World55, _KeyCode.World56, _KeyCode.World57, _KeyCode.World58, _KeyCode.World59, _KeyCode.World60, _KeyCode.World61, _KeyCode.World62, _KeyCode.World63, _KeyCode.World64, _KeyCode.World65, _KeyCode.World66, _KeyCode.World67, _KeyCode.World68, _KeyCode.World69, _KeyCode.World70, _KeyCode.World71, _KeyCode.World72, _KeyCode.World73, _KeyCode.World74, _KeyCode.World75, _KeyCode.World76, _KeyCode.World77, _KeyCode.World78, _KeyCode.World79, _KeyCode.World80, _KeyCode.World81, _KeyCode.World82, _KeyCode.World83, _KeyCode.World84, _KeyCode.World85, _KeyCode.World86, _KeyCode.World87, _KeyCode.World88, _KeyCode.World89, _KeyCode.World90, _KeyCode.World91, _KeyCode.World92, _KeyCode.World93, _KeyCode.World94, _KeyCode.World95, _KeyCode.KeypadZero, _KeyCode.KeypadOne, _KeyCode.KeypadTwo, _KeyCode.KeypadThree, _KeyCode.KeypadFour, _KeyCode.KeypadFive, _KeyCode.KeypadSix, _KeyCode.KeypadSeven, _KeyCode.KeypadEight, _KeyCode.KeypadNine, _KeyCode.KeypadPeriod, _KeyCode.KeypadDivide, _KeyCode.KeypadMultiply, _KeyCode.KeypadMinus, _KeyCode.KeypadPlus, _KeyCode.KeypadEnter, _KeyCode.KeypadEquals, _KeyCode.Up, _KeyCode.Down, _KeyCode.Right, _KeyCode.Left, _KeyCode.Insert, _KeyCode.Home, _KeyCode.End, _KeyCode.PageUp, _KeyCode.PageDown, _KeyCode.F1, _KeyCode.F2, _KeyCode.F3, _KeyCode.F4, _KeyCode.F5, _KeyCode.F6, _KeyCode.F7, _KeyCode.F8, _KeyCode.F9, _KeyCode.F10, _KeyCode.F11, _KeyCode.F12, _KeyCode.F13, _KeyCode.F14, _KeyCode.F15, _KeyCode.NumLock, _KeyCode.CapsLock, _KeyCode.ScrollLock, _KeyCode.RightShift, _KeyCode.LeftShift, _KeyCode.RightControl, _KeyCode.LeftControl, _KeyCode.RightAlt, _KeyCode.LeftAlt, _KeyCode.RightMeta, _KeyCode.LeftMeta, _KeyCode.LeftSuper, _KeyCode.RightSuper, _KeyCode.Mode, _KeyCode.Compose, _KeyCode.Help, _KeyCode.Print, _KeyCode.SysReq, _KeyCode.Break, _KeyCode.Menu, _KeyCode.Power, _KeyCode.Euro, _KeyCode.Undo, _KeyCode.ButtonX, _KeyCode.ButtonY, _KeyCode.ButtonA, _KeyCode.ButtonB, _KeyCode.ButtonR1, _KeyCode.ButtonL1, _KeyCode.ButtonR2, _KeyCode.ButtonL2, _KeyCode.ButtonR3, _KeyCode.ButtonL3, _KeyCode.ButtonStart, _KeyCode.ButtonSelect, _KeyCode.DPadLeft, _KeyCode.DPadRight, _KeyCode.DPadUp, _KeyCode.DPadDown, _KeyCode.Thumbstick1, _KeyCode.Thumbstick2];
  }
  static FromValue(value) {
    return _KeyCode.Items.find((item) => item._value === value);
  }
};
var LeftRight = class _LeftRight extends EnumItem {
  static Left = new _LeftRight("Left", 0);
  static Center = new _LeftRight("Center", 1);
  static Right = new _LeftRight("Right", 2);
  static get Items() {
    return [_LeftRight.Left, _LeftRight.Center, _LeftRight.Right];
  }
  static FromValue(value) {
    return _LeftRight.Items.find((item) => item._value === value);
  }
};
var LineJoinMode = class _LineJoinMode extends EnumItem {
  static Round = new _LineJoinMode("Round", 0);
  static Bevel = new _LineJoinMode("Bevel", 1);
  static Miter = new _LineJoinMode("Miter", 2);
  static get Items() {
    return [_LineJoinMode.Round, _LineJoinMode.Bevel, _LineJoinMode.Miter];
  }
  static FromValue(value) {
    return _LineJoinMode.Items.find((item) => item._value === value);
  }
};
var LoadCharacterLayeredClothing = class _LoadCharacterLayeredClothing extends EnumItem {
  static Default = new _LoadCharacterLayeredClothing("Default", 0);
  static Disabled = new _LoadCharacterLayeredClothing("Disabled", 1);
  static Enabled = new _LoadCharacterLayeredClothing("Enabled", 2);
  static get Items() {
    return [_LoadCharacterLayeredClothing.Default, _LoadCharacterLayeredClothing.Disabled, _LoadCharacterLayeredClothing.Enabled];
  }
  static FromValue(value) {
    return _LoadCharacterLayeredClothing.Items.find((item) => item._value === value);
  }
};
var LoadDynamicHeads = class _LoadDynamicHeads extends EnumItem {
  static Default = new _LoadDynamicHeads("Default", 0);
  static Disabled = new _LoadDynamicHeads("Disabled", 1);
  static Enabled = new _LoadDynamicHeads("Enabled", 2);
  static get Items() {
    return [_LoadDynamicHeads.Default, _LoadDynamicHeads.Disabled, _LoadDynamicHeads.Enabled];
  }
  static FromValue(value) {
    return _LoadDynamicHeads.Items.find((item) => item._value === value);
  }
};
var Material = class _Material extends EnumItem {
  static Plastic = new _Material("Plastic", 256);
  static SmoothPlastic = new _Material("SmoothPlastic", 272);
  static Neon = new _Material("Neon", 288);
  static Wood = new _Material("Wood", 512);
  static WoodPlanks = new _Material("WoodPlanks", 528);
  static Marble = new _Material("Marble", 784);
  static Slate = new _Material("Slate", 800);
  static Concrete = new _Material("Concrete", 816);
  static Granite = new _Material("Granite", 832);
  static Brick = new _Material("Brick", 848);
  static Pebble = new _Material("Pebble", 864);
  static Cobblestone = new _Material("Cobblestone", 880);
  static Rock = new _Material("Rock", 896);
  static Sandstone = new _Material("Sandstone", 912);
  static Basalt = new _Material("Basalt", 788);
  static CrackedLava = new _Material("CrackedLava", 804);
  static Limestone = new _Material("Limestone", 820);
  static Pavement = new _Material("Pavement", 836);
  static CorrodedMetal = new _Material("CorrodedMetal", 1040);
  static DiamondPlate = new _Material("DiamondPlate", 1056);
  static Foil = new _Material("Foil", 1072);
  static Metal = new _Material("Metal", 1088);
  static Grass = new _Material("Grass", 1280);
  static LeafyGrass = new _Material("LeafyGrass", 1284);
  static Sand = new _Material("Sand", 1296);
  static Fabric = new _Material("Fabric", 1312);
  static Snow = new _Material("Snow", 1328);
  static Mud = new _Material("Mud", 1344);
  static Ground = new _Material("Ground", 1360);
  static Asphalt = new _Material("Asphalt", 1376);
  static Salt = new _Material("Salt", 1392);
  static Ice = new _Material("Ice", 1536);
  static Glacier = new _Material("Glacier", 1552);
  static Glass = new _Material("Glass", 1568);
  static ForceField = new _Material("ForceField", 1584);
  static Air = new _Material("Air", 1792);
  static Water = new _Material("Water", 2048);
  static Cardboard = new _Material("Cardboard", 2304);
  static Carpet = new _Material("Carpet", 2305);
  static CeramicTiles = new _Material("CeramicTiles", 2306);
  static ClayRoofTiles = new _Material("ClayRoofTiles", 2307);
  static RoofShingles = new _Material("RoofShingles", 2308);
  static Leather = new _Material("Leather", 2309);
  static Plaster = new _Material("Plaster", 2310);
  static Rubber = new _Material("Rubber", 2311);
  static get Items() {
    return [_Material.Plastic, _Material.SmoothPlastic, _Material.Neon, _Material.Wood, _Material.WoodPlanks, _Material.Marble, _Material.Slate, _Material.Concrete, _Material.Granite, _Material.Brick, _Material.Pebble, _Material.Cobblestone, _Material.Rock, _Material.Sandstone, _Material.Basalt, _Material.CrackedLava, _Material.Limestone, _Material.Pavement, _Material.CorrodedMetal, _Material.DiamondPlate, _Material.Foil, _Material.Metal, _Material.Grass, _Material.LeafyGrass, _Material.Sand, _Material.Fabric, _Material.Snow, _Material.Mud, _Material.Ground, _Material.Asphalt, _Material.Salt, _Material.Ice, _Material.Glacier, _Material.Glass, _Material.ForceField, _Material.Air, _Material.Water, _Material.Cardboard, _Material.Carpet, _Material.CeramicTiles, _Material.ClayRoofTiles, _Material.RoofShingles, _Material.Leather, _Material.Plaster, _Material.Rubber];
  }
  static FromValue(value) {
    return _Material.Items.find((item) => item._value === value);
  }
};
var MaterialPattern = class _MaterialPattern extends EnumItem {
  static Regular = new _MaterialPattern("Regular", 0);
  static Organic = new _MaterialPattern("Organic", 1);
  static get Items() {
    return [_MaterialPattern.Regular, _MaterialPattern.Organic];
  }
  static FromValue(value) {
    return _MaterialPattern.Items.find((item) => item._value === value);
  }
};
var MeshPartDetailLevel = class _MeshPartDetailLevel extends EnumItem {
  static DistanceBased = new _MeshPartDetailLevel("DistanceBased", 0);
  static Level00 = new _MeshPartDetailLevel("Level00", 1);
  static Level01 = new _MeshPartDetailLevel("Level01", 2);
  static Level02 = new _MeshPartDetailLevel("Level02", 3);
  static Level03 = new _MeshPartDetailLevel("Level03", 4);
  static Level04 = new _MeshPartDetailLevel("Level04", 5);
  static get Items() {
    return [_MeshPartDetailLevel.DistanceBased, _MeshPartDetailLevel.Level00, _MeshPartDetailLevel.Level01, _MeshPartDetailLevel.Level02, _MeshPartDetailLevel.Level03, _MeshPartDetailLevel.Level04];
  }
  static FromValue(value) {
    return _MeshPartDetailLevel.Items.find((item) => item._value === value);
  }
};
var MeshPartHeadsAndAccessories = class _MeshPartHeadsAndAccessories extends EnumItem {
  static Default = new _MeshPartHeadsAndAccessories("Default", 0);
  static Disabled = new _MeshPartHeadsAndAccessories("Disabled", 1);
  static Enabled = new _MeshPartHeadsAndAccessories("Enabled", 2);
  static get Items() {
    return [_MeshPartHeadsAndAccessories.Default, _MeshPartHeadsAndAccessories.Disabled, _MeshPartHeadsAndAccessories.Enabled];
  }
  static FromValue(value) {
    return _MeshPartHeadsAndAccessories.Items.find((item) => item._value === value);
  }
};
var MeshType = class _MeshType extends EnumItem {
  static Head = new _MeshType("Head", 0);
  static Torso = new _MeshType("Torso", 1);
  static Wedge = new _MeshType("Wedge", 2);
  static Sphere = new _MeshType("Sphere", 3);
  static Cylinder = new _MeshType("Cylinder", 4);
  static FileMesh = new _MeshType("FileMesh", 5);
  static Brick = new _MeshType("Brick", 6);
  static Prism = new _MeshType("Prism", 7);
  static Pyramid = new _MeshType("Pyramid", 8);
  static ParallelRamp = new _MeshType("ParallelRamp", 9);
  static RightAngleRamp = new _MeshType("RightAngleRamp", 10);
  static CornerWedge = new _MeshType("CornerWedge", 11);
  static get Items() {
    return [_MeshType.Head, _MeshType.Torso, _MeshType.Wedge, _MeshType.Sphere, _MeshType.Cylinder, _MeshType.FileMesh, _MeshType.Brick, _MeshType.Prism, _MeshType.Pyramid, _MeshType.ParallelRamp, _MeshType.RightAngleRamp, _MeshType.CornerWedge];
  }
  static FromValue(value) {
    return _MeshType.Items.find((item) => item._value === value);
  }
};
var ModelLevelOfDetail = class _ModelLevelOfDetail extends EnumItem {
  static Automatic = new _ModelLevelOfDetail("Automatic", 0);
  static StreamingMesh = new _ModelLevelOfDetail("StreamingMesh", 1);
  static Disabled = new _ModelLevelOfDetail("Disabled", 2);
  static get Items() {
    return [_ModelLevelOfDetail.Automatic, _ModelLevelOfDetail.StreamingMesh, _ModelLevelOfDetail.Disabled];
  }
  static FromValue(value) {
    return _ModelLevelOfDetail.Items.find((item) => item._value === value);
  }
};
var ModelStreamingBehavior = class _ModelStreamingBehavior extends EnumItem {
  static Default = new _ModelStreamingBehavior("Default", 0);
  static Legacy = new _ModelStreamingBehavior("Legacy", 1);
  static Improved = new _ModelStreamingBehavior("Improved", 2);
  static get Items() {
    return [_ModelStreamingBehavior.Default, _ModelStreamingBehavior.Legacy, _ModelStreamingBehavior.Improved];
  }
  static FromValue(value) {
    return _ModelStreamingBehavior.Items.find((item) => item._value === value);
  }
};
var ModelStreamingMode = class _ModelStreamingMode extends EnumItem {
  static Default = new _ModelStreamingMode("Default", 0);
  static Atomic = new _ModelStreamingMode("Atomic", 1);
  static Persistent = new _ModelStreamingMode("Persistent", 2);
  static PersistentPerPlayer = new _ModelStreamingMode("PersistentPerPlayer", 3);
  static Nonatomic = new _ModelStreamingMode("Nonatomic", 4);
  static get Items() {
    return [_ModelStreamingMode.Default, _ModelStreamingMode.Atomic, _ModelStreamingMode.Persistent, _ModelStreamingMode.PersistentPerPlayer, _ModelStreamingMode.Nonatomic];
  }
  static FromValue(value) {
    return _ModelStreamingMode.Items.find((item) => item._value === value);
  }
};
var MouseBehavior = class _MouseBehavior extends EnumItem {
  static Default = new _MouseBehavior("Default", 0);
  static LockCenter = new _MouseBehavior("LockCenter", 1);
  static LockCurrentPosition = new _MouseBehavior("LockCurrentPosition", 2);
  static get Items() {
    return [_MouseBehavior.Default, _MouseBehavior.LockCenter, _MouseBehavior.LockCurrentPosition];
  }
  static FromValue(value) {
    return _MouseBehavior.Items.find((item) => item._value === value);
  }
};
var NameOcclusion = class _NameOcclusion extends EnumItem {
  static NoOcclusion = new _NameOcclusion("NoOcclusion", 0);
  static EnemyOcclusion = new _NameOcclusion("EnemyOcclusion", 1);
  static OccludeAll = new _NameOcclusion("OccludeAll", 2);
  static get Items() {
    return [_NameOcclusion.NoOcclusion, _NameOcclusion.EnemyOcclusion, _NameOcclusion.OccludeAll];
  }
  static FromValue(value) {
    return _NameOcclusion.Items.find((item) => item._value === value);
  }
};
var NoiseType = class _NoiseType extends EnumItem {
  static SimplexGabor = new _NoiseType("SimplexGabor", 0);
  static get Items() {
    return [_NoiseType.SimplexGabor];
  }
  static FromValue(value) {
    return _NoiseType.Items.find((item) => item._value === value);
  }
};
var NormalId = class _NormalId extends EnumItem {
  static Right = new _NormalId("Right", 0);
  static Top = new _NormalId("Top", 1);
  static Back = new _NormalId("Back", 2);
  static Left = new _NormalId("Left", 3);
  static Bottom = new _NormalId("Bottom", 4);
  static Front = new _NormalId("Front", 5);
  static get Items() {
    return [_NormalId.Right, _NormalId.Top, _NormalId.Back, _NormalId.Left, _NormalId.Bottom, _NormalId.Front];
  }
  static FromValue(value) {
    return _NormalId.Items.find((item) => item._value === value);
  }
};
var OrientationAlignmentMode = class _OrientationAlignmentMode extends EnumItem {
  static OneAttachment = new _OrientationAlignmentMode("OneAttachment", 0);
  static TwoAttachment = new _OrientationAlignmentMode("TwoAttachment", 1);
  static get Items() {
    return [_OrientationAlignmentMode.OneAttachment, _OrientationAlignmentMode.TwoAttachment];
  }
  static FromValue(value) {
    return _OrientationAlignmentMode.Items.find((item) => item._value === value);
  }
};
var PartType = class _PartType extends EnumItem {
  static Ball = new _PartType("Ball", 0);
  static Block = new _PartType("Block", 1);
  static Cylinder = new _PartType("Cylinder", 2);
  static Wedge = new _PartType("Wedge", 3);
  static CornerWedge = new _PartType("CornerWedge", 4);
  static get Items() {
    return [_PartType.Ball, _PartType.Block, _PartType.Cylinder, _PartType.Wedge, _PartType.CornerWedge];
  }
  static FromValue(value) {
    return _PartType.Items.find((item) => item._value === value);
  }
};
var ParticleEmitterShape = class _ParticleEmitterShape extends EnumItem {
  static Box = new _ParticleEmitterShape("Box", 0);
  static Sphere = new _ParticleEmitterShape("Sphere", 1);
  static Cylinder = new _ParticleEmitterShape("Cylinder", 2);
  static Disc = new _ParticleEmitterShape("Disc", 3);
  static get Items() {
    return [_ParticleEmitterShape.Box, _ParticleEmitterShape.Sphere, _ParticleEmitterShape.Cylinder, _ParticleEmitterShape.Disc];
  }
  static FromValue(value) {
    return _ParticleEmitterShape.Items.find((item) => item._value === value);
  }
};
var ParticleEmitterShapeInOut = class _ParticleEmitterShapeInOut extends EnumItem {
  static Outward = new _ParticleEmitterShapeInOut("Outward", 0);
  static Inward = new _ParticleEmitterShapeInOut("Inward", 1);
  static InAndOut = new _ParticleEmitterShapeInOut("InAndOut", 2);
  static get Items() {
    return [_ParticleEmitterShapeInOut.Outward, _ParticleEmitterShapeInOut.Inward, _ParticleEmitterShapeInOut.InAndOut];
  }
  static FromValue(value) {
    return _ParticleEmitterShapeInOut.Items.find((item) => item._value === value);
  }
};
var ParticleEmitterShapeStyle = class _ParticleEmitterShapeStyle extends EnumItem {
  static Volume = new _ParticleEmitterShapeStyle("Volume", 0);
  static Surface = new _ParticleEmitterShapeStyle("Surface", 1);
  static get Items() {
    return [_ParticleEmitterShapeStyle.Volume, _ParticleEmitterShapeStyle.Surface];
  }
  static FromValue(value) {
    return _ParticleEmitterShapeStyle.Items.find((item) => item._value === value);
  }
};
var ParticleFlipbookLayout = class _ParticleFlipbookLayout extends EnumItem {
  static None = new _ParticleFlipbookLayout("None", 0);
  static Grid2x2 = new _ParticleFlipbookLayout("Grid2x2", 1);
  static Grid4x4 = new _ParticleFlipbookLayout("Grid4x4", 2);
  static Grid8x8 = new _ParticleFlipbookLayout("Grid8x8", 3);
  static get Items() {
    return [_ParticleFlipbookLayout.None, _ParticleFlipbookLayout.Grid2x2, _ParticleFlipbookLayout.Grid4x4, _ParticleFlipbookLayout.Grid8x8];
  }
  static FromValue(value) {
    return _ParticleFlipbookLayout.Items.find((item) => item._value === value);
  }
};
var ParticleFlipbookMode = class _ParticleFlipbookMode extends EnumItem {
  static Loop = new _ParticleFlipbookMode("Loop", 0);
  static OneShot = new _ParticleFlipbookMode("OneShot", 1);
  static PingPong = new _ParticleFlipbookMode("PingPong", 2);
  static Random = new _ParticleFlipbookMode("Random", 3);
  static get Items() {
    return [_ParticleFlipbookMode.Loop, _ParticleFlipbookMode.OneShot, _ParticleFlipbookMode.PingPong, _ParticleFlipbookMode.Random];
  }
  static FromValue(value) {
    return _ParticleFlipbookMode.Items.find((item) => item._value === value);
  }
};
var ParticleOrientation = class _ParticleOrientation extends EnumItem {
  static FacingCamera = new _ParticleOrientation("FacingCamera", 0);
  static FacingCameraWorldUp = new _ParticleOrientation("FacingCameraWorldUp", 1);
  static VelocityParallel = new _ParticleOrientation("VelocityParallel", 2);
  static VelocityPerpendicular = new _ParticleOrientation("VelocityPerpendicular", 3);
  static get Items() {
    return [_ParticleOrientation.FacingCamera, _ParticleOrientation.FacingCameraWorldUp, _ParticleOrientation.VelocityParallel, _ParticleOrientation.VelocityPerpendicular];
  }
  static FromValue(value) {
    return _ParticleOrientation.Items.find((item) => item._value === value);
  }
};
var PhysicsSteppingMethod = class _PhysicsSteppingMethod extends EnumItem {
  static Default = new _PhysicsSteppingMethod("Default", 0);
  static Fixed = new _PhysicsSteppingMethod("Fixed", 1);
  static Adaptive = new _PhysicsSteppingMethod("Adaptive", 2);
  static get Items() {
    return [_PhysicsSteppingMethod.Default, _PhysicsSteppingMethod.Fixed, _PhysicsSteppingMethod.Adaptive];
  }
  static FromValue(value) {
    return _PhysicsSteppingMethod.Items.find((item) => item._value === value);
  }
};
var PlayerCharacterDestroyBehavior = class _PlayerCharacterDestroyBehavior extends EnumItem {
  static Default = new _PlayerCharacterDestroyBehavior("Default", 0);
  static Disabled = new _PlayerCharacterDestroyBehavior("Disabled", 1);
  static Enabled = new _PlayerCharacterDestroyBehavior("Enabled", 2);
  static get Items() {
    return [_PlayerCharacterDestroyBehavior.Default, _PlayerCharacterDestroyBehavior.Disabled, _PlayerCharacterDestroyBehavior.Enabled];
  }
  static FromValue(value) {
    return _PlayerCharacterDestroyBehavior.Items.find((item) => item._value === value);
  }
};
var PoseEasingDirection = class _PoseEasingDirection extends EnumItem {
  static In = new _PoseEasingDirection("In", 0);
  static Out = new _PoseEasingDirection("Out", 1);
  static InOut = new _PoseEasingDirection("InOut", 2);
  static get Items() {
    return [_PoseEasingDirection.In, _PoseEasingDirection.Out, _PoseEasingDirection.InOut];
  }
  static FromValue(value) {
    return _PoseEasingDirection.Items.find((item) => item._value === value);
  }
};
var PoseEasingStyle = class _PoseEasingStyle extends EnumItem {
  static Linear = new _PoseEasingStyle("Linear", 0);
  static Constant = new _PoseEasingStyle("Constant", 1);
  static Elastic = new _PoseEasingStyle("Elastic", 2);
  static Cubic = new _PoseEasingStyle("Cubic", 3);
  static Bounce = new _PoseEasingStyle("Bounce", 4);
  static get Items() {
    return [_PoseEasingStyle.Linear, _PoseEasingStyle.Constant, _PoseEasingStyle.Elastic, _PoseEasingStyle.Cubic, _PoseEasingStyle.Bounce];
  }
  static FromValue(value) {
    return _PoseEasingStyle.Items.find((item) => item._value === value);
  }
};
var PositionAlignmentMode = class _PositionAlignmentMode extends EnumItem {
  static OneAttachment = new _PositionAlignmentMode("OneAttachment", 0);
  static TwoAttachment = new _PositionAlignmentMode("TwoAttachment", 1);
  static get Items() {
    return [_PositionAlignmentMode.OneAttachment, _PositionAlignmentMode.TwoAttachment];
  }
  static FromValue(value) {
    return _PositionAlignmentMode.Items.find((item) => item._value === value);
  }
};
var PrimalPhysicsSolver = class _PrimalPhysicsSolver extends EnumItem {
  static Default = new _PrimalPhysicsSolver("Default", 0);
  static Experimental = new _PrimalPhysicsSolver("Experimental", 1);
  static Disabled = new _PrimalPhysicsSolver("Disabled", 2);
  static get Items() {
    return [_PrimalPhysicsSolver.Default, _PrimalPhysicsSolver.Experimental, _PrimalPhysicsSolver.Disabled];
  }
  static FromValue(value) {
    return _PrimalPhysicsSolver.Items.find((item) => item._value === value);
  }
};
var ProximityPromptExclusivity = class _ProximityPromptExclusivity extends EnumItem {
  static OnePerButton = new _ProximityPromptExclusivity("OnePerButton", 0);
  static OneGlobally = new _ProximityPromptExclusivity("OneGlobally", 1);
  static AlwaysShow = new _ProximityPromptExclusivity("AlwaysShow", 2);
  static get Items() {
    return [_ProximityPromptExclusivity.OnePerButton, _ProximityPromptExclusivity.OneGlobally, _ProximityPromptExclusivity.AlwaysShow];
  }
  static FromValue(value) {
    return _ProximityPromptExclusivity.Items.find((item) => item._value === value);
  }
};
var ProximityPromptStyle = class _ProximityPromptStyle extends EnumItem {
  static Default = new _ProximityPromptStyle("Default", 0);
  static Custom = new _ProximityPromptStyle("Custom", 1);
  static get Items() {
    return [_ProximityPromptStyle.Default, _ProximityPromptStyle.Custom];
  }
  static FromValue(value) {
    return _ProximityPromptStyle.Items.find((item) => item._value === value);
  }
};
var QualityLevel = class _QualityLevel extends EnumItem {
  static Automatic = new _QualityLevel("Automatic", 0);
  static Level01 = new _QualityLevel("Level01", 1);
  static Level02 = new _QualityLevel("Level02", 2);
  static Level03 = new _QualityLevel("Level03", 3);
  static Level04 = new _QualityLevel("Level04", 4);
  static Level05 = new _QualityLevel("Level05", 5);
  static Level06 = new _QualityLevel("Level06", 6);
  static Level07 = new _QualityLevel("Level07", 7);
  static Level08 = new _QualityLevel("Level08", 8);
  static Level09 = new _QualityLevel("Level09", 9);
  static Level10 = new _QualityLevel("Level10", 10);
  static Level11 = new _QualityLevel("Level11", 11);
  static Level12 = new _QualityLevel("Level12", 12);
  static Level13 = new _QualityLevel("Level13", 13);
  static Level14 = new _QualityLevel("Level14", 14);
  static Level15 = new _QualityLevel("Level15", 15);
  static Level16 = new _QualityLevel("Level16", 16);
  static Level17 = new _QualityLevel("Level17", 17);
  static Level18 = new _QualityLevel("Level18", 18);
  static Level19 = new _QualityLevel("Level19", 19);
  static Level20 = new _QualityLevel("Level20", 20);
  static Level21 = new _QualityLevel("Level21", 21);
  static get Items() {
    return [_QualityLevel.Automatic, _QualityLevel.Level01, _QualityLevel.Level02, _QualityLevel.Level03, _QualityLevel.Level04, _QualityLevel.Level05, _QualityLevel.Level06, _QualityLevel.Level07, _QualityLevel.Level08, _QualityLevel.Level09, _QualityLevel.Level10, _QualityLevel.Level11, _QualityLevel.Level12, _QualityLevel.Level13, _QualityLevel.Level14, _QualityLevel.Level15, _QualityLevel.Level16, _QualityLevel.Level17, _QualityLevel.Level18, _QualityLevel.Level19, _QualityLevel.Level20, _QualityLevel.Level21];
  }
  static FromValue(value) {
    return _QualityLevel.Items.find((item) => item._value === value);
  }
};
var R15CollisionType = class _R15CollisionType extends EnumItem {
  static OuterBox = new _R15CollisionType("OuterBox", 0);
  static InnerBox = new _R15CollisionType("InnerBox", 1);
  static get Items() {
    return [_R15CollisionType.OuterBox, _R15CollisionType.InnerBox];
  }
  static FromValue(value) {
    return _R15CollisionType.Items.find((item) => item._value === value);
  }
};
var RejectCharacterDeletions = class _RejectCharacterDeletions extends EnumItem {
  static Default = new _RejectCharacterDeletions("Default", 0);
  static Disabled = new _RejectCharacterDeletions("Disabled", 1);
  static Enabled = new _RejectCharacterDeletions("Enabled", 2);
  static get Items() {
    return [_RejectCharacterDeletions.Default, _RejectCharacterDeletions.Disabled, _RejectCharacterDeletions.Enabled];
  }
  static FromValue(value) {
    return _RejectCharacterDeletions.Items.find((item) => item._value === value);
  }
};
var RenderFidelity = class _RenderFidelity extends EnumItem {
  static Automatic = new _RenderFidelity("Automatic", 0);
  static Precise = new _RenderFidelity("Precise", 1);
  static Performance = new _RenderFidelity("Performance", 2);
  static get Items() {
    return [_RenderFidelity.Automatic, _RenderFidelity.Precise, _RenderFidelity.Performance];
  }
  static FromValue(value) {
    return _RenderFidelity.Items.find((item) => item._value === value);
  }
};
var RenderingTestComparisonMethod = class _RenderingTestComparisonMethod extends EnumItem {
  static psnr = new _RenderingTestComparisonMethod("psnr", 0);
  static diff = new _RenderingTestComparisonMethod("diff", 1);
  static get Items() {
    return [_RenderingTestComparisonMethod.psnr, _RenderingTestComparisonMethod.diff];
  }
  static FromValue(value) {
    return _RenderingTestComparisonMethod.Items.find((item) => item._value === value);
  }
};
var ReplicateInstanceDestroySetting = class _ReplicateInstanceDestroySetting extends EnumItem {
  static Default = new _ReplicateInstanceDestroySetting("Default", 0);
  static Disabled = new _ReplicateInstanceDestroySetting("Disabled", 1);
  static Enabled = new _ReplicateInstanceDestroySetting("Enabled", 2);
  static get Items() {
    return [_ReplicateInstanceDestroySetting.Default, _ReplicateInstanceDestroySetting.Disabled, _ReplicateInstanceDestroySetting.Enabled];
  }
  static FromValue(value) {
    return _ReplicateInstanceDestroySetting.Items.find((item) => item._value === value);
  }
};
var ResamplerMode = class _ResamplerMode extends EnumItem {
  static Default = new _ResamplerMode("Default", 0);
  static Pixelated = new _ResamplerMode("Pixelated", 1);
  static get Items() {
    return [_ResamplerMode.Default, _ResamplerMode.Pixelated];
  }
  static FromValue(value) {
    return _ResamplerMode.Items.find((item) => item._value === value);
  }
};
var ReverbType = class _ReverbType extends EnumItem {
  static NoReverb = new _ReverbType("NoReverb", 0);
  static GenericReverb = new _ReverbType("GenericReverb", 1);
  static PaddedCell = new _ReverbType("PaddedCell", 2);
  static Room = new _ReverbType("Room", 3);
  static Bathroom = new _ReverbType("Bathroom", 4);
  static LivingRoom = new _ReverbType("LivingRoom", 5);
  static StoneRoom = new _ReverbType("StoneRoom", 6);
  static Auditorium = new _ReverbType("Auditorium", 7);
  static ConcertHall = new _ReverbType("ConcertHall", 8);
  static Cave = new _ReverbType("Cave", 9);
  static Arena = new _ReverbType("Arena", 10);
  static Hangar = new _ReverbType("Hangar", 11);
  static CarpettedHallway = new _ReverbType("CarpettedHallway", 12);
  static Hallway = new _ReverbType("Hallway", 13);
  static StoneCorridor = new _ReverbType("StoneCorridor", 14);
  static Alley = new _ReverbType("Alley", 15);
  static Forest = new _ReverbType("Forest", 16);
  static City = new _ReverbType("City", 17);
  static Mountains = new _ReverbType("Mountains", 18);
  static Quarry = new _ReverbType("Quarry", 19);
  static Plain = new _ReverbType("Plain", 20);
  static ParkingLot = new _ReverbType("ParkingLot", 21);
  static SewerPipe = new _ReverbType("SewerPipe", 22);
  static UnderWater = new _ReverbType("UnderWater", 23);
  static get Items() {
    return [_ReverbType.NoReverb, _ReverbType.GenericReverb, _ReverbType.PaddedCell, _ReverbType.Room, _ReverbType.Bathroom, _ReverbType.LivingRoom, _ReverbType.StoneRoom, _ReverbType.Auditorium, _ReverbType.ConcertHall, _ReverbType.Cave, _ReverbType.Arena, _ReverbType.Hangar, _ReverbType.CarpettedHallway, _ReverbType.Hallway, _ReverbType.StoneCorridor, _ReverbType.Alley, _ReverbType.Forest, _ReverbType.City, _ReverbType.Mountains, _ReverbType.Quarry, _ReverbType.Plain, _ReverbType.ParkingLot, _ReverbType.SewerPipe, _ReverbType.UnderWater];
  }
  static FromValue(value) {
    return _ReverbType.Items.find((item) => item._value === value);
  }
};
var RollOffMode = class _RollOffMode extends EnumItem {
  static Inverse = new _RollOffMode("Inverse", 0);
  static Linear = new _RollOffMode("Linear", 1);
  static LinearSquare = new _RollOffMode("LinearSquare", 2);
  static InverseTapered = new _RollOffMode("InverseTapered", 3);
  static get Items() {
    return [_RollOffMode.Inverse, _RollOffMode.Linear, _RollOffMode.LinearSquare, _RollOffMode.InverseTapered];
  }
  static FromValue(value) {
    return _RollOffMode.Items.find((item) => item._value === value);
  }
};
var RotationOrder = class _RotationOrder extends EnumItem {
  static XYZ = new _RotationOrder("XYZ", 0);
  static XZY = new _RotationOrder("XZY", 1);
  static YZX = new _RotationOrder("YZX", 2);
  static YXZ = new _RotationOrder("YXZ", 3);
  static ZXY = new _RotationOrder("ZXY", 4);
  static ZYX = new _RotationOrder("ZYX", 5);
  static get Items() {
    return [_RotationOrder.XYZ, _RotationOrder.XZY, _RotationOrder.YZX, _RotationOrder.YXZ, _RotationOrder.ZXY, _RotationOrder.ZYX];
  }
  static FromValue(value) {
    return _RotationOrder.Items.find((item) => item._value === value);
  }
};
var RtlTextSupport = class _RtlTextSupport extends EnumItem {
  static Default = new _RtlTextSupport("Default", 0);
  static Disabled = new _RtlTextSupport("Disabled", 1);
  static Enabled = new _RtlTextSupport("Enabled", 2);
  static get Items() {
    return [_RtlTextSupport.Default, _RtlTextSupport.Disabled, _RtlTextSupport.Enabled];
  }
  static FromValue(value) {
    return _RtlTextSupport.Items.find((item) => item._value === value);
  }
};
var RunContext = class _RunContext extends EnumItem {
  static Legacy = new _RunContext("Legacy", 0);
  static Server = new _RunContext("Server", 1);
  static Client = new _RunContext("Client", 2);
  static Plugin = new _RunContext("Plugin", 3);
  static get Items() {
    return [_RunContext.Legacy, _RunContext.Server, _RunContext.Client, _RunContext.Plugin];
  }
  static FromValue(value) {
    return _RunContext.Items.find((item) => item._value === value);
  }
};
var SafeAreaCompatibility = class _SafeAreaCompatibility extends EnumItem {
  static None = new _SafeAreaCompatibility("None", 0);
  static FullscreenExtension = new _SafeAreaCompatibility("FullscreenExtension", 1);
  static get Items() {
    return [_SafeAreaCompatibility.None, _SafeAreaCompatibility.FullscreenExtension];
  }
  static FromValue(value) {
    return _SafeAreaCompatibility.Items.find((item) => item._value === value);
  }
};
var ScaleType = class _ScaleType extends EnumItem {
  static Stretch = new _ScaleType("Stretch", 0);
  static Slice = new _ScaleType("Slice", 1);
  static Tile = new _ScaleType("Tile", 2);
  static Fit = new _ScaleType("Fit", 3);
  static Crop = new _ScaleType("Crop", 4);
  static get Items() {
    return [_ScaleType.Stretch, _ScaleType.Slice, _ScaleType.Tile, _ScaleType.Fit, _ScaleType.Crop];
  }
  static FromValue(value) {
    return _ScaleType.Items.find((item) => item._value === value);
  }
};
var ScreenInsets = class _ScreenInsets extends EnumItem {
  static None = new _ScreenInsets("None", 0);
  static DeviceSafeInsets = new _ScreenInsets("DeviceSafeInsets", 1);
  static CoreUISafeInsets = new _ScreenInsets("CoreUISafeInsets", 2);
  static TopbarSafeInsets = new _ScreenInsets("TopbarSafeInsets", 3);
  static get Items() {
    return [_ScreenInsets.None, _ScreenInsets.DeviceSafeInsets, _ScreenInsets.CoreUISafeInsets, _ScreenInsets.TopbarSafeInsets];
  }
  static FromValue(value) {
    return _ScreenInsets.Items.find((item) => item._value === value);
  }
};
var ScreenOrientation = class _ScreenOrientation extends EnumItem {
  static LandscapeLeft = new _ScreenOrientation("LandscapeLeft", 0);
  static LandscapeRight = new _ScreenOrientation("LandscapeRight", 1);
  static LandscapeSensor = new _ScreenOrientation("LandscapeSensor", 2);
  static Portrait = new _ScreenOrientation("Portrait", 3);
  static Sensor = new _ScreenOrientation("Sensor", 4);
  static get Items() {
    return [_ScreenOrientation.LandscapeLeft, _ScreenOrientation.LandscapeRight, _ScreenOrientation.LandscapeSensor, _ScreenOrientation.Portrait, _ScreenOrientation.Sensor];
  }
  static FromValue(value) {
    return _ScreenOrientation.Items.find((item) => item._value === value);
  }
};
var ScrollBarInset = class _ScrollBarInset extends EnumItem {
  static None = new _ScrollBarInset("None", 0);
  static ScrollBar = new _ScrollBarInset("ScrollBar", 1);
  static Always = new _ScrollBarInset("Always", 2);
  static get Items() {
    return [_ScrollBarInset.None, _ScrollBarInset.ScrollBar, _ScrollBarInset.Always];
  }
  static FromValue(value) {
    return _ScrollBarInset.Items.find((item) => item._value === value);
  }
};
var ScrollingDirection = class _ScrollingDirection extends EnumItem {
  static X = new _ScrollingDirection("X", 1);
  static Y = new _ScrollingDirection("Y", 2);
  static XY = new _ScrollingDirection("XY", 4);
  static get Items() {
    return [_ScrollingDirection.X, _ScrollingDirection.Y, _ScrollingDirection.XY];
  }
  static FromValue(value) {
    return _ScrollingDirection.Items.find((item) => item._value === value);
  }
};
var SelectionBehavior = class _SelectionBehavior extends EnumItem {
  static Escape = new _SelectionBehavior("Escape", 0);
  static Stop = new _SelectionBehavior("Stop", 1);
  static get Items() {
    return [_SelectionBehavior.Escape, _SelectionBehavior.Stop];
  }
  static FromValue(value) {
    return _SelectionBehavior.Items.find((item) => item._value === value);
  }
};
var SensorMode = class _SensorMode extends EnumItem {
  static Floor = new _SensorMode("Floor", 0);
  static Ladder = new _SensorMode("Ladder", 1);
  static get Items() {
    return [_SensorMode.Floor, _SensorMode.Ladder];
  }
  static FromValue(value) {
    return _SensorMode.Items.find((item) => item._value === value);
  }
};
var SensorUpdateType = class _SensorUpdateType extends EnumItem {
  static OnRead = new _SensorUpdateType("OnRead", 0);
  static Manual = new _SensorUpdateType("Manual", 1);
  static get Items() {
    return [_SensorUpdateType.OnRead, _SensorUpdateType.Manual];
  }
  static FromValue(value) {
    return _SensorUpdateType.Items.find((item) => item._value === value);
  }
};
var ServiceVisibility = class _ServiceVisibility extends EnumItem {
  static Always = new _ServiceVisibility("Always", 0);
  static Off = new _ServiceVisibility("Off", 1);
  static WithChildren = new _ServiceVisibility("WithChildren", 2);
  static get Items() {
    return [_ServiceVisibility.Always, _ServiceVisibility.Off, _ServiceVisibility.WithChildren];
  }
  static FromValue(value) {
    return _ServiceVisibility.Items.find((item) => item._value === value);
  }
};
var SignalBehavior = class _SignalBehavior extends EnumItem {
  static Default = new _SignalBehavior("Default", 0);
  static Immediate = new _SignalBehavior("Immediate", 1);
  static Deferred = new _SignalBehavior("Deferred", 2);
  static AncestryDeferred = new _SignalBehavior("AncestryDeferred", 3);
  static get Items() {
    return [_SignalBehavior.Default, _SignalBehavior.Immediate, _SignalBehavior.Deferred, _SignalBehavior.AncestryDeferred];
  }
  static FromValue(value) {
    return _SignalBehavior.Items.find((item) => item._value === value);
  }
};
var SizeConstraint = class _SizeConstraint extends EnumItem {
  static RelativeXY = new _SizeConstraint("RelativeXY", 0);
  static RelativeXX = new _SizeConstraint("RelativeXX", 1);
  static RelativeYY = new _SizeConstraint("RelativeYY", 2);
  static get Items() {
    return [_SizeConstraint.RelativeXY, _SizeConstraint.RelativeXX, _SizeConstraint.RelativeYY];
  }
  static FromValue(value) {
    return _SizeConstraint.Items.find((item) => item._value === value);
  }
};
var SortOrder = class _SortOrder extends EnumItem {
  static Name = new _SortOrder("Name", 0);
  static Custom = new _SortOrder("Custom", 1);
  static LayoutOrder = new _SortOrder("LayoutOrder", 2);
  static get Items() {
    return [_SortOrder.Name, _SortOrder.Custom, _SortOrder.LayoutOrder];
  }
  static FromValue(value) {
    return _SortOrder.Items.find((item) => item._value === value);
  }
};
var StartCorner = class _StartCorner extends EnumItem {
  static TopLeft = new _StartCorner("TopLeft", 0);
  static TopRight = new _StartCorner("TopRight", 1);
  static BottomLeft = new _StartCorner("BottomLeft", 2);
  static BottomRight = new _StartCorner("BottomRight", 3);
  static get Items() {
    return [_StartCorner.TopLeft, _StartCorner.TopRight, _StartCorner.BottomLeft, _StartCorner.BottomRight];
  }
  static FromValue(value) {
    return _StartCorner.Items.find((item) => item._value === value);
  }
};
var StreamOutBehavior = class _StreamOutBehavior extends EnumItem {
  static Default = new _StreamOutBehavior("Default", 0);
  static LowMemory = new _StreamOutBehavior("LowMemory", 1);
  static Opportunistic = new _StreamOutBehavior("Opportunistic", 2);
  static get Items() {
    return [_StreamOutBehavior.Default, _StreamOutBehavior.LowMemory, _StreamOutBehavior.Opportunistic];
  }
  static FromValue(value) {
    return _StreamOutBehavior.Items.find((item) => item._value === value);
  }
};
var StreamingIntegrityMode = class _StreamingIntegrityMode extends EnumItem {
  static Default = new _StreamingIntegrityMode("Default", 0);
  static Disabled = new _StreamingIntegrityMode("Disabled", 1);
  static MinimumRadiusPause = new _StreamingIntegrityMode("MinimumRadiusPause", 2);
  static PauseOutsideLoadedArea = new _StreamingIntegrityMode("PauseOutsideLoadedArea", 3);
  static get Items() {
    return [_StreamingIntegrityMode.Default, _StreamingIntegrityMode.Disabled, _StreamingIntegrityMode.MinimumRadiusPause, _StreamingIntegrityMode.PauseOutsideLoadedArea];
  }
  static FromValue(value) {
    return _StreamingIntegrityMode.Items.find((item) => item._value === value);
  }
};
var Style = class _Style extends EnumItem {
  static AlternatingSupports = new _Style("AlternatingSupports", 0);
  static BridgeStyleSupports = new _Style("BridgeStyleSupports", 1);
  static NoSupports = new _Style("NoSupports", 2);
  static get Items() {
    return [_Style.AlternatingSupports, _Style.BridgeStyleSupports, _Style.NoSupports];
  }
  static FromValue(value) {
    return _Style.Items.find((item) => item._value === value);
  }
};
var SurfaceGuiSizingMode = class _SurfaceGuiSizingMode extends EnumItem {
  static FixedSize = new _SurfaceGuiSizingMode("FixedSize", 0);
  static PixelsPerStud = new _SurfaceGuiSizingMode("PixelsPerStud", 1);
  static get Items() {
    return [_SurfaceGuiSizingMode.FixedSize, _SurfaceGuiSizingMode.PixelsPerStud];
  }
  static FromValue(value) {
    return _SurfaceGuiSizingMode.Items.find((item) => item._value === value);
  }
};
var SurfaceType = class _SurfaceType extends EnumItem {
  static Smooth = new _SurfaceType("Smooth", 0);
  static Glue = new _SurfaceType("Glue", 1);
  static Weld = new _SurfaceType("Weld", 2);
  static Studs = new _SurfaceType("Studs", 3);
  static Inlet = new _SurfaceType("Inlet", 4);
  static Universal = new _SurfaceType("Universal", 5);
  static Hinge = new _SurfaceType("Hinge", 6);
  static Motor = new _SurfaceType("Motor", 7);
  static SteppingMotor = new _SurfaceType("SteppingMotor", 8);
  static SmoothNoOutlines = new _SurfaceType("SmoothNoOutlines", 10);
  static get Items() {
    return [_SurfaceType.Smooth, _SurfaceType.Glue, _SurfaceType.Weld, _SurfaceType.Studs, _SurfaceType.Inlet, _SurfaceType.Universal, _SurfaceType.Hinge, _SurfaceType.Motor, _SurfaceType.SteppingMotor, _SurfaceType.SmoothNoOutlines];
  }
  static FromValue(value) {
    return _SurfaceType.Items.find((item) => item._value === value);
  }
};
var TableMajorAxis = class _TableMajorAxis extends EnumItem {
  static RowMajor = new _TableMajorAxis("RowMajor", 0);
  static ColumnMajor = new _TableMajorAxis("ColumnMajor", 1);
  static get Items() {
    return [_TableMajorAxis.RowMajor, _TableMajorAxis.ColumnMajor];
  }
  static FromValue(value) {
    return _TableMajorAxis.Items.find((item) => item._value === value);
  }
};
var Technology = class _Technology extends EnumItem {
  static Voxel = new _Technology("Voxel", 1);
  static Compatibility = new _Technology("Compatibility", 2);
  static ShadowMap = new _Technology("ShadowMap", 3);
  static Future = new _Technology("Future", 4);
  static Legacy = new _Technology("Legacy", 0);
  static get Items() {
    return [_Technology.Voxel, _Technology.Compatibility, _Technology.ShadowMap, _Technology.Future, _Technology.Legacy];
  }
  static FromValue(value) {
    return _Technology.Items.find((item) => item._value === value);
  }
};
var TerrainAcquisitionMethod = class _TerrainAcquisitionMethod extends EnumItem {
  static None = new _TerrainAcquisitionMethod("None", 0);
  static Legacy = new _TerrainAcquisitionMethod("Legacy", 1);
  static Template = new _TerrainAcquisitionMethod("Template", 2);
  static Generate = new _TerrainAcquisitionMethod("Generate", 3);
  static Import = new _TerrainAcquisitionMethod("Import", 4);
  static Convert = new _TerrainAcquisitionMethod("Convert", 5);
  static EditAddTool = new _TerrainAcquisitionMethod("EditAddTool", 6);
  static EditSeaLevelTool = new _TerrainAcquisitionMethod("EditSeaLevelTool", 7);
  static EditReplaceTool = new _TerrainAcquisitionMethod("EditReplaceTool", 8);
  static RegionFillTool = new _TerrainAcquisitionMethod("RegionFillTool", 9);
  static RegionPasteTool = new _TerrainAcquisitionMethod("RegionPasteTool", 10);
  static Other = new _TerrainAcquisitionMethod("Other", 11);
  static get Items() {
    return [_TerrainAcquisitionMethod.None, _TerrainAcquisitionMethod.Legacy, _TerrainAcquisitionMethod.Template, _TerrainAcquisitionMethod.Generate, _TerrainAcquisitionMethod.Import, _TerrainAcquisitionMethod.Convert, _TerrainAcquisitionMethod.EditAddTool, _TerrainAcquisitionMethod.EditSeaLevelTool, _TerrainAcquisitionMethod.EditReplaceTool, _TerrainAcquisitionMethod.RegionFillTool, _TerrainAcquisitionMethod.RegionPasteTool, _TerrainAcquisitionMethod.Other];
  }
  static FromValue(value) {
    return _TerrainAcquisitionMethod.Items.find((item) => item._value === value);
  }
};
var TerrainFace = class _TerrainFace extends EnumItem {
  static Top = new _TerrainFace("Top", 0);
  static Side = new _TerrainFace("Side", 1);
  static Bottom = new _TerrainFace("Bottom", 2);
  static get Items() {
    return [_TerrainFace.Top, _TerrainFace.Side, _TerrainFace.Bottom];
  }
  static FromValue(value) {
    return _TerrainFace.Items.find((item) => item._value === value);
  }
};
var TextDirection = class _TextDirection extends EnumItem {
  static Auto = new _TextDirection("Auto", 0);
  static LeftToRight = new _TextDirection("LeftToRight", 1);
  static RightToLeft = new _TextDirection("RightToLeft", 2);
  static get Items() {
    return [_TextDirection.Auto, _TextDirection.LeftToRight, _TextDirection.RightToLeft];
  }
  static FromValue(value) {
    return _TextDirection.Items.find((item) => item._value === value);
  }
};
var TextTruncate = class _TextTruncate extends EnumItem {
  static None = new _TextTruncate("None", 0);
  static AtEnd = new _TextTruncate("AtEnd", 1);
  static SplitWord = new _TextTruncate("SplitWord", 2);
  static get Items() {
    return [_TextTruncate.None, _TextTruncate.AtEnd, _TextTruncate.SplitWord];
  }
  static FromValue(value) {
    return _TextTruncate.Items.find((item) => item._value === value);
  }
};
var TextXAlignment = class _TextXAlignment extends EnumItem {
  static Left = new _TextXAlignment("Left", 0);
  static Right = new _TextXAlignment("Right", 1);
  static Center = new _TextXAlignment("Center", 2);
  static get Items() {
    return [_TextXAlignment.Left, _TextXAlignment.Right, _TextXAlignment.Center];
  }
  static FromValue(value) {
    return _TextXAlignment.Items.find((item) => item._value === value);
  }
};
var TextYAlignment = class _TextYAlignment extends EnumItem {
  static Top = new _TextYAlignment("Top", 0);
  static Center = new _TextYAlignment("Center", 1);
  static Bottom = new _TextYAlignment("Bottom", 2);
  static get Items() {
    return [_TextYAlignment.Top, _TextYAlignment.Center, _TextYAlignment.Bottom];
  }
  static FromValue(value) {
    return _TextYAlignment.Items.find((item) => item._value === value);
  }
};
var TextureMode = class _TextureMode extends EnumItem {
  static Stretch = new _TextureMode("Stretch", 0);
  static Wrap = new _TextureMode("Wrap", 1);
  static Static = new _TextureMode("Static", 2);
  static get Items() {
    return [_TextureMode.Stretch, _TextureMode.Wrap, _TextureMode.Static];
  }
  static FromValue(value) {
    return _TextureMode.Items.find((item) => item._value === value);
  }
};
var ThreadPoolConfig = class _ThreadPoolConfig extends EnumItem {
  static PerCore4 = new _ThreadPoolConfig("PerCore4", 104);
  static PerCore3 = new _ThreadPoolConfig("PerCore3", 103);
  static PerCore2 = new _ThreadPoolConfig("PerCore2", 102);
  static PerCore1 = new _ThreadPoolConfig("PerCore1", 101);
  static Auto = new _ThreadPoolConfig("Auto", 0);
  static Threads1 = new _ThreadPoolConfig("Threads1", 1);
  static Threads2 = new _ThreadPoolConfig("Threads2", 2);
  static Threads3 = new _ThreadPoolConfig("Threads3", 3);
  static Threads4 = new _ThreadPoolConfig("Threads4", 4);
  static Threads8 = new _ThreadPoolConfig("Threads8", 8);
  static Threads16 = new _ThreadPoolConfig("Threads16", 16);
  static get Items() {
    return [_ThreadPoolConfig.PerCore4, _ThreadPoolConfig.PerCore3, _ThreadPoolConfig.PerCore2, _ThreadPoolConfig.PerCore1, _ThreadPoolConfig.Auto, _ThreadPoolConfig.Threads1, _ThreadPoolConfig.Threads2, _ThreadPoolConfig.Threads3, _ThreadPoolConfig.Threads4, _ThreadPoolConfig.Threads8, _ThreadPoolConfig.Threads16];
  }
  static FromValue(value) {
    return _ThreadPoolConfig.Items.find((item) => item._value === value);
  }
};
var TopBottom = class _TopBottom extends EnumItem {
  static Top = new _TopBottom("Top", 0);
  static Center = new _TopBottom("Center", 1);
  static Bottom = new _TopBottom("Bottom", 2);
  static get Items() {
    return [_TopBottom.Top, _TopBottom.Center, _TopBottom.Bottom];
  }
  static FromValue(value) {
    return _TopBottom.Items.find((item) => item._value === value);
  }
};
var TriStateBoolean = class _TriStateBoolean extends EnumItem {
  static False = new _TriStateBoolean("False", 2);
  static True = new _TriStateBoolean("True", 1);
  static Unknown = new _TriStateBoolean("Unknown", 0);
  static get Items() {
    return [_TriStateBoolean.False, _TriStateBoolean.True, _TriStateBoolean.Unknown];
  }
  static FromValue(value) {
    return _TriStateBoolean.Items.find((item) => item._value === value);
  }
};
var UIFlexAlignment = class _UIFlexAlignment extends EnumItem {
  static None = new _UIFlexAlignment("None", 0);
  static Fill = new _UIFlexAlignment("Fill", 1);
  static SpaceAround = new _UIFlexAlignment("SpaceAround", 2);
  static SpaceBetween = new _UIFlexAlignment("SpaceBetween", 3);
  static SpaceEvenly = new _UIFlexAlignment("SpaceEvenly", 4);
  static get Items() {
    return [_UIFlexAlignment.None, _UIFlexAlignment.Fill, _UIFlexAlignment.SpaceAround, _UIFlexAlignment.SpaceBetween, _UIFlexAlignment.SpaceEvenly];
  }
  static FromValue(value) {
    return _UIFlexAlignment.Items.find((item) => item._value === value);
  }
};
var UIFlexMode = class _UIFlexMode extends EnumItem {
  static None = new _UIFlexMode("None", 0);
  static Grow = new _UIFlexMode("Grow", 1);
  static Shrink = new _UIFlexMode("Shrink", 2);
  static Fill = new _UIFlexMode("Fill", 3);
  static Custom = new _UIFlexMode("Custom", 4);
  static get Items() {
    return [_UIFlexMode.None, _UIFlexMode.Grow, _UIFlexMode.Shrink, _UIFlexMode.Fill, _UIFlexMode.Custom];
  }
  static FromValue(value) {
    return _UIFlexMode.Items.find((item) => item._value === value);
  }
};
var VRScaling = class _VRScaling extends EnumItem {
  static World = new _VRScaling("World", 0);
  static Off = new _VRScaling("Off", 1);
  static get Items() {
    return [_VRScaling.World, _VRScaling.Off];
  }
  static FromValue(value) {
    return _VRScaling.Items.find((item) => item._value === value);
  }
};
var VelocityConstraintMode = class _VelocityConstraintMode extends EnumItem {
  static Line = new _VelocityConstraintMode("Line", 0);
  static Plane = new _VelocityConstraintMode("Plane", 1);
  static Vector = new _VelocityConstraintMode("Vector", 2);
  static get Items() {
    return [_VelocityConstraintMode.Line, _VelocityConstraintMode.Plane, _VelocityConstraintMode.Vector];
  }
  static FromValue(value) {
    return _VelocityConstraintMode.Items.find((item) => item._value === value);
  }
};
var VerticalAlignment = class _VerticalAlignment extends EnumItem {
  static Center = new _VerticalAlignment("Center", 0);
  static Top = new _VerticalAlignment("Top", 1);
  static Bottom = new _VerticalAlignment("Bottom", 2);
  static get Items() {
    return [_VerticalAlignment.Center, _VerticalAlignment.Top, _VerticalAlignment.Bottom];
  }
  static FromValue(value) {
    return _VerticalAlignment.Items.find((item) => item._value === value);
  }
};
var VerticalScrollBarPosition = class _VerticalScrollBarPosition extends EnumItem {
  static Right = new _VerticalScrollBarPosition("Right", 0);
  static Left = new _VerticalScrollBarPosition("Left", 1);
  static get Items() {
    return [_VerticalScrollBarPosition.Right, _VerticalScrollBarPosition.Left];
  }
  static FromValue(value) {
    return _VerticalScrollBarPosition.Items.find((item) => item._value === value);
  }
};
var VideoDeviceCaptureQuality = class _VideoDeviceCaptureQuality extends EnumItem {
  static Default = new _VideoDeviceCaptureQuality("Default", 0);
  static Low = new _VideoDeviceCaptureQuality("Low", 1);
  static Medium = new _VideoDeviceCaptureQuality("Medium", 2);
  static High = new _VideoDeviceCaptureQuality("High", 3);
  static get Items() {
    return [_VideoDeviceCaptureQuality.Default, _VideoDeviceCaptureQuality.Low, _VideoDeviceCaptureQuality.Medium, _VideoDeviceCaptureQuality.High];
  }
  static FromValue(value) {
    return _VideoDeviceCaptureQuality.Items.find((item) => item._value === value);
  }
};
var ViewMode = class _ViewMode extends EnumItem {
  static None = new _ViewMode("None", 0);
  static GeometryComplexity = new _ViewMode("GeometryComplexity", 1);
  static Transparent = new _ViewMode("Transparent", 2);
  static Decal = new _ViewMode("Decal", 3);
  static get Items() {
    return [_ViewMode.None, _ViewMode.GeometryComplexity, _ViewMode.Transparent, _ViewMode.Decal];
  }
  static FromValue(value) {
    return _ViewMode.Items.find((item) => item._value === value);
  }
};
var VirtualCursorMode = class _VirtualCursorMode extends EnumItem {
  static Default = new _VirtualCursorMode("Default", 0);
  static Disabled = new _VirtualCursorMode("Disabled", 1);
  static Enabled = new _VirtualCursorMode("Enabled", 2);
  static get Items() {
    return [_VirtualCursorMode.Default, _VirtualCursorMode.Disabled, _VirtualCursorMode.Enabled];
  }
  static FromValue(value) {
    return _VirtualCursorMode.Items.find((item) => item._value === value);
  }
};
var VolumetricAudio = class _VolumetricAudio extends EnumItem {
  static Disabled = new _VolumetricAudio("Disabled", 0);
  static Automatic = new _VolumetricAudio("Automatic", 1);
  static Enabled = new _VolumetricAudio("Enabled", 2);
  static get Items() {
    return [_VolumetricAudio.Disabled, _VolumetricAudio.Automatic, _VolumetricAudio.Enabled];
  }
  static FromValue(value) {
    return _VolumetricAudio.Items.find((item) => item._value === value);
  }
};
var WrapLayerAutoSkin = class _WrapLayerAutoSkin extends EnumItem {
  static Disabled = new _WrapLayerAutoSkin("Disabled", 0);
  static EnabledPreserve = new _WrapLayerAutoSkin("EnabledPreserve", 1);
  static EnabledOverride = new _WrapLayerAutoSkin("EnabledOverride", 2);
  static get Items() {
    return [_WrapLayerAutoSkin.Disabled, _WrapLayerAutoSkin.EnabledPreserve, _WrapLayerAutoSkin.EnabledOverride];
  }
  static FromValue(value) {
    return _WrapLayerAutoSkin.Items.find((item) => item._value === value);
  }
};
var ZIndexBehavior = class _ZIndexBehavior extends EnumItem {
  static Global = new _ZIndexBehavior("Global", 0);
  static Sibling = new _ZIndexBehavior("Sibling", 1);
  static get Items() {
    return [_ZIndexBehavior.Global, _ZIndexBehavior.Sibling];
  }
  static FromValue(value) {
    return _ZIndexBehavior.Items.find((item) => item._value === value);
  }
};
var EnumMap = class {
  _map = getEnumMap();
  getFactory(className, propName) {
    return this._map.get(`${className},${propName}`);
  }
};
function getEnumMap() {
  const map = /* @__PURE__ */ new Map();
  map.set("AccessoryDescription,AccessoryType", AccessoryType.FromValue);
  map.set("Accessory,AccessoryType", AccessoryType.FromValue);
  map.set("AnimationClip,Priority", AnimationPriority.FromValue);
  map.set("AudioDeviceInput,AccessType", AccessModifierType.FromValue);
  map.set("AudioSearchParams,AudioSubType", AudioSubType.FromValue);
  map.set("AudioSearchParams,AudioSubtype", AudioSubType.FromValue);
  map.set("StarterGui,RtlTextSupport", RtlTextSupport.FromValue);
  map.set("StarterGui,ScreenOrientation", ScreenOrientation.FromValue);
  map.set("StarterGui,VirtualCursorMode", VirtualCursorMode.FromValue);
  map.set("WrapLayer,AutoSkin", WrapLayerAutoSkin.FromValue);
  map.set("Beam,TextureMode", TextureMode.FromValue);
  map.set("BodyPartDescription,BodyPart", BodyPart.FromValue);
  map.set("Camera,CameraType", CameraType.FromValue);
  map.set("Camera,FieldOfViewMode", FieldOfViewMode.FromValue);
  map.set("CharacterMesh,BodyPart", BodyPart.FromValue);
  map.set("DragDetector,DragStyle", DragDetectorDragStyle.FromValue);
  map.set("DragDetector,GamepadModeSwitchKeyCode", KeyCode.FromValue);
  map.set("DragDetector,KeyboardModeSwitchKeyCode", KeyCode.FromValue);
  map.set("DragDetector,PermissionPolicy", DragDetectorPermissionPolicy.FromValue);
  map.set("DragDetector,ResponseStyle", DragDetectorResponseStyle.FromValue);
  map.set("DragDetector,VRSwitchKeyCode", KeyCode.FromValue);
  map.set("AlignOrientation,AlignType", AlignType.FromValue);
  map.set("AlignOrientation,Mode", OrientationAlignmentMode.FromValue);
  map.set("AlignPosition,ForceLimitMode", ForceLimitMode.FromValue);
  map.set("AlignPosition,ForceRelativeTo", ActuatorRelativeTo.FromValue);
  map.set("AlignPosition,Mode", PositionAlignmentMode.FromValue);
  map.set("AngularVelocity,RelativeTo", ActuatorRelativeTo.FromValue);
  map.set("HingeConstraint,ActuatorType", ActuatorType.FromValue);
  map.set("LinearVelocity,ForceLimitMode", ForceLimitMode.FromValue);
  map.set("LinearVelocity,RelativeTo", ActuatorRelativeTo.FromValue);
  map.set("LinearVelocity,VelocityConstraintMode", VelocityConstraintMode.FromValue);
  map.set("SlidingBallConstraint,ActuatorType", ActuatorType.FromValue);
  map.set("CylindricalConstraint,AngularActuatorType", ActuatorType.FromValue);
  map.set("Torque,RelativeTo", ActuatorRelativeTo.FromValue);
  map.set("VectorForce,RelativeTo", ActuatorRelativeTo.FromValue);
  map.set("SpecialMesh,MeshType", MeshType.FromValue);
  map.set("Dialog,BehaviorType", DialogBehaviorType.FromValue);
  map.set("Dialog,Purpose", DialogPurpose.FromValue);
  map.set("Dialog,Tone", DialogTone.FromValue);
  map.set("EulerRotationCurve,RotationOrder", RotationOrder.FromValue);
  map.set("Explosion,ExplosionType", ExplosionType.FromValue);
  map.set("FaceInstance,Face", NormalId.FromValue);
  map.set("Feature,FaceId", NormalId.FromValue);
  map.set("Feature,InOut", InOut.FromValue);
  map.set("Feature,LeftRight", LeftRight.FromValue);
  map.set("Feature,TopBottom", TopBottom.FromValue);
  map.set("GuiBase2d,SelectionBehaviorDown", SelectionBehavior.FromValue);
  map.set("GuiBase2d,SelectionBehaviorLeft", SelectionBehavior.FromValue);
  map.set("GuiBase2d,SelectionBehaviorRight", SelectionBehavior.FromValue);
  map.set("GuiBase2d,SelectionBehaviorUp", SelectionBehavior.FromValue);
  map.set("GuiObject,AutomaticSize", AutomaticSize.FromValue);
  map.set("GuiObject,BorderMode", BorderMode.FromValue);
  map.set("GuiObject,SizeConstraint", SizeConstraint.FromValue);
  map.set("Frame,Style", FrameStyle.FromValue);
  map.set("GuiButton,Style", ButtonStyle.FromValue);
  map.set("ImageButton,ResampleMode", ResamplerMode.FromValue);
  map.set("ImageButton,ScaleType", ScaleType.FromValue);
  map.set("TextButton,FontSize", FontSize.FromValue);
  map.set("TextButton,TextDirection", TextDirection.FromValue);
  map.set("TextButton,TextTruncate", TextTruncate.FromValue);
  map.set("TextButton,TextXAlignment", TextXAlignment.FromValue);
  map.set("TextButton,TextYAlignment", TextYAlignment.FromValue);
  map.set("ImageLabel,ResampleMode", ResamplerMode.FromValue);
  map.set("ImageLabel,ScaleType", ScaleType.FromValue);
  map.set("TextLabel,FontSize", FontSize.FromValue);
  map.set("TextLabel,TextDirection", TextDirection.FromValue);
  map.set("TextLabel,TextTruncate", TextTruncate.FromValue);
  map.set("TextLabel,TextXAlignment", TextXAlignment.FromValue);
  map.set("TextLabel,TextYAlignment", TextYAlignment.FromValue);
  map.set("ScrollingFrame,AutomaticCanvasSize", AutomaticSize.FromValue);
  map.set("ScrollingFrame,ElasticBehavior", ElasticBehavior.FromValue);
  map.set("ScrollingFrame,HorizontalScrollBarInset", ScrollBarInset.FromValue);
  map.set("ScrollingFrame,ScrollingDirection", ScrollingDirection.FromValue);
  map.set("ScrollingFrame,VerticalScrollBarInset", ScrollBarInset.FromValue);
  map.set("ScrollingFrame,VerticalScrollBarPosition", VerticalScrollBarPosition.FromValue);
  map.set("TextBox,FontSize", FontSize.FromValue);
  map.set("TextBox,TextDirection", TextDirection.FromValue);
  map.set("TextBox,TextTruncate", TextTruncate.FromValue);
  map.set("TextBox,TextXAlignment", TextXAlignment.FromValue);
  map.set("TextBox,TextYAlignment", TextYAlignment.FromValue);
  map.set("LayerCollector,ZIndexBehavior", ZIndexBehavior.FromValue);
  map.set("ScreenGui,SafeAreaCompatibility", SafeAreaCompatibility.FromValue);
  map.set("ScreenGui,ScreenInsets", ScreenInsets.FromValue);
  map.set("SurfaceGuiBase,Face", NormalId.FromValue);
  map.set("AdGui,AdShape", AdShape.FromValue);
  map.set("SurfaceGui,SizingMode", SurfaceGuiSizingMode.FromValue);
  map.set("HandleAdornment,AdornCullingMode", AdornCullingMode.FromValue);
  map.set("Handles,Style", HandlesStyle.FromValue);
  map.set("SurfaceSelection,TargetSurface", NormalId.FromValue);
  map.set("Highlight,DepthMode", HighlightDepthMode.FromValue);
  map.set("Humanoid,CollisionType", HumanoidCollisionType.FromValue);
  map.set("Humanoid,DisplayDistanceType", HumanoidDisplayDistanceType.FromValue);
  map.set("Humanoid,HealthDisplayType", HumanoidHealthDisplayType.FromValue);
  map.set("Humanoid,NameOcclusion", NameOcclusion.FromValue);
  map.set("Humanoid,RigType", HumanoidRigType.FromValue);
  map.set("IKControl,Type", IKControlType.FromValue);
  map.set("SpotLight,Face", NormalId.FromValue);
  map.set("SurfaceLight,Face", NormalId.FromValue);
  map.set("Lighting,Technology", Technology.FromValue);
  map.set("BaseScript,RunContext", RunContext.FromValue);
  map.set("MaterialVariant,BaseMaterial", Material.FromValue);
  map.set("MaterialVariant,MaterialPattern", MaterialPattern.FromValue);
  map.set("Noise,NoiseType", NoiseType.FromValue);
  map.set("BasePart,BackSurface", SurfaceType.FromValue);
  map.set("BasePart,BackSurfaceInput", InputType.FromValue);
  map.set("BasePart,BottomSurface", SurfaceType.FromValue);
  map.set("BasePart,BottomSurfaceInput", InputType.FromValue);
  map.set("BasePart,FrontSurface", SurfaceType.FromValue);
  map.set("BasePart,FrontSurfaceInput", InputType.FromValue);
  map.set("BasePart,LeftSurface", SurfaceType.FromValue);
  map.set("BasePart,LeftSurfaceInput", InputType.FromValue);
  map.set("BasePart,Material", Material.FromValue);
  map.set("BasePart,RightSurface", SurfaceType.FromValue);
  map.set("BasePart,RightSurfaceInput", InputType.FromValue);
  map.set("BasePart,TopSurface", SurfaceType.FromValue);
  map.set("BasePart,TopSurfaceInput", InputType.FromValue);
  map.set("FormFactorPart,FormFactor", FormFactor.FromValue);
  map.set("FormFactorPart,formFactor", FormFactor.FromValue);
  map.set("FormFactorPart,formFactorRaw", FormFactor.FromValue);
  map.set("Part,shape", PartType.FromValue);
  map.set("Terrain,AcquisitionMethod", TerrainAcquisitionMethod.FromValue);
  map.set("TriangleMeshPart,FluidFidelityInternal", FluidFidelity.FromValue);
  map.set("MeshPart,RenderFidelity", RenderFidelity.FromValue);
  map.set("PartOperation,FormFactor", FormFactor.FromValue);
  map.set("PartOperation,RenderFidelity", RenderFidelity.FromValue);
  map.set("TrussPart,style", Style.FromValue);
  map.set("Model,LevelOfDetail", ModelLevelOfDetail.FromValue);
  map.set("Model,ModelStreamingMode", ModelStreamingMode.FromValue);
  map.set("HopperBin,BinType", BinType.FromValue);
  map.set("Workspace,AvatarUnificationMode", AvatarUnificationMode.FromValue);
  map.set("Workspace,CSGAsyncDynamicCollision", CSGAsyncDynamicCollision.FromValue);
  map.set("Workspace,ClientAnimatorThrottling", ClientAnimatorThrottlingMode.FromValue);
  map.set("Workspace,DecreaseMinimumPartDensityMode", DecreaseMinimumPartDensityMode.FromValue);
  map.set("Workspace,EditorLiveScripting", EditorLiveScripting.FromValue);
  map.set("Workspace,FluidForces", FluidForces.FromValue);
  map.set("Workspace,IKControlConstraintSupport", IKControlConstraintSupport.FromValue);
  map.set("Workspace,MeshPartHeadsAndAccessories", MeshPartHeadsAndAccessories.FromValue);
  map.set("Workspace,ModelStreamingBehavior", ModelStreamingBehavior.FromValue);
  map.set("Workspace,PhysicsSteppingMethod", PhysicsSteppingMethod.FromValue);
  map.set("Workspace,PlayerCharacterDestroyBehavior", PlayerCharacterDestroyBehavior.FromValue);
  map.set("Workspace,PrimalPhysicsSolver", PrimalPhysicsSolver.FromValue);
  map.set("Workspace,RejectCharacterDeletions", RejectCharacterDeletions.FromValue);
  map.set("Workspace,ReplicateInstanceDestroySetting", ReplicateInstanceDestroySetting.FromValue);
  map.set("Workspace,Retargeting", AnimatorRetargetingMode.FromValue);
  map.set("Workspace,SignalBehavior2", SignalBehavior.FromValue);
  map.set("Workspace,StreamOutBehavior", StreamOutBehavior.FromValue);
  map.set("Workspace,StreamingIntegrityMode", StreamingIntegrityMode.FromValue);
  map.set("ParticleEmitter,EmissionDirection", NormalId.FromValue);
  map.set("ParticleEmitter,FlipbookLayout", ParticleFlipbookLayout.FromValue);
  map.set("ParticleEmitter,FlipbookMode", ParticleFlipbookMode.FromValue);
  map.set("ParticleEmitter,Orientation", ParticleOrientation.FromValue);
  map.set("ParticleEmitter,Shape", ParticleEmitterShape.FromValue);
  map.set("ParticleEmitter,ShapeInOut", ParticleEmitterShapeInOut.FromValue);
  map.set("ParticleEmitter,ShapeStyle", ParticleEmitterShapeStyle.FromValue);
  map.set("Player,CameraMode", CameraMode.FromValue);
  map.set("Player,DevCameraOcclusionMode", DevCameraOcclusionMode.FromValue);
  map.set("Player,DevComputerCameraMode", DevComputerCameraMovementMode.FromValue);
  map.set("Player,DevComputerMovementMode", DevComputerMovementMode.FromValue);
  map.set("Player,DevTouchCameraMode", DevTouchCameraMovementMode.FromValue);
  map.set("Player,DevTouchMovementMode", DevTouchMovementMode.FromValue);
  map.set("PolicyService,IsLuobuServer", TriStateBoolean.FromValue);
  map.set("PolicyService,LuobuWhitelisted", TriStateBoolean.FromValue);
  map.set("PoseBase,EasingDirection", PoseEasingDirection.FromValue);
  map.set("PoseBase,EasingStyle", PoseEasingStyle.FromValue);
  map.set("ProximityPrompt,Exclusivity", ProximityPromptExclusivity.FromValue);
  map.set("ProximityPrompt,GamepadKeyCode", KeyCode.FromValue);
  map.set("ProximityPrompt,KeyboardKeyCode", KeyCode.FromValue);
  map.set("ProximityPrompt,Style", ProximityPromptStyle.FromValue);
  map.set("ReflectionMetadataClass,ServiceVisibility", ServiceVisibility.FromValue);
  map.set("RenderSettings,EditQualityLevel", QualityLevel.FromValue);
  map.set("RenderSettings,FrameRateManager", FramerateManagerMode.FromValue);
  map.set("RenderSettings,GraphicsMode", GraphicsMode.FromValue);
  map.set("RenderSettings,MeshPartDetailLevel", MeshPartDetailLevel.FromValue);
  map.set("RenderSettings,QualityLevel", QualityLevel.FromValue);
  map.set("RenderSettings,ViewMode", ViewMode.FromValue);
  map.set("RenderingTest,ComparisonMethod", RenderingTestComparisonMethod.FromValue);
  map.set("SensorBase,UpdateType", SensorUpdateType.FromValue);
  map.set("ControllerPartSensor,SensorMode", SensorMode.FromValue);
  map.set("Sound,RollOffMode", RollOffMode.FromValue);
  map.set("SoundService,AmbientReverb", ReverbType.FromValue);
  map.set("SoundService,VolumetricAudio", VolumetricAudio.FromValue);
  map.set("StarterPlayer,AvatarJointUpgrade_Serialized", AvatarJointUpgrade.FromValue);
  map.set("StarterPlayer,CameraMode", CameraMode.FromValue);
  map.set("StarterPlayer,DevCameraOcclusionMode", DevCameraOcclusionMode.FromValue);
  map.set("StarterPlayer,DevComputerCameraMovementMode", DevComputerCameraMovementMode.FromValue);
  map.set("StarterPlayer,DevComputerMovementMode", DevComputerMovementMode.FromValue);
  map.set("StarterPlayer,DevTouchCameraMovementMode", DevTouchCameraMovementMode.FromValue);
  map.set("StarterPlayer,DevTouchMovementMode", DevTouchMovementMode.FromValue);
  map.set("StarterPlayer,EnableDynamicHeads", LoadDynamicHeads.FromValue);
  map.set("StarterPlayer,GameSettingsAvatar", GameAvatarType.FromValue);
  map.set("StarterPlayer,GameSettingsR15Collision", R15CollisionType.FromValue);
  map.set("StarterPlayer,LoadCharacterLayeredClothing", LoadCharacterLayeredClothing.FromValue);
  map.set("StarterPlayer,LuaCharacterController", CharacterControlMode.FromValue);
  map.set("SurfaceAppearance,AlphaMode", AlphaMode.FromValue);
  map.set("TaskScheduler,ThreadPoolConfig", ThreadPoolConfig.FromValue);
  map.set("TerrainDetail,Face", TerrainFace.FromValue);
  map.set("TerrainDetail,MaterialPattern", MaterialPattern.FromValue);
  map.set("BubbleChatConfiguration,Font", Font.FromValue);
  map.set("ChatInputBarConfiguration,KeyboardKeyCode", KeyCode.FromValue);
  map.set("ChatWindowConfiguration,HorizontalAlignment", HorizontalAlignment.FromValue);
  map.set("ChatWindowConfiguration,VerticalAlignment", VerticalAlignment.FromValue);
  map.set("TextChatService,ChatVersion", ChatVersion.FromValue);
  map.set("Trail,TextureMode", TextureMode.FromValue);
  map.set("UIAspectRatioConstraint,AspectType", AspectType.FromValue);
  map.set("UIAspectRatioConstraint,DominantAxis", DominantAxis.FromValue);
  map.set("UIFlexItem,FlexMode", UIFlexMode.FromValue);
  map.set("UIFlexItem,ItemLineAlignment", ItemLineAlignment.FromValue);
  map.set("UIGridStyleLayout,FillDirection", FillDirection.FromValue);
  map.set("UIGridStyleLayout,HorizontalAlignment", HorizontalAlignment.FromValue);
  map.set("UIGridStyleLayout,SortOrder", SortOrder.FromValue);
  map.set("UIGridStyleLayout,VerticalAlignment", VerticalAlignment.FromValue);
  map.set("UIGridLayout,StartCorner", StartCorner.FromValue);
  map.set("UIListLayout,HorizontalFlex", UIFlexAlignment.FromValue);
  map.set("UIListLayout,ItemLineAlignment", ItemLineAlignment.FromValue);
  map.set("UIListLayout,VerticalFlex", UIFlexAlignment.FromValue);
  map.set("UIPageLayout,EasingDirection", EasingDirection.FromValue);
  map.set("UIPageLayout,EasingStyle", EasingStyle.FromValue);
  map.set("UITableLayout,MajorAxis", TableMajorAxis.FromValue);
  map.set("UIStroke,ApplyStrokeMode", ApplyStrokeMode.FromValue);
  map.set("UIStroke,LineJoinMode", LineJoinMode.FromValue);
  map.set("UserInputService,MouseBehavior", MouseBehavior.FromValue);
  map.set("VRService,AutomaticScaling", VRScaling.FromValue);
  map.set("VideoDeviceInput,CaptureQuality", VideoDeviceCaptureQuality.FromValue);
  map.set("VoiceChatService,UseAudioApi", AudioApiRollout.FromValue);
  return map;
}

// src/lib/roblox_file_reader.ts
var RobloxFileDOMReader = class extends RobloxFileDOM {
  data = new RobloxFileByteReader();
  enumMap = new EnumMap();
  classMap = new ClassMap();
  model = new RobloxFile();
  /**
   * This will parse the DOM and create a RobloxModel object.
   * If the DOM is not valid, this will return null.
   * @param .rbxm bytes
   * @returns a Roblox model or null if the DOM is invalid.
   */
  read(data) {
    this.data = new RobloxFileByteReader(data);
    this.model = new RobloxFile();
    this.classIdToInfo.clear();
    this.referentIdToClassId.clear();
    if (!this.readHeader()) {
      return null;
    }
    let chunkType;
    do {
      chunkType = this.readChunk();
    } while (chunkType !== "END\0" /* END */);
    this.findRoots();
    if (this.model.Roots.length === 0)
      return null;
    return this.model;
  }
  findRoots() {
    for (const classInfo of this.classIdToInfo.values()) {
      for (const instance of classInfo.instances) {
        if (!instance.Parent) {
          this.model.AddRoot(instance);
        }
      }
    }
  }
  readHeader() {
    if (this.data.length < 48) {
      return false;
    }
    const magicBytes = this.data.getBytesAsString(this.MAGIC_HEADER.length);
    if (magicBytes !== this.MAGIC_HEADER) {
      return false;
    }
    this.data.getUint16();
    this.data.getInt32();
    this.data.getInt32();
    this.data.skipBytes(8);
    return true;
  }
  readChunk() {
    const { chunkType, compressedLength, uncompressedLength } = this.readChunkHeader();
    this.readChunkContent(chunkType, compressedLength, uncompressedLength);
    return chunkType;
  }
  readChunkHeader() {
    const chunkType = this.data.getBytesAsString(4);
    const compressedLength = this.data.getUint32();
    const uncompressedLength = this.data.getUint32();
    this.data.skipBytes(4);
    return { chunkType, compressedLength, uncompressedLength };
  }
  readChunkContent(chunkType, compressedLength, uncompressedLength) {
    if (chunkType === "END\0" /* END */) {
      return;
    }
    const bytes = this.readChunkContentBytes(compressedLength, uncompressedLength);
    switch (chunkType) {
      case "META" /* META */:
        this.readMetaChunk(bytes);
        break;
      case "SSTR" /* SSTR */:
        this.readSstrChunk(bytes);
        break;
      case "INST" /* INST */:
        this.readInstChunk(bytes);
        break;
      case "PROP" /* PROP */:
        this.readPropChunk(bytes);
        break;
      case "PRNT" /* PRNT */:
        this.readPrntChunk(bytes);
        break;
    }
  }
  readChunkContentBytes(compressedLength, uncompressedLength) {
    let byteArray;
    if (compressedLength !== 0) {
      const compressedBytes = this.data.getBytes(compressedLength);
      byteArray = Buffer.allocUnsafe(uncompressedLength);
      if (compressedBytes[0] === 40 && compressedBytes[1] === 181 && compressedBytes[2] === 47 && compressedBytes[3] === 253) {
        fzstd.decompress(compressedBytes, byteArray);
      } else {
        import_lz4.default.decodeBlock(Buffer.from(compressedBytes), byteArray);
      }
    } else {
      byteArray = this.data.getBytes(uncompressedLength);
    }
    return new RobloxFileByteReader(byteArray);
  }
  readMetaChunk(bytes) {
    const entries = bytes.getUint32();
    for (let i = 0; i < entries; ++i) {
      const key = bytes.getString();
      const value = bytes.getString();
      this.model.Metadata.set(key, value);
    }
  }
  readSstrChunk(bytes) {
    bytes.getUint32();
    const count = bytes.getUint32();
    for (let i = 0; i < count; ++i) {
      const hash = bytes.getBytesAsString(16);
      const sharedString = bytes.getString();
      this.model.SharedStrings.push(new SharedString(sharedString, hash));
    }
  }
  readInstChunk(bytes) {
    const classId = bytes.getUint32();
    const className = bytes.getString();
    const isService = bytes.getBool();
    const numInstances = bytes.getUint32();
    const referents = bytes.getReferentArray(numInstances);
    const referentIdToIndex = /* @__PURE__ */ new Map();
    const instances = new Array();
    const classFactory = this.classMap.getFactory(className);
    referents.forEach((referent, index) => {
      referentIdToIndex.set(referent, index);
      this.referentIdToClassId.set(referent, classId);
      const instance = classFactory ? classFactory() : new CoreInstance(isService, className);
      instances.push(instance);
      this.model.ReferentMap.set(instance, referent);
    });
    this.classIdToInfo.set(classId, {
      name: className,
      isService,
      instances,
      referentIdToIndex
    });
  }
  readPropChunk(bytes) {
    const classId = bytes.getUint32();
    const propName = bytes.getString();
    const dataType = bytes.getUint8();
    const parser = this.dataTypeParsers.get(dataType);
    if (!parser)
      return;
    const classInfo = this.classIdToInfo.get(classId);
    if (!classInfo)
      return;
    const numInstances = classInfo.instances.length;
    const values = [];
    let extraInfo;
    if (dataType === 18 /* Enum */) {
      extraInfo = { enumFactory: this.getEnumFactory(classInfo.name, propName) };
    } else if (dataType === 19 /* Referent */) {
      extraInfo = { getInstanceFromReferent: this.getInstanceFromReferent.bind(this) };
    }
    parser.read(bytes, numInstances, values, extraInfo);
    values.forEach((value, index) => {
      if (value !== void 0) {
        const instance = classInfo.instances[index];
        instance.SetProp(propName, value.type, value.value);
      }
    });
  }
  getEnumFactory(className, propName) {
    const classFactory = this.classMap.getFactory(className);
    if (classFactory) {
      const fakeInstance = classFactory();
      for (const inheritedClassName of fakeInstance.ClassNameList) {
        const enumFactory = this.enumMap.getFactory(inheritedClassName, propName);
        if (enumFactory) {
          return enumFactory;
        }
      }
    }
    return void 0;
  }
  readPrntChunk(bytes) {
    bytes.getUint8();
    const numInstances = bytes.getInt32();
    const children = bytes.getReferentArray(numInstances);
    const parents = bytes.getReferentArray(numInstances);
    for (let i = 0; i < numInstances; ++i) {
      const childRef = children[i];
      const parentRef = parents[i];
      if (childRef === -1 || parentRef === -1)
        continue;
      const child = this.getInstanceFromReferent(childRef);
      const parent = this.getInstanceFromReferent(parentRef);
      if (!child || !parent)
        continue;
      child.Parent = parent;
    }
  }
  getInstanceFromReferent(referent) {
    if (referent === -1)
      return null;
    const classId = this.referentIdToClassId.get(referent);
    if (classId === void 0)
      return null;
    const classInfo = this.classIdToInfo.get(classId);
    if (!classInfo)
      return null;
    const index = classInfo.referentIdToIndex.get(referent);
    if (index === void 0)
      return null;
    return classInfo.instances[index];
  }
};

// src/lib/roblox_file_writer.ts
var import_lz42 = __toESM(require("lz4"));
var RobloxFileDOMWriter = class extends RobloxFileDOM {
  model;
  bytesArray = [];
  numBytes = 0;
  instToRefId = /* @__PURE__ */ new Map();
  instToClassId = /* @__PURE__ */ new Map();
  sortedClassIds = [];
  numInstances = 0;
  numClasses = 0;
  constructor(model) {
    super();
    this.model = model;
    this.instToRefId = model.ReferentMap;
  }
  write() {
    this.setup();
    this.writeHeader();
    const metaBytes = this.writeMetaChunk();
    const classWriter = new RobloxFileByteWriter();
    for (const classId of this.sortedClassIds) {
      classWriter.putBytes(this.writeInstChunk(classId, this.classIdToInfo.get(classId)));
    }
    const classBytes = classWriter.bytes;
    const propWriter = new RobloxFileByteWriter();
    for (const classId of this.sortedClassIds) {
      const info = this.classIdToInfo.get(classId);
      const props = this.collectProperties(info.instances);
      for (const prop of props) {
        propWriter.putBytes(this.writePropChunk(classId, info.instances, prop.name, prop.type));
      }
    }
    const propBytes = propWriter.bytes;
    const sstrBytes = this.writeSstrChunk();
    const prntBytes = this.writePrntChunk();
    const endBytes = this.writeEndChunk();
    this.writeBytes(metaBytes);
    this.writeBytes(sstrBytes);
    this.writeBytes(classBytes);
    this.writeBytes(propBytes);
    this.writeBytes(prntBytes);
    this.writeBytes(endBytes);
    const buf = Buffer.allocUnsafe(this.numBytes);
    let i = 0;
    for (const bytes of this.bytesArray) {
      for (const byte of bytes) {
        buf[i] = byte;
        ++i;
      }
    }
    return buf;
  }
  collectProperties(instances) {
    const props = /* @__PURE__ */ new Map();
    const sortedProps = [];
    for (const inst of instances) {
      for (const [name, value] of inst.Props) {
        if (!props.has(name)) {
          props.set(name, value.type);
          sortedProps.push({ name, type: value.type });
        } else if (props.get(name) !== value.type) {
          throw new Error(`Found instances with non-unique property types (class ${inst.ClassName}, property: ${name}, types: ${DataType[props.get(name)]} and ${DataType[value.type]})`);
        }
      }
    }
    sortedProps.sort((prop1, prop2) => prop1.name > prop2.name ? 1 : -1);
    return sortedProps;
  }
  setup() {
    let lastReferent = -1;
    for (const referent of this.instToRefId.values()) {
      if (referent > lastReferent) {
        lastReferent = referent;
      }
    }
    const instances = this.model.GetAllDescendants();
    this.numInstances = instances.length;
    const classNameToId = /* @__PURE__ */ new Map();
    let lastClassId = -1;
    for (const instance of instances) {
      let refId;
      if (!this.instToRefId.has(instance)) {
        ++lastReferent;
        this.instToRefId.set(instance, lastReferent);
        refId = lastReferent;
      } else {
        refId = this.instToRefId.get(instance);
      }
      if (!classNameToId.has(instance.ClassName)) {
        ++lastClassId;
        classNameToId.set(instance.ClassName, lastClassId);
        this.classIdToInfo.set(lastClassId, {
          name: instance.ClassName,
          isService: instance.IsService,
          instances: [instance],
          referentIdToIndex: /* @__PURE__ */ new Map([[refId, 0]])
        });
        this.sortedClassIds.push(lastClassId);
      } else {
        const classId = classNameToId.get(instance.ClassName);
        const info = this.classIdToInfo.get(classId);
        info.instances.push(instance);
        info.referentIdToIndex.set(refId, info.instances.length - 1);
      }
    }
    this.numClasses = this.classIdToInfo.size;
    this.sortedClassIds.sort((id1, id2) => this.classIdToInfo.get(id1).name > this.classIdToInfo.get(id2).name ? 1 : -1);
  }
  writeBytes(bytes) {
    this.numBytes += bytes.length;
    this.bytesArray.push(bytes);
  }
  writeHeader() {
    const writer = new RobloxFileByteWriter();
    writer.putStringAsBytes(this.MAGIC_HEADER);
    writer.putUint16(0);
    writer.putInt32(this.numClasses);
    writer.putInt32(this.numInstances);
    writer.putBytes(new Uint8Array(8));
    this.writeBytes(writer.bytes);
  }
  writeChunk(type, data) {
    const writer = new RobloxFileByteWriter();
    const { compressedLength, uncompressedLength, bytes } = this.compressData(type, data);
    writer.putStringAsBytes(type);
    writer.putUint32(compressedLength);
    writer.putUint32(uncompressedLength);
    writer.putBytes(new Uint8Array(4));
    writer.putBytes(bytes);
    return writer.bytes;
  }
  compressData(type, data) {
    if (type === "END\0" /* END */) {
      return {
        compressedLength: 0,
        uncompressedLength: data.length,
        bytes: data
      };
    }
    const bytes = Buffer.alloc(import_lz42.default.encodeBound(data.length));
    const size = import_lz42.default.encodeBlock(Buffer.from(data), bytes);
    return {
      compressedLength: size,
      uncompressedLength: data.length,
      bytes: bytes.subarray(0, size)
    };
  }
  writeMetaChunk() {
    if (this.model.Metadata.size < 1) {
      return new Uint8Array();
    }
    const writer = new RobloxFileByteWriter();
    writer.putUint32(this.model.Metadata.size);
    for (const [key, value] of this.model.Metadata) {
      writer.putString(key);
      writer.putString(value);
    }
    return this.writeChunk("META" /* META */, writer.bytes);
  }
  writeSstrChunk() {
    if (this.model.SharedStrings.length < 1) {
      return new Uint8Array();
    }
    const writer = new RobloxFileByteWriter();
    writer.putUint32(0);
    writer.putUint32(this.model.SharedStrings.length);
    for (const sharedString of this.model.SharedStrings) {
      writer.putBytes(sharedString.Hash);
      writer.putString(sharedString.Value);
    }
    return this.writeChunk("SSTR" /* SSTR */, writer.bytes);
  }
  writeInstChunk(classId, info) {
    const writer = new RobloxFileByteWriter();
    writer.putUint32(classId);
    writer.putString(info.name);
    writer.putBool(info.isService);
    writer.putUint32(info.instances.length);
    const refs = [];
    for (const inst of info.instances) {
      refs.push(this.instToRefId.get(inst));
    }
    writer.putReferentArray(refs);
    return this.writeChunk("INST" /* INST */, writer.bytes);
  }
  writePropChunk(classId, instances, propName, type) {
    const parser = this.dataTypeParsers.get(type);
    if (!parser)
      return new Uint8Array();
    const writer = new RobloxFileByteWriter();
    writer.putUint32(classId);
    writer.putString(propName);
    writer.putUint8(type);
    let info;
    if (type === 19 /* Referent */) {
      info = { getReferentFromInstance: (instance) => this.instToRefId.get(instance) ?? -1 };
    } else if (type === 28 /* SharedString */) {
      info = { sharedStrings: this.model.SharedStrings };
    }
    parser.write(writer, instances.map((inst) => inst.Props.get(propName)), info);
    return this.writeChunk("PROP" /* PROP */, writer.bytes);
  }
  writePrntChunk() {
    const writer = new RobloxFileByteWriter();
    writer.putUint8(0);
    writer.putUint32(this.numInstances);
    const sortedInsts = Array.from(this.instToRefId.keys());
    sortedInsts.sort((inst1, inst2) => this.instToRefId.get(inst1) - this.instToRefId.get(inst2));
    const childRefs = [];
    const parentRefs = [];
    for (const inst of sortedInsts) {
      const ref = this.instToRefId.get(inst);
      childRefs.push(ref);
      const parentRef = inst.Parent ? this.instToRefId.get(inst.Parent) : -1;
      parentRefs.push(parentRef);
    }
    writer.putReferentArray(childRefs);
    writer.putReferentArray(parentRefs);
    return this.writeChunk("PRNT" /* PRNT */, writer.bytes);
  }
  writeEndChunk() {
    const writer = new RobloxFileByteWriter();
    writer.putStringAsBytes(this.MAGIC_END);
    return this.writeChunk("END\0" /* END */, writer.bytes);
  }
};

// src/lib/roblox_file.ts
var RobloxFile = class _RobloxFile extends ChildContainer {
  Metadata = /* @__PURE__ */ new Map();
  SharedStrings = [];
  /**
   * This is used when loading and then saving a file to keep the references to instances consistent.
   * You probably shouldn't mess with this.
   */
  ReferentMap = /* @__PURE__ */ new Map();
  /**
   * The root instances of this file. This is a readonly array, to add or remove an instance
   * use AddToRoots and RemoveFromRoots
   */
  get Roots() {
    return Array.from(this._children.values());
  }
  /**
   * Adds the given instance as a root of this file.
   * @param instance the instance
   */
  AddRoot(instance) {
    this._children.add(instance);
  }
  /**
   * Removes the given instance as a root of this file.
   * @param instance the instance
   */
  RemoveFromRoots(instance) {
    this._children.delete(instance);
  }
  WriteToBuffer() {
    return new RobloxFileDOMWriter(this).write();
  }
  /**
   * Create a RobloxFile from an asset ID. The uses the Roblox AssetDelivery web API
   * to download the model using the given ID. If the provided asset ID is not a model,
   * this will return null. This may throw an error if there are problems accessing the API endpoint.
   * @param assetId the ID of the model
   * @returns a Roblox file object or null if the asset ID is not a valid model.
   * @example const model = await RobloxFile.ReadFromAssetId(4249137687);
   */
  static async ReadFromAssetId(assetId) {
    const res = await import_axios.default.get("https://assetdelivery.roblox.com/v2/asset/", {
      params: { id: assetId },
      validateStatus: (status) => status === 404 || status >= 200 && status < 300
    });
    if (res.status === 404) {
      return null;
    }
    const data = res.data;
    if (data.assetTypeId !== 10) {
      return null;
    }
    const location = data.locations[0].location;
    const modelDomRes = await import_axios.default.get(location, { responseEncoding: "binary", responseType: "arraybuffer" });
    return _RobloxFile.ReadFromBuffer(modelDomRes.data);
  }
  /**
   * Create a RobloxFile from a buffer. You could use fs.readFile
   * to load a .rbxm file then pass the result to this function to load it.
   * @param buffer a data buffer
   * @returns a Roblox file object
   * @example const file = RobloxFile.ReadFromBuffer(fs.readFileSync("my_file.rbxm"));
   */
  static ReadFromBuffer(buffer) {
    const data = Uint8Array.from(buffer);
    return new RobloxFileDOMReader().read(data);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AccessModifierType,
  Accessory,
  AccessoryDescription,
  AccessoryType,
  AccountService,
  Accoutrement,
  ActivityHistoryService,
  Actor,
  ActuatorRelativeTo,
  ActuatorType,
  AdGui,
  AdPortal,
  AdService,
  AdShape,
  AdornCullingMode,
  AdvancedDragger,
  AirController,
  AlignOrientation,
  AlignPosition,
  AlignType,
  AlphaMode,
  AnalyticsService,
  AngularVelocity,
  Animation,
  AnimationClip,
  AnimationClipProvider,
  AnimationConstraint,
  AnimationController,
  AnimationFromVideoCreatorService,
  AnimationFromVideoCreatorStudioService,
  AnimationPriority,
  AnimationRigData,
  Animator,
  AnimatorRetargetingMode,
  AppStorageService,
  AppUpdateService,
  ApplyStrokeMode,
  ArcHandles,
  AspectType,
  AssetCounterService,
  AssetDeliveryProxy,
  AssetImportService,
  AssetManagerService,
  AssetService,
  Atmosphere,
  Attachment,
  AudioAnalyzer,
  AudioApiRollout,
  AudioChorus,
  AudioCompressor,
  AudioDeviceInput,
  AudioDeviceOutput,
  AudioDistortion,
  AudioEcho,
  AudioEmitter,
  AudioEqualizer,
  AudioFader,
  AudioFlanger,
  AudioListener,
  AudioPitchShifter,
  AudioPlayer,
  AudioReverb,
  AudioSearchParams,
  AudioSubType,
  AutomaticSize,
  AvatarChatService,
  AvatarCreationService,
  AvatarEditorService,
  AvatarImportService,
  AvatarJointUpgrade,
  AvatarUnificationMode,
  Axes,
  Backpack,
  BackpackItem,
  BadgeService,
  BallSocketConstraint,
  BasePart,
  BasePlayerGui,
  BaseRemoteEvent,
  BaseScript,
  BaseWrap,
  Beam,
  BevelMesh,
  BillboardGui,
  BinType,
  BinaryStringValue,
  BindableEvent,
  BindableFunction,
  BlockMesh,
  BloomEffect,
  BlurEffect,
  BodyAngularVelocity,
  BodyColors,
  BodyForce,
  BodyGyro,
  BodyMover,
  BodyPart,
  BodyPartDescription,
  BodyPosition,
  BodyThrust,
  BodyVelocity,
  Bone,
  BoolValue,
  BorderMode,
  BoxHandleAdornment,
  Breakpoint,
  BrickColorValue,
  BrowserService,
  BubbleChatConfiguration,
  BubbleChatMessageProperties,
  BulkImportService,
  BuoyancySensor,
  ButtonStyle,
  CFrame,
  CFrameValue,
  CSGAsyncDynamicCollision,
  CSGDictionaryService,
  CacheableContentProvider,
  CalloutService,
  Camera,
  CameraMode,
  CameraType,
  CanvasGroup,
  CaptureService,
  ChangeHistoryService,
  CharacterAppearance,
  CharacterControlMode,
  CharacterMesh,
  Chat,
  ChatInputBarConfiguration,
  ChatVersion,
  ChatWindowConfiguration,
  ChatbotUIService,
  ChorusSoundEffect,
  ClassMap,
  ClickDetector,
  ClientAnimatorThrottlingMode,
  ClimbController,
  Clothing,
  Clouds,
  ClusterPacketCache,
  CollaboratorsService,
  CollectionService,
  Color3,
  Color3Value,
  ColorCorrectionEffect,
  ColorSequence,
  ColorSequenceKeypoint,
  CommandService,
  CommerceService,
  CompressorSoundEffect,
  ConeHandleAdornment,
  Configuration,
  ConfigureServerService,
  ConnectivityService,
  Constraint,
  ContentProvider,
  ContextActionService,
  Controller,
  ControllerBase,
  ControllerManager,
  ControllerPartSensor,
  ControllerSensor,
  ControllerService,
  ConversationalAIAcceptanceService,
  CookiesService,
  CoreGui,
  CoreInstance,
  CorePackages,
  CoreScriptDebuggingManagerHelper,
  CoreScriptSyncService,
  CornerWedgePart,
  CreationDBService,
  CrossDMScriptChangeListener,
  CurveAnimation,
  CustomEvent,
  CustomEventReceiver,
  CylinderHandleAdornment,
  CylinderMesh,
  CylindricalConstraint,
  DataModelMesh,
  DataModelPatchService,
  DataStoreGetOptions,
  DataStoreIncrementOptions,
  DataStoreOptions,
  DataStoreService,
  DataStoreSetOptions,
  DataType,
  Debris,
  DebuggablePluginWatcher,
  DebuggerConnectionManager,
  DebuggerManager,
  DebuggerUIService,
  DebuggerWatch,
  Decal,
  DecreaseMinimumPartDensityMode,
  DepthOfFieldEffect,
  DevCameraOcclusionMode,
  DevComputerCameraMovementMode,
  DevComputerMovementMode,
  DevTouchCameraMovementMode,
  DevTouchMovementMode,
  DeviceIdService,
  Dialog,
  DialogBehaviorType,
  DialogChoice,
  DialogPurpose,
  DialogTone,
  DistortionSoundEffect,
  DominantAxis,
  DoubleConstrainedValue,
  DraftsService,
  DragDetector,
  DragDetectorDragStyle,
  DragDetectorPermissionPolicy,
  DragDetectorResponseStyle,
  Dragger,
  DraggerService,
  DynamicRotate,
  EasingDirection,
  EasingStyle,
  EchoSoundEffect,
  EditableImage,
  EditableMesh,
  EditorLiveScripting,
  ElasticBehavior,
  EngineAPICloudProcessingService,
  EnumItem,
  EnumMap,
  EqualizerSoundEffect,
  EulerRotationCurve,
  EventIngestService,
  ExampleService,
  ExperienceAuthService,
  ExperienceInviteOptions,
  ExperienceNotificationService,
  ExperienceService,
  ExperienceStateCaptureService,
  Explosion,
  ExplosionType,
  FaceAnimatorService,
  FaceControls,
  FaceInstance,
  Faces,
  FacialAnimationRecordingService,
  FacialAnimationStreamingServiceV2,
  Feature,
  FieldOfViewMode,
  FileMesh,
  FillDirection,
  Fire,
  Flag,
  FlagStand,
  FlagStandService,
  FlangeSoundEffect,
  FloatCurve,
  FloorWire,
  FluidFidelity,
  FluidForces,
  FlyweightService,
  Folder,
  Font,
  FontSize,
  FontStyle,
  FontWeight,
  ForceField,
  ForceLimitMode,
  FormFactor,
  FormFactorPart,
  Frame,
  FrameStyle,
  FramerateManagerMode,
  FriendService,
  FunctionalTest,
  GameAvatarType,
  GamePassService,
  GamepadService,
  GenericChallengeService,
  Geometry,
  GeometryService,
  GetTextBoundsParams,
  Glue,
  GoogleAnalyticsConfiguration,
  GraphicsMode,
  GroundController,
  GroupService,
  GuiBase,
  GuiBase2d,
  GuiBase3d,
  GuiButton,
  GuiLabel,
  GuiMain,
  GuiObject,
  GuiService,
  GuidRegistryService,
  HSRDataContentProvider,
  HandleAdornment,
  Handles,
  HandlesBase,
  HandlesStyle,
  HapticService,
  Hat,
  HeightmapImporterService,
  HiddenSurfaceRemovalAsset,
  Highlight,
  HighlightDepthMode,
  HingeConstraint,
  Hint,
  Hole,
  Hopper,
  HopperBin,
  HorizontalAlignment,
  HttpRbxApiService,
  HttpService,
  Humanoid,
  HumanoidCollisionType,
  HumanoidController,
  HumanoidDescription,
  HumanoidDisplayDistanceType,
  HumanoidHealthDisplayType,
  HumanoidRigType,
  IKControl,
  IKControlConstraintSupport,
  IKControlType,
  ILegacyStudioBridge,
  IXPService,
  ImageButton,
  ImageHandleAdornment,
  ImageLabel,
  InOut,
  IncrementalPatchBuilder,
  InputType,
  InsertService,
  Instance,
  InstanceAdornment,
  IntConstrainedValue,
  IntValue,
  InternalSyncItem,
  InternalSyncService,
  IntersectOperation,
  ItemLineAlignment,
  JointInstance,
  JointsService,
  KeyCode,
  KeyboardService,
  Keyframe,
  KeyframeMarker,
  KeyframeSequence,
  KeyframeSequenceProvider,
  LSPFileSyncService,
  LanguageService,
  LayerCollector,
  LeftRight,
  LegacyStudioBridge,
  Light,
  Lighting,
  LineForce,
  LineHandleAdornment,
  LineJoinMode,
  LinearVelocity,
  LiveScriptingService,
  LoadCharacterLayeredClothing,
  LoadDynamicHeads,
  LocalScript,
  LocalStorageService,
  LocalizationService,
  LocalizationTable,
  LodDataService,
  LogReporterService,
  LogService,
  LoginService,
  LuaSourceContainer,
  LuaWebService,
  LuauScriptAnalyzerService,
  ManualGlue,
  ManualSurfaceJointInstance,
  ManualWeld,
  MarkerCurve,
  MarketplaceService,
  Material,
  MaterialGenerationService,
  MaterialPattern,
  MaterialService,
  MaterialVariant,
  MemStorageService,
  MemoryStoreService,
  MeshContentProvider,
  MeshPart,
  MeshPartDetailLevel,
  MeshPartHeadsAndAccessories,
  MeshType,
  Message,
  MessageBusService,
  MessagingService,
  MetaBreakpointManager,
  Model,
  ModelLevelOfDetail,
  ModelStreamingBehavior,
  ModelStreamingMode,
  ModuleScript,
  Motor,
  Motor6D,
  MotorFeature,
  MouseBehavior,
  MouseService,
  NameOcclusion,
  NegateOperation,
  NetworkClient,
  NetworkPeer,
  NetworkServer,
  NetworkSettings,
  NoCollisionConstraint,
  Noise,
  NoiseType,
  NonReplicatedCSGDictionaryService,
  NormalId,
  NotificationService,
  NumberPose,
  NumberRange,
  NumberSequence,
  NumberSequenceKeypoint,
  NumberValue,
  ObjectValue,
  OmniRecommendationsService,
  OpenCloudService,
  OperationGraph,
  OrientationAlignmentMode,
  PVAdornment,
  PVInstance,
  PackageService,
  PackageUIService,
  Pants,
  ParabolaAdornment,
  Part,
  PartAdornment,
  PartOperation,
  PartOperationAsset,
  PartType,
  ParticleEmitter,
  ParticleEmitterShape,
  ParticleEmitterShapeInOut,
  ParticleEmitterShapeStyle,
  ParticleFlipbookLayout,
  ParticleFlipbookMode,
  ParticleOrientation,
  PatchBundlerFileWatch,
  Path2D,
  PathfindingLink,
  PathfindingModifier,
  PathfindingService,
  PermissionsService,
  PhysicalProperties,
  PhysicsService,
  PhysicsSteppingMethod,
  PitchShiftSoundEffect,
  PlaceStatsService,
  PlacesService,
  Plane,
  PlaneConstraint,
  PlatformCloudStorageService,
  PlatformFriendsService,
  Player,
  PlayerCharacterDestroyBehavior,
  PlayerEmulatorService,
  PlayerViewService,
  Players,
  PluginAction,
  PluginCapabilities,
  PluginDebugService,
  PluginGuiService,
  PluginManagementService,
  PluginPolicyService,
  PointLight,
  PointsService,
  PolicyService,
  Pose,
  PoseBase,
  PoseEasingDirection,
  PoseEasingStyle,
  PositionAlignmentMode,
  PostEffect,
  PrimalPhysicsSolver,
  PrismaticConstraint,
  ProcessInstancePhysicsService,
  ProjectFolderService,
  ProximityPrompt,
  ProximityPromptExclusivity,
  ProximityPromptService,
  ProximityPromptStyle,
  PublishService,
  QualityLevel,
  R15CollisionType,
  RBXMAxis,
  RBXMFace,
  RBXMFont,
  Ray,
  RayValue,
  RbxAnalyticsService,
  Rect,
  ReflectionMetadata,
  ReflectionMetadataCallbacks,
  ReflectionMetadataClass,
  ReflectionMetadataClasses,
  ReflectionMetadataEnum,
  ReflectionMetadataEnumItem,
  ReflectionMetadataEnums,
  ReflectionMetadataEvents,
  ReflectionMetadataFunctions,
  ReflectionMetadataItem,
  ReflectionMetadataMember,
  ReflectionMetadataProperties,
  ReflectionMetadataYieldFunctions,
  ReflectionService,
  RejectCharacterDeletions,
  RemoteCursorService,
  RemoteDebuggerServer,
  RemoteEvent,
  RemoteFunction,
  RenderFidelity,
  RenderSettings,
  RenderingTest,
  RenderingTestComparisonMethod,
  ReplicateInstanceDestroySetting,
  ReplicatedFirst,
  ReplicatedStorage,
  ResamplerMode,
  ReverbSoundEffect,
  ReverbType,
  RibbonNotificationService,
  RigidConstraint,
  RobloxEditableImage,
  RobloxEditableMesh,
  RobloxFile,
  RobloxPluginGuiService,
  RobloxReplicatedStorage,
  RobloxServerStorage,
  RocketPropulsion,
  RodConstraint,
  RollOffMode,
  RomarkService,
  RopeConstraint,
  Rotate,
  RotateP,
  RotateV,
  RotationCurve,
  RotationOrder,
  RtMessagingService,
  RtlTextSupport,
  RunContext,
  RunService,
  RuntimeScriptService,
  SafeAreaCompatibility,
  SafetyService,
  ScaleType,
  ScreenGui,
  ScreenInsets,
  ScreenOrientation,
  Script,
  ScriptChangeService,
  ScriptCloneWatcher,
  ScriptCloneWatcherHelper,
  ScriptCommitService,
  ScriptContext,
  ScriptEditorService,
  ScriptProfilerService,
  ScriptRegistrationService,
  ScriptService,
  ScrollBarInset,
  ScrollingDirection,
  ScrollingFrame,
  Seat,
  Selection,
  SelectionBehavior,
  SelectionBox,
  SelectionHighlightManager,
  SelectionLasso,
  SelectionPartLasso,
  SelectionPointLasso,
  SelectionSphere,
  SensorBase,
  SensorMode,
  SensorUpdateType,
  ServerScriptService,
  ServerStorage,
  ServiceVisibility,
  ServiceVisibilityService,
  SessionService,
  SharedString,
  SharedStringValue,
  SharedTableRegistry,
  Shirt,
  ShirtGraphic,
  ShorelineUpgraderService,
  SignalBehavior,
  SizeConstraint,
  SkateboardController,
  SkateboardPlatform,
  Skin,
  Sky,
  SlidingBallConstraint,
  Smoke,
  SmoothVoxelsUpgraderService,
  Snap,
  SnippetService,
  SocialService,
  SolidModelContentProvider,
  SortOrder,
  Sound,
  SoundEffect,
  SoundGroup,
  SoundService,
  Sparkles,
  SpawnLocation,
  SpawnerService,
  SpecialMesh,
  SphereHandleAdornment,
  SpotLight,
  SpringConstraint,
  StandalonePluginScripts,
  StartCorner,
  StarterCharacterScripts,
  StarterGear,
  StarterGui,
  StarterPack,
  StarterPlayer,
  StarterPlayerScripts,
  StartupMessageService,
  Stats,
  StopWatchReporter,
  StreamOutBehavior,
  StreamingIntegrityMode,
  StreamingService,
  StringValue,
  StudioAssetService,
  StudioAttachment,
  StudioCallout,
  StudioData,
  StudioDeviceEmulatorService,
  StudioPublishService,
  StudioScriptDebugEventListener,
  StudioSdkService,
  StudioService,
  StudioWidgetsService,
  Style,
  StyleBase,
  StyleDerive,
  StyleLink,
  StyleRule,
  StyleSheet,
  StylingService,
  SunRaysEffect,
  SurfaceAppearance,
  SurfaceGui,
  SurfaceGuiBase,
  SurfaceGuiSizingMode,
  SurfaceLight,
  SurfaceSelection,
  SurfaceType,
  SwimController,
  TableMajorAxis,
  TaskScheduler,
  Team,
  TeamCreateData,
  TeamCreatePublishService,
  TeamCreateService,
  Teams,
  Technology,
  TeleportOptions,
  TeleportService,
  TemporaryCageMeshProvider,
  TemporaryScriptService,
  Terrain,
  TerrainAcquisitionMethod,
  TerrainDetail,
  TerrainFace,
  TerrainRegion,
  TestService,
  TextBox,
  TextBoxService,
  TextButton,
  TextChannel,
  TextChatCommand,
  TextChatConfigurations,
  TextChatMessageProperties,
  TextChatService,
  TextDirection,
  TextLabel,
  TextService,
  TextTruncate,
  TextXAlignment,
  TextYAlignment,
  Texture,
  TextureGenerationService,
  TextureMode,
  ThirdPartyUserService,
  ThreadPoolConfig,
  TimerService,
  ToastNotificationService,
  Tool,
  TopBottom,
  Torque,
  TorsionSpringConstraint,
  TouchInputService,
  TracerService,
  TrackerStreamAnimation,
  Trail,
  TremoloSoundEffect,
  TriStateBoolean,
  TriangleMeshPart,
  TrussPart,
  TutorialService,
  Tween,
  TweenBase,
  TweenService,
  UDim,
  UDim2,
  UGCAvatarService,
  UGCValidationService,
  UIAspectRatioConstraint,
  UIBase,
  UIComponent,
  UIConstraint,
  UICorner,
  UIFlexAlignment,
  UIFlexItem,
  UIFlexMode,
  UIGradient,
  UIGridLayout,
  UIGridStyleLayout,
  UILayout,
  UIListLayout,
  UIPadding,
  UIPageLayout,
  UIScale,
  UISizeConstraint,
  UIStroke,
  UITableLayout,
  UITextSizeConstraint,
  UnionOperation,
  UniqueId,
  UniversalConstraint,
  UnreliableRemoteEvent,
  UnvalidatedAssetService,
  UserInputService,
  UserService,
  UserStorageService,
  VRScaling,
  VRService,
  VRStatusService,
  ValueBase,
  Vector2,
  Vector3,
  Vector3Curve,
  Vector3Value,
  VectorForce,
  VehicleController,
  VehicleSeat,
  VelocityConstraintMode,
  VelocityMotor,
  VersionControlService,
  VerticalAlignment,
  VerticalScrollBarPosition,
  VideoCaptureService,
  VideoDeviceCaptureQuality,
  VideoDeviceInput,
  VideoFrame,
  VideoService,
  ViewMode,
  ViewportFrame,
  VirtualCursorMode,
  VirtualInputManager,
  VirtualUser,
  VisibilityCheckDispatcher,
  Visit,
  VisualizationMode,
  VisualizationModeCategory,
  VisualizationModeService,
  VoiceChatInternal,
  VoiceChatService,
  VolumetricAudio,
  WedgePart,
  Weld,
  WeldConstraint,
  Wire,
  WireframeHandleAdornment,
  Workspace,
  WorldModel,
  WorldRoot,
  WrapLayer,
  WrapLayerAutoSkin,
  WrapTarget,
  ZIndexBehavior
});
