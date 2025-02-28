import {multipartHeader} from '../../../../request.js';
import {SellFeedParams} from '../../../../types/index.js';
import Restful from '../../index.js';

/**
 * The <strong>Feed API</strong> lets sellers upload input files, download reports and files including their status, filter reports using URI parameters, and retrieve customer service metrics task details.
 */
export default class Feed extends Restful {

  static id = 'Feed';

  get basePath(): string {
    return '/sell/feed/v1';
  }

  /**
   * This method returns the details and status for an array of order tasks based on a specified feed_type or scheduled_id.
   *
   * @param dateRange The order tasks creation date range.
   * @param feedType The feed type associated with the task.
   * @param limit The maximum number of order tasks that can be returned on each page of the paginated response.
   * @param lookBackDays The number of previous days in which to search for tasks. Do not use with the date_range parameter.
   * @param offset The number of order tasks to skip in the result set before returning the first order in the paginated response.
   * @param scheduleId The schedule ID associated with the order task.
   */
  public getOrderTasks({
                         dateRange,
                         feedType,
                         limit,
                         lookBackDays,
                         offset,
                         scheduleId
                       }: SellFeedParams = {}) {
    return this.get(`/order_task`, {
      params: {
        date_range: dateRange,
        feed_type: feedType,
        limit,
        look_back_days: lookBackDays,
        offset,
        schedule_id: scheduleId
      }
    });
  }

  /**
   * This method creates an order download task with filter criteria for the order report.
   *
   * @param data The CreateOrderTaskRequest
   */
  public createOrderTask(data: any) {
    return this.post(`/order_task`, data);
  }

  /**
   * This method retrieves the task details and status of the specified task.
   *
   * @param taskId The ID of the task. This ID is generated when the task was created by the createOrderTask method.
   */
  public getOrderTask(taskId: string,) {
    taskId = encodeURIComponent(taskId);

    return this.get(`/order_task/${taskId}`);
  }

  /**
   * This method searches for multiple tasks of a specific feed type, and includes date filters and pagination.
   */
  public getInventoryTasks({feedType, scheduleId, lookBackDays, dateRange, limit, offset}
                             : { feedType?: string, scheduleId?: string, lookBackDays?: number, dateRange?: string, limit?: number, offset?: number } = {}) {
    return this.get('/inventory_task', {
      params: {
        feed_type: feedType,
        schedule_id: scheduleId,
        look_back_days: lookBackDays,
        date_range: dateRange,
        limit,
        offset
      }
    });
  }

  /**
   * This method creates an inventory-related download task for a specified feed type with optional filter criteria.
   */
  public createInventoryTask(data: any) {
    return this.post('/inventory_task', data);
  }

  /**
   * This method retrieves the task details and status of the specified inventory-related task.
   * @param taskId The ID of the task.
   */
  public getInventoryTask(taskId: string) {
    taskId = encodeURIComponent(taskId);
    return this.get(`/inventory_task/${taskId}`);
  }

  /**
   * This method retrieves an array containing the details and status of all schedules based on the specified feed_type.
   *
   * @param feedType The feedType associated with the schedule.
   * @param limit The maximum number of schedules that can be returned on each page of the paginated response.
   * @param offset The number of schedules to skip in the result set before returning the first schedule in the paginated response.
   */
  public getSchedules({
                        feedType,
                        limit,
                        offset,
                      }: SellFeedParams = {}) {
    return this.get(`/schedule`, {
      params: {
        feed_type: feedType,
        limit,
        offset
      }
    });
  }

  /**
   * This method creates a schedule, which is a subscription to the specified schedule template.
   *
   * @params data The CreateUserScheduleRequest
   */
  public createSchedule(data: any) {
    return this.post(`/schedule`, data);
  }

  /**
   * This method retrieves schedule details and status of the specified schedule.
   *
   * @param scheduleId The ID of the schedule for which to retrieve the details.
   */
  public getSchedule(scheduleId: string) {
    scheduleId = encodeURIComponent(scheduleId);
    return this.get(`/schedule/${scheduleId}`);
  }

  /**
   * This method updates an existing schedule.
   *
   * @param scheduleId The ID of the schedule to update.
   * @param data The UpdateUserScheduleRequest.
   */
  public updateSchedule(scheduleId: string, data?: any) {
    scheduleId = encodeURIComponent(scheduleId);
    return this.put(`/schedule/${scheduleId}`, data);
  }

  /**
   * This method deletes an existing schedule.
   *
   * @param scheduleId The schedule_id of the schedule to delete.
   */
  public deleteSchedule(scheduleId: string) {
    scheduleId = encodeURIComponent(scheduleId);
    return this.delete(`/schedule/${scheduleId}`);
  }

  /**
   * This method downloads the latest result file generated by the schedule.
   *
   * @param scheduleId The ID of the schedule for which to retrieve the latest result file.
   */
  public getLatestResultFile(scheduleId: string) {
    scheduleId = encodeURIComponent(scheduleId);
    return this.get(`/schedule/${scheduleId}/download_result_file`);
  }

