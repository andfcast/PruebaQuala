using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace SucursalesEntities.DBEntities;

public partial class TestDbContext : DbContext
{
    public TestDbContext()
    {
    }

    public TestDbContext(DbContextOptions<TestDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<AcMoneda> AcMoneda { get; set; }

    public virtual DbSet<AcSucursal> AcSucursales { get; set; }

//    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
//        => optionsBuilder.UseSqlServer("Server=(local);Database=TestDB;Trusted_Connection=True;TrustServerCertificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AcMoneda>(entity =>
        {
            entity.ToTable("AC_Moneda");

            entity.Property(e => e.Abreviacion).HasMaxLength(3);
            entity.Property(e => e.Nombre).HasMaxLength(50);
        });

        modelBuilder.Entity<AcSucursal>(entity =>
        {
            entity.ToTable("AC_Sucursal");

            entity.Property(e => e.Descripcion).HasMaxLength(250);
            entity.Property(e => e.Direccion).HasMaxLength(250);
            entity.Property(e => e.FechaCreacion).HasColumnType("datetime");
            entity.Property(e => e.Identificacion).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
