import Client from '../../core/client.js';
import Request from '../../core/request/index.js';

/**
 * This client is used to call actions of **uphone** service
 */
export default class UPhoneClient extends Client {
  /**
   * CreateUPhone - 创建云手机
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/create_u_phone
   */
  createUPhone(request?: CreateUPhoneRequest): Promise<CreateUPhoneResponse> {
    const args = { Action: 'CreateUPhone', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as CreateUPhoneResponse
    );
  }

  /**
   * CreateUPhoneApp - 一个 app 对应多个 app_version。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/create_u_phone_app
   */
  createUPhoneApp(
    request?: CreateUPhoneAppRequest
  ): Promise<CreateUPhoneAppResponse> {
    const args = { Action: 'CreateUPhoneApp', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as CreateUPhoneAppResponse
    );
  }

  /**
     * CreateUPhoneAppVersion - 创建云手机应用版本。
注：一个 app 对应多个 app_version。
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/create_u_phone_app_version
     */
  createUPhoneAppVersion(
    request?: CreateUPhoneAppVersionRequest
  ): Promise<CreateUPhoneAppVersionResponse> {
    const args = { Action: 'CreateUPhoneAppVersion', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as CreateUPhoneAppVersionResponse
    );
  }

  /**
   * CreateUPhoneImage - 创建云手机镜像。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/create_u_phone_image
   */
  createUPhoneImage(
    request?: CreateUPhoneImageRequest
  ): Promise<CreateUPhoneImageResponse> {
    const args = { Action: 'CreateUPhoneImage', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as CreateUPhoneImageResponse
    );
  }

  /**
   * CreateUPhoneServer - 创建云手机服务器
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/create_u_phone_server
   */
  createUPhoneServer(
    request?: CreateUPhoneServerRequest
  ): Promise<CreateUPhoneServerResponse> {
    const args = { Action: 'CreateUPhoneServer', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as CreateUPhoneServerResponse
    );
  }

  /**
   * DeleteUPhone - 删除云手机
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/delete_u_phone
   */
  deleteUPhone(request?: DeleteUPhoneRequest): Promise<DeleteUPhoneResponse> {
    const args = { Action: 'DeleteUPhone', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as DeleteUPhoneResponse
    );
  }

  /**
   * DeleteUPhoneImage - 删除自制云手机镜像。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/delete_u_phone_image
   */
  deleteUPhoneImage(
    request?: DeleteUPhoneImageRequest
  ): Promise<DeleteUPhoneImageResponse> {
    const args = { Action: 'DeleteUPhoneImage', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as DeleteUPhoneImageResponse
    );
  }

  /**
   * DeleteUPhoneServer - 删除云手机服务器。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/delete_u_phone_server
   */
  deleteUPhoneServer(
    request?: DeleteUPhoneServerRequest
  ): Promise<DeleteUPhoneServerResponse> {
    const args = { Action: 'DeleteUPhoneServer', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as DeleteUPhoneServerResponse
    );
  }

  /**
   * DescribeUPhone - 获取云手机列表信息。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/describe_u_phone
   */
  describeUPhone(
    request?: DescribeUPhoneRequest
  ): Promise<DescribeUPhoneResponse> {
    const args = { Action: 'DescribeUPhone', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as DescribeUPhoneResponse
    );
  }

  /**
   * DescribeUPhoneApp - 获取应用列表。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/describe_u_phone_app
   */
  describeUPhoneApp(
    request?: DescribeUPhoneAppRequest
  ): Promise<DescribeUPhoneAppResponse> {
    const args = { Action: 'DescribeUPhoneApp', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as DescribeUPhoneAppResponse
    );
  }

  /**
   * DescribeUPhoneAppVersion - 获取应用版本列表。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/describe_u_phone_app_version
   */
  describeUPhoneAppVersion(
    request?: DescribeUPhoneAppVersionRequest
  ): Promise<DescribeUPhoneAppVersionResponse> {
    const args = { Action: 'DescribeUPhoneAppVersion', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as DescribeUPhoneAppVersionResponse
    );
  }

  /**
   * DescribeUPhoneCities - 获取云手机提供服务的城市列表
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/describe_u_phone_cities
   */
  describeUPhoneCities(
    request?: DescribeUPhoneCitiesRequest
  ): Promise<DescribeUPhoneCitiesResponse> {
    const args = { Action: 'DescribeUPhoneCities', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as DescribeUPhoneCitiesResponse
    );
  }

  /**
   * DescribeUPhoneDetailByApp - 根据AppId，查询安装该应用的云手机以及相关的应用版本信息
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/describe_u_phone_detail_by_app
   */
  describeUPhoneDetailByApp(
    request?: DescribeUPhoneDetailByAppRequest
  ): Promise<DescribeUPhoneDetailByAppResponse> {
    const args = { Action: 'DescribeUPhoneDetailByApp', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as DescribeUPhoneDetailByAppResponse
    );
  }

  /**
   * DescribeUPhoneImage - 获取云手机镜像信息列表。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/describe_u_phone_image
   */
  describeUPhoneImage(
    request?: DescribeUPhoneImageRequest
  ): Promise<DescribeUPhoneImageResponse> {
    const args = { Action: 'DescribeUPhoneImage', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as DescribeUPhoneImageResponse
    );
  }

  /**
   * DescribeUPhoneIpRegions - 获取云手机所在城市支持绑定独立IP的地域列表
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/describe_u_phone_ip_regions
   */
  describeUPhoneIpRegions(
    request?: DescribeUPhoneIpRegionsRequest
  ): Promise<DescribeUPhoneIpRegionsResponse> {
    const args = { Action: 'DescribeUPhoneIpRegions', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as DescribeUPhoneIpRegionsResponse
    );
  }

  /**
   * DescribeUPhoneJob - 查询Job的执行状态。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/describe_u_phone_job
   */
  describeUPhoneJob(
    request?: DescribeUPhoneJobRequest
  ): Promise<DescribeUPhoneJobResponse> {
    const args = { Action: 'DescribeUPhoneJob', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as DescribeUPhoneJobResponse
    );
  }

  /**
   * DescribeUPhoneModel - 获取云手机规格列表。两种类型：uphone代表单云手机场景、uphone-server代表云手机服务器场景。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/describe_u_phone_model
   */
  describeUPhoneModel(
    request?: DescribeUPhoneModelRequest
  ): Promise<DescribeUPhoneModelResponse> {
    const args = { Action: 'DescribeUPhoneModel', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as DescribeUPhoneModelResponse
    );
  }

  /**
   * DescribeUPhoneServer - 获取云手机服务器列表信息。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/describe_u_phone_server
   */
  describeUPhoneServer(
    request?: DescribeUPhoneServerRequest
  ): Promise<DescribeUPhoneServerResponse> {
    const args = { Action: 'DescribeUPhoneServer', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as DescribeUPhoneServerResponse
    );
  }

  /**
   * DescribeUPhoneServerModel - 获取ServerModel列表。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/describe_u_phone_server_model
   */
  describeUPhoneServerModel(
    request?: DescribeUPhoneServerModelRequest
  ): Promise<DescribeUPhoneServerModelResponse> {
    const args = { Action: 'DescribeUPhoneServerModel', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as DescribeUPhoneServerModelResponse
    );
  }

  /**
   * GetUPhoneAllowance - 获取云手机创建余量
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/get_u_phone_allowance
   */
  getUPhoneAllowance(
    request?: GetUPhoneAllowanceRequest
  ): Promise<GetUPhoneAllowanceResponse> {
    const args = { Action: 'GetUPhoneAllowance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as GetUPhoneAllowanceResponse
    );
  }

  /**
   * GetUPhonePrice - 根据云手机规格名称，获取UPhone实例的价格。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/get_u_phone_price
   */
  getUPhonePrice(
    request?: GetUPhonePriceRequest
  ): Promise<GetUPhonePriceResponse> {
    const args = { Action: 'GetUPhonePrice', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as GetUPhonePriceResponse
    );
  }

  /**
   * GetUPhoneRenewPrice - 获取云手机续费价格，不包括独立ip价格。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/get_u_phone_renew_price
   */
  getUPhoneRenewPrice(
    request?: GetUPhoneRenewPriceRequest
  ): Promise<GetUPhoneRenewPriceResponse> {
    const args = { Action: 'GetUPhoneRenewPrice', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as GetUPhoneRenewPriceResponse
    );
  }

  /**
   * GetUPhoneScreenCapture - 云手机截屏
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/get_u_phone_screen_capture
   */
  getUPhoneScreenCapture(
    request?: GetUPhoneScreenCaptureRequest
  ): Promise<GetUPhoneScreenCaptureResponse> {
    const args = { Action: 'GetUPhoneScreenCapture', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as GetUPhoneScreenCaptureResponse
    );
  }

  /**
   * GetUPhoneServerPrice - 根据服务器规格名称，获取UPhoneServer实例的价格。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/get_u_phone_server_price
   */
  getUPhoneServerPrice(
    request?: GetUPhoneServerPriceRequest
  ): Promise<GetUPhoneServerPriceResponse> {
    const args = { Action: 'GetUPhoneServerPrice', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as GetUPhoneServerPriceResponse
    );
  }

  /**
     * GetUPhoneServerRenewPrice - 获取云手机服务器续费价格

提示信息: 须按照控制台服务器模型配置创建服务器。详情请参考控制台。
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/get_u_phone_server_renew_price
     */
  getUPhoneServerRenewPrice(
    request?: GetUPhoneServerRenewPriceRequest
  ): Promise<GetUPhoneServerRenewPriceResponse> {
    const args = { Action: 'GetUPhoneServerRenewPrice', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as GetUPhoneServerRenewPriceResponse
    );
  }

