define(["require", "exports", './Subject', './schedulers/VirtualTimeScheduler', './schedulers/TestScheduler', './schedulers/immediate', './schedulers/nextTick', './Observable', './Subscriber', './Subscription', './Notification', './subjects/ReplaySubject', './subjects/BehaviorSubject', './observables/ConnectableObservable', './observables/ArrayObservable', './observables/DeferObservable', './observables/EmptyObservable', './observables/ErrorObservable', './observables/InfiniteObservable', './observables/IntervalObservable', './observables/PromiseObservable', './observables/RangeObservable', './observables/TimerObservable', './observables/FromEventPatternObservable', './observables/FromEventObservable', './observables/ForkJoinObservable', './observables/FromObservable', './operators/concat-static', './operators/concat', './operators/concatAll', './operators/concatMap', './operators/concatMapTo', './operators/merge', './operators/merge-static', './operators/mergeAll', './operators/flatMap', './operators/flatMapTo', './operators/switchAll', './operators/switchLatest', './operators/switchLatestTo', './operators/expand', './operators/do', './operators/map', './operators/mapTo', './operators/toArray', './operators/count', './operators/scan', './operators/reduce', './operators/startWith', './operators/take', './operators/skip', './operators/skipUntil', './operators/takeUntil', './operators/filter', './operators/distinctUntilChanged', './operators/distinctUntilKeyChanged', './operators/combineLatest', './operators/combineLatest-static', './operators/combineAll', './operators/withLatestFrom', './operators/zip', './operators/zip-static', './operators/zipAll', './operators/publish', './operators/publishBehavior', './operators/publishReplay', './operators/multicast', './operators/observeOn', './operators/subscribeOn', './operators/partition', './operators/toPromise', './operators/defaultIfEmpty', './operators/materialize', './operators/catch', './operators/retry', './operators/retryWhen', './operators/repeat', './operators/finally', './operators/timeout', './operators/timeoutWith', './operators/groupBy', './operators/window', './operators/windowWhen', './operators/windowToggle', './operators/windowTime', './operators/windowCount', './operators/delay', './operators/throttle', './operators/debounce', './operators/buffer', './operators/bufferCount', './operators/bufferTime', './operators/bufferToggle', './operators/bufferWhen', './operators/sample', './operators/sampleTime'], function (require, exports, Subject_1, VirtualTimeScheduler_1, TestScheduler_1, immediate_1, nextTick_1, Observable_1, Subscriber_1, Subscription_1, Notification_1, ReplaySubject_1, BehaviorSubject_1, ConnectableObservable_1, ArrayObservable_1, DeferObservable_1, EmptyObservable_1, ErrorObservable_1, InfiniteObservable_1, IntervalObservable_1, PromiseObservable_1, RangeObservable_1, TimerObservable_1, FromEventPatternObservable_1, FromEventObservable_1, ForkJoinObservable_1, FromObservable_1, concat_static_1, concat_1, concatAll_1, concatMap_1, concatMapTo_1, merge_1, merge_static_1, mergeAll_1, flatMap_1, flatMapTo_1, switchAll_1, switchLatest_1, switchLatestTo_1, expand_1, do_1, map_1, mapTo_1, toArray_1, count_1, scan_1, reduce_1, startWith_1, take_1, skip_1, skipUntil_1, takeUntil_1, filter_1, distinctUntilChanged_1, distinctUntilKeyChanged_1, combineLatest_1, combineLatest_static_1, combineAll_1, withLatestFrom_1, zip_1, zip_static_1, zipAll_1, publish_1, publishBehavior_1, publishReplay_1, multicast_1, observeOn_1, subscribeOn_1, partition_1, toPromise_1, defaultIfEmpty_1, materialize_1, catch_1, retry_1, retryWhen_1, repeat_1, finally_1, timeout_1, timeoutWith_1, groupBy_1, window_1, windowWhen_1, windowToggle_1, windowTime_1, windowCount_1, delay_1, throttle_1, debounce_1, buffer_1, bufferCount_1, bufferTime_1, bufferToggle_1, bufferWhen_1, sample_1, sampleTime_1) {
    exports.Subject = Subject_1.default;
    exports.VirtualTimeScheduler = VirtualTimeScheduler_1.default;
    exports.TestScheduler = TestScheduler_1.default;
    exports.Observable = Observable_1.default;
    exports.Subscriber = Subscriber_1.default;
    exports.Subscription = Subscription_1.default;
    exports.Notification = Notification_1.default;
    exports.ReplaySubject = ReplaySubject_1.default;
    exports.BehaviorSubject = BehaviorSubject_1.default;
    exports.ConnectableObservable = ConnectableObservable_1.default;
    Observable_1.default.defer = DeferObservable_1.default.create;
    Observable_1.default.from = FromObservable_1.default.create;
    Observable_1.default.fromArray = ArrayObservable_1.default.create;
    Observable_1.default.fromPromise = PromiseObservable_1.default.create;
    Observable_1.default.of = ArrayObservable_1.default.of;
    Observable_1.default.range = RangeObservable_1.default.create;
    Observable_1.default.fromEventPattern = FromEventPatternObservable_1.default.create;
    Observable_1.default.forkJoin = ForkJoinObservable_1.default.create;
    Observable_1.default.throw = ErrorObservable_1.default.create;
    Observable_1.default.empty = EmptyObservable_1.default.create;
    Observable_1.default.never = InfiniteObservable_1.default.create;
    Observable_1.default.timer = TimerObservable_1.default.create;
    Observable_1.default.interval = IntervalObservable_1.default.create;
    Observable_1.default.fromEvent = FromEventObservable_1.default.create;
    var observableProto = Observable_1.default.prototype;
    Observable_1.default.concat = concat_static_1.default;
    observableProto.concat = concat_1.default;
    observableProto.concatAll = concatAll_1.default;
    observableProto.concatMap = concatMap_1.default;
    observableProto.concatMapTo = concatMapTo_1.default;
    Observable_1.default.merge = merge_static_1.default;
    observableProto.merge = merge_1.default;
    observableProto.mergeAll = mergeAll_1.default;
    observableProto.flatMap = flatMap_1.default;
    observableProto.flatMapTo = flatMapTo_1.default;
    observableProto.switchAll = switchAll_1.default;
    observableProto.switchLatest = switchLatest_1.default;
    observableProto.switchLatestTo = switchLatestTo_1.default;
    observableProto.expand = expand_1.default;
    observableProto.do = do_1.default;
    observableProto.map = map_1.default;
    observableProto.mapTo = mapTo_1.default;
    observableProto.toArray = toArray_1.default;
    observableProto.count = count_1.default;
    observableProto.scan = scan_1.default;
    observableProto.reduce = reduce_1.default;
    observableProto.startWith = startWith_1.default;
    observableProto.take = take_1.default;
    observableProto.skip = skip_1.default;
    observableProto.takeUntil = takeUntil_1.default;
    observableProto.skipUntil = skipUntil_1.default;
    observableProto.filter = filter_1.default;
    observableProto.distinctUntilChanged = distinctUntilChanged_1.default;
    observableProto.distinctUntilKeyChanged = distinctUntilKeyChanged_1.default;
    Observable_1.default.combineLatest = combineLatest_static_1.default;
    observableProto.combineLatest = combineLatest_1.default;
    observableProto.combineAll = combineAll_1.default;
    observableProto.withLatestFrom = withLatestFrom_1.default;
    Observable_1.default.zip = zip_static_1.default;
    observableProto.zip = zip_1.default;
    observableProto.zipAll = zipAll_1.default;
    observableProto.publish = publish_1.default;
    observableProto.publishBehavior = publishBehavior_1.default;
    observableProto.publishReplay = publishReplay_1.default;
    observableProto.multicast = multicast_1.default;
    observableProto.observeOn = observeOn_1.default;
    observableProto.subscribeOn = subscribeOn_1.default;
    observableProto.partition = partition_1.default;
    observableProto.toPromise = toPromise_1.default;
    observableProto.defaultIfEmpty = defaultIfEmpty_1.default;
    observableProto.materialize = materialize_1.default;
    observableProto.catch = catch_1.default;
    observableProto.retry = retry_1.default;
    observableProto.retryWhen = retryWhen_1.default;
    observableProto.repeat = repeat_1.default;
    observableProto.finally = finally_1.default;
    observableProto.timeout = timeout_1.default;
    observableProto.timeoutWith = timeoutWith_1.default;
    observableProto.groupBy = groupBy_1.default;
    observableProto.window = window_1.default;
    observableProto.windowWhen = windowWhen_1.default;
    observableProto.windowToggle = windowToggle_1.default;
    observableProto.windowTime = windowTime_1.default;
    observableProto.windowCount = windowCount_1.default;
    observableProto.delay = delay_1.default;
    observableProto.throttle = throttle_1.default;
    observableProto.debounce = debounce_1.default;
    observableProto.buffer = buffer_1.default;
    observableProto.bufferCount = bufferCount_1.default;
    observableProto.bufferTime = bufferTime_1.default;
    observableProto.bufferToggle = bufferToggle_1.default;
    observableProto.bufferWhen = bufferWhen_1.default;
    observableProto.sample = sample_1.default;
    observableProto.sampleTime = sampleTime_1.default;
    var Scheduler = {
        nextTick: nextTick_1.default,
        immediate: immediate_1.default
    };
    exports.Scheduler = Scheduler;
});
//# sourceMappingURL=Rx.js.map