# 后端 api 设计
> **需要写清楚的信息**
> - BASE_URL 为后端api请求地址
> - method: GET/POST/PUT/DELETE/PATCH
> - url: BASE_URL/
> - params: 前端需要上传的参数说明
> - response: 请求成功的返回/请求失败的返回



**获取首页统计信息**

GET {BASE_URL}/get_statistic?date={date}

params:

|参数|说明|备注|
|---|---|---|
|date| string 选择的日期格式，默认上传本月，格式如:'2020-01'|无|

response:

- success
```js
{
    errorCode:0,
    data:{
        income: 8000, // 收入
        spending:3500, // 支出
    }

}

```
- fault
```js
{
    errorCode:1,
    data:'请求发生错误'
}

``` 

**首页账目记录列表**

GET {BASE_URL}/account_list?date={date}

params:

|参数|说明|备注|
|---|---|---|
|date| string 选择的日期格式，默认上传本月，格式如:'2020-01'|无|

response:
- success
```js
{
    errorCode:0,
    data:[
            {
                icon:'', // 图表 - 消费类型
                todo:'', // 收入来源 or 消费去向
                money:200, // 金额
                date:'', // 日期
                way:'', // 收入(spending) or 支出(income)
            }
        ]
}
```
- fault
```js
{
    errorCode:1,
    data:'请求发生错误'
}

``` 

**首页新建账目**

POST {BASE_URL}/account_list

params:

|参数|说明|备注|
|---|---|---|
|icon|string 消费类型|无|
|todo|string 消费备注|无|
|money|int 消费金额|无|
|date|string 消费日期 格式如:'2020-02-02'|无|
|way|string 账目类型支出或收入 参数固定为 'income' or 'spending'|无|

params_example:
```js
 {
                icon:'', // 图表 - 消费类型
                todo:'', // 收入来源 or 消费去向
                money:200, // 金额
                date:'', // 日期
                way:'', // 收入(spending) or 支出(income)
            }
```

response:
- success
```js
{
    errorCode:0,
    data:[
            {
                icon:'', // 图表 - 消费类型
                todo:'', // 收入来源 or 消费去向
                money:200, // 金额
                date:'', // 日期
                way:'', // 收入(spending) or 支出(income)
            }
        ]
}
```
- fault
```js
{
    errorCode:1,
    data:'请求发生错误'
}

``` 

**首页编辑账目**

PATCH {BASE_URL}/account_list

params:

|参数|说明|备注|
|---|---|---|
|icon|string 消费类型|无|
|todo|string 消费备注|无|
|money|int 消费金额|无|
|date|string 消费日期 格式如:'2020-02-02'|无|
|way|string 账目类型支出或收入 参数固定为 'income' or 'spending'|无|

params_example:
```js
 {
                icon:'', // 图表 - 消费类型
                todo:'', // 收入来源 or 消费去向
                money:200, // 金额
                date:'', // 日期
                way:'', // 收入(spending) or 支出(income)
            }
```

response:
- success
```js
{
    errorCode:0,
    data:[
            {
                icon:'', // 图表 - 消费类型
                todo:'', // 收入来源 or 消费去向
                money:200, // 金额
                date:'', // 日期
                way:'', // 收入(spending) or 支出(income)
            }
        ]
}
```
- fault
```js
{
    errorCode:1,
    data:'请求发生错误'
}

``` 

**首页删除账目**

DELETE {BASE_URL}/account_list?{id}

params:

|参数|说明|备注|
|---|---|---|
|id|string 账目的id|无|

response:

- success
```js
{
    errorCode:0,
    data:'删除成功'
}

``` 
- fault
```js
{
    errorCode:1,
    data:'请求发生错误'
}

``` 

**首页记账记录图表**

GET {BASE_URL}/account_chart?date={date}

params:

|参数|说明|备注|
|---|---|---|
|date| string 选择的日期格式，默认上传本月，格式如:'2020-01'|无|

response:

- success
```js
{
    errcode:0,
    data:{
        pet:'10%', // 宠物
        learn:'20%', // 学习
        eat:'8%', // 餐饮
        shop:'2%', // 购物
        message:'25%', // 通讯
        entertainment:'8%', // 娱乐
        traffic:'15%', // 交通
        digital:'12%', // 数码
    }
}

``` 
- fault
```js
{
    errorCode:1,
    data:'请求发生错误'
}

``` 

**附加说明**
```js
// 消费类型与图表对应关系 消费类型的种类（demo 可以意思意思弄少一点 也不能太少暂定8个好了）
{
    pet:'宠物',
    learn:'学习',
    eat:'餐饮',
    shop:'购物',
    message:'通讯',
    entertainment:'娱乐',
    traffic:'交通',
    digital:'数码',
}
```
        