  /**
   * ImportFile - 上传文件到云手机目录/sdcard/Download/并自动安装APK文件
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/import_file
   */
  importFile(request?: ImportFileRequest): Promise<ImportFileResponse> {
    const args = { Action: 'ImportFile', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as ImportFileResponse
    );
  }

  /**
   * InstallUPhoneAppVersion - 在云手机中安装应用版本相关的Apk文件。系统会根据AppVersionId将对应的Apk文件下载后安装到云手机中。一次只支持安装一个Apk。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/install_u_phone_app_version
   */
  installUPhoneAppVersion(
    request?: InstallUPhoneAppVersionRequest
  ): Promise<InstallUPhoneAppVersionResponse> {
    const args = { Action: 'InstallUPhoneAppVersion', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as InstallUPhoneAppVersionResponse
    );
  }

  /**
   * ModifyUPhoneName - 修改指定云手机实例名称。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/modify_u_phone_name
   */
  modifyUPhoneName(
    request?: ModifyUPhoneNameRequest
  ): Promise<ModifyUPhoneNameResponse> {
    const args = { Action: 'ModifyUPhoneName', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as ModifyUPhoneNameResponse
    );
  }

  /**
   * ModifyUPhoneRemark - 修改指定云手机实例备注信息。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/modify_u_phone_remark
   */
  modifyUPhoneRemark(
    request?: ModifyUPhoneRemarkRequest
  ): Promise<ModifyUPhoneRemarkResponse> {
    const args = { Action: 'ModifyUPhoneRemark', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as ModifyUPhoneRemarkResponse
    );
  }

  /**
   * ModifyUPhoneServerName - 修改指定云手机服务器实例名称。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/modify_u_phone_server_name
   */
  modifyUPhoneServerName(
    request?: ModifyUPhoneServerNameRequest
  ): Promise<ModifyUPhoneServerNameResponse> {
    const args = { Action: 'ModifyUPhoneServerName', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as ModifyUPhoneServerNameResponse
    );
  }

  /**
   * ModifyUPhoneServerRemark - 修改指定云手机实例备注信息。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/modify_u_phone_server_remark
   */
  modifyUPhoneServerRemark(
    request?: ModifyUPhoneServerRemarkRequest
  ): Promise<ModifyUPhoneServerRemarkResponse> {
    const args = { Action: 'ModifyUPhoneServerRemark', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as ModifyUPhoneServerRemarkResponse
    );
  }

  /**
   * PoweroffUPhone - 关闭处于运行状态的云手机实例
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/poweroff_u_phone
   */
  poweroffUPhone(
    request?: PoweroffUPhoneRequest
  ): Promise<PoweroffUPhoneResponse> {
    const args = { Action: 'PoweroffUPhone', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as PoweroffUPhoneResponse
    );
  }

  /**
   * PoweronUPhone - 启动处于关闭状态的云手机实例
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/poweron_u_phone
   */
  poweronUPhone(
    request?: PoweronUPhoneRequest
  ): Promise<PoweronUPhoneResponse> {
    const args = { Action: 'PoweronUPhone', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as PoweronUPhoneResponse
    );
  }

  /**
   * RebootUPhone - 重新启动云手机实例
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/reboot_u_phone
   */
  rebootUPhone(request?: RebootUPhoneRequest): Promise<RebootUPhoneResponse> {
    const args = { Action: 'RebootUPhone', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as RebootUPhoneResponse
    );
  }

  /**
   * RenewUPhone - 修改UPhone的device_id、imei、meid 以及其他相关配置，达到一键新机的效果
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/renew_u_phone
   */
  renewUPhone(request?: RenewUPhoneRequest): Promise<RenewUPhoneResponse> {
    const args = { Action: 'RenewUPhone', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as RenewUPhoneResponse
    );
  }

  /**
   * ResetUPhone - 将云手机恢复为创建时的状态。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/reset_u_phone
   */
  resetUPhone(request?: ResetUPhoneRequest): Promise<ResetUPhoneResponse> {
    const args = { Action: 'ResetUPhone', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as ResetUPhoneResponse
    );
  }

  /**
   * RunAsyncCommand - 在云手机中执行异步shell命令。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/run_async_command
   */
  runAsyncCommand(
    request?: RunAsyncCommandRequest
  ): Promise<RunAsyncCommandResponse> {
    const args = { Action: 'RunAsyncCommand', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as RunAsyncCommandResponse
    );
  }

  /**
   * RunSyncCommand - 在云手机中执行同步shell命令。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/run_sync_command
   */
  runSyncCommand(
    request?: RunSyncCommandRequest
  ): Promise<RunSyncCommandResponse> {
    const args = { Action: 'RunSyncCommand', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as RunSyncCommandResponse
    );
  }

  /**
   * SetUPhoneCallback - 设置云手机异步操作以及状态更新回调，支持云手机重置，安装应用，卸载应用，设备占用状态回调
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/set_u_phone_callback
   */
  setUPhoneCallback(
    request?: SetUPhoneCallbackRequest
  ): Promise<SetUPhoneCallbackResponse> {
    const args = { Action: 'SetUPhoneCallback', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as SetUPhoneCallbackResponse
    );
  }

  /**
   * SetUPhoneConfig - 设置云手机画面参数（分辨率、DPI、帧率、码率）
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/set_u_phone_config
   */
  setUPhoneConfig(
    request?: SetUPhoneConfigRequest
  ): Promise<SetUPhoneConfigResponse> {
    const args = { Action: 'SetUPhoneConfig', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as SetUPhoneConfigResponse
    );
  }

  /**
   * SetUPhoneGPS - 设置云手机GPS信息
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/set_u_phone_gps
   */
  setUPhoneGPS(request?: SetUPhoneGPSRequest): Promise<SetUPhoneGPSResponse> {
    const args = { Action: 'SetUPhoneGPS', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as SetUPhoneGPSResponse
    );
  }

  /**
   * SetUPhoneManagerMode - 管理员模式支持所有按键，普通用户模式禁用返回桌面
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/set_u_phone_manager_mode
   */
  setUPhoneManagerMode(
    request?: SetUPhoneManagerModeRequest
  ): Promise<SetUPhoneManagerModeResponse> {
    const args = { Action: 'SetUPhoneManagerMode', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as SetUPhoneManagerModeResponse
    );
  }

  /**
   * SetUPhoneRootMode - 设置云手机Root模式
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/set_u_phone_root_mode
   */
  setUPhoneRootMode(
    request?: SetUPhoneRootModeRequest
  ): Promise<SetUPhoneRootModeResponse> {
    const args = { Action: 'SetUPhoneRootMode', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as SetUPhoneRootModeResponse
    );
  }

  /**
   * SetUPhoneSplashScreen - 设置云手机启动画面，通过DescribeUPhone接口可以查询该地址
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/set_u_phone_splash_screen
   */
  setUPhoneSplashScreen(
    request?: SetUPhoneSplashScreenRequest
  ): Promise<SetUPhoneSplashScreenResponse> {
    const args = { Action: 'SetUPhoneSplashScreen', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as SetUPhoneSplashScreenResponse
    );
  }

  /**
   * SetUPhoneToken - 设置云手机RTC连接Token提高安全性
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/set_u_phone_token
   */
  setUPhoneToken(
    request?: SetUPhoneTokenRequest
  ): Promise<SetUPhoneTokenResponse> {
    const args = { Action: 'SetUPhoneToken', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as SetUPhoneTokenResponse
    );
  }

  /**
   * UnInstallUPhoneAppVersion - 传入应用版本Id，在云手机中根据应用版本的PackageName卸载相关应用。一次只支持卸载一个应用。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/un_install_u_phone_app_version
   */
  unInstallUPhoneAppVersion(
    request?: UnInstallUPhoneAppVersionRequest
  ): Promise<UnInstallUPhoneAppVersionResponse> {
    const args = { Action: 'UnInstallUPhoneAppVersion', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as UnInstallUPhoneAppVersionResponse
    );
  }

  /**
   * UpdateUPhoneImage - 更新云手机镜像信息。
   *
   * See also: https://docs.ucloud.cn/api/uphone-api/update_u_phone_image
   */
  updateUPhoneImage(
    request?: UpdateUPhoneImageRequest
  ): Promise<UpdateUPhoneImageResponse> {
    const args = { Action: 'UpdateUPhoneImage', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      resp => resp.toObject() as UpdateUPhoneImageResponse
    );
  }
}

/**
 * CreateUPhone - 创建云手机
 */
export interface CreateUPhoneRequest {
  /**
   * 云手机实例名称，默认：UPhone。如果同时创建多个，则增加数字后缀，如UPhone-1
   */
  Name: string;
  /**
   * 云手机规格名称，不超过64个字节。可通过[查询云手机规格列表]()查询支持的云手机规格。
   */
  UPhoneModelName: string;
  /**
   * 云手机画面带宽，默认2M
   */
  MediaBandwidth: number;
  /**
   * 云手机镜像ID，不超过32个字节。可通过[查询手机镜像]()查询云手机规格对应的镜像ID。
   */
  ImageId: string;
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 创建云手机的个数
   */
  UPhoneCount: number;
  /**
   * 计费模式。枚举值为： > 年 Year，按年付费； > Month，按月付费； > Dynamic，按小时预付费; 默认为月付
   */
  ChargeType?: string;
  /**
   * 购买时长。默认值: 1。月付时，此参数传0，代表购买至月末。
   */
  Quantity?: string;
  /**
   * 购买独立IP必须有此参数。绑定的目的地域。参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  IpDestRegion?: string;
  /**
   * 业务组。默认：Default（Default即为未分组）。请遵照[[api:uhost-api:specification|字段规范]]设定业务组。
   */
  Tag?: string;
  /**
   * 绑定独立IP
   */
  BindIp?: boolean;
  /**
   * 独立IP带宽
   */
  Bandwidth?: number;
  /**
   * 独立IP参数。需要独立IP的比例。eg: [4:1]->4， [3:1]->3。
   */
  IpProportion?: number;
  /**
   * 云手机代金券ID。请通过DescribeCoupon接口查询，或登录用户中心查看。注：代金券对带宽不适用，仅适用于云手机计费
   */
  CouponId?: string;
}

