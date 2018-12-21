using System;
using System.Data;
using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace DatingApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Photo> Photos { get; set; }
        // ILogger<DataContext> _logger;

        // public DataContext(DbContextOptions<DataContext> options, ILogger<DataContext> logger)
        //   : base(options)
        // {
        //   _logger = logger;
        // }

    }
}