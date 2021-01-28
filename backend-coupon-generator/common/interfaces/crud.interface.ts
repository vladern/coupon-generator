  
export interface CRUD {
    create: (resource: any) => Promise<any>,
    readById: (resourceId: any) => Promise<any>,
    updateById: (resourceId: any) => Promise<any>,
    deleteById: (resourceId: any) => Promise<any>
    list: () => Promise<any>,
}