  /**
   * This method downloads the latest result file generated by the schedule.
   *
   * @param scheduleTemplateId The ID of the template to retrieve.
   */
  public getScheduleTemplate(scheduleTemplateId: string) {
    scheduleTemplateId = encodeURIComponent(scheduleTemplateId);
    return this.get(`/schedule_template/${scheduleTemplateId}`);
  }

  /**
   * This method retrieves an array containing the details and status of all schedule templates based on the specified feed_type.
   *
   * @param feedType The feedType associated with the schedule.
   * @param limit The maximum number of schedules that can be returned on each page of the paginated response.
   * @param offset The number of schedules to skip in the result set before returning the first schedule in the paginated response.
   */
  public getScheduleTemplates({
                                feedType,
                                limit,
                                offset,
                              }: SellFeedParams = {}) {
    return this.get(`/schedule_template`, {
      params: {
        feed_type: feedType,
        limit,
        offset
      }
    });
  }

  /**
   * This method returns the details and status for an array of tasks based on a specified feed_type or scheduledId.
   *
   * @param dateRange The order tasks creation date range.
   * @param feedType The feed type associated with the task.
   * @param limit The maximum number of order tasks that can be returned on each page of the paginated response.
   * @param lookBackDays The number of previous days in which to search for tasks. Do not use with the date_range parameter.
   * @param offset The number of order tasks to skip in the result set before returning the first order in the paginated response.
   * @param scheduleId The schedule ID associated with the task.
   */
  public getTasks({
                    dateRange,
                    feedType,
                    limit,
                    lookBackDays,
                    offset,
                    scheduleId
                  }: SellFeedParams = {}) {
    return this.get(`/task`, {
      params: {
        date_range: dateRange,
        feed_type: feedType,
        limit,
        look_back_days: lookBackDays,
        offset,
        schedule_id: scheduleId
      }
    });
  }

  /**
   * This method creates an upload task or a download task without filter criteria.
   *
   * @param data The CreateTaskRequest.
   */
  public createTask(data: any) {
    return this.post(`/task`, data);
  }

  /**
   * This method downloads the file previously uploaded using uploadFile.
   *
   * @param taskId The task ID associated with the file to be downloaded.
   */
  public getInputFile(taskId: string) {
    taskId = encodeURIComponent(taskId);
    return this.get(`/task/${taskId}/download_input_file`);
  }

  /**
   * This method retrieves the generated file that is associated with the specified task ID.
   *
   * @param taskId The task ID associated with the file to be downloaded.
   */
  public getResultFile(taskId: string) {
    taskId = encodeURIComponent(taskId);
    return this.get(`/task/${taskId}/download_result_file`);
  }

  /**
   * This method retrieves the details and status of the specified task.
   *
   * @param taskId The ID of the task.
   */
  public getTask(taskId: string) {
    taskId = encodeURIComponent(taskId);
    return this.get(`/task/${taskId}`);
  }

  /**
   * This method associates the specified file with the specified task ID and uploads the input file.
   *
   * @param taskId The task_id associated with the file that will be uploaded.
   * @param data FormDataContentDisposition.
   */
  public uploadFile(taskId: string, data?: any) {
    taskId = encodeURIComponent(taskId);
    return this.post(`/task/${taskId}/upload_file`, data, {
      headers: multipartHeader,
    });
  }

  /**
   * Use this method to return an array of customer service metric tasks.
   *
   * @param dateRange The order tasks creation date range.
   * @param feedType The feed type associated with the task.
   * @param limit The maximum number of order tasks that can be returned on each page of the paginated response.
   * @param lookBackDays The number of previous days in which to search for tasks. Do not use with the date_range parameter.
   * @param offset The number of order tasks to skip in the result set before returning the first order in the paginated response.
   * @param scheduleId The schedule ID associated with the task.
   */
  public getCustomerServiceMetricTasks({
                                         dateRange,
                                         feedType,
                                         limit,
                                         lookBackDays,
                                         offset,
                                       }: SellFeedParams = {}) {
    return this.get(`/customer_service_metric_task`, {
      params: {
        date_range: dateRange,
        feed_type: feedType,
        limit,
        look_back_days: lookBackDays,
        offset,
      }
    });
  }

  /**
   * Use this method to create a customer service metrics download task with filter criteria for the customer service metrics report.
   *
   * @params acceptLanguage Use this header to specify the natural language in which the authenticated user desires the response.
   * @params data The CreateServiceMetricsTaskRequest
   */
  public createCustomerServiceMetricTask(acceptLanguage: string, data: any) {
    return this.post(`/customer_service_metric_task`, data, {
      headers: {
        'accept-language': acceptLanguage
      }
    });
  }

  /**
   * Use this method to retrieve customer service metric task details for the specified task.
   *
   * @param taskId Use this path parameter to specify the task ID value for the customer service metric task to retrieve.
   */
  public getCustomerServiceMetricTask(taskId: string) {
    taskId = encodeURIComponent(taskId);
    return this.get(`/customer_service_metric_task/${taskId}`);
  }
}