/**
 * CreateUPhone - 创建云手机
 */
export interface CreateUPhoneResponse {
  /**
   * 任务ID，用来查询创建云手机任务状态
   */
  JobId: string;
}

/**
 * CreateUPhoneApp - 一个 app 对应多个 app_version。
 */
export interface CreateUPhoneAppRequest {
  /**
   * 应用名称。
   */
  Name: string;
  /**
   * 应用描述。
   */
  Description?: string;
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * CreateUPhoneApp - 一个 app 对应多个 app_version。
 */
export interface CreateUPhoneAppResponse {
  /**
   * 应用的唯一标识ID
   */
  AppId: string;
}

/**
 * CreateUPhoneAppVersion - 创建云手机应用版本。
注：一个 app 对应多个 app_version。
 */
export interface CreateUPhoneAppVersionRequest {
  /**
   * 应用版本名称，最大字符长度为255。
   */
  Name: string;
  /**
   * 应用的唯一标识ID。
   */
  AppId: string;
  /**
   * 应用版本相关的Apk文件存放的公网URL地址。
   */
  URL: string;
  /**
   * 应用版本描述。
   */
  Description?: string;
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * CreateUPhoneAppVersion - 创建云手机应用版本。
注：一个 app 对应多个 app_version。
 */
export interface CreateUPhoneAppVersionResponse {
  /**
   * 应用版本的唯一标识ID
   */
  AppVersionId: string;
}

/**
 * CreateUPhoneImage - 创建云手机镜像。
 */
export interface CreateUPhoneImageRequest {
  /**
   * 城市Id，通过[获取城市列表](https://cms-docs.ucloudadmin.com/api/uphone-api/describe_u_phone_cities)获取
   */
  CityId: string;
  /**
   * 手机实例的资源ID
   */
  UPhoneId: string;
  /**
   * 镜像名称。长度为2~128个英文或中文字符。
   */
  Name?: string;
  /**
   * 镜像的描述信息。长度为2~256个英文或中文字符
   */
  Description?: string;
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * CreateUPhoneImage - 创建云手机镜像。
 */
export interface CreateUPhoneImageResponse {
  /**
   * 云手机自定义镜像资源 ID
   */
  ImageId?: string;
  /**
   * 请求的唯一标识Id，`RetCode`为0时返回，可根据此ID查询请求的执行状态
   */
  JobId?: string;
}

/**
 * CreateUPhoneServer - 创建云手机服务器
 */
export interface CreateUPhoneServerRequest {
  /**
   * 云手机服务器实例名称。默认：UPhone。请遵照字段规范设定实例名称。
   */
  Name: string;
  /**
   * 云手机服务器规格名称，不超过64个字节。可通过[查询云手机服务器规格列表](https://docs.ucloud.cn/api/uphone-api/describe_u_phone_server_model)查询支持的云手机服务器规格。
   */
  ServerModelName: string;
  /**
   * 云手机规格名称，不超过64个字节。可通过[查询云手机规格列表](https://docs.ucloud.cn/api/uphone-api/describe_u_phone_model)查询支持的云手机规格。
   */
  UPhoneModelName: string;
  /**
   * 云手机镜像ID，不超过32个字节。可通过[查询手机镜像](https://docs.ucloud.cn/api/uphone-api/describe_u_phone_image)查询云手机规格对应的镜像ID。
   */
  ImageId: string;
  /**
   * 城市Id，通过[获取城市列表](https://docs.ucloud.cn/api/uphone-api/describe_u_phone_cities)获取
   */
  CityId: string;
  /**
   * 计费模式。枚举值为：> 年 Year，按年付费；> Month，按月付费；> Dynamic，按小时预付费;默认为月付
   */
  ChargeType?: string;
  /**
   * 购买时长。默认值: 1。月付时，此参数传0，代表购买至月末。
   */
  Quantity?: string;
  /**
   *
   */
  NetworkInterface?: object[];
  /**
   * 购买独立IP必须此参数。绑定的目的地域。参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  IpDestRegion?: string;
  /**
   * 独立IP参数。共享带宽值大小。传此参数需要和IpProportion同时传。
   */
  ShareBandwidth?: number;
  /**
   * 独立IP参数。需要独立IP的比例。eg: [4:1]->4， [3:1]->3。
   */
  IpProportion?: number;
  /**
   * 业务组。默认：Default（Default即为未分组）。请遵照[[api:uhost-api:specification|字段规范]]设定业务组。
   */
  Tag?: string;
  /**
   * 云手机服务器代金券ID。请通过DescribeCoupon接口查询，或登录用户中心查看。注：代金券对带宽不适用，仅适用于云手机服务器计费
   */
  CouponId?: string;
}

/**
 * CreateUPhoneServer - 创建云手机服务器
 */
export interface CreateUPhoneServerResponse {
  /**
   * 云手机服务器的实例 ID
   */
  ServerId: string;
}

/**
 * DeleteUPhone - 删除云手机
 */
export interface DeleteUPhoneRequest {
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 【数组】云手机实例的资源 ID，调用方式举例：UPhoneIds.0=希望获取信息的云手机 1 的 UPhoneId，UPhoneIds.1=云手机实例 2 的 UPhoneId
   */
  UPhoneIds: string[];
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * DeleteUPhone - 删除云手机
 */
export interface DeleteUPhoneResponse {
  /**
   * 任务ID，用来查询删除云手机任务状态
   */
  JobId: string;
}

/**
 * DeleteUPhoneImage - 删除自制云手机镜像。
 */
export interface DeleteUPhoneImageRequest {
  /**
   * 云手机自定义镜像资源ID
   */
  ImageId: string;
}

/**
 * DeleteUPhoneImage - 删除自制云手机镜像。
 */
export interface DeleteUPhoneImageResponse {
  /**
   * 云手机自定义镜像资源ID
   */
  ImageId: string;
}

/**
 * DeleteUPhoneServer - 删除云手机服务器。
 */
export interface DeleteUPhoneServerRequest {
  /**
   * 云手机服务器的实例ID 可通过 [DescribeUPhoneServer]()获取
   */
  ServerId: string;
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 删除云手机服务器时是否释放绑定的EIP。默认为false。
   */
  ReleaseEIP?: boolean;
  /**
   * 删除云手机服务器时是否同时删除挂载的数据盘。默认为false。
   */
  ReleaseUDisk?: boolean;
}

/**
 * DeleteUPhoneServer - 删除云手机服务器。
 */
export type DeleteUPhoneServerResponse = {};

/**
 * DescribeUPhone - 获取云手机列表信息。
 */
export interface DescribeUPhoneRequest {
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 云手机服务器的资源ID。
   */
  ServerId?: string;
  /**
   * 【数组】云手机实例的资源 ID，调用方式举例：UPhoneIds.0=希望获取信息的云手机 1 的 UPhoneId，UPhoneIds.1=云手机实例 2 的 UPhoneId。如果都不传入，则返回当前 城市 所有符合条件的云手机列表。
   */
  UPhoneIds?: string[];
  /**
   * 列表起始位置偏移量，默认为0
   */
  Offset?: number;
  /**
   * 返回数据长度，默认为200，最大200
   */
  Limit?: number;
  /**
   * 要查询的业务组名称
   */
  Tag?: string;
  /**
   * 是否返回全部。如果有此参数，分页不生效。
   */
  IsAll?: boolean;
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * DescribeUPhone - 获取云手机列表信息。
 */
export interface DescribeUPhoneResponse {
  /**
   * UPhoneInstance总数
   */
  TotalCount: number;
  /**
   * 云手机实例列表，每项参数可见数据模型 [UPhoneInstance](#UPhoneInstance)
   */
  UPhones: {
    /**
     * 云手机的名称，不超过65个字符。
     */
    UPhoneName: string;
    /**
     * 云手机的唯一标识，不超过32个字节。
     */
    UPhoneId: string;
    /**
     * 云手机规格名称
     */
    UPhoneModelName: string;
    /**
     * 虚拟CPU核数。
     */
    CPU: number;
    /**
     * 内存大小。单位MB
     */
    Memory: number;
    /**
     * 磁盘大小，单位: GB
     */
    DiskSize: number;
    /**
     * 分辨率
     */
    Resolution: string;
    /**
     * 刷新率
     */
    Refresh: number;
    /**
     * 云手机所在的服务器ID，不超过32个字节。
     */
    ServerId: string;
    /**
     * 云手机镜像ID，不超过32个字节。
     */
    ImageId: string;
    /**
     * 云手机镜像系统，如"Android armv8"
     */
    OsType: string;
    /**
     * 云手机状态<br />* 启动中: STARTING; <br />* 运行中: RUNNING; <br />* 关机中: STOPPING; <br />* 关机: STOPPED <br />* 重启中: REBOOTING; <br />* 重置中: RESETTING; <br />* 启动失败: START_FAILED; <br />* 关机失败: STOP_FAILED; <br />* 重启失败: REBOOT_FAILED; <br />* 重置失败: RESET_FAILED; <br />* 未知状态：UNDEFINED_STATE或""
     */
    State: string;
    /**
     * 城市Id，eg: cn-shanghai, cn-jinan
     */
    CityId: string;
    /**
     * 城市名称，eg:上海二、济南市
     */
    CityName: string;
    /**
     * 创建时间，格式为Unix时间戳。
     */
    CreateTime: number;
    /**
     * 业务组名称
     */
    Tag: string;
    /**
     * 云手机启动图片URL链接
     */
    SplashScreen: string;
    /**
     * 云手机异步任务回调
     */
    Callback: string;
    /**
     * 备注
     */
    Remark?: string;
    /**
     * 计费模式。枚举值为： > 年 Year，按年付费； > Month，按月付费； > Dynamic，按小时预付费; 默认为月付
     */
    ChargeType?: string;
    /**
     * 到期时间；格式为Unix时间戳
     */
    ExpireTime?: number;
    /**
     * IP所属地域Id，eg: hk，th-bkk
     */
    IpRegion?: string;
    /**
     * 云手机IP地址
     */
    Ip?: string;
  }[];
}

/**
 * DescribeUPhoneApp - 获取应用列表。
 */
export interface DescribeUPhoneAppRequest {
  /**
   * 数组】应用的唯一标识 ID，调用方式举例：AppIds.0=希望获取应用信息的应用 1，AppIds.1=应用 2。 如果不传入，则返回当前 城市 所有符合条件的应用列表。
   */
  AppIds?: string[];
  /**
   * 列表起始位置偏移量，默认为0
   */
  Offset?: number;
  /**
   * 返回数据长度，默认为20，最大100
   */
  Limit?: number;
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * DescribeUPhoneApp - 获取应用列表。
 */
export interface DescribeUPhoneAppResponse {
  /**
   * AppInstance总数
   */
  TotalCount: number;
  /**
   * 云手机应用实例列表，每项参数可见数据模型 [AppInstance](#appInstance)
   */
  Apps?: {
    /**
     * 应用的唯一标识ID
     */
    AppId: string;
    /**
     * 应用名称。
     */
    AppName: string;
    /**
     * 创建时间，格式为Unix时间戳。
     */
    CreateTime: number;
    /**
     * 修改时间，格式为Unix时间戳。
     */
    ModifyTime: number;
    /**
     * 应用描述。
     */
    Description?: string;
  }[];
}

/**
 * DescribeUPhoneAppVersion - 获取应用版本列表。
 */
export interface DescribeUPhoneAppVersionRequest {
  /**
   * 【数组】应用版本的唯一标识 ID，调用方式举例：AppVersionIds.0=希望获取应用版本信息的应用版本 1，AppVersionIds.1=应用版本 2。 如果不传入，则返回当前 城市 所有符合条件的应用版本列表。
   */
  AppVersionIds?: string[];
  /**
   * 应用的唯一标识ID
   */
  AppId?: string;
  /**
   * 云手机Id。此参数表示查询手机上所安装的应用版本。
   */
  UPhoneId?: string;
  /**
   * 返回数据长度，默认为20，最大100
   */
  Limit?: number;
  /**
   * 列表起始位置偏移量，默认为0
   */
  Offset?: number;
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * DescribeUPhoneAppVersion - 获取应用版本列表。
 */
export interface DescribeUPhoneAppVersionResponse {
  /**
   * AppVersionInstance总数
   */
  TotalCount: number;
  /**
   * 云手机应用版本实例列表，每项参数可见数据模型 [AppVersionInstance](#AppVersionInstance)
   */
  AppVersions: {
    /**
     * 应用的唯一标识ID
     */
    AppId: string;
    /**
     * 应用版本的唯一标识ID
     */
    AppVersionId: string;
    /**
     * 应用版本名。
     */
    AppVersionName: string;
    /**
     * 应用包名。
     */
    PackageName: string;
    /**
     * 应用版本相关的Apk文件存放的公网URL地址。
     */
    URL: string;
    /**
     * 创建时间，格式为Unix时间戳。
     */
    CreateTime: number;
    /**
     * 修改时间，格式为Unix时间戳。
     */
    ModifyTime: number;
    /**
     * 应用版本描述。
     */
    Description?: string;
  }[];
}

/**
 * DescribeUPhoneCities - 获取云手机提供服务的城市列表
 */
export interface DescribeUPhoneCitiesRequest {
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * DescribeUPhoneCities - 获取云手机提供服务的城市列表
 */
export interface DescribeUPhoneCitiesResponse {
  /**
   * 云手机城市实例列表，每项参数可见数据模型 [CityInstance](#CityInstance)
   */
  UPhoneCities: {
    /**
     * 城市Id，eg: cn-shanghai, cn-jinan
     */
    CityId?: string;
    /**
     * 城市名称，eg:上海二、济南市
     */
    CityName?: string;
    /**
     * 表示该城市资源是否售罄
     */
    IsSoldOut?: boolean;
    /**
     * 城市类型。枚举值： <br /> * CENTER，中心城市  <br />* EDGE，边缘计算城市
     */
    CityType?: string;
    /**
     * 城市别名。如cn-sh2
     */
    CityAlias?: string;
  }[];
}

/**
 * DescribeUPhoneDetailByApp - 根据AppId，查询安装该应用的云手机以及相关的应用版本信息
 */
export interface DescribeUPhoneDetailByAppRequest {
  /**
   * 应用的唯一标识ID
   */
  AppId: string;
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 列表起始位置偏移量，默认为0
   */
  Offset?: number;
  /**
   * 返回数据长度，默认为20，最大100
   */
  Limit?: number;
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * DescribeUPhoneDetailByApp - 根据AppId，查询安装该应用的云手机以及相关的应用版本信息
 */
export interface DescribeUPhoneDetailByAppResponse {
  /**
   * UPhoneWithAppVersion总数
   */
  TotalCount: number;
  /**
   * 带有应用版本的云手机实例，具体参数见数据模型 [UPhoneDetailInstanc](#UPhoneDetailInstanc)
   */
  UPhoneDetails: {
    /**
     * 云手机的名称，不超过65个字符。
     */
    UPhoneName?: string;
    /**
     * 云手机的唯一标识，不超过32个字节。
     */
    UPhoneId?: string;
    /**
     * 云手机规格名称
     */
    UPhoneModelName?: string;
    /**
     * 虚拟CPU核数。
     */
    CPU?: number;
    /**
     * 内存大小。单位MB
     */
    Memory?: number;
    /**
     * 磁盘大小，单位: GB
     */
    DiskSize?: number;
    /**
     * 分辨率
     */
    Resolution?: string;
    /**
     * 刷新率
     */
    Refresh?: number;
    /**
     * 云手机所在的服务器ID，不超过32个字节。
     */
    ServerId?: string;
    /**
     * 云手机镜像ID，不超过32个字节。
     */
    ImageId?: string;
    /**
     * 云手机镜像系统，如"Android armv8"
     */
    OsType?: string;
    /**
     * 云手机状态<br />* 启动中: STARTING; <br />* 运行中: RUNNING; <br />* 关机中: STOPPING; <br />* 关机: STOPPED <br />* 重启中: REBOOTING; <br />* 重置中: RESETTING; <br />* 启动失败: START_FAILED; <br />* 关机失败: STOP_FAILED; <br />* 重启失败: REBOOT_FAILED; <br />* 重置失败: RESET_FAILED; <br />* 未知状态：UNDEFINED或""
     */
    State?: string;
    /**
     * 城市Id，eg: cn-shanghai, cn-jinan
     */
    CityId?: string;
    /**
     * 城市名称，eg:上海二、济南市
     */
    CityName?: string;
    /**
     * 创建时间，格式为Unix时间戳。
     */
    CreateTime?: number;
    /**
     * 备注
     */
    Remark?: string;
    /**
     * 应用版本实例，每项参数可见数据模型 [AppVersionInstance](#AppVersionInstance)
     */
    AppVersion?: {
      /**
       * 应用的唯一标识ID
       */
      AppId: string;
      /**
       * 应用版本的唯一标识ID
       */
      AppVersionId: string;
      /**
       * 应用版本名。
       */
      AppVersionName: string;
      /**
       * 应用包名。
       */
      PackageName: string;
      /**
       * 应用版本相关的Apk文件存放的公网URL地址。
       */
      URL: string;
      /**
       * 创建时间，格式为Unix时间戳。
       */
      CreateTime: number;
      /**
       * 修改时间，格式为Unix时间戳。
       */
      ModifyTime: number;
      /**
       * 应用版本描述。
       */
      Description?: string;
    };
  }[];
}

/**
 * DescribeUPhoneImage - 获取云手机镜像信息列表。
 */
export interface DescribeUPhoneImageRequest {
  /**
   * 希望获取的镜像类型，枚举值，不传则返回全部类型的镜像： <br /> >标准镜像: BASE; <br />>自制镜像: CUSTOM;  <br />
   */
  Type?: string;
  /**
   * 【数组】云手机镜像资源 ID，调用方式举例：ImageIds.0=希望获取信息的云手机镜像 1，ImageIds.1=云手机镜像 2。 如果不传入，则返回当前 城市 所有符合条件的云手机镜像。
   */
  ImageIds?: string[];
  /**
   * 列表起始位置偏移量，默认为0
   */
  Offset?: string;
  /**
   * 最大返回镜像数量，默认为20，最大100
   */
  Limit?: string;
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * DescribeUPhoneImage - 获取云手机镜像信息列表。
 */
export interface DescribeUPhoneImageResponse {
  /**
   * 云手机镜像实例列表，具体参数见 [UPhoneImageInstance](#uphoneimageinstance)
   */
  Images: {
    /**
     * 云手机镜像资源Id
     */
    ImageId: string;
    /**
     * 云手机镜像名称
     */
    ImageName: string;
    /**
     * 云手机镜像系统
     */
    OsType: string;
    /**
     * 云手机镜像类型，枚举值：<br />> 用户自制镜像: CUSTOM;  <br />> 标准镜像: BASE;;
     */
    ImageType: string;
    /**
     * 创建时间，格式为Unix时间戳。
     */
    CreateTime: number;
    /**
     * 修改时间，格式为Unix时间戳。
     */
    ModifyTime: number;
    /**
     * 云手机镜像状态<br />* 制作中: 制作中; <br />* 可用的: CREATING; <br />* 制作失败: CREATE_FAILED; <br />* 上传中: UPLOADING <br />* 上传失败: UPLOAD_FAILED; <br />* 未知状态：UNDEFINED或""
     */
    ImageState: string;
    /**
     * 云手机镜像描述信息
     */
    Description?: string;
    /**
     * 云手机镜像创建时所属云手机资源 Id
     */
    UPhoneId?: string;
    /**
     * 云手机镜像所安装的应用版本列表，具体参数见 [AppVersionInstance](#appversioninstance)
     */
    AppVersions?: {
      /**
       * 应用的唯一标识ID
       */
      AppId: string;
      /**
       * 应用版本的唯一标识ID
       */
      AppVersionId: string;
      /**
       * 应用版本名。
       */
      AppVersionName: string;
      /**
       * 应用包名。
       */
      PackageName: string;
      /**
       * 应用版本相关的Apk文件存放的公网URL地址。
       */
      URL: string;
      /**
       * 创建时间，格式为Unix时间戳。
       */
      CreateTime: number;
      /**
       * 修改时间，格式为Unix时间戳。
       */
      ModifyTime: number;
      /**
       * 应用版本描述。
       */
      Description?: string;
    }[];
  }[];
  /**
   * UPhoneImageInstance总数
   */
  TotalCount?: number;
}

/**
 * DescribeUPhoneIpRegions - 获取云手机所在城市支持绑定独立IP的地域列表
 */
export interface DescribeUPhoneIpRegionsRequest {
  /**
   * 城市Id，通过[获取城市列表](https://docs.ucloud.cn/api/uphone-api/describe_u_phone_cities)获取
   */
  CityId: string;
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * DescribeUPhoneIpRegions - 获取云手机所在城市支持绑定独立IP的地域列表
 */
export interface DescribeUPhoneIpRegionsResponse {
  /**
   * 独立IP地域信息。
   */
  Regions: {
    /**
     * 已开通地域。参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Id: string;
    /**
     * 库存状态。枚举值：有库存：Available；无库存：SoldOut
     */
    StockStatus: string;
  }[];
  /**
   * 总数量
   */
  TotalCount?: number;
}

/**
 * DescribeUPhoneJob - 查询Job的执行状态。
 */
export interface DescribeUPhoneJobRequest {
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 【数组】Job 的唯一标识 Id，调用方式举例：JobIds.0=希望查询状态的 Job1，JobIds.1=Job2。 如果不传入，则返回当前 城市 所有符合条件的 Job 。
   */
  JobIds?: string[];
  /**
   * 列表起始位置偏移量，默认为0
   */
  Offset?: number;
  /**
   * 返回数据长度，默认为20，最大100
   */
  Limit?: number;
  /**
   * Job状态，枚举值：* 等待状态: PENDING;* 运行状态: RUNNING;* 成功状态: SUCCESS* 失败状态: FAILED* 部分成功状态：PARTIAL_SUCCESS
   */
  State?: string;
  /**
   * 【数组】Job 类型，调用方式举例：JobTypes.0=希望查询的 Job 类型 1，JobTypes.1=Job 类型 2。 如果不传入，则返回当前 城市 所有符合条件的 Job 类型。Job 类型仅支持 INSTALL_APP、UNINSTALL_APP、RUN_ASYNC_COMMAND、CREATE_SERVER_AND_UPHONE、SET_UPHONE_GPS、SET_UPHONE_CONFIG、UPLOAD_FILE、DELETE_UPHONE
   */
  Types?: string[];
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * DescribeUPhoneJob - 查询Job的执行状态。
 */
export interface DescribeUPhoneJobResponse {
  /**
   * Job信息，详情见数据结构Job（如果Status为等待中，此字段为空）
   */
  Jobs?: {
    /**
     * Job的唯一标识Id
     */
    JobId?: string;
    /**
     * Job创建时间，格式为Unix时间戳。
     */
    CreateTime?: number;
    /**
     * Job处理开始时间，格式为Unix时间戳。
     */
    BeginTime?: number;
    /**
     * Job处理结束时间，格式为Unix时间戳。
     */
    EndTime?: number;
    /**
     * 任务状态* 等待中：PENDING* 运行中：RUNNING* 成功：SUCCESS* 部分成功：PARTIAL_SUCCESS* 失败：FAILED
     */
    State?: string;
    /**
     * Job类型，仅支持INSTALL_APP、UNINSTALL_APP、RUN_ASYNC_COMMAND。
     */
    JobType?: string;
    /**
     * Task信息，详情见数据结构Task（如果State为PENDING，此字段为空）
     */
    Tasks?: {
      /**
       * Task的唯一标识
       */
      TaskId: string;
      /**
       * 任务处理开始时间，格式为Unix时间戳。
       */
      BeginTime: number;
      /**
       * 任务处理结束时间，格式为Unix时间戳。
       */
      EndTime: number;
      /**
       * 任务状态* 等待中：PENDING* 运行中：RUNNING* 成功：SUCCESS* 失败：FAILED
       */
      State: string;
      /**
       * Task错误信息
       */
      ErrorMsg: string;
      /**
       * 异步任务执行结果
       */
      ExecuteMsg?: string;
      /**
       * 云手机的唯一标识，云手机相关任务包含此字段。
       */
      UPhoneId?: string;
      /**
       * 安装/卸载任务相关的应用版本唯一标识ID
       */
      AppVersionId?: string;
    }[];
    /**
     * 安装/卸载Job相关的应用版本唯一标识
     */
    AppVersionId?: string;
    /**
     * 此Job相关的云手机唯一标识
     */
    UPhoneIds?: string[];
  }[];
  /**
   * Job总数
   */
  TotalCount?: number;
}

/**
 * DescribeUPhoneModel - 获取云手机规格列表。两种类型：uphone代表单云手机场景、uphone-server代表云手机服务器场景。
 */
export interface DescribeUPhoneModelRequest {
  /**
   * 【数组】要获得信息的 UPhoneModel 名称。调用方式举例：UPhoneModelNames.0=希望获取信息的 UPhoneModel1，UPhoneModelNames.1=UPhoneModel2。 如果不传入，则返回当前 城市 所有符合条件的 UPhoneModel。
   */
  UPhoneModelNames?: string[];
  /**
   * 列表起始位置偏移量，默认为0
   */
  Offset?: number;
  /**
   * 返回数据长度，默认为20，最大100
   */
  Limit?: number;
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * DescribeUPhoneModel - 获取云手机规格列表。两种类型：uphone代表单云手机场景、uphone-server代表云手机服务器场景。
 */
export interface DescribeUPhoneModelResponse {
  /**
   * UPhoneModelInstance总数
   */
  TotalCount: number;
  /**
   * UPhoneModel实例列表，具体参数可见 UPhoneModelInstance
   */
  UPhoneModels: {
    /**
     * UPhoneModel名称
     */
    UPhoneModelName: string;
    /**
     * 虚拟CPU核数。
     */
    CPU: number;
    /**
     * 内存大小。单位MB
     */
    Memory: number;
    /**
     * 磁盘大小，单位: GB
     */
    DiskSize: number;
    /**
     * 分辨率
     */
    Resolution: string;
    /**
     * 刷新率
     */
    Refresh: number;
    /**
     * DPI
     */
    Dpi?: number;
    /**
     * 型号描述信息
     */
    Description?: string;
  }[];
}

/**
 * DescribeUPhoneServer - 获取云手机服务器列表信息。
 */
export interface DescribeUPhoneServerRequest {
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 【数组】云手机服务器的资源 ID，调用方式举例：ServerIds.0=希望获取信息的服务器 1，ServerIds.1=服务器 2。 如果不传入，则返回当前 城市 所有符合条件的云手机服务器。
   */
  ServerIds?: string[];
  /**
   * 列表起始位置偏移量，默认为0
   */
  Offset?: number;
  /**
   * 返回数据长度，默认为20，最大100
   */
  Limit?: number;
}

/**
 * DescribeUPhoneServer - 获取云手机服务器列表信息。
 */
export interface DescribeUPhoneServerResponse {
  /**
   * ServerInstance总数
   */
  TotalCount: number;
  /**
   * 云手机服务器列表，每项参数可见数据模型 [ServerInstance](#ServerInstance)
   */
  Servers: {
    /**
     * 云手机服务器的唯一标识。
     */
    ServerId: string;
    /**
     * 云手机服务器名称。
     */
    ServerName: string;
    /**
     * 云服务器规格。
     */
    ServerModel: {
      /**
       * ServerModel名称
       */
      ServerModelName?: string;
      /**
       * 虚拟CPU核数。可选参数：1-64（具体机型与CPU的对应关系参照控制台）。
       */
      CPU?: number;
      /**
       * 内存大小。单位：MB。
       */
      Memory?: number;
      /**
       * 磁盘信息见 UPhoneDiskSet
       */
      DiskSet?: {
        /**
         * 磁盘类型。请参考磁盘类型。
         */
        DiskType: string;
        /**
         * 是否是系统盘。枚举值：> True，是系统盘> False，是数据盘（默认）。Disks数组中有且只能有一块盘是系统盘。
         */
        IsBoot: boolean;
        /**
         * 磁盘大小，单位: GB
         */
        Size: number;
      }[];
      /**
       * GPU类型
       */
      GPUType?: string;
      /**
       * GPU个数
       */
      GPU?: number;
      /**
       * 【数组】手机说明，包含该服务器规格所能创建的手机规格名及对应手机开数。每项参数可见数据模型 [UPhoneSpec](#UPhoneSpec)
       */
      UPhoneSpecs?: {
        /**
         * 手机规格名
         */
        UPhoneModelName?: string;
        /**
         * 手机开数，即该服务器规格能生成对应手机规格的云手机个数
         */
        UPhoneCount?: number;
      }[];
      /**
       * 表示该机型是否上线，用于前端判断是否开放给用户。枚举值：>AVAILABLE，开放>UNAVAILABLE, 不开放
       */
      ServerModelState?: string;
    };
    /**
     * 云手机规格名称。
     */
    UPhoneModelName: string;
    /**
     * 创建时间，格式为Unix时间戳。
     */
    CreateTime: number;
    /**
     * 修改时间，格式为Unix时间戳。
     */
    ModifyTime: number;
    /**
     * 到期时间，格式为Unix时间戳。
     */
    ExpireTime: number;
    /**
     * 计费模式。枚举值为：<br />  *Year，按年付费；<br />*  Month，按月付费；<br />默认为月付
     */
    ChargeType: string;
    /**
     * 城市Id，eg: cn-shanghai, cn-jinan
     */
    CityId: string;
    /**
     * 城市名称，eg:上海二、济南市
     */
    CityName: string;
    /**
     * 云服务器备注。
     */
    Remark?: string;
    /**
     * 云手机开数。
     */
    UPhoneCount?: number;
    /**
     * 实例状态，枚举值： * 初始化: Initializing; * 云手机创建中: UPhoneCreating;* 运行中: Running; * 删除中: Deleting; * 创建失败: CreateFailed * 未知(空字符串，获取状态超时或出错)：""
     */
    State?: string;
    /**
     * 服务器IP信息
     */
    IpSet?: {
      /**
       * IP地址
       */
      Ip?: string;
      /**
       * ipv4或者ipv6
       */
      IpMode?: string;
      /**
       * 共有或私有
       */
      IpType?: string;
      /**
       * 运营商
       */
      Isp?: string;
    }[];
  }[];
}

/**
 * DescribeUPhoneServerModel - 获取ServerModel列表。
 */
export interface DescribeUPhoneServerModelRequest {
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 【数组】要获得信息的 ServerModel 名称。调用方式举例：ServerModelNames.0=希望获取信息的 ServerModel1，ServerModelNames.1=ServerModel2。 如果不传入，则返回当前 城市 所有符合条件的 ServerModel。
   */
  ServerModelNames?: string[];
  /**
   * 列表起始位置偏移量，默认为0
   */
  Offset?: number;
  /**
   * 返回数据长度，默认为20，最大100
   */
  Limit?: number;
}

/**
 * DescribeUPhoneServerModel - 获取ServerModel列表。
 */
export interface DescribeUPhoneServerModelResponse {
  /**
   * ServerModelInstance总数
   */
  TotalCount: number;
  /**
   * 服务器model的库存
   */
  Stock?: {
    /**
     * ServerModel名称
     */
    ModelName?: string;
    /**
     * 资源余量
     */
    StockCount?: number;
  }[];
  /**
   * ServerModel实例列表，每项参数可见数据模型 ServerModelInstance
   */
  ServerModels?: {
    /**
     * ServerModel名称
     */
    ServerModelName?: string;
    /**
     * 虚拟CPU核数。可选参数：1-64（具体机型与CPU的对应关系参照控制台）。
     */
    CPU?: number;
    /**
     * 内存大小。单位：MB。
     */
    Memory?: number;
    /**
     * 磁盘信息见 UPhoneDiskSet
     */
    DiskSet?: {
      /**
       * 磁盘类型。请参考磁盘类型。
       */
      DiskType: string;
      /**
       * 是否是系统盘。枚举值：> True，是系统盘> False，是数据盘（默认）。Disks数组中有且只能有一块盘是系统盘。
       */
      IsBoot: boolean;
      /**
       * 磁盘大小，单位: GB
       */
      Size: number;
    }[];
    /**
     * GPU类型
     */
    GPUType?: string;
    /**
     * GPU个数
     */
    GPU?: number;
    /**
     * 【数组】手机说明，包含该服务器规格所能创建的手机规格名及对应手机开数。每项参数可见数据模型 [UPhoneSpec](#UPhoneSpec)
     */
    UPhoneSpecs?: {
      /**
       * 手机规格名
       */
      UPhoneModelName?: string;
      /**
       * 手机开数，即该服务器规格能生成对应手机规格的云手机个数
       */
      UPhoneCount?: number;
    }[];
    /**
     * 表示该机型是否上线，用于前端判断是否开放给用户。枚举值：>AVAILABLE，开放>UNAVAILABLE, 不开放
     */
    ServerModelState?: string;
  }[];
}

/**
 * GetUPhoneAllowance - 获取云手机创建余量
 */
export interface GetUPhoneAllowanceRequest {
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
}

/**
 * GetUPhoneAllowance - 获取云手机创建余量
 */
export interface GetUPhoneAllowanceResponse {
  /**
   * 手机型号以及可创建数量
   */
  UPhoneAllowance: {
    /**
     * 枚举值，云手机型号名称，取值：UPhone X，UPhone Plus，UPhone Pro
     */
    ModelName: string;
    /**
     * 可创建云手机个数
     */
    Allowance: number;
  }[];
}

/**
 * GetUPhonePrice - 根据云手机规格名称，获取UPhone实例的价格。
 */
export interface GetUPhonePriceRequest {
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 云手机规格名称
   */
  UPhoneModelName?: number;
  /**
   * 云手机画面带宽值，画面带宽和手机强绑定关系，必须和手机数量对应。
   */
  MediaBandwidth?: number;
  /**
   * 云手机个数
   */
  UPhoneCount?: number;
  /**
   * 计费模式。枚举值为： > Year，按年付费； > Month，按月付费； > Dynamic，按小时预付费; 如果不传某个枚举值，默认返回年付、月付的价格组合集。
   */
  ChargeType?: string;
  /**
   * 购买时长。默认: 1。 月付时，此参数传0，代表了购买至月末。
   */
  Quantity?: number;
  /**
   * 购买独立IP必须此参数。绑定的目的地域。参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  IpDestRegion?: string;
  /**
   * 购买独立IP需要此参数，其中一个ip的带宽值。
   */
  INetBandwidth?: number;
  /**
   * 购买独立IP需要此参数。需要的eip数量。
   */
  IpCount?: number;
}

/**
 * GetUPhonePrice - 根据云手机规格名称，获取UPhone实例的价格。
 */
export interface GetUPhonePriceResponse {
  /**
   * 价格列表，每项参数见UPhonePriceSet
   */
  PriceSet: {
    /**
     * 计费类型，枚举值：Year，Month，Dynamic
     */
    ChargeType: string;
    /**
     * 价格，单位: 元，保留小数点后两位有效数字
     */
    Price: number;
    /**
     * 限时优惠的折前原价（即列表价乘以商务折扣后的单价）
     */
    OriginalPrice: number;
    /**
     * 产品列表价
     */
    ListPrice?: number;
  }[];
}

/**
 * GetUPhoneRenewPrice - 获取云手机续费价格，不包括独立ip价格。
 */
export interface GetUPhoneRenewPriceRequest {
  /**
   * 云手机的唯一标识，可通过[查询云手机列表]获取。
   */
  UPhoneId: string;
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 计费模式。枚举值为： > Year，按年付费； > Month，按月付费； > Dynamic，按小时预付费; 默认返回全部计费方式对应的价格
   */
  ChargeType?: string;
}

/**
 * GetUPhoneRenewPrice - 获取云手机续费价格，不包括独立ip价格。
 */
export interface GetUPhoneRenewPriceResponse {
  /**
   * 价格列表,具体参数见UPhonePriceSet
   */
  PriceSet: {
    /**
     * 计费类型，枚举值：Year，Month，Dynamic
     */
    ChargeType: string;
    /**
     * 价格，单位: 元，保留小数点后两位有效数字
     */
    Price: number;
    /**
     * 限时优惠的折前原价（即列表价乘以商务折扣后的单价）
     */
    OriginalPrice: number;
    /**
     * 产品列表价
     */
    ListPrice?: number;
  }[];
}

/**
 * GetUPhoneScreenCapture - 云手机截屏
 */
export interface GetUPhoneScreenCaptureRequest {
  /**
   * 云手机ID
   */
  UPhoneID: string;
  /**
   * 城市Id，通过[获取城市列表](https://docs.ucloud.cn/api/uphone-api/describe_u_phone_cities)获取
   */
  CityId: string;
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * GetUPhoneScreenCapture - 云手机截屏
 */
export interface GetUPhoneScreenCaptureResponse {
  /**
   * 云手机截图URL
   */
  URL: string;
}

/**
 * GetUPhoneServerPrice - 根据服务器规格名称，获取UPhoneServer实例的价格。
 */
export interface GetUPhoneServerPriceRequest {
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 服务器规格名称
   */
  ServerModelName: string;
  /**
   * 计费模式。枚举值为：> Year，按年付费；> Month，按月付费；> Dynamic，按小时预付费; 如果不传某个枚举值，默认返回年付、月付的价格组合集。
   */
  ChargeType?: string;
  /**
   * 购买时长。默认: 1。 月付时，此参数传0，代表了购买至月末。
   */
  Quantity?: number;
  /**
   * 购买独立IP必须此参数。绑定的目的地域。参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  IpDestRegion?: string;
  /**
   * 购买独立IP需要此参数。共享带宽总值。
   */
  Bandwidth?: number;
  /**
   * 购买独立IP需要此参数。需要的eip数量。
   */
  IpCount?: number;
}

/**
 * GetUPhoneServerPrice - 根据服务器规格名称，获取UPhoneServer实例的价格。
 */
export interface GetUPhoneServerPriceResponse {
  /**
   * 价格列表，每项参数见UPhoneServerPriceSet
   */
  PriceSet: {
    /**
     * 计费类型，枚举值：Year，Month, Dynamic
     */
    ChargeType: string;
    /**
     * 价格，单位: 元，保留小数点后两位有效数字
     */
    Price: number;
    /**
     * 限时优惠的折前原价（即列表价乘以商务折扣后的单价）
     */
    OriginalPrice: number;
    /**
     * 产品列表价
     */
    ListPrice?: number;
  }[];
}

/**
 * GetUPhoneServerRenewPrice - 获取云手机服务器续费价格

提示信息: 须按照控制台服务器模型配置创建服务器。详情请参考控制台。
 */
export interface GetUPhoneServerRenewPriceRequest {
  /**
   * 云手机服务器的唯一标识，可通过[查询云手机服务器列表]()获取。
   */
  ServerId: string;
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 计费模式。枚举值为：> Year，按年付费；> Month，按月付费； > Dynamic，按小时预付费; 默认返回全部计费方式对应的价格
   */
  ChargeType?: string;
}

/**
 * GetUPhoneServerRenewPrice - 获取云手机服务器续费价格

提示信息: 须按照控制台服务器模型配置创建服务器。详情请参考控制台。
 */
export interface GetUPhoneServerRenewPriceResponse {
  /**
   * 价格列表,具体参数见UPhoneServerPriceSet
   */
  PriceSet: {
    /**
     * 计费类型，枚举值：Year，Month, Dynamic
     */
    ChargeType: string;
    /**
     * 价格，单位: 元，保留小数点后两位有效数字
     */
    Price: number;
    /**
     * 限时优惠的折前原价（即列表价乘以商务折扣后的单价）
     */
    OriginalPrice: number;
    /**
     * 产品列表价
     */
    ListPrice?: number;
  }[];
}

/**
 * ImportFile - 上传文件到云手机目录/sdcard/Download/并自动安装APK文件
 */
export interface ImportFileRequest {
  /**
   * 云手机ID
   */
  UPhoneIds: string[];
  /**
   * 文件名
   */
  FileName: string;
  /**
   * 城市。 参见 [云手机城市列表](https://docs.ucloud.cn/api/uphone-api/describe_u_phone_cities)
   */
  CityId: string;
  /**
   * 文件下载链接
   */
  URL: string;
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * ImportFile - 上传文件到云手机目录/sdcard/Download/并自动安装APK文件
 */
export interface ImportFileResponse {
  /**
   * 请求的唯一标识Id，`RetCode`为0时返回，可根据此ID查询请求的执行状态
   */
  JobId: string;
}

/**
 * InstallUPhoneAppVersion - 在云手机中安装应用版本相关的Apk文件。系统会根据AppVersionId将对应的Apk文件下载后安装到云手机中。一次只支持安装一个Apk。
 */
export interface InstallUPhoneAppVersionRequest {
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 应用版本的唯一标识ID
   */
  AppVersionId: string;
  /**
   * 【数组】云手机实例的资源 ID，调用方式举例：UPhoneIds.0=希望安装应用的云手机实例 1 的 UPhoneId，UPhoneIds.1=云手机实例 2 的 UPhoneId。
   */
  UPhoneIds: string[];
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * InstallUPhoneAppVersion - 在云手机中安装应用版本相关的Apk文件。系统会根据AppVersionId将对应的Apk文件下载后安装到云手机中。一次只支持安装一个Apk。
 */
export interface InstallUPhoneAppVersionResponse {
  /**
   * 请求的唯一标识Id，`RetCode`为0时返回，可根据此ID查询请求的执行状态
   */
  JobId: string;
}

/**
 * ModifyUPhoneName - 修改指定云手机实例名称。
 */
export interface ModifyUPhoneNameRequest {
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 云手机实例的资源ID
   */
  UPhoneId: string;
  /**
   * 云手机实例名称
   */
  Name: string;
}

/**
 * ModifyUPhoneName - 修改指定云手机实例名称。
 */
export interface ModifyUPhoneNameResponse {
  /**
   * 云手机实例的资源ID
   */
  UPhoneId: string;
}

/**
 * ModifyUPhoneRemark - 修改指定云手机实例备注信息。
 */
export interface ModifyUPhoneRemarkRequest {
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 云手机实例的资源ID
   */
  UPhoneId: string;
  /**
   * 备注
   */
  Remark?: string;
}

/**
 * ModifyUPhoneRemark - 修改指定云手机实例备注信息。
 */
export interface ModifyUPhoneRemarkResponse {
  /**
   * 云手机实例的资源ID
   */
  UPhoneId: string;
}

/**
 * ModifyUPhoneServerName - 修改指定云手机服务器实例名称。
 */
export interface ModifyUPhoneServerNameRequest {
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 云手机服务器的唯一标识
   */
  ServerId: string;
  /**
   * 云手机服务器实例名称
   */
  Name?: string;
}

/**
 * ModifyUPhoneServerName - 修改指定云手机服务器实例名称。
 */
export interface ModifyUPhoneServerNameResponse {
  /**
   * 云手机服务器的唯一标识
   */
  ServerId: string;
}

/**
 * ModifyUPhoneServerRemark - 修改指定云手机实例备注信息。
 */
export interface ModifyUPhoneServerRemarkRequest {
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 云手机服务器的唯一标识
   */
  ServerId: string;
  /**
   * 备注
   */
  Remark?: string;
}

/**
 * ModifyUPhoneServerRemark - 修改指定云手机实例备注信息。
 */
export interface ModifyUPhoneServerRemarkResponse {
  /**
   * 云手机服务器的唯一标识
   */
  ServerId: string;
}

/**
 * PoweroffUPhone - 关闭处于运行状态的云手机实例
 */
export interface PoweroffUPhoneRequest {
  /**
   * 【数组】云手机实例的资源 ID，调用方式举例：UPhoneIds.0=希望关闭的云手机实例 1 的 UPhoneId，UPhoneIds.1=云手机实例 2 的 UPhoneId。
   */
  UPhoneIds: string[];
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * PoweroffUPhone - 关闭处于运行状态的云手机实例
 */
export type PoweroffUPhoneResponse = {};

/**
 * PoweronUPhone - 启动处于关闭状态的云手机实例
 */
export interface PoweronUPhoneRequest {
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 【数组】云手机实例的资源ID，调用方式举例：UPhoneIds.0=希望开启的云手机实例1的UPhoneId，UPhoneIds.1=云手机实例2的UPhoneId。
   */
  UPhoneIds: string[];
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * PoweronUPhone - 启动处于关闭状态的云手机实例
 */
export type PoweronUPhoneResponse = {};

/**
 * RebootUPhone - 重新启动云手机实例
 */
export interface RebootUPhoneRequest {
  /**
   * 【数组】云手机实例的资源 ID，调用方式举例：UPhoneIds.0=希望重启的云手机实例 1 的 UPhoneId，UPhoneIds.1=云手机实例 2 的 UPhoneId。
   */
  UPhoneIds: string[];
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * RebootUPhone - 重新启动云手机实例
 */
export interface RebootUPhoneResponse {
  /**
   * 异步请求成功后返回JobId，用以查询Job状态
   */
  JobId?: string;
}

/**
 * RenewUPhone - 修改UPhone的device_id、imei、meid 以及其他相关配置，达到一键新机的效果
 */
export interface RenewUPhoneRequest {
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 【数组】云手机实例的资源 ID，调用方式举例：UPhoneIds.0=希望重启的云手机实例 1 的 UPhoneId，UPhoneIds.1=云手机实例 2 的 UPhoneId。
   */
  UPhoneIds: string[];
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
  /**
   * 自定义设备参数设置的开关，true时会读取用户设置的下列设备参数信息；false时随机读取ucloud内置设备参数。默认false
   */
  Customize?: boolean;
  /**
   * 品牌
   */
  Brand?: string;
  /**
   * 设备型号
   */
  Model?: string;
  /**
   * 厂商
   */
  Manufacture?: string;
  /**
   * 序列号
   */
  SerialNumber?: string;
  /**
   * 基带版本
   */
  BaseBand?: string;
  /**
   * 主板名
   */
  Board?: string;
  /**
   * 显示的版本号
   */
  DisplayID?: string;
  /**
   * 设备名
   */
  Device?: string;
  /**
   * 系统指纹
   */
  FingerPrint?: string;
  /**
   * 产品名称
   */
  ProductName?: string;
  /**
   * build的版本号
   */
  BuildID?: string;
  /**
   * 固件编译主机
   */
  BuildHost?: string;
  /**
   * bootloader版本号
   */
  BootLoader?: string;
  /**
   * 系统标记
   */
  BuildTags?: string;
  /**
   * 版本增加说明
   */
  BuildVersionInc?: string;
  /**
   * 串号
   */
  IMEI?: string;
  /**
   * 手机号码
   */
  PhoneNumber?: string;
  /**
   * SIM卡唯一标识
   */
  ICCID?: string;
  /**
   * 移动识别码
   */
  IMSI?: string;
  /**
   * 移动设备标识码软件
   */
  IMEISV?: string;
  /**
   * 移动网络mac地址
   */
  RadioMac?: string;
  /**
   * 当前连接Wi-Fi名称
   */
  WiFiName?: string;
  /**
   * Wi-Fi 物理地址
   */
  BSSID?: string;
  /**
   * AOSP唯一标识
   */
  AndroidID?: string;
}

/**
 * RenewUPhone - 修改UPhone的device_id、imei、meid 以及其他相关配置，达到一键新机的效果
 */
export type RenewUPhoneResponse = {};

/**
 * ResetUPhone - 将云手机恢复为创建时的状态。
 */
export interface ResetUPhoneRequest {
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 【数组】云手机实例的资源 ID，调用方式举例：UPhoneIds.0=希望重置的云手机实例 1 的 UPhoneId，UPhoneIds.1=云手机实例 2 的 UPhoneId。
   */
  UPhoneIds: string[];
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * ResetUPhone - 将云手机恢复为创建时的状态。
 */
export interface ResetUPhoneResponse {
  /**
   * 异步请求成功后返回JobId，用以查询Job状态
   */
  JobId?: string;
}

/**
 * RunAsyncCommand - 在云手机中执行异步shell命令。
 */
export interface RunAsyncCommandRequest {
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 待执行的命令。
   */
  Content: string;
  /**
   * 【数组】云手机实例的资源 ID，调用方式举例：UPhoneIds.0=希望执行命令的云手机实例 1 的 UPhoneId，UPhoneIds.1=云手机实例 2 的 UPhoneId。
   */
  UPhoneIds: string[];
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * RunAsyncCommand - 在云手机中执行异步shell命令。
 */
export interface RunAsyncCommandResponse {
  /**
   * 请求的唯一标识Id，`RetCode`为0时返回，可根据此ID查询请求的执行状态
   */
  JobId: string;
}

/**
 * RunSyncCommand - 在云手机中执行同步shell命令。
 */
export interface RunSyncCommandRequest {
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 待执行的命令。
   */
  Content: string;
  /**
   * 【数组】云手机实例的资源 ID，调用方式举例：UPhoneIds.0=希望执行命令的云手机实例 1 的 UPhoneId，UPhoneIds.1=云手机实例 2 的 UPhoneId。
   */
  UPhoneIds: string[];
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * RunSyncCommand - 在云手机中执行同步shell命令。
 */
export interface RunSyncCommandResponse {
  /**
   * 云主机实例列表，每项参数可见数据模型 [UPhoneCommandResult](#UPhoneCommandResult)
   */
  Results: {
    /**
     * 云手机实例的资源ID。
     */
    UPhoneId?: string;
    /**
     * 同步shell命令的执行结果。
     */
    ExecuteMsg?: string;
  }[];
}

/**
 * SetUPhoneCallback - 设置云手机异步操作以及状态更新回调，支持云手机重置，安装应用，卸载应用，设备占用状态回调
 */
export interface SetUPhoneCallbackRequest {
  /**
   * 城市ID
   */
  CityId: string;
  /**
   * 云手机ID。
   */
  UPhoneId: string;
  /**
   * 接收POST请求的http接口。Content-Type：application/json; charset=UTF-8，Accept：application/json。
   */
  URL: string;
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * SetUPhoneCallback - 设置云手机异步操作以及状态更新回调，支持云手机重置，安装应用，卸载应用，设备占用状态回调
 */
export type SetUPhoneCallbackResponse = {};

/**
 * SetUPhoneConfig - 设置云手机画面参数（分辨率、DPI、帧率、码率）
 */
export interface SetUPhoneConfigRequest {
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 【数组】云手机实例的资源 ID，调用方式举例：UPhoneIds.0=云手机实例 1 的 UPhoneId，UPhoneIds.1=云手机实例 2 的 UPhoneId。
   */
  UPhoneIds: string[];
  /**
   * 云手机画面分辨率（宽x高） （例，1920x1080，中间是字母x）宽和高的取值范围[100,5000]
   */
  Resolution?: string;
  /**
   * 云手机画面刷新率，即帧率（例，30）取值范围[1,200]
   */
  Refresh?: string;
  /**
   * 云手机画面传输码率（例，8000）取值范围[100,50000]
   */
  Bitrate?: string;
  /**
   * 异步请求开关，只有为1的时候才是异步，不填或者其他数值为同步
   */
  Async?: string;
  /**
   * 云手机dpi，取值范围[100,1000]
   */
  Dpi?: string;
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * SetUPhoneConfig - 设置云手机画面参数（分辨率、DPI、帧率、码率）
 */
export interface SetUPhoneConfigResponse {
  /**
   * request_uuid，唯一值，用于区分request
   */
  RequestId: string;
  /**
   * 异步请求成功后返回JobId，用以查询Job状态
   */
  JobId?: string;
  /**
   * 同步请求会返回命令行结果，异步请求该参数为空
   */
  Results?: {
    /**
     *
     */
    ExecuteMsg?: string;
    /**
     *
     */
    UPhoneId?: string;
  }[];
}

/**
 * SetUPhoneGPS - 设置云手机GPS信息
 */
export interface SetUPhoneGPSRequest {
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   *
   */
  UPhoneGPSs?: {
    /**
     * 云手机ID
     */
    UPhoneId?: string;
    /**
     * 经度：-180~180
     */
    Longitude?: number;
    /**
     * 纬度：-90~90
     */
    Latitude?: number;
    /**
     * 海拔
     */
    Altitude?: number;
  }[];
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * SetUPhoneGPS - 设置云手机GPS信息
 */
export interface SetUPhoneGPSResponse {
  /**
   * 请求的唯一标识Id，`RetCode`为0时返回，可根据此ID查询请求的执行状态
   */
  JobId?: string;
}

/**
 * SetUPhoneManagerMode - 管理员模式支持所有按键，普通用户模式禁用返回桌面
 */
export interface SetUPhoneManagerModeRequest {
  /**
   * 云手机实例的资源ID
   */
  UPhoneId: string;
  /**
   * 管理模式：管理员admin，普通用户user
   */
  Mode: string;
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * SetUPhoneManagerMode - 管理员模式支持所有按键，普通用户模式禁用返回桌面
 */
export type SetUPhoneManagerModeResponse = {};

/**
 * SetUPhoneRootMode - 设置云手机Root模式
 */
export interface SetUPhoneRootModeRequest {
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 【数组】云手机实例的资源 ID，调用方式举例：UPhoneIds.0=希望重启的云手机实例 1 的 UPhoneId，UPhoneIds.1=云手机实例 2 的 UPhoneId。
   */
  UPhoneIds: string[];
  /**
   * true则打开Root权限；false则关闭Root权限
   */
  Root: boolean;
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * SetUPhoneRootMode - 设置云手机Root模式
 */
export interface SetUPhoneRootModeResponse {
  /**
   * 异步请求成功后返回JobId，用以查询Job状态
   */
  JobId: string;
}

/**
 * SetUPhoneSplashScreen - 设置云手机启动画面，通过DescribeUPhone接口可以查询该地址
 */
export interface SetUPhoneSplashScreenRequest {
  /**
   * 启动画面下载地址
   */
  URL: string;
  /**
   * 云手机ID
   */
  UPhoneId: string;
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * SetUPhoneSplashScreen - 设置云手机启动画面，通过DescribeUPhone接口可以查询该地址
 */
export type SetUPhoneSplashScreenResponse = {};

/**
 * SetUPhoneToken - 设置云手机RTC连接Token提高安全性
 */
export interface SetUPhoneTokenRequest {
  /**
   * 云手机ID
   */
  UPhoneId: string;
  /**
   * 城市Id，通过[获取城市列表](https://docs.ucloud.cn/api/uphone-api/describe_u_phone_cities)获取
   */
  CityId: string;
  /**
   * RTC连接Token，为空表示清空Token
   */
  Token?: string;
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * SetUPhoneToken - 设置云手机RTC连接Token提高安全性
 */
export type SetUPhoneTokenResponse = {};

/**
 * UnInstallUPhoneAppVersion - 传入应用版本Id，在云手机中根据应用版本的PackageName卸载相关应用。一次只支持卸载一个应用。
 */
export interface UnInstallUPhoneAppVersionRequest {
  /**
   * 城市Id，通过[获取城市列表](#DescribeUPhoneCities)获取
   */
  CityId: string;
  /**
   * 应用版本的唯一标识ID
   */
  AppVersionId: string;
  /**
   * 【数组】云手机实例的资源 ID，调用方式举例：UPhoneIds.0=希望卸载应用的云手机实例 1 的 UPhoneId，UPhoneIds.1=云手机实例 2 的 UPhoneId。
   */
  UPhoneIds: string[];
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * UnInstallUPhoneAppVersion - 传入应用版本Id，在云手机中根据应用版本的PackageName卸载相关应用。一次只支持卸载一个应用。
 */
export interface UnInstallUPhoneAppVersionResponse {
  /**
   * 请求的唯一标识Id，`RetCode`为0时返回，可根据此ID查询请求的执行状态
   */
  JobId: string;
}

/**
 * UpdateUPhoneImage - 更新云手机镜像信息。
 */
export interface UpdateUPhoneImageRequest {
  /**
   * 云手机自定义镜像资源ID
   */
  ImageId: string;
  /**
   * 镜像名称。长度为2~128个英文或中文字符。
   */
  Name?: string;
  /**
   * 镜像的描述信息。长度为2~256个英文或中文字符
   */
  Description?: string;
  /**
   * 枚举值。当前操作的产品类型，1、uphone：云手机场景；2、uphone-server：云手机服务器场景。默认云手机服务器场景。
   */
  ProductType?: string;
}

/**
 * UpdateUPhoneImage - 更新云手机镜像信息。
 */
export interface UpdateUPhoneImageResponse {
  /**
   * 云手机自定义镜像资源ID
   */
  ImageId: string;
}
