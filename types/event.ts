import {type View} from './view';

export type Argument = {
  systemInfo: unknown;
  userInfo: unknown;
  stateInfo: Record<string, unknown>;
};
type NavigationTask = {
  type: 'navigation';
  navigation: 'push' | 'select' | 'overlay' | 'full';
  pageName: string;
} | {
  type: 'navigation';
  navigation: 'pop' | 'dismiss';
};
type BreakTask = {
  type: 'break';
};
type ViewTask = {
  type: 'view';
  view: Record<string, View>;
  duration?: number;
};
type StateTask = {
  type: 'state';
  state: Record<string, unknown>;
};
export type AppInfo = {
  id: string;
  name?: string;
  bundle?: string;
  mode?: 'full' | 'overlay';
  url?: string;
  autoUpdate?: boolean;
};
type HubTask = {
  type: 'hub';
  action: 'dismiss' | 'open';
  appId: string;
};
type KeyboardTask = {
  type: 'keyboard';
  action: 'dismiss';
};
type Task = NavigationTask | ViewTask | BreakTask | StateTask | HubTask | KeyboardTask | undefined;
export type Tasks = Task | Task[];
// 了解web和android的js引擎后，尝试让page直接持有一个js对象
// EventMap的key string是冒泡结束标志符的动态作用，和持有json还是js对象是两码事
type TasksFunction = string;
export type EventMap = Record<string, Tasks | TasksFunction>;
export const br: Task = {
  type: 'break',
};
