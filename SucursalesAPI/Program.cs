using Microsoft.EntityFrameworkCore;
using SucursalesBL.Implementacion;
using SucursalesBL.Interface;
using SucursalesDAL.Implementacion;
using SucursalesDAL.Interface;
using SucursalesEntities.DBEntities;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:4200")
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                      });
});
builder.Services.AddDbContext<TestDbContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("TestDBConnection")));

builder.Services.AddTransient<ISucursalBL, SucursalBL>();
builder.Services.AddTransient<ISucursalDAL, SucursalDAL>();
builder.Services.AddTransient<IBasicoBL, BasicoBL>();
builder.Services.AddTransient<IBasicoDAL, BasicoDAL>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
